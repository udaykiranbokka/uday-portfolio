// All site content lives here. Every claim comes from Uday's own notes; no metrics are made up.

export const PROFILE = {
  name: 'Uday Kiran Bokka',
  first: 'Uday',
  role: 'Technical Product Manager',
  company: 'ICICI Bank',
  location: 'Mumbai, Maharashtra',
  hometown: 'Hyderabad, Telangana',
  email: 'udaykiranbokka00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bokka-uday-kiran-a8082a250/',
  photo: 'uday.jpg',
  // Words wrapped in *asterisks* render in the accent serif.
  headline: ['I build the systems', '*a bank runs on,*', 'end to end.'],
  summary:
    'Technical Product Manager at ICICI Bank: part business analyst, part product manager, fully accountable. I own internal banking platforms end to end, from requirements and feasibility to delivery and everything after launch.',
  openTo: 'Open to TPM / PM roles in Fintech, Payments, Banking and HR-tech.',
  industries: ['Fintech', 'Payments', 'Banking', 'HR-tech'],
};

export const STATS = [
  { value: 5, suffix: '', label: 'internal banking products owned' },
  { value: 2, suffix: '+', label: 'years as TPM at ICICI Bank' },
  { value: 3, suffix: '', label: 'engineering roles before product' },
  { value: 4, suffix: '', label: 'stakeholder groups: business, HR, compliance, ops' },
];

// Each product gets a case-study route: #/work/<id>
export const PRODUCTS = [
  {
    id: 'reports-dashboard',
    index: '01',
    title: 'Corporates & Reports Dashboard',
    kicker: 'Analytics · HR',
    subtitle: 'Power BI dashboards HR runs on every day.',
    meta: ['Power BI', 'Microservice APIs', 'Alerting'],
    intro:
      'HR teams use this dashboard daily for monitoring and analytics. The hard part isn’t the charts, it’s the data: several teams own it, behind several services.',
    flow: ['Team APIs', 'Combine & model', 'Power BI', 'Scheduled refresh', 'Email + Teams alerts'],
    sections: [
      { heading: 'How it works', items: [
        'Different teams expose API endpoints that give us a copy of their data',
        'We combine, link and structure that data into one model, then build the dashboards on top',
        'Dashboard refresh time brought down to a minimum',
      ] },
      { heading: 'My role', items: [
        'New requirement → check the data → gather needs → talk to devs → check feasibility → ship',
        'Scheduled refreshes with alerting: any failure fires Email and MS Teams notifications through configured notification services',
        'Continuous monitoring for errors and data issues',
      ] },
    ],
    tags: ['Power BI', 'Data Modelling', 'API Integration', 'Alerting', 'Monitoring'],
  },
  {
    id: 'e-circulars',
    index: '02',
    title: 'E-Circulars',
    kicker: 'Regulatory · Bank-wide',
    subtitle: 'One bank-wide portal for every circular.',
    meta: ['3 modules', 'Legacy .NET + Web APIs', 'RBI compliance'],
    intro:
      'Teams across the bank publish their circulars on this portal, and anyone can find and read any circular in one place.',
    flow: ['Teams publish', 'Compliance & RBI checks', 'One portal', 'Scheduled notifications', 'Right reader'],
    sections: [
      { heading: 'What I own', items: [
        'Three modules used by publishing teams across the bank',
        'Compliance management, including RBI requirements and notices',
        'Scheduled notifications so the right people see the right circular',
        'Live issue resolution, monitoring and new requirements end to end',
      ] },
    ],
    tags: ['.NET', 'Web APIs', 'Compliance', 'Notifications', 'Prod Support'],
  },
  {
    id: 'branch-network',
    index: '03',
    title: 'Branch Network',
    kicker: 'Master data · APIs',
    subtitle: 'Every minute detail of every branch, end to end, in one app.',
    meta: ['Master data', 'Own APIs', 'Many consuming systems', 'Dashboard'],
    intro:
      'One app that holds every minute detail of every ICICI branch, end to end: start dates, employee details, ATMs, location, management and more. Many systems across the bank use this data through Branch Network’s own APIs.',
    flow: ['Business requirement', 'Branch master data', 'Branch Network APIs', 'Many systems consume', 'Network dashboard'],
    sections: [
      { heading: 'Why it matters', items: [
        'The complete, end-to-end record of the branch network in a single app',
        'Branch Network has its own APIs, and many systems across the bank consume them for their own needs: they all run on our branch data',
        'We keep those APIs updated and refreshed so every consuming system sees current data',
        'A dashboard on top for a visual view of the network',
      ] },
      { heading: 'My role', items: [
        'Connect with the business on every new requirement and take it through to delivery',
        'Requirement gathering and change management for the teams that consume the APIs',
      ] },
    ],
    tags: ['REST APIs', 'Master Data', 'MS SQL', 'Dashboards', 'Change Management'],
  },
  {
    id: 'compliance-certificates',
    index: '04',
    title: 'Compliance Certificates',
    kicker: 'Audit · Workflow',
    subtitle: 'Monthly branch compliance with multi-level review.',
    meta: ['Monthly cycle', 'Quarterly tracking', 'COMP1 → COMP4'],
    intro:
      'In the first two to three working days of every month, branch managers and deputy managers submit a compliance questionnaire: is the branch following every rule? It’s effectively a continuous audit.',
    flow: ['Branch submits', 'COMP1', 'COMP2', 'COMP3', 'COMP4', 'Regional Head', 'Zonal Head'],
    sections: [
      { heading: 'The workflow', items: [
        'Questionnaire submission by branch and deputy managers',
        'Deviations are tracked and escalated through review levels, up to the Regional Head and then the Zonal Head',
        'Quarterly tracking with a full history of submissions and deviations',
      ] },
    ],
    tags: ['Audit Trails', 'Workflows', 'Escalations', 'Governance'],
  },
  {
    id: 'hr4u',
    index: '05',
    title: 'HR4U',
    kicker: 'Employee self-service',
    subtitle: 'The internal HR self-service portal for ICICI Bank employees.',
    meta: ['Internal portal', 'Employee self-service', 'Secure & centralized'],
    intro:
      'HR4U is an internal HR self-service portal used by ICICI Bank employees to access a wide range of HR-related services and information through a single platform.',
    flow: ['Employee signs in', 'One HR portal', 'Policies & salary slips', 'Form 16 & tax documents', 'PF & financial details'],
    sections: [
      { heading: 'What employees can do', items: [
        'Access and manage their HR policies',
        'Download salary slips and Form 16',
        'View Provident Fund (PF) details and tax-related documents',
        'Use other financial and employee self-service functions',
      ] },
      { heading: 'Why it matters', items: [
        'Simplifies HR processes on one platform',
        'Gives employees easy, secure and centralized access to important employment and financial information',
        'Reduces dependency on manual HR support and improves the overall employee experience',
      ] },
    ],
    tags: ['Employee Self-Service', 'HR Policies', 'Payroll Documents', 'Security', 'Employee Experience'],
  },
];

export const PRINCIPLES = [
  { title: 'Requirements, shaped', text: 'Requirement gathering with business, HR, compliance and ops stakeholders, turned into something developers can build.' },
  { title: 'Feasibility first', text: 'Nothing is committed until it has been checked with the developers who will build it.' },
  { title: 'Deadlines that hold', text: 'Daily scrum calls, sprint cadence, strict deadline management and clear progress updates to stakeholders.' },
  { title: 'Owned in production', text: 'Live issue resolution, monitoring and continuous upgrades of legacy .NET systems long after launch.' },
  { title: 'Retros that change things', text: 'Retrospectives that lead to real changes, plus team activities that keep morale high.' },
  { title: 'Engineer’s fluency', text: 'A CS degree and three developer roles mean I can read an API contract, estimate honestly and go deep when it matters.' },
];

export const EXPERIENCE = [
  {
    company: 'ICICI Bank',
    role: 'Technical Product Manager',
    period: 'Jun 2024 – Present',
    place: 'Mumbai',
    current: true,
    summary:
      'A hybrid of business analyst and product manager with full ownership of internal banking platforms. I gather and shape requirements, check feasibility, set timelines, get delivery done through the dev team and own what happens in production afterwards.',
    points: [
      'Own five internal products: Corporates & Reports Dashboard, E-Circulars, Branch Network, Compliance Certificates and HR4U',
      'Run Agile delivery: scrum calls, sprints, deadlines, retros',
      'Use AI tools (Claude, ChatGPT) to speed up analysis, documentation and prototyping',
    ],
  },
  {
    company: 'Jarvis Technology & Strategy Consulting',
    role: 'Software Developer',
    period: 'Jun – Jul 2023',
    place: 'New Delhi (NCR)',
    points: [
      'Built interactive front-end components in React, HTML, CSS and JavaScript',
      'Back-end work in Ruby on Rails with PostgreSQL for data storage and retrieval',
    ],
  },
  {
    company: 'Gupshup',
    role: 'Software Developer Intern',
    period: 'May – Nov 2022',
    place: 'Mumbai',
    points: [
      'Journey Builder (chatbot journey platform): worked on string localization',
      'Tested Journey Builder components with React Testing Library',
      'WhatsApp Scheduler: an API that schedules WhatsApp messages for a set time via the WhatsApp Business API (Spring Boot, MySQL, JUnit)',
    ],
  },
  {
    company: 'Verzeo',
    role: 'Software Developer Intern',
    period: 'May – Jun 2021',
    place: 'Bengaluru',
    points: ['Completed minor and major projects under mentor guidance, with a focus on web performance and scalability'],
  },
];

export const EDUCATION = {
  school: 'Indian Institute of Technology Dharwad',
  degree: 'B.Tech, Computer Science & Engineering',
  period: '2019 – 2023',
  place: 'Dharwad, Karnataka',
  leadership: [
    { title: 'Hostel Secretary', note: '2nd year · represented residents and ran hostel affairs' },
    { title: 'Secretary, Photography & Films Club', note: '2021–22 · ran competitions; lead photographer for PARSEC, the tech fest' },
    { title: 'PR Coordinator, Career Development Cell', note: 'Nov 2020 – May 2021 · brought in new recruiters for internships and placements' },
    { title: 'SMP Student Mentor', note: 'Guided and mentored freshers' },
  ],
  beyond: [
    'Group Dance at the Inter IIT Cultural Meet 5.0, IIT Madras (2023)',
    'Core member of the Dance Club and the Cricket Club',
    'Certifications: Problem Solving, SQL, Python, Web Development Bootcamp',
  ],
};

export const BUILDS = [
  { title: 'MERN Todo App', note: 'MongoDB, Express, React, Node', url: 'https://awesometodouday-app.onrender.com/' },
  { title: 'Geolocation Weather App', note: 'Weather for wherever you are', url: 'https://geolocation-weather-app.vercel.app/' },
  { title: 'WhatsApp Scheduler', note: 'Spring Boot, MySQL, JUnit · built at Gupshup', url: null },
];

export const SKILLS = [
  { group: 'Product', items: ['Product Ownership', 'Requirement Gathering', 'Stakeholder Management', 'Feasibility Analysis', 'Roadmaps & Timelines', 'Change Management', 'Prod Support'] },
  { group: 'Delivery', items: ['Agile', 'Scrum', 'Sprint Planning', 'Retrospectives', 'Progress Reporting'] },
  { group: 'Data & Platforms', items: ['Power BI', 'Data Modelling', 'MS SQL Server', 'REST / Web APIs', '.NET', '.NET Core', 'Alerting & Monitoring'] },
  { group: 'Engineering roots', items: ['DSA', 'Python', 'JavaScript', 'SQL', 'React', 'Node.js', 'Spring Boot', 'Ruby on Rails', 'PostgreSQL', 'MongoDB'] },
  { group: 'AI tools', items: ['Claude', 'ChatGPT'] },
];

export const DOMAINS = ['Banking', 'Payments', 'Compliance', 'HR-tech', 'Payroll', 'Power BI', 'APIs', 'Agile', 'Fintech', 'Master Data'];
