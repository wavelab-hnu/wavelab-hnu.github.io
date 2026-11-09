"""Helper for the Study tab (daily paper notes).

Usage (run from the site folder):
  python tools/study_tool.py crossref <doi>          # check a DOI: metadata + license (must be CC BY)
  python tools/study_tool.py fig <image-url> <id>     # download a figure -> assets/img/study/<id>.webp
  python tools/study_tool.py check                    # validate assets/data/study.json
"""
import io
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "assets" / "data" / "study.json"
OUR = ROOT / "assets" / "data" / "our-papers.json"  # "Our Papers" tab (figure optional, no date)
IMG = ROOT / "assets" / "img" / "study"
THEMES = {"Hydrology", "AI Forecasting", "Vision & Sensing", "Earth Observation"}
OK_LICENSES = ("creativecommons.org/licenses/by/", "creativecommons.org/licenses/by-sa/")
UA = {"User-Agent": "WAVE-Lab-site/1.0 (paper notes)"}


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:
        return r.read()


def crossref(doi):
    m = json.loads(get("https://api.crossref.org/works/" + urllib.parse.quote(doi)))["message"]
    lic = [l.get("URL", "") for l in m.get("license", [])]
    ok = any(any(k in u for k in OK_LICENSES) for u in lic)
    authors = ", ".join(f"{a.get('family', '')}, {''.join(x[0] + '. ' for x in a.get('given', '').replace('-', ' ').split())}".strip()
                        for a in m.get("author", []))
    year = (m.get("published") or m.get("issued"))["date-parts"][0][0]
    print(json.dumps({
        "doi": m["DOI"], "title": (m.get("title") or [""])[0], "authors": authors,
        "journal": (m.get("container-title") or [""])[0], "volume": m.get("volume", ""),
        "pages": m.get("page", "") or m.get("article-number", ""), "year": year,
        "licenses": lic, "cc_by_ok": ok,
    }, ensure_ascii=False, indent=2))
    if not ok:
        print("NOT OK: no CC BY / CC BY-SA license -> pick another paper", file=sys.stderr)
        sys.exit(2)


def fig(url, pid):
    from PIL import Image
    if not re.fullmatch(r"[\w.-]+", pid):
        sys.exit("bad id")
    raw = get(url) if re.match(r"https?://", url) else Path(url).read_bytes()
    im = Image.open(io.BytesIO(raw))
    im = im.convert("RGBA") if im.mode in ("P", "LA") else im
    if im.mode == "RGBA":  # flatten transparency on white
        bg = Image.new("RGB", im.size, "white"); bg.paste(im, mask=im.split()[-1]); im = bg
    im = im.convert("RGB")
    if im.width > 1400:
        im = im.resize((1400, round(im.height * 1400 / im.width)), Image.LANCZOS)
    IMG.mkdir(parents=True, exist_ok=True)
    out = IMG / f"{pid}.webp"
    im.save(out, "WEBP", quality=86, method=6)
    print(f"saved {out.relative_to(ROOT).as_posix()} {im.width}x{im.height} {out.stat().st_size // 1024} KB")


def check():
    bad = check_file(DATA, our=False)
    if OUR.is_file():
        bad += check_file(OUR, our=True)
    sys.exit(1 if bad else 0)


def check_file(path, our):
    posts = json.loads(path.read_text(encoding="utf-8"))
    errs, ids, dois = [], set(), set()
    need = ["id", "theme", "title", "authors", "journal", "year", "license",
            "tldr", "background", "approach", "findings", "relevance", "keywords"]
    if not our:
        need += ["date", "doi", "figure"]
    for i, p in enumerate(posts):
        tag = p.get("id", f"#{i}")
        errs += [f"{tag}: missing {k}" for k in need if not p.get(k)]
        if p.get("id") in ids: errs.append(f"{tag}: duplicate id")
        ids.add(p.get("id"))
        d = str(p.get("doi", "")).lower()
        if d and d in dois: errs.append(f"{tag}: duplicate DOI {d}")
        dois.add(d)
        if (d or not our) and not re.fullmatch(r"10\.\d{4,9}/\S+", d): errs.append(f"{tag}: odd DOI {d}")
        if our and not str(p.get("id", "")).startswith("our-"): errs.append(f"{tag}: id must start with our-")
        if not our and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(p.get("date", ""))): errs.append(f"{tag}: bad date")
        if p.get("theme") not in THEMES: errs.append(f"{tag}: theme must be one of {sorted(THEMES)}")
        f = p.get("figure") or {}
        for k in ("src", "caption", "credit"):
            if (f or not our) and not f.get(k): errs.append(f"{tag}: figure.{k} missing")
        if f.get("src") and not (ROOT / f["src"]).is_file(): errs.append(f"{tag}: figure file not found {f['src']}")
        if f.get("src") and not re.fullmatch(r"assets/img/study/[\w.-]+", f["src"]): errs.append(f"{tag}: figure.src must be in assets/img/study/")
        if not isinstance(p.get("findings"), list): errs.append(f"{tag}: findings must be a list")
    print(f"{path.name}: {len(posts)} posts, {len(errs)} problems")
    for e in errs: print(" -", e)
    return len(errs)


if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["crossref"] and len(a) == 2: crossref(a[1])
    elif a[:1] == ["fig"] and len(a) == 3: fig(a[1], a[2])
    elif a[:1] == ["check"]: check()
    else: print(__doc__)
