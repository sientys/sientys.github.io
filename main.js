/* ============================================================
   sientys.top — main.js
   打字机 · 卡片渲染 · reveal · 卡片光标追踪 · 移动端菜单
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 打字机 ---------- */
  const typedEl = document.getElementById("typed");
  const caretEl = document.getElementById("caret");

  const phrases = [
    "whoami",
    "cat ~/intro.md",
    "echo $GREETING",
    "ssh sientys@world",
    "./build --prod",
    "git push origin main",
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      typedEl.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return wait(1600, tick);
      }
      return wait(70 + Math.random() * 60, tick);
    }

    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      return wait(400, tick);
    }
    wait(35, tick);
  }

  // 轻量定时器（支持 reduced-motion 跳过）
  function wait(ms, fn) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typedEl.textContent = phrases[0];
      caretEl.style.display = "none";
      return;
    }
    setTimeout(fn, ms);
  }

  if (typedEl) tick();

  /* ---------- IntersectionObserver (reveal 入场) ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- 项目卡片数据 ---------- */
  const projects = [
    {
      icon: "▣",
      lang: "Cloudflare Pages",
      title: "sientys.top",
      desc: "纯静态极客风个人站点，零依赖、零编译，原生 HTML/CSS/JS 手搓。",
      tags: ["html", "css", "vanilla-js"],
      href: "#top",
    },
    {
      icon: "⌘",
      lang: "CLI · Rust",
      title: "dotctl",
      desc: "一站式管理 dotfiles 与开发环境，一条命令在新机器上还原全部配置。",
      tags: ["rust", "cli", "automation"],
      href: "#projects",
    },
    {
      icon: "◈",
      lang: "Self-hosted",
      title: "homelab-os",
      desc: "基于 Docker Compose 的自托管服务全家桶，含反代、监控与自动备份。",
      tags: ["docker", "linux", "infra"],
      href: "#projects",
    },
    {
      icon: "❖",
      lang: "Web App",
      title: "inkmark",
      desc: "极简的 Markdown 笔记与稍后读工具，本地优先、可离线、可同步。",
      tags: ["ts", "pwa", "local-first"],
      href: "#projects",
    },
    {
      icon: "⚡",
      lang: "Worker",
      title: "edge-redirect",
      desc: "跑在 Cloudflare Worker 上的短链 / 跳转服务，全球低延迟。",
      tags: ["cloudflare", "worker", "edge"],
      href: "#projects",
    },
    {
      icon: "◉",
      lang: "Bot",
      title: "daokou-bot",
      desc: "一个小巧的机器人，定时推送早报、天气与待办，陪伴每个清晨。",
      tags: ["python", "bot", "cron"],
      href: "#projects",
    },
  ];

  const cardsWrap = document.getElementById("cards");
  if (cardsWrap) {
    cardsWrap.innerHTML = projects
      .map(
        (p) => `
      <article class="card reveal">
        <div class="card__top">
          <span class="card__icon">${p.icon}</span>
          <span class="card__lang">${p.lang}</span>
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <a class="card__link" href="${p.href}"><span>查看</span> →</a>
      </article>`
      )
      .join("");
    // 重新触发 reveal 观察
    cardsWrap.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  /* ---------- 卡片光标追踪（聚光灯） ---------- */
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  /* ---------- 移动端菜单 ---------- */
  const navMenu = document.getElementById("navMenu");
  const navDrawer = document.getElementById("navDrawer");
  if (navMenu && navDrawer) {
    const toggle = (open) => {
      navDrawer.classList.toggle("open", open);
      navMenu.setAttribute("aria-expanded", String(open));
      navMenu.classList.toggle("is-open", open);
      navMenu.querySelectorAll("span").forEach((s, i) => {
        s.style.transform = open
          ? i === 0 ? "translateY(7px) rotate(45deg)"
            : i === 1 ? "scaleX(0)"
            : "translateY(-7px) rotate(-45deg)"
          : "";
      });
    };
    navMenu.addEventListener("click", () => toggle(!navDrawer.classList.contains("open")));
    navDrawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));
  }

  /* ---------- footer 年份 ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
