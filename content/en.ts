import type { SiteContent } from "@/lib/locale-types";

export const en: SiteContent = {
  locale: "en",

  nav: {
    items: ["Home", "Services", "Work", "About", "FAQ", "Contact"],
    cta: "Let's Talk",
  },

  hero: {
    eyebrow: "Creative Technology Lab · Colombia",
    cyclePrefix: "We were born to",
    cycleWords: ["Create", "Improve", "Level-Up", "Automate", "Innovate"],
    sub: "AI, software, automation, and systems — under one roof. We don't just build products, we solve the whole problem, across every layer.",
    cta: "Start a project ♠",
    secondary: "See our work",
    scroll: "Scroll",
  },

  services: {
    eyebrow: "What we do",
    line1: "Four disciplines.",
    line2: "One lab.",
    sub: "We hold all four suits — so whatever your problem, we have the hand to solve it.",
    items: [
      {
        title: "AI & Intelligence",
        tag: "Think. Decide. Learn.",
        desc: "Models, vision systems, and decision engines that turn raw data into real-world judgment. Built to reason, not just to run.",
      },
      {
        title: "Software Engineering",
        tag: "Build. Scale. Ship.",
        desc: "Full-stack platforms, APIs and data pipelines that grow from prototype to production — and stay there reliably.",
      },
      {
        title: "Automation",
        tag: "Work that runs itself.",
        desc: "Workflows, agents and pipelines that eliminate every manual step between intent and outcome. Set it — and it actually works.",
      },
      {
        title: "Systems Architecture",
        tag: "Connect everything.",
        desc: "Infrastructure and architecture that ties AI, software and hardware into one unified operating whole — the layer that makes it all work.",
      },
    ],
  },

  work: {
    eyebrow: "Work in progress",
    line1: "Building now.",
    line2: "Shipping soon.",
    sub: "These are our active projects — real problems being solved right now, across fintech and AI-powered commerce.",
    liveBadge: "Live build",
    items: [
      {
        industry: "Fintech",
        title: "Currency Exchange Legacy Modernization",
        desc: "Full automation overhaul of a traditional currency exchange operation — replacing manual entry and paper-based processes with intelligent workflows, real-time compliance validation, and a unified reporting dashboard.",
        stat: "In progress",
        statLabel: "Automation pipeline",
      },
      {
        industry: "E-Commerce · AI",
        title: "Agentic Brand Configuration Platform",
        desc: "AI-powered seller platform where customers fully configure their own branded storefront through a conversational agent — no code required. Real-time personalization, product logic, and brand identity controlled end-to-end by the AI.",
        stat: "In progress",
        statLabel: "Our best AI project",
      },
    ],
    cta: "Have a project in mind? Let's talk ♠",
  },

  why: {
    eyebrow: "Why JokerLabs",
    line1: "Built different.",
    line2: "On purpose.",
    sub: "We didn't design a lab that does everything — we designed one that solves everything. Here's why that matters.",
    items: [
      {
        title: "Impact-Driven Solutions",
        desc: "Every product we build is custom-crafted to create real business impact. No templates, no shortcuts — only solutions that move the needle.",
      },
      {
        title: "Fast & Reliable Delivery",
        desc: "Get high-quality results in days or weeks, not months. We prototype fast, iterate hard, and ship working technology on schedule.",
      },
      {
        title: "Transparent & Fair Pricing",
        desc: "Honest, customized pricing with no hidden fees or surprises. A clear breakdown upfront — you always know what you're paying for.",
      },
      {
        title: "Expert Problem Solvers",
        desc: "We tackle the most complex technical and creative challenges with innovative solutions. No problem is too hard for the right lab.",
      },
      {
        title: "Seamless Collaboration",
        desc: "Clear communication and real feedback at every stage. You're always in the loop — never left wondering what's happening.",
      },
      {
        title: "Direct Access to Top Talent",
        desc: "Work directly with senior experts — no long-term hiring, no middlemen, no agency layers between you and the people building your product.",
      },
    ],
  },

  compare: {
    eyebrow: "What makes us different",
    line1: "Why work with us",
    line2: "vs. the alternatives?",
    recommended: "★ Recommended",
    cols: ["JokerLabs", "Hiring Employees", "Other Agencies"],
    rows: [
      { label: "Cost",         jl: "Fair, transparent",            hire: "$$$ (salary + benefits)",     agency: "$$$ – $$$$ project-based" },
      { label: "Expertise",    jl: "Senior talent, 4 disciplines",  hire: "Varies per hire",             agency: "Varies" },
      { label: "Turnaround",   jl: "Fast, reliable",               hire: "Weeks + onboarding",          agency: "Often slower" },
      { label: "Flexibility",  jl: "Scale up/down anytime",        hire: "Contracts required",          agency: "Project-based only" },
      { label: "Approach",     jl: "Cross-discipline lab",         hire: "Siloed specialists",          agency: "Agency styles vary" },
      { label: "Client Focus", jl: "Custom solutions only",        hire: "Internal priorities",         agency: "Multiple clients at once" },
      { label: "Support",      jl: "Ongoing partnership",          hire: "Internal capacity",           agency: "Often ends at delivery" },
    ],
  },

  about: {
    eyebrow: "About us",
    line1: "We're the lab",
    line2: "that holds every suit.",
    lead: "JokerLabs is a creative technology lab built by five founders with four specializations: AI, software engineering, automation, and systems architecture.",
    body1: "We're not a generalist agency or a siloed consulting firm. We're a cross-discipline lab — designed to tackle the kind of problems that sit at the intersection of technology, process, and infrastructure. Problems that require all four suits to solve correctly.",
    body2: "Based in Colombia — working globally. We bring Latin American talent and innovation to projects anywhere in the world, with the quality and discipline of any top-tier lab.",
    stats: [
      { value: "4",  label: "Core disciplines" },
      { value: "5",  label: "Founding experts" },
      { value: "∞",  label: "Problems solved" },
      { value: "1",  label: "Unified lab" },
    ],
  },

  process: {
    eyebrow: "How we work",
    line1: "The lab's",
    line2: "five-step hand.",
    steps: [
      { title: "Scope",   desc: "We map the real problem across disciplines before writing a single line of code." },
      { title: "Design",  desc: "One architecture spanning AI, software and infrastructure — no seams." },
      { title: "Build",   desc: "Builder-first execution. We prototype fast, iterate hard and ship working technology." },
      { title: "Deploy",  desc: "Into your operation — from model to machine, from dashboard to production line." },
      { title: "Support", desc: "We stay. Monitoring, iteration and a partner who knows every layer of what we built." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    line1: "Got questions?",
    line2: "We've got answers.",
    selectLabel: "Select a question",
    chatHeader: "JokerLabs · Support",
    chatStatus: "Online",
    chatEmpty: "Select a question to start the conversation ♠",
    items: [
      {
        question: "Who's behind JokerLabs?",
        answer: "JokerLabs is powered by five founders across four disciplines — AI, software engineering, automation, and systems architecture. We're a cross-discipline creative technology lab based in Colombia, working globally. Every project gets the full lab behind it. No subcontractors, no offshore handoffs.",
      },
      {
        question: "Do you accept custom requirements?",
        answer: "Absolutely — custom is our default. We don't believe in cookie-cutter solutions. Every engagement starts with a deep discovery call to map your real problem, then we architect the solution from scratch. Any industry, any constraint, any scale.",
      },
      {
        question: "What is your turnaround time?",
        answer: "It depends on scope, but we move fast. A focused MVP or automation workflow can be live in 1–3 weeks. Larger platforms typically take 4–10 weeks. We scope carefully upfront, then execute with zero surprises. Speed without cutting corners — that's the JokerLabs standard.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes — we consider support part of the job, not an add-on. We don't drop off at delivery. Every project includes a support phase: monitoring, iteration, and a direct line to the same team that built it. We stay as long as you need us.",
      },
      {
        question: "Can you handle branding & design too?",
        answer: "Yes. Design is one of our four core disciplines. We handle everything from brand identity and design systems to product UI/UX and motion design. You get a coherent experience end-to-end — not a patchwork of different vendors with different aesthetics.",
      },
      {
        question: "What's your pricing model?",
        answer: "We work on fixed-scope or retainer models depending on what fits best. Pricing is always transparent and defined upfront — no surprise invoices, no hourly mystery billing. You get a clear breakdown before any work begins. Fair pricing is one of our core commitments.",
      },
    ],
  },

  team: {
    eyebrow: "The lab",
    line1: "Five founders.",
    line2: "One mission.",
    sub: "Each founder covers a discipline. Together we cover every angle of your problem — from the model to the machine.",
    roles: ["DevOps Engineer", "AI Engineer", "AI Engineer", "Frontend Engineer", "Fullstack Engineer"],
  },

  contact: {
    eyebrow: "Get in touch",
    line1: "Let's build",
    line2: "something great.",
    sub: "Have a project, a problem, or just a wild idea? Drop us a message. We read everything and respond fast.",
    nameLabel: "Your name",
    emailLabel: "Email address",
    messageLabel: "Tell us about your project",
    messagePlaceholder: "What are you building? What's the problem you need to solve?",
    submitLabel: "Send message",
    sendingLabel: "Sending…",
    responseTime: "Typical response time: under 24 hours. We take every inquiry seriously, regardless of project size.",
    successTitle: "Message sent ♠",
    successMsg: "Thanks! We'll be in touch soon.",
  },

  footer: {
    tagline: "Creative technology lab. AI, software, automation, and systems under one roof. Every suit. One hand.",
    navigateLabel: "Navigate",
    contactLabel: "Contact",
    cta: "Start a project ♠",
    taglineBottom: "Every suit. One hand.",
  },
};
