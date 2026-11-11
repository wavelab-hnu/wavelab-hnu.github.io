/* WAVE Lab — 공통 스크립트 (메뉴, 푸터, 목록 렌더링) */
(function () {
  const L = window.LAB;

  /* ---------- Language: English by default, Korean on request ----------
     ?lang=ko / ?lang=en in the URL, or the choice saved from the in-page switch (<div data-lang-switch>).
     Static text: put the Korean version in a data-ko="…" attribute (innerHTML is swapped),
     data-ko-placeholder for inputs, and data-only="en" / "ko" to show a block in one language only.
     Data in data.js: an optional <field>Ko next to a field (e.g. text / textKo) is used in Korean.
     For now Korean is offered only on the pages in KO_PAGES; every other page stays English
     and shows no switch. Add page names here to open the Korean version on more pages. */
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const KO_PAGES = ["links.html"];
  const KO_HERE = KO_PAGES.includes(here.endsWith(".html") ? here : here + ".html");
  const LANG = (() => {
    if (!KO_HERE) return "en";
    let q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (q === "en" || q === "ko") { try { localStorage.setItem("wave-lang", q); } catch (e) {} return q; }
    try { return localStorage.getItem("wave-lang") === "ko" ? "ko" : "en"; } catch (e) { return "en"; }
  })();
  const KO = LANG === "ko";
  document.documentElement.lang = LANG;
  const t = (en, ko) => (KO && ko != null && ko !== "" ? ko : en); // pick the text for the current language
  const f = (o, k) => t(o[k], o[k + "Ko"]);                      // data field with optional <k>Ko
  window.WAVE = { lang: LANG, ko: KO, t, f };                      // for page scripts (Study, Fun Zone)
  if (KO) {
    document.querySelectorAll("[data-ko]").forEach((el) => {
      if (el.tagName === "TITLE") document.title = el.dataset.ko; else el.innerHTML = el.dataset.ko;
    });
    document.querySelectorAll("[data-ko-placeholder]").forEach((el) => { el.placeholder = el.dataset.koPlaceholder; });
  }
  function setLang(l) {
    try { localStorage.setItem("wave-lang", l); } catch (e) {}
    const u = new URL(location.href);
    if (u.searchParams.has("lang")) { u.searchParams.set("lang", l); location.href = u.toString(); }
    else location.reload();
  }

  const NAV = [
    ["index.html", "Home", "홈"],
    ["research.html", "Research", "연구"],
    ["people.html", "People", "구성원"],
    ["publications.html", "Publications", "논문"],
    ["news.html", "News", "소식"],
    ["study.html", "Study", "스터디"],
    ["contact.html", "Contact", "연락처"],
    ["links.html", "Links", "링크"],
    ["play.html", "Fun Zone", "쉬어가기"]
  ];

  /* ---------- Header ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html">
          <img src="assets/img/logo.svg" alt="">
          <span class="brand-text"><strong>${L.name}</strong><span>${t(L.univ, "한남대학교")}</span></span>
        </a>
        <ul class="nav-links">
          ${NAV.map(([href, en, ko]) => `<li><a href="${href}" class="${href === here ? "active" : ""}">${t(en, ko)}</a></li>`).join("")}
        </ul>
        <div class="nav-right">
          <button class="nav-toggle" aria-label="${t("Open menu", "메뉴 열기")}" aria-expanded="false">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>`;
    const btn = header.querySelector(".nav-toggle");
    const links = header.querySelector(".nav-links");
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  /* ---------- Language switch: inside the page (an element with data-lang-switch), only where Korean is offered ---------- */
  document.querySelectorAll("[data-lang-switch]").forEach((slot) => {
    if (!KO_HERE) { slot.remove(); return; }
    slot.className = "lang-switch";
    slot.setAttribute("role", "group");
    slot.setAttribute("aria-label", t("Language", "언어"));
    slot.innerHTML = `<a href="#" data-lang="en" class="${KO ? "" : "on"}" lang="en" ${KO ? "" : 'aria-current="true"'}>English</a><a href="#" data-lang="ko" class="${KO ? "on" : ""}" lang="ko" ${KO ? 'aria-current="true"' : ""}>한국어</a>`;
    slot.querySelectorAll("a").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      if (a.dataset.lang !== LANG) setLang(a.dataset.lang);
    }));
  });

  /* ---------- Footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container footer-inner">
        <div>
          <strong>${t(L.fullName, `${L.nameKo} (${L.name})`)}</strong><br>
          ${t(`${L.dept}, ${L.univ}`, L.deptKo)}<br>
          ${t(L.address, L.addressKo)}
        </div>
        <div>
          <a href="mailto:${L.email}">${L.email}</a><br>
          ${t("Tel.", "전화")} ${L.phone}<br>
          <a href="${L.scholar}" target="_blank" rel="noopener">Google Scholar</a> · <a href="${L.linkedin}" target="_blank" rel="noopener">LinkedIn</a><br>
          © ${new Date().getFullYear()} ${L.name}<br>
          <span class="visits" hidden></span>
        </div>
      </div>`;
    showVisits(footer.querySelector(".visits"));
  }

  /* ---------- Visitor counter (Supabase, see README) ----------
     Counts once per browser session; local previews are never counted.
     Stays hidden if the counter can't be loaded. */
  async function showVisits(el) {
    const SB = { url: "https://tswbamaqvdrfdzdhduzw.supabase.co", key: "sb_publishable_EbQnnaA75q0XcK2DDLEw_g_TV9b45Sy" };
    const local = location.protocol === "file:" || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
    let first = true;
    try { first = !sessionStorage.getItem("wave-visited"); sessionStorage.setItem("wave-visited", "1"); } catch (e) {}
    try {
      const r = await fetch(`${SB.url}/rest/v1/rpc/visit`, {
        method: "POST",
        headers: { apikey: SB.key, "Content-Type": "application/json" },
        body: JSON.stringify({ do_count: first && !local })
      });
      if (!r.ok) return;
      const v = await r.json();
      const n = (x) => Number(x).toLocaleString("en");
      el.textContent = t(`Visitors · Today ${n(v.today)} · Total ${n(v.total)}`, `방문자 · 오늘 ${n(v.today)} · 전체 ${n(v.total)}`);
      el.hidden = false;
    } catch (e) {}
  }

  /* ---------- Helpers ---------- */
  const PI = /Lee, J\.\*?(?!\s?[A-Z]\.)/g; // 교수님 이름 강조 (Lee, J. J. 등 다른 사람은 제외)
  const boldPI = (s) => s.replace(PI, (m) => `<b>${m}</b>`);
  const TYPE_LABEL = KO ? { intl: "국제학술지", kr: "국내학술지", conf: "국제학술대회", patent: "특허" }
    : { intl: "International Journals", kr: "Korean Journals", conf: "International Conferences", patent: "Patents" };
  const NEWS_CAT = { Patent: "특허", Project: "과제", Award: "수상", Conference: "학회", Lab: "연구실", Paper: "논문" };

  function pubHTML(p, num) {
    const links = [];
    if (p.doi) links.push(`<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI</a>`);
    if (p.note) links.push(`<span class="badge award">${p.note}</span>`);
    return `
      <div class="pub">
        <div class="pub-num">${num != null ? "[" + num + "]" : ""}</div>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${p.authors ? boldPI(p.authors) + " " : ""}(${p.year})</div>
          <div class="pub-venue">${p.venue}</div>
          ${links.length ? `<div class="pub-links">${links.join("")}</div>` : ""}
        </div>
      </div>`;
  }

  function newsHTML(n) {
    return `<li class="news-item"><div class="news-date">${n.date}</div><div><span class="news-cat">${t(n.cat, NEWS_CAT[n.cat])}</span>${f(n, "text")}</div></li>`;
  }

  const initials = (name) => name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  /* ---------- Renderers (data-render 속성으로 호출) ---------- */
  const R = {
    news(el) {
      const limit = parseInt(el.dataset.limit || "0", 10);
      const items = limit ? window.NEWS.slice(0, limit) : window.NEWS;
      el.innerHTML = `<ul class="news-list">${items.map(newsHTML).join("")}</ul>`;
    },

    featured(el) {
      el.innerHTML = window.PUBS.filter((p) => p.featured).map((p) => pubHTML(p)).join("");
    },

    stats(el) {
      const c = (ty) => window.PUBS.filter((p) => p.type === ty).length;
      const data = [
        [c("intl"), t("International journal papers", "국제학술지 논문")],
        [c("kr"), t("Korean journal papers", "국내학술지 논문")],
        [c("conf"), t("International conference talks", "국제학술대회 발표")],
        [c("patent"), t("Registered patents", "등록 특허")]
      ];
      el.innerHTML = data.map(([n, l]) => `<div class="stat card"><strong>${n}</strong><span>${l}</span></div>`).join("");
    },

    projects(el) {
      const mode = el.dataset.mode; // "ongoing" | "past" | undefined
      let list = window.PROJECTS;
      if (mode === "ongoing") list = list.filter((p) => p.ongoing);
      if (mode === "past") list = list.filter((p) => !p.ongoing);
      el.innerHTML = list.map((p) => `
        <div class="project">
          <h4>${f(p, "title")}<span class="status ${p.ongoing ? "on" : "done"}">${p.ongoing ? t("Ongoing", "진행 중") : t("Completed", "완료")}</span></h4>
          <p>${f(p, "funder")}${p.period ? " · " + t(p.period, p.period.replace("Present", "현재")) : ""}</p>
        </div>`).join("");
    },

    links(el) {
      const groups = window.LINKS || [];
      const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
      // Site icon from data.js; the first letter shows if there is none or it fails to load
      const icon = (it) => `<span class="link-ico"><b>${f(it, "name").trim()[0]}</b>${it.icon
        ? `<img src="${it.icon}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}</span>`;
      const ext = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>`;
      el.innerHTML = `
        <nav class="link-jump" aria-label="Jump to section">
          ${groups.map((g) => `<a class="tag" href="#${slug(g.group)}">${f(g, "group")}</a>`).join("")}
        </nav>
        ${groups.map((g) => `
          <div class="link-group" id="${slug(g.group)}">
            <h2>${f(g, "group")}</h2>
            ${g.sections.map((s) => `
              <div class="link-sub">
                <h3>${f(s, "title")}</h3>
                <div class="link-grid">
                  ${s.items.map((it) => `
                    <a class="link-card" href="${it.urlIOS && isIOS ? it.urlIOS : it.url}" target="_blank" rel="noopener">
                      <strong>${icon(it)}<span class="nm">${f(it, "name")}</span>${ext}</strong>
                      ${it.desc ? `<span class="desc">${f(it, "desc")}</span>` : ""}
                      <span class="host">${host(it.url)}</span>
                    </a>`).join("")}
                </div>
              </div>`).join("")}
          </div>`).join("")}`;
    },

    members(el) {
      const list = window.MEMBERS;
      if (!list.length) {
        el.innerHTML = `<p class="empty">${t("Member profiles coming soon.", "구성원 소개를 준비 중입니다.")}</p>`;
        return;
      }
      el.innerHTML = `<div class="grid grid-4">${list.map((m) => `
        <div class="card member-card">
          ${m.photo ? `<img class="avatar sm" src="${m.photo}" alt="${m.name}">` : `<div class="avatar sm">${initials(m.nameEn || m.name)}</div>`}
          <h4>${KO ? m.name : (m.nameEn || m.name)}</h4>${KO && m.nameEn ? `<p class="name-sub">${m.nameEn}</p>` : ""}
          <p style="color:var(--teal);font-weight:600">${f(m, "role")}${m.since ? " · " + m.since + "~" : ""}</p>
          ${m.program ? `<p>${f(m, "program")}</p>` : ""}
          ${m.interests ? `<p>${f(m, "interests")}</p>` : ""}
          ${m.email ? `<p><a href="mailto:${m.email}">${m.email}</a></p>` : ""}
        </div>`).join("")}</div>`;
    },

    publications(el) {
      const types = ["intl", "kr", "conf", "patent"];
      let current = "intl";
      let query = "";

      el.innerHTML = `
        <div class="pub-toolbar">
          <div class="tabs" role="tablist">
            ${types.map((ty) => `<button class="tab" data-type="${ty}" role="tab">${TYPE_LABEL[ty]}<span class="count">${window.PUBS.filter((p) => p.type === ty).length}</span></button>`).join("")}
          </div>
          <input class="search" type="search" placeholder="${t("Search title, author, journal…", "제목, 저자, 학술지 검색…")}" aria-label="${t("Search publications", "논문 검색")}">
        </div>
        <div class="pub-list"></div>`;

      const listEl = el.querySelector(".pub-list");
      const tabs = el.querySelectorAll(".tab");

      function draw() {
        tabs.forEach((t) => t.classList.toggle("active", t.dataset.type === current));
        const all = window.PUBS.filter((p) => p.type === current);
        const q = query.trim().toLowerCase();
        const shown = all.filter((p) => !q || (p.title + " " + p.authors + " " + p.venue).toLowerCase().includes(q));
        if (!shown.length) { listEl.innerHTML = `<p class="empty">${t("No results.", "검색 결과가 없습니다.")}</p>`; return; }
        const years = [...new Set(shown.map((p) => p.year))].sort((a, b) => b - a);
        listEl.innerHTML = years.map((y) => `
          <div class="year-group">
            <h3>${y}</h3>
            ${shown.filter((p) => p.year === y).map((p) => pubHTML(p, all.length - all.indexOf(p))).join("")}
          </div>`).join("");
      }

      tabs.forEach((t) => t.addEventListener("click", () => { current = t.dataset.type; draw(); }));
      el.querySelector(".search").addEventListener("input", (e) => { query = e.target.value; draw(); });
      draw();
    }
  };

  document.querySelectorAll("[data-render]").forEach((el) => {
    const fn = R[el.dataset.render];
    if (fn) fn(el);
  });
  document.querySelectorAll("[data-lab]").forEach((el) => { el.textContent = f(L, el.dataset.lab) || ""; });
})();
