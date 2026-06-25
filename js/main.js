/* ============================================================================
   main.js — renders the page from DATA (data.js) and wires up all interactions.
   ========================================================================== */
(function () {
  const D = window.DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------------------------------------------------- SVG ICONS */
  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.2H6.1V17h2.24zM7.22 9.24a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM18 17v-3.73c0-2-.43-3.54-2.77-3.54-1.12 0-1.88.62-2.19 1.2h-.03v-1.01H10.8V17h2.24v-3.36c0-.89.17-1.74 1.26-1.74 1.08 0 1.1 1 1.1 1.8V17H18z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  };
  function iconFor(name) { return ICONS[name] || ICONS.code; }

  /* ----------------------------------------------------- POPULATE PROFILE */
  const P = D.profile;
  $("#hero-name").textContent = P.name;
  $("#hero-status-text").textContent = P.status;
  $("#hero-tagline").textContent = P.tagline;
  $("#fact-location").textContent = P.location;
  $("#fact-status").textContent = P.status;
  $("#year").textContent = new Date().getFullYear();
  document.title = `${P.name} — AI & Computing Science`;

  // Email links
  $("#contact-email").href = "mailto:" + P.email;
  $("#contact-email").textContent = P.email;

  // Resume button (hide if file not provided)
  const resumeBtn = $("#hero-resume");
  if (P.resumeUrl) { resumeBtn.href = P.resumeUrl; } else { resumeBtn.style.display = "none"; }

  // Monogram / photo
  const initials = P.name.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();
  if (P.photo) {
    const mono = $("#about-monogram");
    mono.outerHTML = `<img src="${P.photo}" alt="${P.name}" class="about-monogram" />`;
  } else {
    $("#about-monogram").textContent = initials;
  }

  /* ------------------------------------------------------------- SOCIALS */
  function renderSocials(container) {
    container.innerHTML = "";
    D.socials.filter((s) => s.url).forEach((s) => {
      const a = document.createElement("a");
      a.className = "social-btn";
      a.href = s.url;
      a.title = s.name;
      a.setAttribute("aria-label", s.name);
      if (!s.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
      a.innerHTML = iconFor(s.icon);
      container.appendChild(a);
    });
  }
  renderSocials($("#hero-socials"));
  renderSocials($("#contact-socials"));

  /* --------------------------------------------------------------- STATS */
  const statIcons = { users: "👥", school: "🎓", briefcase: "💼", code: "⌨️", spark: "✦" };
  const statsGrid = $("#stats-grid");
  D.stats.filter((s) => s.show).forEach((s) => {
    const div = document.createElement("div");
    div.className = "stat-card";
    div.setAttribute("data-reveal", "");
    div.innerHTML = `<div class="stat-icon">${statIcons[s.icon] || "✦"}</div>
      <div class="stat-value gradient-text">${s.value}</div>
      <div class="stat-label">${s.label}</div>`;
    statsGrid.appendChild(div);
  });

  /* --------------------------------------------------------------- ABOUT */
  const aboutText = $("#about-text");
  D.about.forEach((para) => {
    const p = document.createElement("p");
    p.textContent = para;
    aboutText.appendChild(p);
  });

  /* -------------------------------------------------------------- SKILLS */
  const skIcons = { brain: "🧠", tools: "🛠️", spark: "✦" };
  const skillsGrid = $("#skills-grid");
  Object.entries(D.skills).forEach(([cat, obj]) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.setAttribute("data-reveal", "");
    let html = `<h3><span class="sk-icon">${skIcons[obj.icon] || "✦"}</span>${cat}</h3>`;
    obj.items.forEach((it) => {
      html += `<div class="skill-item">
        <div class="sk-top"><span>${it.name}</span><span>${it.level}%</span></div>
        <div class="sk-bar"><div class="sk-fill" data-level="${it.level}"></div></div>
      </div>`;
    });
    card.innerHTML = html;
    skillsGrid.appendChild(card);
  });

  /* ----------------------------------------------------------- EXPERIENCE */
  const timeline = $("#timeline");
  D.experience.forEach((e) => {
    const item = document.createElement("div");
    item.className = "tl-item" + (e.current ? " current" : "");
    item.setAttribute("data-reveal", "");
    const bullets = e.bullets.map((b) => `<li>${b}</li>`).join("");
    const tags = (e.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    item.innerHTML = `<div class="tl-card">
      <div class="tl-head">
        <div><span class="tl-role">${e.role}</span> ${e.current ? '<span class="badge-now">NOW</span>' : ""}<div class="tl-org">${e.org}</div></div>
        <span class="tl-period">${e.start} — ${e.end}</span>
      </div>
      <div class="tl-loc">${e.location}</div>
      <ul class="tl-bullets">${bullets}</ul>
      <div class="tag-row">${tags}</div>
    </div>`;
    timeline.appendChild(item);
  });

  /* ------------------------------------------------------------- PROJECTS */
  const projIcons = ["🧩", "✨", "🔬", "🤖", "📊", "⚡"];
  const projectsGrid = $("#projects-grid");
  D.projects.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-reveal", "");
    const tags = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    let links = "";
    if (p.link) links += `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener">Live ↗</a>`;
    if (p.repo) links += `<a class="proj-link" href="${p.repo}" target="_blank" rel="noopener">Code ↗</a>`;
    card.innerHTML = `
      <div class="proj-top"><span class="proj-icon">${projIcons[i % projIcons.length]}</span>
        ${p.highlight ? `<span class="proj-highlight">${p.highlight}</span>` : ""}</div>
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      ${links ? `<div class="proj-links">${links}</div>` : ""}
      <div class="tag-row">${tags}</div>`;
    projectsGrid.appendChild(card);
  });

  /* ---------------------------------------------------------- ACHIEVEMENTS */
  const achIcons = { crown: "👑", trophy: "🏆", star: "⭐", flask: "⚗️", medal: "🏅", shield: "🛡️" };
  const achGrid = $("#achievements-grid");
  D.achievements.forEach((a) => {
    const card = document.createElement("div");
    card.className = "ach-card";
    card.setAttribute("data-reveal", "");
    card.innerHTML = `<div class="ach-icon">${achIcons[a.icon] || "✦"}</div>
      <div><h4>${a.title}</h4><p>${a.detail}</p><span class="ach-year">${a.year}</span></div>`;
    achGrid.appendChild(card);
  });

  /* ------------------------------------------------------------- EDUCATION */
  const eduList = $("#education-list");
  D.education.forEach((e) => {
    const card = document.createElement("div");
    card.className = "edu-card";
    card.setAttribute("data-reveal", "");
    card.innerHTML = `<div><h3>${e.school}</h3><div class="edu-degree">${e.degree}</div>
      <p>${e.location} · ${e.note}</p></div><span class="edu-period">${e.period}</span>`;
    eduList.appendChild(card);
  });

  /* --------------------------------------------------- ROTATING ROLE TYPE */
  const roleEl = $("#rotating-role");
  const roles = P.roles;
  let rIdx = 0, cIdx = 0, deleting = false;
  function typeLoop() {
    const word = roles[rIdx];
    if (!deleting) {
      roleEl.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) { deleting = true; return setTimeout(typeLoop, 1500); }
    } else {
      roleEl.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  typeLoop();

  /* ------------------------------------------------------ SCROLL REVEALS */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // animate skill bars within
        $$(".sk-fill", entry.target).forEach((f) => { f.style.width = f.dataset.level + "%"; });
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$("[data-reveal]").forEach((el) => revealObserver.observe(el));

  // Catch skill bars even if observed before children rendered
  const skillSection = $("#skills");
  if (skillSection) {
    new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          $$(".sk-fill", skillSection).forEach((f) => { f.style.width = f.dataset.level + "%"; });
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 }).observe(skillSection);
  }

  /* ----------------------------------------------------------- NAVBAR */
  const navbar = $("#navbar");
  const progress = $("#scroll-progress");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    const scrolled = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = Math.min(100, scrolled * 100) + "%";
  });

  const navToggle = $("#nav-toggle");
  const navLinks = $(".nav-links");
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
  $$(".nav-links a").forEach((a) => a.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("open");
  }));

  /* -------------------------------------------------------- CURSOR GLOW */
  const glow = $("#cursor-glow");
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  } else { glow.style.display = "none"; }

  /* ------------------------------------------------------------ TERMINAL */
  initTerminal(D);

  function initTerminal(D) {
    const body = $("#terminal-body");
    const input = $("#terminal-input");
    if (!body || !input) return;

    // typed intro
    const introEl = $(".typed-intro");
    const introText = "welcome — type 'help' to explore";
    let k = 0;
    (function typeIntro() {
      if (k <= introText.length) { introEl.textContent = introText.slice(0, k++); setTimeout(typeIntro, 35); }
    })();

    const commands = {
      help: () => `Available commands:
  <span class="hl">whoami</span>     who is Ujjwal
  <span class="hl">skills</span>     technical skills
  <span class="hl">experience</span> work history
  <span class="hl">projects</span>   things I've built
  <span class="hl">education</span>  academic background
  <span class="hl">contact</span>    how to reach me
  <span class="hl">socials</span>    my links
  <span class="hl">clear</span>      clear the screen`,
      whoami: () => `${D.profile.name} — ${D.profile.tagline}`,
      skills: () => {
        let out = "";
        Object.entries(D.skills).forEach(([c, o]) => {
          out += `<span class="hl">${c}:</span> ${o.items.map((i) => i.name).join(", ")}\n`;
        });
        return out.trim();
      },
      experience: () => D.experience.map((e) => `<span class="ok">${e.role}</span> @ ${e.org} (${e.start} — ${e.end})`).join("\n"),
      projects: () => D.projects.map((p) => `<span class="hl">${p.title}</span> — ${p.blurb}`).join("\n\n"),
      education: () => D.education.map((e) => `<span class="ok">${e.school}</span>: ${e.degree} (${e.period})`).join("\n"),
      contact: () => `email: <span class="hl">${D.profile.email}</span>\nphone: ${D.profile.phone}\nlocation: ${D.profile.location}`,
      socials: () => {
        const s = D.socials.filter((x) => x.url);
        return s.length ? s.map((x) => `${x.name}: <span class="hl">${x.url}</span>`).join("\n") : "No social links added yet — add them in js/data.js";
      },
      clear: () => "__CLEAR__",
    };

    function print(html, cls = "output") {
      const line = document.createElement("div");
      line.className = "terminal-line " + cls;
      line.innerHTML = html;
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
    }

    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const cmd = input.value.trim().toLowerCase();
      input.value = "";
      if (!cmd) return;
      print(`<span class="prompt">visitor@ujjwal:~$</span> ${cmd}`, "");
      const fn = commands[cmd];
      if (!fn) { print(`command not found: ${cmd} — try <span class="hl">help</span>`); return; }
      const result = fn();
      if (result === "__CLEAR__") { body.innerHTML = ""; return; }
      print(result);
    });

    // focus terminal when its section is clicked
    $("#terminal-section").addEventListener("click", () => input.focus());
  }
})();
