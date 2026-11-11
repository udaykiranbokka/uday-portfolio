(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Uday Kiran Bokka`,first:`Uday`,role:`Technical Product Manager`,company:`ICICI Bank`,location:`Mumbai, Maharashtra`,hometown:`Hyderabad, Telangana`,email:`udaykiranbokka00@gmail.com`,linkedin:`https://www.linkedin.com/in/bokka-uday-kiran-a8082a250/`,photo:`uday.jpg`,headline:[`I build the systems`,`*a bank runs on,*`,`end to end.`],summary:`Technical Product Manager at ICICI Bank: part business analyst, part product manager, fully accountable. I own internal banking platforms end to end, from requirements and feasibility to delivery and everything after launch.`,openTo:`Open to TPM / PM roles in Fintech, Payments, Banking and HR-tech.`,industries:[`Fintech`,`Payments`,`Banking`,`HR-tech`]},t=[{value:5,suffix:``,label:`internal banking products owned`},{value:2,suffix:`+`,label:`years as TPM at ICICI Bank`},{value:3,suffix:``,label:`engineering roles before product`},{value:4,suffix:``,label:`stakeholder groups: business, HR, compliance, ops`}],n=[{id:`reports-dashboard`,index:`01`,title:`Corporates & Reports Dashboard`,kicker:`Analytics · HR`,subtitle:`Power BI dashboards HR runs on every day.`,meta:[`Power BI`,`Microservice APIs`,`Alerting`],intro:`HR teams use this dashboard daily for monitoring and analytics. The hard part isn’t the charts, it’s the data: several teams own it, behind several services.`,flow:[`Team APIs`,`Combine & model`,`Power BI`,`Scheduled refresh`,`Email + Teams alerts`],sections:[{heading:`How it works`,items:[`Different teams expose API endpoints that give us a copy of their data`,`We combine, link and structure that data into one model, then build the dashboards on top`,`Dashboard refresh time brought down to a minimum`]},{heading:`My role`,items:[`New requirement → check the data → gather needs → talk to devs → check feasibility → ship`,`Scheduled refreshes with alerting: any failure fires Email and MS Teams notifications through configured notification services`,`Continuous monitoring for errors and data issues`]}],tags:[`Power BI`,`Data Modelling`,`API Integration`,`Alerting`,`Monitoring`]},{id:`e-circulars`,index:`02`,title:`E-Circulars`,kicker:`Regulatory · Bank-wide`,subtitle:`One bank-wide portal for every circular.`,meta:[`3 modules`,`Legacy .NET + Web APIs`,`RBI compliance`],intro:`Teams across the bank publish their circulars on this portal, and anyone can find and read any circular in one place.`,flow:[`Teams publish`,`Compliance & RBI checks`,`One portal`,`Scheduled notifications`,`Right reader`],sections:[{heading:`What I own`,items:[`Three modules used by publishing teams across the bank`,`Compliance management, including RBI requirements and notices`,`Scheduled notifications so the right people see the right circular`,`Live issue resolution, monitoring and new requirements end to end`]}],tags:[`.NET`,`Web APIs`,`Compliance`,`Notifications`,`Prod Support`]},{id:`branch-network`,index:`03`,title:`Branch Network`,kicker:`Master data · APIs`,subtitle:`Every minute detail of every branch, end to end, in one app.`,meta:[`Master data`,`Own APIs`,`Many consuming systems`,`Dashboard`],intro:`One app that holds every minute detail of every ICICI branch, end to end: start dates, employee details, ATMs, location, management and more. Many systems across the bank use this data through Branch Network’s own APIs.`,flow:[`Business requirement`,`Branch master data`,`Branch Network APIs`,`Many systems consume`,`Network dashboard`],sections:[{heading:`Why it matters`,items:[`The complete, end-to-end record of the branch network in a single app`,`Branch Network has its own APIs, and many systems across the bank consume them for their own needs: they all run on our branch data`,`We keep those APIs updated and refreshed so every consuming system sees current data`,`A dashboard on top for a visual view of the network`]},{heading:`My role`,items:[`Connect with the business on every new requirement and take it through to delivery`,`Requirement gathering and change management for the teams that consume the APIs`]}],tags:[`REST APIs`,`Master Data`,`MS SQL`,`Dashboards`,`Change Management`]},{id:`compliance-certificates`,index:`04`,title:`Compliance Certificates`,kicker:`Audit · Workflow`,subtitle:`Monthly branch compliance with multi-level review.`,meta:[`Monthly cycle`,`Quarterly tracking`,`COMP1 → COMP4`],intro:`In the first two to three working days of every month, branch managers and deputy managers submit a compliance questionnaire: is the branch following every rule? It’s effectively a continuous audit.`,flow:[`Branch submits`,`COMP1`,`COMP2`,`COMP3`,`COMP4`,`Regional Head`,`Zonal Head`],sections:[{heading:`The workflow`,items:[`Questionnaire submission by branch and deputy managers`,`Deviations are tracked and escalated through review levels, up to the Regional Head and then the Zonal Head`,`Quarterly tracking with a full history of submissions and deviations`]}],tags:[`Audit Trails`,`Workflows`,`Escalations`,`Governance`]},{id:`hr4u`,index:`05`,title:`HR4U`,kicker:`Employee self-service`,subtitle:`The internal HR self-service portal for ICICI Bank employees.`,meta:[`Internal portal`,`Employee self-service`,`Secure & centralized`],intro:`HR4U is an internal HR self-service portal used by ICICI Bank employees to access a wide range of HR-related services and information through a single platform.`,flow:[`Employee signs in`,`One HR portal`,`Policies & salary slips`,`Form 16 & tax documents`,`PF & financial details`],sections:[{heading:`What employees can do`,items:[`Access and manage their HR policies`,`Download salary slips and Form 16`,`View Provident Fund (PF) details and tax-related documents`,`Use other financial and employee self-service functions`]},{heading:`Why it matters`,items:[`Simplifies HR processes on one platform`,`Gives employees easy, secure and centralized access to important employment and financial information`,`Reduces dependency on manual HR support and improves the overall employee experience`]}],tags:[`Employee Self-Service`,`HR Policies`,`Payroll Documents`,`Security`,`Employee Experience`]}],r=[{title:`Requirements, shaped`,text:`Requirement gathering with business, HR, compliance and ops stakeholders, turned into something developers can build.`},{title:`Feasibility first`,text:`Nothing is committed until it has been checked with the developers who will build it.`},{title:`Deadlines that hold`,text:`Daily scrum calls, sprint cadence, strict deadline management and clear progress updates to stakeholders.`},{title:`Owned in production`,text:`Live issue resolution, monitoring and continuous upgrades of legacy .NET systems long after launch.`},{title:`Retros that change things`,text:`Retrospectives that lead to real changes, plus team activities that keep morale high.`},{title:`Engineer’s fluency`,text:`A CS degree and three developer roles mean I can read an API contract, estimate honestly and go deep when it matters.`}],i=[{company:`ICICI Bank`,role:`Technical Product Manager`,period:`Jun 2024 – Present`,place:`Mumbai`,current:!0,summary:`A hybrid of business analyst and product manager with full ownership of internal banking platforms. I gather and shape requirements, check feasibility, set timelines, get delivery done through the dev team and own what happens in production afterwards.`,points:[`Own five internal products: Corporates & Reports Dashboard, E-Circulars, Branch Network, Compliance Certificates and HR4U`,`Run Agile delivery: scrum calls, sprints, deadlines, retros`,`Use AI tools (Claude, ChatGPT) to speed up analysis, documentation and prototyping`]},{company:`Jarvis Technology & Strategy Consulting`,role:`Software Developer`,period:`Jun – Jul 2023`,place:`New Delhi (NCR)`,points:[`Built interactive front-end components in React, HTML, CSS and JavaScript`,`Back-end work in Ruby on Rails with PostgreSQL for data storage and retrieval`]},{company:`Gupshup`,role:`Software Developer Intern`,period:`May – Nov 2022`,place:`Mumbai`,points:[`Journey Builder (chatbot journey platform): worked on string localization`,`Tested Journey Builder components with React Testing Library`,`WhatsApp Scheduler: an API that schedules WhatsApp messages for a set time via the WhatsApp Business API (Spring Boot, MySQL, JUnit)`]},{company:`Verzeo`,role:`Software Developer Intern`,period:`May – Jun 2021`,place:`Bengaluru`,points:[`Completed minor and major projects under mentor guidance, with a focus on web performance and scalability`]}],a={school:`Indian Institute of Technology Dharwad`,degree:`B.Tech, Computer Science & Engineering`,period:`2019 – 2023`,place:`Dharwad, Karnataka`,leadership:[{title:`Hostel Secretary`,note:`2nd year · represented residents and ran hostel affairs`},{title:`Secretary, Photography & Films Club`,note:`2021–22 · ran competitions; lead photographer for PARSEC, the tech fest`},{title:`PR Coordinator, Career Development Cell`,note:`Nov 2020 – May 2021 · brought in new recruiters for internships and placements`},{title:`SMP Student Mentor`,note:`Guided and mentored freshers`}],beyond:[`Group Dance at the Inter IIT Cultural Meet 5.0, IIT Madras (2023)`,`Core member of the Dance Club and the Cricket Club`,`Certifications: Problem Solving, SQL, Python, Web Development Bootcamp`]},o=[{title:`MERN Todo App`,note:`MongoDB, Express, React, Node`,url:`https://awesometodouday-app.onrender.com/`},{title:`Geolocation Weather App`,note:`Weather for wherever you are`,url:`https://geolocation-weather-app.vercel.app/`},{title:`WhatsApp Scheduler`,note:`Spring Boot, MySQL, JUnit · built at Gupshup`,url:null}],s=[{group:`Product`,items:[`Product Ownership`,`Requirement Gathering`,`Stakeholder Management`,`Feasibility Analysis`,`Roadmaps & Timelines`,`Change Management`,`Prod Support`]},{group:`Delivery`,items:[`Agile`,`Scrum`,`Sprint Planning`,`Retrospectives`,`Progress Reporting`]},{group:`Data & Platforms`,items:[`Power BI`,`Data Modelling`,`MS SQL Server`,`REST / Web APIs`,`.NET`,`.NET Core`,`Alerting & Monitoring`]},{group:`Engineering roots`,items:[`DSA`,`Python`,`JavaScript`,`SQL`,`React`,`Node.js`,`Spring Boot`,`Ruby on Rails`,`PostgreSQL`,`MongoDB`]},{group:`AI tools`,items:[`Claude`,`ChatGPT`]}],c=[`Banking`,`Payments`,`Compliance`,`HR-tech`,`Payroll`,`Power BI`,`APIs`,`Agile`,`Fintech`,`Master Data`],l=document.getElementById(`app`),u=document.getElementById(`nav`),d=matchMedia(`(prefers-reduced-motion: reduce)`).matches,f=matchMedia(`(pointer: fine)`).matches,p=[`work`,`experience`,`about`,`contact`],m=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),h=`<svg class="arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,g=(e,t=`chip`)=>e.map(e=>`<li class="${t}">${m(e)}</li>`).join(``);function _(){return e.headline.map(e=>m(e).replace(/\*(.+?)\*/g,`<em>$1</em>`)).map((e,t)=>`<span class="line"><span class="line-inner" style="--i:${t}">${e}</span></span>`).join(``)}function v(){return`
  <section class="hero" id="top">
    <div class="hero-copy">
      <p class="eyebrow load" style="--d:0"><span class="pulse"></span>${m(e.role)} · ${m(e.company)}</p>
      <h1 class="hero-title">${_()}</h1>
      <p class="hero-sub load" style="--d:4">${m(e.summary)}</p>
      <div class="hero-actions load" style="--d:5">
        <a class="btn btn-primary magnetic" href="#/work"><span>See the products</span>${h}</a>
        <a class="btn btn-ghost magnetic" href="mailto:${e.email}"><span>Email me</span></a>
      </div>
      <ul class="hero-meta load" style="--d:6">
        <li><span>Based in</span>${m(e.location)}</li>
        <li><span>Education</span>IIT Dharwad, CSE ’23</li>
        <li><span>From</span>${m(e.hometown)}</li>
      </ul>
    </div>
    <figure class="hero-photo load" style="--d:2">
      <svg class="orbit" viewBox="0 0 200 200" aria-hidden="true">
        <defs><path id="orbit-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"/></defs>
        <text><textPath href="#orbit-path" textLength="548" lengthAdjust="spacing">${m(`Technical Product Manager · Fintech · Banking · HR-tech · `)}</textPath></text>
      </svg>
      <div class="photo-frame"><img src="${e.photo}" alt="Portrait of ${m(e.name)}" width="800" height="800" /></div>
      <figcaption class="status-badge"><span class="pulse"></span>Open to TPM / PM roles</figcaption>
    </figure>
    <a class="scroll-cue" href="#/work" aria-label="Scroll to work"><span></span></a>
  </section>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">${[...c,...c].map(e=>`<span>${m(e)}</span><i>✦</i>`).join(``)}</div>
  </div>

  <section class="stats container">
    ${t.map((e,t)=>`
      <div class="stat" data-reveal style="--i:${t}">
        <p class="stat-value"><span data-count="${e.value}">0</span>${m(e.suffix)}</p>
        <p class="stat-label">${m(e.label)}</p>
      </div>`).join(``)}
  </section>

  <section class="section container" id="work">
    <header class="section-head" data-reveal>
      <p class="label">01 · Selected work</p>
      <h2>Five internal products I own <em>end to end</em> at ICICI Bank.</h2>
    </header>
    <ol class="work-list">
      ${n.map((e,t)=>`
        <li data-reveal style="--i:${t}">
          <a class="work-row" href="#/work/${e.id}" data-preview="${e.id}">
            <span class="work-index">${e.index}</span>
            <span class="work-main">
              <span class="work-kicker">${m(e.kicker)}</span>
              <span class="work-title">${m(e.title)}</span>
              <span class="work-sub">${m(e.subtitle)}</span>
            </span>
            <ul class="work-tags">${g(e.tags.slice(0,3))}</ul>
            <span class="work-go">${h}</span>
          </a>
        </li>`).join(``)}
    </ol>
  </section>

  <section class="section container" id="principles">
    <header class="section-head" data-reveal>
      <p class="label">02 · How I work</p>
      <h2>Part analyst, part PM, <em>fully accountable.</em></h2>
    </header>
    <div class="principles">
      ${r.map((e,t)=>`
        <article class="principle" data-reveal style="--i:${t%3}">
          <span class="principle-num">${String(t+1).padStart(2,`0`)}</span>
          <h3>${m(e.title)}</h3>
          <p>${m(e.text)}</p>
        </article>`).join(``)}
    </div>
  </section>

  <section class="section container" id="experience">
    <header class="section-head" data-reveal>
      <p class="label">03 · Experience</p>
      <h2>I built products before I <em>owned</em> them.</h2>
    </header>
    <div class="timeline">
      <div class="timeline-rail" aria-hidden="true"><span></span></div>
      ${i.map(e=>`
        <article class="job${e.current?` current`:``}" data-reveal>
          <div class="job-when"><span>${m(e.period)}</span><span>${m(e.place)}</span></div>
          <div class="job-body">
            <h3>${m(e.role)} <span>@ ${m(e.company)}</span></h3>
            ${e.summary?`<p class="job-summary">${m(e.summary)}</p>`:``}
            <ul>${e.points.map(e=>`<li>${m(e)}</li>`).join(``)}</ul>
          </div>
        </article>`).join(``)}
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
        <h3>${m(a.school)}</h3>
        <p class="muted">${m(a.degree)} · ${m(a.period)}</p>
        <ul class="plain">${a.beyond.map(e=>`<li>${m(e)}</li>`).join(``)}</ul>
      </div>
      <div class="about-card" data-reveal style="--i:1">
        <p class="card-label">Leadership on campus</p>
        <ul class="roles">${a.leadership.map(e=>`<li><strong>${m(e.title)}</strong><span>${m(e.note)}</span></li>`).join(``)}</ul>
      </div>
      <div class="about-card builds" data-reveal style="--i:2">
        <p class="card-label">Things I built</p>
        <ul class="build-list">${o.map(e=>e.url?`<li><a href="${e.url}" target="_blank" rel="noopener"><strong>${m(e.title)}</strong><span>${m(e.note)}</span>${h}</a></li>`:`<li><div><strong>${m(e.title)}</strong><span>${m(e.note)}</span></div></li>`).join(``)}</ul>
      </div>
      <div class="about-card skills" data-reveal style="--i:1">
        <p class="card-label">Toolkit</p>
        ${s.map(e=>`<div class="skill-group"><h4>${m(e.group)}</h4><ul class="chips">${g(e.items)}</ul></div>`).join(``)}
      </div>
      <div class="about-card off" data-reveal style="--i:2">
        <p class="card-label">Off the clock</p>
        <ul class="hobbies"><li>📷 Photography</li><li>🏏 Cricket</li><li>💃 Dance</li><li>⌨️ Coding</li></ul>
      </div>
    </div>
  </section>

  ${y()}`}function y(){return`
  <section class="contact" id="contact">
    <div class="container">
      <p class="label" data-reveal>05 · Contact</p>
      <h2 class="contact-title" data-reveal>Building in fintech, payments<br />or HR-tech? <em>Let’s talk.</em></h2>
      <p class="contact-sub" data-reveal>${m(e.openTo)}</p>
      <div class="contact-actions" data-reveal>
        <a class="mail-link magnetic" href="mailto:${e.email}">${m(e.email)}</a>
        <button class="copy-btn" type="button" data-copy="${e.email}">Copy</button>
      </div>
      <div class="contact-links" data-reveal>
        <a class="btn btn-light magnetic" href="${e.linkedin}" target="_blank" rel="noopener"><span>LinkedIn</span>${h}</a>
        <a class="btn btn-outline-light magnetic" href="mailto:${e.email}"><span>Send an email</span>${h}</a>
      </div>
    </div>
    <footer class="footer container">
      <span>© ${new Date().getFullYear()} ${m(e.name)}</span>
      <span>${m(e.location)}</span>
      <a href="#/">Back to top ↑</a>
    </footer>
  </section>`}function b(e){return`
  <div class="flow" style="--n:${e.length}" data-reveal>
    ${e.map((e,t)=>`
      <div class="flow-step" style="--i:${t}">
        <span class="flow-dot"></span>
        <span class="flow-name">${m(e)}</span>
      </div>`).join(`<span class="flow-link" aria-hidden="true"><i></i></span>`)}
  </div>`}function x(e){let t=n[(n.indexOf(e)+1)%n.length];return`
  <article class="case container">
    <a class="back load" style="--d:0" href="#/work">${h}<span>All products</span></a>
    <header class="case-head">
      <p class="label load" style="--d:1">${e.index} / 0${n.length} · ${m(e.kicker)}</p>
      <h1 class="case-title"><span class="line"><span class="line-inner" style="--i:0">${m(e.title)}</span></span></h1>
      <p class="case-sub load" style="--d:3">${m(e.subtitle)}</p>
      <ul class="chips load" style="--d:4">${g(e.meta)}</ul>
    </header>
    <p class="case-intro" data-reveal>${m(e.intro)}</p>
    <section class="case-flow">
      <p class="card-label" data-reveal>How it flows</p>
      ${b(e.flow)}
    </section>
    <div class="case-sections">
      ${e.sections.map((e,t)=>`
        <section class="case-block" data-reveal style="--i:${t}">
          <h2>${m(e.heading)}</h2>
          <ul>${e.items.map(e=>`<li>${m(e)}</li>`).join(``)}</ul>
        </section>`).join(``)}
    </div>
    <div class="case-tags" data-reveal>
      <p class="card-label">Stack & skills</p>
      <ul class="chips">${g(e.tags)}</ul>
    </div>
    <a class="next-case" href="#/work/${t.id}" data-reveal>
      <span class="label">Next product · ${t.index}</span>
      <span class="next-title">${m(t.title)} ${h}</span>
      <span class="next-sub">${m(t.subtitle)}</span>
    </a>
  </article>
  ${y()}`}var S=null;function C(){let e=location.hash.replace(/^#\/?/,``).split(`/`).filter(Boolean);if(e[0]===`work`&&e[1]){let t=n.find(t=>t.id===e[1]);if(t)return{view:t.id,product:t}}return{view:`home`,section:p.includes(e[0])?e[0]:null}}function w(e,t){let n=e&&document.getElementById(e),r=n?n.getBoundingClientRect().top+scrollY-72:0;scrollTo({top:r,behavior:t&&!d?`smooth`:`auto`})}async function T(){let t=C();if(t.view===S){w(t.section,!0);return}let n=S===null;!n&&!d&&(l.classList.add(`leaving`),await new Promise(e=>setTimeout(e,280))),S=t.view,l.innerHTML=t.product?x(t.product):v(),document.title=t.product?`${t.product.title} · ${e.name}`:`${e.name} · ${e.role}`,w(t.product?null:t.section,!1),l.classList.remove(`leaving`),requestAnimationFrame(()=>{l.classList.add(`ready`),D()}),n||l.focus({preventScroll:!0})}var E;function D(){E?.disconnect(),E=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(t.target.classList.add(`in`),t.target.querySelectorAll(`[data-count]`).forEach(O),E.unobserve(t.target))},{threshold:.15,rootMargin:`0px 0px -8% 0px`}),l.querySelectorAll(`[data-reveal]`).forEach(e=>E.observe(e)),l.querySelectorAll(`.magnetic`).forEach(k),l.querySelectorAll(`[data-copy]`).forEach(e=>e.addEventListener(`click`,()=>A(e))),M(),P()}function O(e){let t=Number(e.dataset.count);if(d){e.textContent=t;return}let n=performance.now(),r=i=>{let a=Math.min(1,(i-n)/1200);e.textContent=Math.round(t*(1-(1-a)**3)),a<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}function k(e){f&&!d&&(e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left-n.width/2)*.25,i=(t.clientY-n.top-n.height/2)*.35;e.style.transform=`translate(${r}px, ${i}px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``}))}async function A(e){try{await navigator.clipboard.writeText(e.dataset.copy),e.textContent=`Copied ✓`}catch{e.textContent=`Press Ctrl+C`}setTimeout(()=>{e.textContent=`Copy`},1800)}var j;function M(){if(!f||d)return;j??=Object.assign(document.body.appendChild(document.createElement(`div`)),{className:`preview`});let e=l.querySelectorAll(`[data-preview]`),t=0,r=0,i=0,a=0,o=0,s=()=>{t+=(i-t)*.18,r+=(a-r)*.18,j.style.transform=`translate(${t}px, ${r}px)`,o=Math.abs(i-t)+Math.abs(a-r)>.5?requestAnimationFrame(s):0};e.forEach(e=>{let c=n.find(t=>t.id===e.dataset.preview);e.addEventListener(`pointerenter`,e=>{innerWidth<900||(j.innerHTML=`<p>${c.index} · ${m(c.kicker)}</p><ol>${c.flow.map(e=>`<li>${m(e)}</li>`).join(``)}</ol>`,t=i=e.clientX+24,r=a=e.clientY+24,j.classList.add(`show`))}),e.addEventListener(`pointermove`,e=>{i=e.clientX+24,a=e.clientY+24,o||=requestAnimationFrame(s)}),e.addEventListener(`pointerleave`,()=>j.classList.remove(`show`))})}var N=0;function P(){let e=scrollY;j&&Math.abs(e-N)>2&&j.classList.remove(`show`);let t=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty(`--progress`,t>0?e/t:0),u.classList.toggle(`scrolled`,e>12),u.classList.toggle(`hidden`,e>320&&e>N+4),e<N-4&&u.classList.remove(`hidden`),N=e;let n=l.querySelector(`.timeline`);if(n){let e=n.getBoundingClientRect(),t=Math.min(1,Math.max(0,(innerHeight*.7-e.top)/e.height));n.style.setProperty(`--draw`,t)}let r=l.querySelector(`.hero-photo`);if(r&&!d&&r.style.setProperty(`--shift`,`${Math.min(e,600)*.08}px`),S===`home`){let e=null;for(let t of p){let n=document.getElementById(t);n&&n.getBoundingClientRect().top<innerHeight*.4&&(e=t)}u.querySelectorAll(`.nav-links a`).forEach(t=>t.classList.toggle(`active`,t.getAttribute(`href`)===`#/${e}`))}else u.querySelectorAll(`.nav-links a`).forEach(e=>e.classList.toggle(`active`,e.getAttribute(`href`)===`#/work`))}var F=!1;addEventListener(`scroll`,()=>{F||(F=!0,requestAnimationFrame(()=>{P(),F=!1}))},{passive:!0}),f&&!d&&addEventListener(`pointermove`,e=>{document.documentElement.style.setProperty(`--mx`,`${e.clientX}px`),document.documentElement.style.setProperty(`--my`,`${e.clientY}px`)},{passive:!0});var I=document.documentElement;try{let e=localStorage.getItem(`theme`);e&&(I.dataset.theme=e)}catch{}document.querySelector(`.theme-toggle`).addEventListener(`click`,()=>{let e=I.dataset.theme?I.dataset.theme===`dark`:matchMedia(`(prefers-color-scheme: dark)`).matches;I.dataset.theme=e?`light`:`dark`;try{localStorage.setItem(`theme`,I.dataset.theme)}catch{}}),document.addEventListener(`click`,e=>{let t=e.target.closest(`a[href^="#/"]`);t&&t.getAttribute(`href`)===location.hash&&(e.preventDefault(),T())}),addEventListener(`hashchange`,T),T();