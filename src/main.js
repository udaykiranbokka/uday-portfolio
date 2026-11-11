import './style.css';
import { PROFILE, STATS, PRODUCTS, PRINCIPLES, EXPERIENCE, EDUCATION, BUILDS, SKILLS, DOMAINS } from './data.js';

const app = document.getElementById('app');
const nav = document.getElementById('nav');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;
const SECTIONS = ['work', 'experience', 'about', 'contact'];

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const arrow = '<svg class="arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const chips = (items, cls = 'chip') => items.map((t) => `<li class="${cls}">${esc(t)}</li>`).join('');

// ---------------------------------------------------------------- views

function heroTitle() {
  return PROFILE.headline
    .map((line) => esc(line).replace(/\*(.+?)\*/g, '<em>$1</em>'))
    .map((line, i) => `<span class="line"><span class="line-inner" style="--i:${i}">${line}</span></span>`)
    .join('');
}

function home() {
  const orbit = 'Technical Product Manager · Fintech · Banking · HR-tech · ';
  return `
  <section class="hero" id="top">
    <div class="hero-copy">
      <p class="eyebrow load" style="--d:0"><span class="pulse"></span>${esc(PROFILE.role)} · ${esc(PROFILE.company)}</p>
      <h1 class="hero-title">${heroTitle()}</h1>
      <p class="hero-sub load" style="--d:4">${esc(PROFILE.summary)}</p>
      <div class="hero-actions load" style="--d:5">
        <a class="btn btn-primary magnetic" href="#/work"><span>See the products</span>${arrow}</a>
        <a class="btn btn-ghost magnetic" href="mailto:${PROFILE.email}"><span>Email me</span></a>
      </div>
      <ul class="hero-meta load" style="--d:6">
        <li><span>Based in</span>${esc(PROFILE.location)}</li>
        <li><span>Education</span>IIT Dharwad, CSE ’23</li>
        <li><span>From</span>${esc(PROFILE.hometown)}</li>
      </ul>
    </div>
    <figure class="hero-photo load" style="--d:2">
      <svg class="orbit" viewBox="0 0 200 200" aria-hidden="true">
        <defs><path id="orbit-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"/></defs>
        <text><textPath href="#orbit-path" textLength="548" lengthAdjust="spacing">${esc(orbit)}</textPath></text>
      </svg>
      <div class="photo-frame"><img src="${PROFILE.photo}" alt="Portrait of ${esc(PROFILE.name)}" width="800" height="800" /></div>
      <figcaption class="status-badge"><span class="pulse"></span>Open to TPM / PM roles</figcaption>
    </figure>
    <a class="scroll-cue" href="#/work" aria-label="Scroll to work"><span></span></a>
  </section>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">${[...DOMAINS, ...DOMAINS].map((d) => `<span>${esc(d)}</span><i>✦</i>`).join('')}</div>
  </div>

  <section class="stats container">
    ${STATS.map((s, i) => `
      <div class="stat" data-reveal style="--i:${i}">
        <p class="stat-value"><span data-count="${s.value}">0</span>${esc(s.suffix)}</p>
        <p class="stat-label">${esc(s.label)}</p>
      </div>`).join('')}
  </section>

  <section class="section container" id="work">
    <header class="section-head" data-reveal>
      <p class="label">01 · Selected work</p>
      <h2>Five internal products I own <em>end to end</em> at ICICI Bank.</h2>
    </header>
    <ol class="work-list">
      ${PRODUCTS.map((p, i) => `
        <li data-reveal style="--i:${i}">
          <a class="work-row" href="#/work/${p.id}" data-preview="${p.id}">
            <span class="work-index">${p.index}</span>
            <span class="work-main">
              <span class="work-kicker">${esc(p.kicker)}</span>
              <span class="work-title">${esc(p.title)}</span>
              <span class="work-sub">${esc(p.subtitle)}</span>
            </span>
            <ul class="work-tags">${chips(p.tags.slice(0, 3))}</ul>
            <span class="work-go">${arrow}</span>
          </a>
        </li>`).join('')}
    </ol>
  </section>

  <section class="section container" id="principles">
    <header class="section-head" data-reveal>
      <p class="label">02 · How I work</p>
      <h2>Part analyst, part PM, <em>fully accountable.</em></h2>
    </header>
    <div class="principles">
      ${PRINCIPLES.map((p, i) => `
        <article class="principle" data-reveal style="--i:${i % 3}">
          <span class="principle-num">${String(i + 1).padStart(2, '0')}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
        </article>`).join('')}
    </div>
  </section>

  <section class="section container" id="experience">
    <header class="section-head" data-reveal>
      <p class="label">03 · Experience</p>
      <h2>I built products before I <em>owned</em> them.</h2>
    </header>
    <div class="timeline">
      <div class="timeline-rail" aria-hidden="true"><span></span></div>
      ${EXPERIENCE.map((e) => `
        <article class="job${e.current ? ' current' : ''}" data-reveal>
          <div class="job-when"><span>${esc(e.period)}</span><span>${esc(e.place)}</span></div>
          <div class="job-body">
            <h3>${esc(e.role)} <span>@ ${esc(e.company)}</span></h3>
            ${e.summary ? `<p class="job-summary">${esc(e.summary)}</p>` : ''}
            <ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>
          </div>
        </article>`).join('')}
    </div>
  </section>

  <section class="section container" id="about">
    <header class="section-head" data-reveal>
      <p class="label">04 · About</p>
      <h2>Hyderabad roots, IIT Dharwad CS, <em>Mumbai</em> today.</h2>
    </header>
    <div class="about-grid">
      <div class="about-card edu" data-reveal>
        <p class="card-label">Education</p>
        <h3>${esc(EDUCATION.school)}</h3>
        <p class="muted">${esc(EDUCATION.degree)} · ${esc(EDUCATION.period)}</p>
        <ul class="plain">${EDUCATION.beyond.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      </div>
      <div class="about-card" data-reveal style="--i:1">
        <p class="card-label">Leadership on campus</p>
        <ul class="roles">${EDUCATION.leadership.map((l) => `<li><strong>${esc(l.title)}</strong><span>${esc(l.note)}</span></li>`).join('')}</ul>
      </div>
      <div class="about-card builds" data-reveal style="--i:2">
        <p class="card-label">Things I built</p>
        <ul class="build-list">${BUILDS.map((b) => b.url
          ? `<li><a href="${b.url}" target="_blank" rel="noopener"><strong>${esc(b.title)}</strong><span>${esc(b.note)}</span>${arrow}</a></li>`
          : `<li><div><strong>${esc(b.title)}</strong><span>${esc(b.note)}</span></div></li>`).join('')}</ul>
      </div>
      <div class="about-card skills" data-reveal style="--i:1">
        <p class="card-label">Toolkit</p>
        ${SKILLS.map((g) => `<div class="skill-group"><h4>${esc(g.group)}</h4><ul class="chips">${chips(g.items)}</ul></div>`).join('')}
      </div>
      <div class="about-card off" data-reveal style="--i:2">
        <p class="card-label">Off the clock</p>
        <ul class="hobbies"><li>📷 Photography</li><li>🏏 Cricket</li><li>💃 Dance</li><li>⌨️ Coding</li></ul>
      </div>
    </div>
  </section>

  ${contact()}`;
}

function contact() {
  return `
  <section class="contact" id="contact">
    <div class="container">
      <p class="label" data-reveal>05 · Contact</p>
      <h2 class="contact-title" data-reveal>Building in fintech, payments<br />or HR-tech? <em>Let’s talk.</em></h2>
      <p class="contact-sub" data-reveal>${esc(PROFILE.openTo)}</p>
      <div class="contact-actions" data-reveal>
        <a class="mail-link magnetic" href="mailto:${PROFILE.email}">${esc(PROFILE.email)}</a>
        <button class="copy-btn" type="button" data-copy="${PROFILE.email}">Copy</button>
      </div>
      <div class="contact-links" data-reveal>
        <a class="btn btn-light magnetic" href="${PROFILE.linkedin}" target="_blank" rel="noopener"><span>LinkedIn</span>${arrow}</a>
        <a class="btn btn-outline-light magnetic" href="mailto:${PROFILE.email}"><span>Send an email</span>${arrow}</a>
      </div>
    </div>
    <footer class="footer container">
      <span>© ${new Date().getFullYear()} ${esc(PROFILE.name)}</span>
      <span>${esc(PROFILE.location)}</span>
      <a href="#/">Back to top ↑</a>
    </footer>
  </section>`;
}

function flowDiagram(steps) {
  return `
  <div class="flow" style="--n:${steps.length}" data-reveal>
    ${steps.map((s, i) => `
      <div class="flow-step" style="--i:${i}">
        <span class="flow-dot"></span>
        <span class="flow-name">${esc(s)}</span>
      </div>`).join('<span class="flow-link" aria-hidden="true"><i></i></span>')}
  </div>`;
}

function caseStudy(p) {
  const i = PRODUCTS.indexOf(p);
  const next = PRODUCTS[(i + 1) % PRODUCTS.length];
  return `
  <article class="case container">
    <a class="back load" style="--d:0" href="#/work">${arrow}<span>All products</span></a>
    <header class="case-head">
      <p class="label load" style="--d:1">${p.index} / 0${PRODUCTS.length} · ${esc(p.kicker)}</p>
      <h1 class="case-title"><span class="line"><span class="line-inner" style="--i:0">${esc(p.title)}</span></span></h1>
      <p class="case-sub load" style="--d:3">${esc(p.subtitle)}</p>
      <ul class="chips load" style="--d:4">${chips(p.meta)}</ul>
    </header>
    <p class="case-intro" data-reveal>${esc(p.intro)}</p>
    <section class="case-flow">
      <p class="card-label" data-reveal>How it flows</p>
      ${flowDiagram(p.flow)}
    </section>
    <div class="case-sections">
      ${p.sections.map((s, k) => `
        <section class="case-block" data-reveal style="--i:${k}">
          <h2>${esc(s.heading)}</h2>
          <ul>${s.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
        </section>`).join('')}
    </div>
    <div class="case-tags" data-reveal>
      <p class="card-label">Stack & skills</p>
      <ul class="chips">${chips(p.tags)}</ul>
    </div>
    <a class="next-case" href="#/work/${next.id}" data-reveal>
      <span class="label">Next product · ${next.index}</span>
      <span class="next-title">${esc(next.title)} ${arrow}</span>
      <span class="next-sub">${esc(next.subtitle)}</span>
    </a>
  </article>
  ${contact()}`;
}

// ---------------------------------------------------------------- router

let current = null; // 'home' | product id

function parse() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'work' && parts[1]) {
    const p = PRODUCTS.find((x) => x.id === parts[1]);
    if (p) return { view: p.id, product: p };
  }
  return { view: 'home', section: SECTIONS.includes(parts[0]) ? parts[0] : null };
}

function scrollToSection(id, smooth) {
  const el = id && document.getElementById(id);
  const top = el ? el.getBoundingClientRect().top + scrollY - 72 : 0;
  scrollTo({ top, behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
}

async function route() {
  const r = parse();
  if (r.view === current) {
    scrollToSection(r.section, true);
    return;
  }
  const first = current === null;
  if (!first && !reduceMotion) {
    app.classList.add('leaving');
    await new Promise((res) => setTimeout(res, 280));
  }
  current = r.view;
  app.innerHTML = r.product ? caseStudy(r.product) : home();
  document.title = r.product ? `${r.product.title} · ${PROFILE.name}` : `${PROFILE.name} · ${PROFILE.role}`;
  scrollToSection(r.product ? null : r.section, false);
  app.classList.remove('leaving');
  requestAnimationFrame(() => {
    app.classList.add('ready');
    mount();
  });
  if (!first) app.focus({ preventScroll: true });
}

// ---------------------------------------------------------------- motion

let observer;

function mount() {
  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-count]').forEach(countUp);
      observer.unobserve(e.target);
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  app.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
  app.querySelectorAll('.magnetic').forEach(magnetic);
  app.querySelectorAll('[data-copy]').forEach((b) => b.addEventListener('click', () => copy(b)));
  setupPreview();
  onScroll();
}

function countUp(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = target; return; }
  const start = performance.now();
  const dur = 1200;
  const tick = (t) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function magnetic(el) {
  if (!finePointer || reduceMotion) return;
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
}

async function copy(btn) {
  try {
    await navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent = 'Copied ✓';
  } catch {
    btn.textContent = 'Press Ctrl+C';
  }
  setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
}

// A small card that follows the cursor over the work list and previews each product's flow.
let preview;
function setupPreview() {
  if (!finePointer || reduceMotion) return;
  preview ??= Object.assign(document.body.appendChild(document.createElement('div')), { className: 'preview' });
  const rows = app.querySelectorAll('[data-preview]');
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
  const follow = () => {
    x += (tx - x) * 0.18; y += (ty - y) * 0.18;
    preview.style.transform = `translate(${x}px, ${y}px)`;
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(follow) : 0;
  };
  rows.forEach((row) => {
    const p = PRODUCTS.find((q) => q.id === row.dataset.preview);
    row.addEventListener('pointerenter', (e) => {
      if (innerWidth < 900) return;
      preview.innerHTML = `<p>${p.index} · ${esc(p.kicker)}</p><ol>${p.flow.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`;
      x = tx = e.clientX + 24; y = ty = e.clientY + 24;
      preview.classList.add('show');
    });
    row.addEventListener('pointermove', (e) => {
      tx = e.clientX + 24; ty = e.clientY + 24;
      if (!raf) raf = requestAnimationFrame(follow);
    });
    row.addEventListener('pointerleave', () => preview.classList.remove('show'));
  });
}

let lastY = 0;
function onScroll() {
  const y = scrollY;
  if (preview && Math.abs(y - lastY) > 2) preview.classList.remove('show');
  const max = document.documentElement.scrollHeight - innerHeight;
  document.documentElement.style.setProperty('--progress', max > 0 ? y / max : 0);
  nav.classList.toggle('scrolled', y > 12);
  nav.classList.toggle('hidden', y > 320 && y > lastY + 4);
  if (y < lastY - 4) nav.classList.remove('hidden');
  lastY = y;

  const rail = app.querySelector('.timeline');
  if (rail) {
    const r = rail.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
    rail.style.setProperty('--draw', k);
  }
  const photo = app.querySelector('.hero-photo');
  if (photo && !reduceMotion) photo.style.setProperty('--shift', `${Math.min(y, 600) * 0.08}px`);

  if (current === 'home') {
    let active = null;
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < innerHeight * 0.4) active = id;
    }
    nav.querySelectorAll('.nav-links a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#/${active}`));
  } else {
    nav.querySelectorAll('.nav-links a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#/work'));
  }
}

let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });

if (finePointer && !reduceMotion) {
  addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
    document.documentElement.style.setProperty('--my', `${e.clientY}px`);
  }, { passive: true });
}

// ---------------------------------------------------------------- theme

const root = document.documentElement;
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch { /* storage blocked: follow the system */ }
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch { /* ignore */ }
});

// Clicking a link to the route you are already on fires no hashchange, so scroll by hand.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute('href') === location.hash) {
    e.preventDefault();
    route();
  }
});
addEventListener('hashchange', route);
route();
