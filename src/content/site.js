// All the content of the home page. To change the portfolio, change this file, not the layout.
// A bullet is an array of parts. A part is a string, or { text, href } for a link.

export const profile = {
  name: "David Lazaro Fernandez",
  role: "Software Engineer",
  intro:
    "Software engineer from Mexico working on billing and monetization at Airtable. Before that I built workflow tooling, logistics simulations, and monitoring pipelines, and I still love hackathons and the communities around them.",
};

export const links = [
  { label: "My work", href: "https://github.com/David-Lazaro-Fernandez", icon: "arrow" },
  { label: "Notes", href: "/notes", icon: "pencil" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1f5gnOn8otiV9V8YHUP_Fw38hoSPl-Dbb/view?usp=sharing",
    icon: "arrow",
  },
];

export const experience = [
  {
    company: "Airtable",
    role: "Software Engineer, Billing & Monetization",
    period: "2025 – Present",
    summary:
      "Building the billing systems behind Airtable's subscriptions, from checkout and payments to taxes, credits, and plan changes.",
    bullets: [
      ["Internationalized the billing tax system across 20+ countries, letting business customers deduct VAT and correctly processing $13M+ in VAT"],
      ["Launched a redesigned checkout for all customers with new Stripe payment methods (Google Pay, Apple Pay, Cash App) and an add-on purchase flow, driving a 7–12% increase in new paid subscriptions"],
      ["Overhauled the company-wide credit expiration system, expiring $15M+ in stale credits and replacing manual cleanup with continuous expiration, Datadog monitoring, and automated reporting"],
      ["Redesigned the team's plan-validation pattern to close a vulnerability that let free-tier users downgrade paying customers, protecting $2M+ in ARR"],
      ["Shipped in-app banners that alert customers to failing payments, recovering $800K+ a month in churning revenue"],
      ["Built Doggo, an AI agent adopted by 4 teams that finds patterns in Datadog alerts and writes reports on them"],
      ["Co-developed Cloud Dev Environments, letting 30+ developers run agents together with shared system prompts, configs, and skills"],
    ],
  },
  {
    company: "Blend",
    role: "Workflow Engineer",
    period: "2024 – 2025",
    summary: "Ran tests and rollouts for mortgage clients' workflows alongside six program managers.",
    bullets: [
      ["Built parallel processing flows for Compeer Ag Lending, cutting W2 and tax return upload times by 44%"],
      ["Engineered a sandboxing platform for integration node versioning with Next.js and Redis, so workflow teams could run parallel tests in simulated dev environments"],
      ["Led on-call investigations into cross-system mortgage pipeline issues using Datadog and Observe"],
      ["Kept 94% on-time delivery on milestones by managing project schedules in Jira"],
    ],
  },
  {
    company: "AspenTech",
    role: "SDE I",
    period: "2023 – 2024",
    summary: "Worked on logistics and crew-management tools, from requirements calls with stakeholders to shipping.",
    bullets: [
      ["Built a vehicle logistics simulation tool on our maps, cutting client demo time for Solution Engineers by 61%"],
      ["Migrated Angular data grids to DevExtreme, reducing crew data load times from 2.2s to 0.4s"],
      ["Optimized data generation scripts for the crew simulator, improving database stress tests and map performance by 35%"],
      ["Fixed critical security vulnerabilities in a Java API by refining endpoints and adding middleware"],
    ],
  },
  {
    company: "Major League Hacking",
    role: "Coach",
    period: "2023 – 2024",
    summary: "Coached hackers through their projects as a part-time mentor.",
    bullets: [],
  },
  {
    company: "CIMAT",
    role: "Research Intern",
    period: "2023",
    summary: "Researched near-real-time anxiety detection for VR users.",
    bullets: [
      ["Fine-tuned a Vision Transformer on heart-rate spectrograms, improving F1 score by 15% over the baseline"],
      ["Designed the experimental framework for collecting heart rate and HRV data across 89+ sessions"],
    ],
  },
  {
    company: "NU Bank",
    role: "Intern",
    period: "2022 – 2023",
    summary: "",
    bullets: [
      ["Wrote an extensive Cypress test suite, reducing defect rates by 35%"],
      ["Worked with QA to assess API performance and availability, reducing production errors by 45%"],
    ],
  },
  {
    company: "Meta",
    role: "Production Engineer Fellow",
    period: "2022",
    summary: "One of 100 students selected for the Production Engineering Fellowship by MLH and Meta.",
    bullets: [
      ["Set up cAdvisor, Prometheus, and Grafana monitoring, reducing workflow errors and warnings by 15%"],
      ["Automated branch tests and deployment with GitHub Actions, improving the internal development workflow by 33%"],
    ],
  },
  {
    company: "Hackademy",
    role: "Front-End Developer Intern",
    period: "2021",
    summary: "Built an open-source social network with a remote team of six Latin American developers.",
    bullets: [["Designed the UI and built the front end and core components with Next.js"]],
  },
];

// TODO: Add the role and the period.
export const consultancy = {
  name: "M.L Cats Consultancy",
  role: "",
  period: "",
  summary: "",
  bullets: [
    [
      "Designed and planned ",
      { text: "Pescapp", href: "/work/pescapp" },
      ", an offline-first trip tracker for fishermen, from the client proposal to a Flutter app and a Streamlit dashboard",
    ],
    [
      "Redesigned ",
      { text: "Sis Devices", href: "/work/sisdevices" },
      ", turning an industrial safety supplier's brochure site into a bilingual online store with an admin dashboard",
    ],
    [
      "Designed the ticketing flow and built the internal dashboard for ",
      { text: "Astral Tickets", href: "/work/astral-tickets" },
      ", with generated seat maps and printed tickets",
    ],
  ],
};

export const awards = [
  { title: "1st Place, Qualcomm Hacks Mexico", year: "2025" },
  { title: "1st Place, Hack MTY Gen AI Challenge (200 teams)", year: "2024" },
  { title: "Top 10, Hack MTY (100 teams)", year: "2024" },
  { title: "3rd Place, Hack Mexico (60 teams)", year: "2024" },
  { title: "1st Place, Accenture Ideathon", year: "2022" },
  { title: "3rd Place, Talent Land Hackathon (50 teams)", year: "2021" },
];

export const communities = [
  {
    name: "Bisontech",
    summary: "Founded one of the most important technology communities at my university.",
  },
  { name: "GitHub Campus Experts", summary: "" },
  { name: "Microsoft Learn Student Ambassadors", summary: "" },
];

export const education = {
  school: "Universidad Autónoma de Nuevo León",
  degree: "B.S. in Computer Science",
  period: "2023",
};

export const projects = [
  {
    name: "Matiné",
    href: "/work/matine",
    summary:
      "Competitive intelligence for movie theaters in Mexico. It captures the showtimes, prices, and seat maps of the two largest chains nationwide three times a day, and powers a dashboard, a public API, and a group outing recommender.",
  },
  {
    name: "Audio Visualizer",
    href: "/work/audio-visualizer",
    summary:
      "The Xbox 360 blade dashboard rebuilt in the browser, with a music player that analyzes real audio and eleven WebGL visualizers, including ports of Geiss and MilkDrop.",
  },
  {
    name: "Astral Tickets",
    href: "/work/astral-tickets",
    summary:
      "A ticketing platform for live events: a site for finding events and choosing seats, and a dashboard with seat maps generated from venue data and ticket printing for the box office.",
  },
  {
    name: "Sis Devices",
    href: "/work/sisdevices",
    summary:
      "A redesign of an industrial safety supplier's website into an online store, with a catalog, technical product pages, cart, checkout, and an admin dashboard. Built with Next.js and Firebase.",
  },
  {
    name: "Pescapp",
    href: "/work/pescapp",
    summary:
      "Real-time location tracking for fishermen. A Flutter app records each trip offline and syncs it to Firebase when there's coverage, and a Streamlit dashboard draws every route on a map.",
  },
  {
    name: "omegaUp",
    href: "https://www.omegaup.org/",
    summary:
      "Landing page designed in Figma and built in HTML and CSS for omegaUp, a nonprofit empowering the next generation of Latin American software engineers.",
  },
  {
    name: "Accessible Companion",
    href: "https://github.com/OscarSantos98/SIL_Project",
    summary:
      "A geolocation tool that helps make public places more accessible to people with visual disabilities. Built with Azure and Power Apps.",
  },
  {
    name: "Chikoo",
    href: "https://github.com/OscarSantos98/Medical-preconsultation",
    summary:
      "A chatbot that helps patients without internet access fill out their medical history before a consultation. Built with Azure and Twilio.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/David-Lazaro-Fernandez" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidlfr" },
  { label: "X", href: "https://twitter.com/DavidLazaroFern" },
];
