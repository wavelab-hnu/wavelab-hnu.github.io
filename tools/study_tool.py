"""Helper for the Study tab (daily paper notes).

Usage (run from the site folder):
  python tools/study_tool.py search "<words>" [tier] [months]  # CC BY papers in tier-1 (default) or tier-2 journals
  python tools/study_tool.py crossref <doi>          # check a DOI: metadata + license (must be CC BY) + journal tier
  python tools/study_tool.py fig <image-url> <id>     # download a figure -> assets/img/study/<id>.webp
  python tools/study_tool.py check                    # validate assets/data/study.json
"""
import io
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path

# Journals for the daily notes. Tier 1 = top-tier, always searched first; tier 2 = fallback.
# ISSNs checked against Crossref (2026-11).
JOURNALS = {
    # tier 1
    "Nature": (1, ["0028-0836", "1476-4687"]),
    "Science": (1, ["0036-8075", "1095-9203"]),
    "Nature Water": (1, ["2731-6084"]),
    "Nature Climate Change": (1, ["1758-678X", "1758-6798"]),
    "Nature Geoscience": (1, ["1752-0894", "1752-0908"]),
    "Nature Sustainability": (1, ["2398-9629"]),
    "Nature Communications": (1, ["2041-1723"]),
    "Science Advances": (1, ["2375-2548"]),
    "PNAS": (1, ["0027-8424", "1091-6490"]),
    "One Earth": (1, ["2590-3322"]),
    "Communications Earth & Environment": (1, ["2662-4435"]),
    "npj Climate and Atmospheric Science": (1, ["2397-3722"]),
    "npj Clean Water": (1, ["2059-7037"]),
    "AGU Advances": (1, ["2576-604X"]),
    "Reviews of Geophysics": (1, ["8755-1209", "1944-9208"]),
    "Water Resources Research": (1, ["0043-1397", "1944-7973"]),
    "Geophysical Research Letters": (1, ["0094-8276", "1944-8007"]),
    "Earth's Future": (1, ["2328-4277"]),
    "Hydrology and Earth System Sciences": (1, ["1607-7938"]),
    "Remote Sensing of Environment": (1, ["0034-4257", "1879-0704"]),
    "ISPRS Journal of Photogrammetry and Remote Sensing": (1, ["0924-2716"]),
    "IEEE Transactions on Geoscience and Remote Sensing": (1, ["0196-2892", "1558-0644"]),
    "Journal of Hydrology": (1, ["0022-1694"]),
    "Water Research": (1, ["0043-1354"]),
    "Environmental Research Letters": (1, ["1748-9326"]),
    "Bulletin of the American Meteorological Society": (1, ["0003-0007", "1520-0477"]),
    "Journal of Hydrometeorology": (1, ["1525-755X", "1525-7541"]),
    # tier 2 (only when no suitable tier-1 paper)
    "Natural Hazards and Earth System Sciences": (2, ["1684-9981"]),
    "Earth System Science Data": (2, ["1866-3516"]),
    "Geoscientific Model Development": (2, ["1991-9603"]),
    "Atmospheric Measurement Techniques": (2, ["1867-8548"]),
    "Journal of Geophysical Research: Atmospheres": (2, ["2169-897X", "2169-8996"]),
    "Weather and Climate Extremes": (2, ["2212-0947"]),
    "Journal of Hydrology: Regional Studies": (2, ["2214-5818"]),
    "Journal of Flood Risk Management": (2, ["1753-318X"]),
    "Advances in Water Resources": (2, ["0309-1708"]),
    "Hydrological Processes": (2, ["0885-6087", "1099-1085"]),
    "Hydrological Sciences Journal": (2, ["0262-6667", "2150-3435"]),
    "Environmental Modelling & Software": (2, ["1364-8152"]),
    "Atmospheric Research": (2, ["0169-8095"]),
    "IEEE JSTARS": (2, ["1939-1404", "2151-1535"]),
    "Science of the Total Environment": (2, ["0048-9697"]),
    "Earth and Space Science": (2, ["2333-5084"]),
    "Scientific Reports": (2, ["2045-2322"]),
}
TIER_BY_ISSN = {i: t for t, issns in JOURNALS.values() for i in issns}

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
    tier = min((TIER_BY_ISSN[i] for i in m.get("ISSN", []) if i in TIER_BY_ISSN), default=None)
    print(json.dumps({
        "doi": m["DOI"], "title": (m.get("title") or [""])[0], "authors": authors,
        "journal": (m.get("container-title") or [""])[0], "volume": m.get("volume", ""),
        "pages": m.get("page", "") or m.get("article-number", ""), "year": year,
        "licenses": lic, "cc_by_ok": ok, "journal_tier": tier,
    }, ensure_ascii=False, indent=2))
    if not ok:
        print("NOT OK: no CC BY / CC BY-SA license -> pick another paper", file=sys.stderr)
        sys.exit(2)
    if tier is None:
        print("NOT OK: journal is not on the tier-1/tier-2 list -> pick another paper", file=sys.stderr)
        sys.exit(3)


def search(words, tier="1", months="24"):
    """Recent CC BY / CC BY-SA articles matching <words> in tier-1 (or tier-2) journals, minus ones already posted."""
    issns = [i for t, iss in JOURNALS.values() if str(t) == str(tier) for i in iss]
    since = (date.today() - timedelta(days=int(months) * 31)).isoformat()
    filt = ",".join([f"from-pub-date:{since}", "type:journal-article", "has-license:true"] + [f"issn:{i}" for i in issns])
    url = ("https://api.crossref.org/works?rows=60&select=DOI,title,container-title,license,published,ISSN"
           f"&query={urllib.parse.quote(words)}&filter={filt}")
    items = json.loads(get(url))["message"]["items"]
    posted = {str(p.get("doi", "")).lower() for p in json.loads(DATA.read_text(encoding="utf-8"))}
    n = 0
    for it in items:
        lic = [l.get("URL", "") for l in it.get("license", [])]
        if not any(any(k in u for k in OK_LICENSES) for u in lic) or it["DOI"].lower() in posted:
            continue
        y = (it.get("published") or {}).get("date-parts", [[None]])[0][0]
        title = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", (it.get("title") or [""])[0])).strip()
        print(f"{it['DOI']} | {(it.get('container-title') or [''])[0]} | {y} | {title}")
        n += 1
    print(f"-- {n} CC BY candidates in tier-{tier} journals since {since}")


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
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # Windows consoles default to cp949
    a = sys.argv[1:]
    if a[:1] == ["search"] and 2 <= len(a) <= 4: search(*a[1:])
    elif a[:1] == ["crossref"] and len(a) == 2: crossref(a[1])
    elif a[:1] == ["fig"] and len(a) == 3: fig(a[1], a[2])
    elif a[:1] == ["check"]: check()
    else: print(__doc__)
