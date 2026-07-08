/* ============================================================
   SIENTYS — MAIN.JS
   Typewriter · i18n (EN/中文) · card spotlight · reveal · nav
   Zero dependencies. Vanilla JS.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- I18N Dictionary ---------- */
  const I18N = {
    'lang.label':              { en: 'CN', zh: 'EN' },

    'nav.home':                { en: 'home',              zh: '首页' },
    'nav.about':               { en: 'about',             zh: '关于' },
    'nav.projects':            { en: 'projects',          zh: '项目' },
    'nav.contact':             { en: 'contact',           zh: '联系' },

    'hero.greeting':           { en: 'Hello, I am',       zh: '你好，我是' },
    'hero.subtitle':           {
      en: 'A passionate developer crafting digital experiences<br>at the intersection of <span class="highlight">code</span> and <span class="highlight">design</span>.',
      zh: '一个充满热情的开发者，在<span class="highlight">代码</span>与<span class="highlight">设计</span>的交汇处<br>打磨每一个像素与每一行逻辑。',
    },
    'hero.cta1':               { en: 'View My Work',      zh: '查看项目' },
    'hero.cta2':               { en: 'Say Hi',            zh: '打个招呼' },

    'about.title':             { en: 'whoami',             zh: 'whoami' },
    'about.desc':              { en: 'A human who finds romance between zeroes and ones.', zh: '一个在 0 和 1 之间寻找浪漫的人。' },
    'about.card1.title':       { en: 'Who I Am',          zh: '我是谁' },
    'about.card1.text':        {
      en: 'I\'m <strong>Sientys</strong>, a self-driven engineer who treats the terminal like a second home. I believe clean code reads like poetry, and good products should be as honest as tools.',
      zh: '我是 <strong>Sientys</strong>，一个把终端当第二个家的自驱工程师。我相信优雅的代码应当像诗一样精炼，好的产品应当像工具一样诚实。',
    },
    'about.card2.title':       { en: 'What I Do',         zh: '我在做什么' },
    'about.card2.text':        {
      en: 'I bounce between frontend, backend, and infrastructure. Obsessed with <span class="hl">Cloudflare</span>, <span class="hl">self-hosting</span>, and weird little scripts. Pursuing terminal aesthetics and typography with near-religious devotion.',
      zh: '我在前端、后端与基础设施之间反复横跳。沉迷于 <span class="hl">Cloudflare</span>、<span class="hl">自托管</span> 和各种奇怪的小脚本。对终端美学与字体排印有近乎偏执的追求。',
    },
    'about.card3.title':       { en: 'What Drives Me',    zh: '我的动力' },
    'about.card3.text':        {
      en: 'The thrill of turning an idea into pixels and logic — where every animation frame matters and every line of code tells a story. I ship things.',
      zh: '把想法变成像素与逻辑的快感——每一帧动画都值得较真，每一行代码都在讲述故事。我负责把东西做出来。',
    },
    'projects.title':          { en: 'latest builds',      zh: '最新项目' },
    'projects.desc':           { en: 'Things I\'ve been tinkering with. Always under construction.', zh: '最近折腾的东西，持续施工中。' },
    'projects.view':           { en: 'View',               zh: '查看' },

    'contact.title':           { en: 'connect',             zh: '联系我' },
    'contact.desc':            { en: 'Channels are open. Don\'t be a stranger.', zh: '频道开放，欢迎来撩。' },

    'footer.built':            {
      en: 'Designed &amp; Built by <strong>Sientys</strong> &copy; <span id="year"></span>',
      zh: '由 <strong>Sientys</strong> 设计 &amp; 开发 &copy; <span id="year"></span>',
    },
    'footer.tagline':          { en: 'Crafted with ⚡ on the command line', zh: '在命令行中用 ⚡ 手工打造' },
  };

  /* ---------- Typewriter phrases (lang-aware) ---------- */
  const phrasesEN = [
    'Building the future, one commit at a time.',
    'Turning caffeine into code since forever.',
    'Less is more. Clean code, clean mind.',
    'Exploring the edge of the web.',
    'Terminal is my happy place.',
    'Design is intelligence made visible.',
    'Code is poetry in motion.',
  ];
  const phrasesZH = [
    '一次提交，一次构建未来。',
    '从咖啡到代码，从未停止。',
    '少即是多，干净的代码，清晰的头脑。',
    '探索 Web 技术的边界。',
    '终端是我的快乐星球。',
    '设计是可见的智慧。',
    '代码是流动的诗。',
  ];

  /* ---------- Project cards data (lang-aware) ---------- */
  const projectsData = [
    {
      lang: 'Cloudflare Pages',
      title: 'sientys.top',
      descEN: 'Pure static geek-style personal site. Zero dependencies, zero build step, hand-crafted HTML/CSS/JS.',
      descZH: '纯静态极客风个人站点。零依赖、零编译，原生 HTML/CSS/JS 手搓。',
      tags: ['html', 'css', 'vanilla-js'],
      href: '#home',
    },
    {
      lang: 'CLI · Rust',
      title: 'dotctl',
      descEN: 'One-command dotfiles & dev environment manager. Spin up a fresh machine to full productivity in minutes.',
      descZH: '一键管理 dotfiles 与开发环境，新机器几分钟内恢复到完整生产力。',
      tags: ['rust', 'cli', 'automation'],
      href: '#projects',
    },
    {
      lang: 'Self-hosted',
      title: 'homelab-os',
      descEN: 'Docker Compose-powered self-hosted suite: reverse proxy, monitoring, auto-backups, the whole nine yards.',
      descZH: '基于 Docker Compose 的自托管全家桶：反代、监控、自动备份，一条龙服务。',
      tags: ['docker', 'linux', 'infra'],
      href: '#projects',
    },
    {
      lang: 'Web App',
      title: 'inkmark',
      descEN: 'Minimal Markdown note-taking & read-later tool. Local-first, offline-capable, syncs when you want it to.',
      descZH: '极简 Markdown 笔记与稍后读工具。本地优先、可离线、按需同步。',
      tags: ['ts', 'pwa', 'local-first'],
      href: '#projects',
    },
    {
      lang: 'Cloudflare Worker',
      title: 'edge-redirect',
      descEN: 'Short-link / redirect service running on Cloudflare Workers. Global ultra-low latency.',
      descZH: '跑在 Cloudflare Workers 上的短链跳转服务，全球超低延迟。',
      tags: ['cloudflare', 'worker', 'edge'],
      href: '#projects',
    },
    {
      lang: 'Bot',
      title: 'daokou-bot',
      descEN: 'A tiny cron-driven bot that pushes morning briefs, weather, and todos. Greets you every sunrise.',
      descZH: '小巧的定时推送机器人，每天早上为你送上简报、天气与待办提醒。',
      tags: ['python', 'bot', 'cron'],
      href: '#projects',
    },
  ];

  /* ---------- Current language state ---------- */
  let currentLang = localStorage.getItem('sientys-lang') || 'en';

  /* ---------- Apply language to DOM ---------- */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('sientys-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update lang toggle button text
    const langLabel = document.querySelector('.lang-toggle [data-i18n="lang.label"]');
    if (langLabel) {
      langLabel.textContent = I18N['lang.label'][lang];
    }

    // Update data-i18n elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[key] && I18N[key][lang]) {
        el.textContent = I18N[key][lang];
      }
    });

    // Update data-i18n-html elements (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (I18N[key] && I18N[key][lang]) {
        el.innerHTML = I18N[key][lang];
      }
    });

    // Re-render project cards
    renderProjects();

    // Re-bind spotlight on new cards
    bindSpotlight();

    // Re-observe reveal elements
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));

    // Update footer year (innerHTML overwrites it)
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Restart typewriter with new phrases
    resetTypewriter();
  }

  /* ---------- Language toggle handler ---------- */
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'zh' : 'en');
  });

  /* ---------- Render project cards ---------- */
  function renderProjects() {
    const cardsWrap = document.getElementById('cards');
    if (!cardsWrap) return;

    cardsWrap.innerHTML = projectsData
      .map(
        (p) => `
      <article class="project-card glass reveal">
        <div class="project-card-bar">
          <span class="project-dot project-dot--r"></span>
          <span class="project-dot project-dot--y"></span>
          <span class="project-dot project-dot--g"></span>
          <span class="project-lang">${p.lang}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${currentLang === 'zh' ? p.descZH : p.descEN}</p>
        <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
        <a class="project-link" href="${p.href}"><span data-i18n="projects.view">${I18N['projects.view'][currentLang]}</span> →</a>
      </article>`
      )
      .join('');

    // Re-observe newly injected cards
    cardsWrap.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  /* ---------- Typewriter ---------- */
  const typedEl = document.getElementById('typewriter-text');
  const cursorEl = document.querySelector('.typewriter-cursor');
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let typeTimeout;

  function getPhrases() {
    return currentLang === 'zh' ? phrasesZH : phrasesEN;
  }

  function tick() {
    if (!typedEl) return;
    const phrases = getPhrases();
    const current = phrases[phraseIdx % phrases.length];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIdx);
      charIdx++;
      if (charIdx > current.length) {
        deleting = true;
        if (cursorEl) cursorEl.classList.add('idle');
        typeTimeout = setTimeout(tick, 2000);
        return;
      }
      if (cursorEl) cursorEl.classList.remove('idle');
      typeTimeout = setTimeout(tick, 70 + Math.random() * 60);
      return;
    }

    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx <= 0) {
      charIdx = 0;
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      if (cursorEl) cursorEl.classList.remove('idle');
      typeTimeout = setTimeout(tick, 400);
      return;
    }
    typeTimeout = setTimeout(tick, 32 + Math.random() * 18);
  }

  function resetTypewriter() {
    clearTimeout(typeTimeout);
    phraseIdx = 0;
    charIdx = 0;
    deleting = false;
    if (typedEl) typedEl.textContent = '';
    if (cursorEl) cursorEl.classList.remove('idle');
    tick();
  }

  // Reduced-motion check
  function checkReducedMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const phrases = getPhrases();
      if (typedEl) typedEl.textContent = phrases[0];
      if (cursorEl) cursorEl.style.display = 'none';
      return true;
    }
    return false;
  }

  if (typedEl && !checkReducedMotion()) {
    typeTimeout = setTimeout(tick, 800);
  }

  /* ---------- IntersectionObserver (reveal) ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- Deep-Space Code-Particle Canvas ---------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, stars = [], codes = [], cursorParts = [];

    const CODE_CHARS = '01{}[]();<>/\\*#$_+=!?@^~|'.split('');
    const CURSOR_COUNT = 22;

    // Mouse position
    let mouseX = -1000, mouseY = -1000, mouseOnScreen = false;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseOnScreen = true;
    }, { passive: true });
    document.addEventListener('mouseleave', () => { mouseOnScreen = false; });

    function resizeCanvas() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function getPrimaryRgb() {
      const s = getComputedStyle(document.body).getPropertyValue('--primary-rgb').trim();
      return s || '56, 225, 255';
    }

    // Starfield
    function initStars(count) {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 0.3 + Math.random() * 1.4,
          a: 0.15 + Math.random() * 0.7,
          twinkleSpeed: 0.005 + Math.random() * 0.02,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    // Code particles
    function initCodes(count) {
      codes = [];
      for (let i = 0; i < count; i++) {
        codes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
          size: 9 + Math.random() * 8,
          speed: 0.2 + Math.random() * 0.6,
          a: 0.12 + Math.random() * 0.28,
          life: Math.random(),
        });
      }
    }

    // Cursor-attracted particles
    function initCursorParts() {
      cursorParts = [];
      for (let i = 0; i < CURSOR_COUNT; i++) {
        cursorParts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0, vy: 0,
          r: 0.6 + Math.random() * 1.6,
          a: 0.25 + Math.random() * 0.5,
          life: 1,
        });
      }
    }

    function drawStars(t) {
      stars.forEach((s) => {
        const flicker = s.a * (0.6 + 0.4 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${flicker})`;
        ctx.fill();
      });
    }

    function updateCursorParts() {
      const rgb = getPrimaryRgb();
      cursorParts.forEach((p) => {
        if (mouseOnScreen) {
          // Gentle attraction toward cursor (reduced force = looser)
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(dist * 0.00035, 0.18);
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Higher damping = looser / less momentum
        p.vx *= 0.955;
        p.vy *= 0.955;

        // Slightly more jitter for organic feel
        p.vx += (Math.random() - 0.5) * 0.22;
        p.vy += (Math.random() - 0.5) * 0.22;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -30) p.x = W + 30;
        if (p.x > W + 30) p.x = -30;
        if (p.y < -30) p.y = H + 30;
        if (p.y > H + 30) p.y = -30;

        // Life breathing
        p.life += 0.008;
        const breath = 0.5 + 0.5 * Math.sin(p.life * 1.5);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.a * breath})`;
        ctx.fill();

        // Subtle outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.a * breath * 0.14})`;
        ctx.fill();
      });
    }

    function drawCodes() {
      const rgb = getPrimaryRgb();
      codes.forEach((c) => {
        ctx.font = `${c.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(${rgb}, ${c.a})`;
        ctx.fillText(c.char, c.x, c.y);

        c.y += c.speed;
        c.life += 0.001;
        if (c.y > H + 30) {
          c.y = -20;
          c.x = Math.random() * W;
          c.char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
        }
      });
    }

    function drawConnections() {
      const rgb = getPrimaryRgb();
      for (let i = 0; i < codes.length; i++) {
        for (let j = i + 1; j < codes.length; j++) {
          const dx = codes[i].x - codes[j].x;
          const dy = codes[i].y - codes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.06;
            ctx.beginPath();
            ctx.moveTo(codes[i].x, codes[i].y);
            ctx.lineTo(codes[j].x, codes[j].y);
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
    }

    let animFrame;
    function animate(timestamp) {
      ctx.clearRect(0, 0, W, H);

      // Deep space vignette
      const vignette = ctx.createRadialGradient(W/2, H*0.4, H*0.2, W/2, H*0.4, Math.max(W,H)*0.8);
      vignette.addColorStop(0, 'rgba(10, 14, 20, 0)');
      vignette.addColorStop(1, 'rgba(10, 14, 20, 0.7)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      drawStars(timestamp);
      updateCursorParts();
      drawConnections();
      drawCodes();

      animFrame = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initStars(220);
    initCodes(55);
    initCursorParts();
    animate(0);

    window.addEventListener('resize', () => {
      resizeCanvas();
      initStars(220);
      initCodes(55);
      initCursorParts();
    });
  }

  /* ---------- Card Cursor Spotlight ---------- */
  function bindSpotlight() {
    document.querySelectorAll('.project-card').forEach((card) => {
      if (card.dataset.spotlightBound) return;
      card.dataset.spotlightBound = '1';
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }
  bindSpotlight();

  /* ---------- Mobile Nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = !navLinks.classList.contains('active');
      navLinks.classList.toggle('active', open);
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Active Nav Highlight on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollY = window.scrollY + 100;
    let current = '';

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinkItems.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* ---------- Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Apply initial language ---------- */
  applyLanguage(currentLang);

  /* ---------- Theme cycling (avatar click) ---------- */
  const themes = ['', 'green', 'red', 'purple']; // '' = default blue
  let themeIdx = themes.indexOf(localStorage.getItem('sientys-theme') || '');

  // Apply saved theme on load
  if (themeIdx > 0) {
    document.body.dataset.theme = themes[themeIdx];
  }

  const avatar = document.querySelector('.hero-avatar');
  if (avatar) {
    avatar.title = 'Click to switch theme';
    avatar.addEventListener('click', () => {
      themeIdx = (themeIdx + 1) % themes.length;
      const newTheme = themes[themeIdx];
      if (newTheme) {
        document.body.dataset.theme = newTheme;
      } else {
        delete document.body.dataset.theme;
      }
      localStorage.setItem('sientys-theme', newTheme);
    });
  }

})();
