/* WAVE Lab — 공통 스크립트 (메뉴, 푸터, 목록 렌더링) */
(function () {
  const L = window.LAB;
  const NAV = [
    ["index.html", "Home"],
    ["research.html", "Research"],
    ["people.html", "People"],
    ["publications.html", "Publications"],
    ["news.html", "News"],
    ["contact.html", "Contact"],
    ["links.html", "Links"],
    ["play.html", "Fun Zone"]
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  /* ---------- Header ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html">
          <img src="assets/img/logo.svg" alt="">
          <span class="brand-text"><strong>${L.name}</strong><span>${L.univ}</span></span>
        </a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        <ul class="nav-links">
          ${NAV.map(([href, label]) => `<li><a href="${href}" class="${href === here ? "active" : ""}">${label}</a></li>`).join("")}
        </ul>
      </div>`;
    const btn = header.querySelector(".nav-toggle");
    const links = header.querySelector(".nav-links");
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  /* ---------- Footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container footer-inner">
        <div>
          <strong>${L.fullName}</strong><br>
          ${L.dept}, ${L.univ}<br>
          ${L.address}
        </div>
        <div>
          <a href="mailto:${L.email}">${L.email}</a><br>
          Tel. ${L.phone}<br>
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
      el.textContent = `Visitors · Today ${Number(v.today).toLocaleString("en")} · Total ${Number(v.total).toLocaleString("en")}`;
      el.hidden = false;
    } catch (e) {}
  }

  /* ---------- Helpers ---------- */
  const PI = /Lee, J\.\*?(?!\s?[A-Z]\.)/g; // 교수님 이름 강조 (Lee, J. J. 등 다른 사람은 제외)
  const boldPI = (s) => s.replace(PI, (m) => `<b>${m}</b>`);
  const TYPE_LABEL = { intl: "International Journals", kr: "Korean Journals", conf: "International Conferences", patent: "Patents" };

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
    return `<li class="news-item"><div class="news-date">${n.date}</div><div><span class="news-cat">${n.cat}</span>${n.text}</div></li>`;
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
      const c = (t) => window.PUBS.filter((p) => p.type === t).length;
      const data = [
        [c("intl"), "International journal papers"],
        [c("kr"), "Korean journal papers"],
        [c("conf"), "International conference talks"],
        [c("patent"), "Registered patents"]
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
          <h4>${p.title}<span class="status ${p.ongoing ? "on" : "done"}">${p.ongoing ? "Ongoing" : "Completed"}</span></h4>
          <p>${p.funder}${p.period ? " · " + p.period : ""}</p>
        </div>`).join("");
    },

    links(el) {
      const groups = window.LINKS || [];
      const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
      // Site icon from data.js; the first letter shows if there is none or it fails to load
      const icon = (it) => `<span class="link-ico"><b>${it.name.trim()[0]}</b>${it.icon
        ? `<img src="${it.icon}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}</span>`;
      const ext = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>`;
      el.innerHTML = `
        <nav class="link-jump" aria-label="Jump to section">
          ${groups.map((g) => `<a class="tag" href="#${slug(g.group)}">${g.group}</a>`).join("")}
        </nav>
        ${groups.map((g) => `
          <div class="link-group" id="${slug(g.group)}">
            <h2>${g.group}</h2>
            ${g.sections.map((s) => `
              <div class="link-sub">
                <h3>${s.title}</h3>
                <div class="link-grid">
                  ${s.items.map((it) => `
                    <a class="link-card" href="${it.urlIOS && isIOS ? it.urlIOS : it.url}" target="_blank" rel="noopener">
                      <strong>${icon(it)}<span class="nm">${it.name}</span>${ext}</strong>
                      ${it.desc ? `<span class="desc">${it.desc}</span>` : ""}
                      <span class="host">${host(it.url)}</span>
                    </a>`).join("")}
                </div>
              </div>`).join("")}
          </div>`).join("")}`;
    },

    members(el) {
      const list = window.MEMBERS;
      if (!list.length) {
        el.innerHTML = `<p class="empty">Member profiles coming soon.</p>`;
        return;
      }
      el.innerHTML = `<div class="grid grid-4">${list.map((m) => `
        <div class="card member-card">
          ${m.photo ? `<img class="avatar sm" src="${m.photo}" alt="${m.name}">` : `<div class="avatar sm">${initials(m.nameEn || m.name)}</div>`}
          <h4>${m.nameEn || m.name}</h4>
          <p style="color:var(--teal);font-weight:600">${m.role}${m.since ? " · " + m.since + "~" : ""}</p>
          ${m.interests ? `<p>${m.interests}</p>` : ""}
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
            ${types.map((t) => `<button class="tab" data-type="${t}" role="tab">${TYPE_LABEL[t]}<span class="count">${window.PUBS.filter((p) => p.type === t).length}</span></button>`).join("")}
          </div>
          <input class="search" type="search" placeholder="Search title, author, journal…" aria-label="Search publications">
        </div>
        <div class="pub-list"></div>`;

      const listEl = el.querySelector(".pub-list");
      const tabs = el.querySelectorAll(".tab");

      function draw() {
        tabs.forEach((t) => t.classList.toggle("active", t.dataset.type === current));
        const all = window.PUBS.filter((p) => p.type === current);
        const q = query.trim().toLowerCase();
        const shown = all.filter((p) => !q || (p.title + " " + p.authors + " " + p.venue).toLowerCase().includes(q));
        if (!shown.length) { listEl.innerHTML = `<p class="empty">No results.</p>`; return; }
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
  document.querySelectorAll("[data-lab]").forEach((el) => { el.textContent = L[el.dataset.lab] || ""; });
})();
