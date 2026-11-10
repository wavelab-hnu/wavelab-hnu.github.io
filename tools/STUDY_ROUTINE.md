# Daily paper note — routine for the Study tab

Goal: add **one** paper note per day to the Study tab of the WAVE Lab site
(https://wavelab-hnu.github.io/study.html), with a key figure and the DOI, then publish.

- Site folder: `D:\Dropbox\01_J-drive\08_Claude Project\00_연구실 홈페이지`
- Data: `assets/data/study.json` (newest first) · figures: `assets/img/study/<id>.webp`
- Helper: `python tools/study_tool.py crossref <doi> | fig <image-url> <id> | check`
- Repo: github.com/wavelab-hnu/wavelab-hnu.github.io (GitHub Pages, branch main)

## Steps

1. **Sync.** In PowerShell, refresh PATH first, then pull:
   `$env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User"); git pull -q`
2. **Today's id** = today's date in Korea time, `YYYY-MM-DD`. If `study.json` already has this id, stop (already done today).
3. **Theme.** Rotate through the four lab themes in this order, continuing after the theme of the newest entry:
   `Hydrology` → `AI Forecasting` → `Vision & Sensing` → `Earth Observation` → back to `Hydrology`.
   - Hydrology: hydrological modelling, floods/droughts and their transitions, design rainfall, PMP/PMF, unit hydrograph, frequency analysis, climate-change impacts on extremes, wavelet/time–frequency analysis.
   - AI Forecasting: machine/deep learning for rainfall, streamflow, drought, evapotranspiration or water-quality forecasting; hybrid models with signal decomposition; CMIP6 projections.
   - Vision & Sensing: rainfall or flood sensing from cameras/CCTV, images, video, acoustics, IoT or citizen science; computer vision for hydrology.
   - Earth Observation: satellite/SAR flood mapping, remote sensing of precipitation, soil moisture or disasters, reanalysis products.
4. **Find a paper — top-tier journals first.**
   - The journal list with tiers is `JOURNALS` in `tools/study_tool.py`.
     **Tier 1** (e.g. Nature, Science, Nature Water/Climate Change/Geoscience/Communications, Science Advances, PNAS,
     Communications Earth & Environment, Water Resources Research, GRL, Earth's Future, HESS, Remote Sensing of Environment,
     ISPRS J. Photogramm. Remote Sens., IEEE TGRS, Journal of Hydrology, Water Research, ERL, BAMS, J. Hydrometeorology).
     **Tier 2** is only a fallback (e.g. NHESS, ESSD, GMD, AMT, JGR-Atmospheres, Weather and Climate Extremes, J. Hydrol. Reg. Stud.,
     Advances in Water Resources, Hydrological Processes, STOTEN, Scientific Reports).
     Journals not on the list (MDPI, Frontiers, Hindawi, unknown journals …) are **never** used.
   - Search tier 1 with the theme's keywords (try several phrasings, e.g. 3–5 searches):
     `python tools/study_tool.py search "<keywords>" 1`  (last 24 months; add a third argument `36` to widen to 36 months).
     It lists only CC BY / CC BY-SA articles that aren't posted yet. Prefer research articles with a clear take-away
     (not editorials, corrections or very narrow technical notes), and among good options prefer Nature/Science-family,
     WRR, GRL, HESS, RSE.
   - Only if no suitable tier-1 paper fits the theme after a real search, try tier 2 (`... search "<keywords>" 2`).
     If still nothing fits, you may pick a tier-1 paper from a neighbouring theme instead of going lower.
   - Confirm with `python tools/study_tool.py crossref <doi>` — it must print `"cc_by_ok": true` and a `"journal_tier"` of 1
     (or 2 for the fallback); it exits with an error otherwise. Use its title/authors/journal/volume/pages/year as the
     metadata (fix capitalisation of names if needed).
5. **Read it.** Open the article page (WebFetch on `https://doi.org/<doi>` or the publisher URL; if a publisher blocks automated fetching, use the built-in browser, or the open full text on Europe PMC `https://europepmc.org/search?query=DOI:<doi>` — never try to solve a CAPTCHA) and read the abstract, methods, results and conclusions. Write everything **in your own words** — no copied sentences. Every number you mention must come from the paper. Do not invent results. If you can't read enough of the paper to summarise it reliably, pick another paper.
6. **Figure.** Find the article's figure images on the publisher page (e.g. Copernicus `...-f03-web.png`; Nature/Springer `media.springernature.com/full/springer-static/image/...`; AGU/Wiley `agupubs.onlinelibrary.wiley.com/cms/asset/...`; Elsevier open access `ars.els-cdn.com/content/image/1-s2.0-<PII>-gr1_lrg.jpg`; IEEE `ieeexplore.ieee.org/mediastore/...`). Choose the one figure that best explains the study (a method overview or the main result; avoid plain location maps unless nothing better). Save it with
   `python tools/study_tool.py fig <image-url> <id>`
   then look at the saved `assets/img/study/<id>.webp` to make sure it is the right, readable figure.
7. **Write the entry** and insert it at the **top** of `study.json` (keep valid JSON, UTF-8, 2-space indent):
   ```json
   {
     "id": "YYYY-MM-DD", "date": "YYYY-MM-DD", "theme": "<one of the four>",
     "title": "...", "authors": "Family, A. B., Family, C., ...", "journal": "...",
     "volume": "...", "pages": "...", "year": 2026, "doi": "10.xxxx/...", "license": "CC BY 4.0",
     "figure": { "src": "assets/img/study/YYYY-MM-DD.webp",
                 "caption": "<what the figure shows, own words, 1–2 sentences>",
                 "credit": "Figure N from <First author> et al. (<year>), <Journal>, CC BY 4.0." },
     "tldr": "<one plain-English sentence: the main take-away>",
     "background": "<2–4 sentences: the problem and why it matters>",
     "approach": "<3–5 sentences: data, study area, methods>",
     "findings": ["<3–5 bullet points with concrete results>"],
     "relevance": "<2–4 sentences, shown as \"Why it matters to us\": why this matters to a broad audience — students, researchers, engineers, water managers and the public. Connect it to everyday life and society (floods, droughts, water supply, safety, climate change), Korea's situation where it fits (monsoon, typhoons, dry springs, small/ungauged basins), and what readers can take from it. Do not write it only about our lab.>",
     "keywords": ["3–6 short keywords"]
   }
   ```
   Language: **English**, clear and friendly for students; no hype.
8. **Validate:** `python tools/study_tool.py check` must report `0 problems`.
9. **Publish:** `git add assets/data/study.json assets/img/study/<id>.webp; git commit -q -m "Study: <short paper title>"; if ($?) { git push -q }`
   Then after ~45 s confirm the build: `gh api repos/wavelab-hnu/wavelab-hnu.github.io/pages/builds/latest --jq ".status, .commit"`.
10. **Report** in one short message (Korean): paper title, journal/year, DOI, theme, and the link `https://wavelab-hnu.github.io/study.html#<id>`.

## Rules

- Change only `assets/data/study.json` and the new figure file. Never edit other site files.
- Only download the one figure image from the paper's own publisher page.
- If anything fails (no suitable CC BY paper, figure not reachable, check fails, push fails), do not publish a half-done entry: undo local changes to those two files and report what went wrong.
- Never put personal data, keys or tokens anywhere.
