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
    cycleWords: ["Create", "Improve", "Evolve", "Automate", "Innovate"],
    sub: "AI, software, automation, and systems, all under one roof. We don't just build products; we solve the entire problem across every layer.",
    cta: "Start a Project ♠",
    secondary: "See Our Work",
    scroll: "Explore",
  },

  services: {
    eyebrow: "What we do",
    line1: "Four disciplines.",
    line2: "One lab.",
    sub: "We hold every suit in the deck, so whatever challenge you're facing, we have the hand to solve it.",
    items: [
      {
        title: "Artificial Intelligence",
        tag: "Think. Decide. Learn.",
        desc: "AI models, computer vision systems, and decision engines that transform raw data into actionable intelligence. Built to reason, not just execute.",
      },
      {
        title: "Software Engineering",
        tag: "Build. Scale. Ship.",
        desc: "Full-stack platforms, APIs, and data pipelines that grow from prototype to production and stay reliable at scale.",
      },
      {
        title: "Automation",
        tag: "Work that runs itself.",
        desc: "Workflows, agents, and automation pipelines that remove manual work between intent and outcome. Fully automated and tailored to your operation.",
      },
      {
        title: "Systems Architecture",
        tag: "Connect everything.",
        desc: "Infrastructure and architecture that connect every component of the solution. The layer where the magic happens. Everything in one place.",
      },
    ],
  },

  work: {
    eyebrow: "Work in progress",
    line1: "Building now.",
    line2: "Shipping soon.",
    sub: "What hands is JokerLabs playing right now? We're solving high-impact real-world problems. One in fintech, another redefining AI-powered commerce.",
    liveBadge: "In development",
    items: [
      {
        industry: "Fintech · Cloud Platform",
        title: "Modern Currency Exchange Platform",
        desc: "A complete modernization of traditional foreign exchange operations. Replacing paper-based processes and manual workflows with a cloud-native platform accessible anywhere, anytime. Built with real-time compliance validation, centralized role management, and unified reporting.",
        stat: "In Progress",
        statLabel: "Automation Pipeline",
      },
      {
        industry: "Maverick · WildCart AI",
        title: "Intelligent Commerce Platform",
        desc: "An AI-powered commerce platform where merchants build and configure fully customized online stores through a conversational agent, no code required. Real-time personalization, product intelligence, and brand identity managed end-to-end by AI.",
        stat: "In Progress",
        statLabel: "AI-Powered Commerce",
      },
    ],
    cta: "Have a project in mind? Let's talk ♠",
  },

  why: {
    eyebrow: "Why JokerLabs",
    line1: "Built different.",
    line2: "On purpose.",
    sub: "We didn't design a lab that does everything; we designed one that solves everything. Here's why that matters.",
    items: [
      {
        title: "Tools, Not Templates",
        desc: "We don't reuse solutions built for someone else's challenge: every system is engineered around your real problem, with precision. And with a scope defined from day one, so it moves forward, not reopens without end.",
      },
      {
        title: "We Ship Before Your Coffee Cools",
        desc: "Days and weeks, not quarters. We prototype fast, iterate hard, and deliver working technology on time, without excuses.",
      },
      {
        title: "Cards on the Table. Always.",
        desc: "No smoke and mirrors. Full transparency from day one: no hidden costs, no surprise invoices, and no games.",
      },
      {
        title: "Every Bug Has a Predator",
        desc: "Complex technical challenges are our natural habitat. The harder the problem, the more we want it. That's how the lab works.",
      },
      {
        title: "Always in the Room",
        desc: "Direct lines, real updates, and zero middlemen filtering your voice. You speak directly with the people building your solution.",
      },
      {
        title: "Senior Minds. Zero Middlemen.",
        desc: "Direct access to the engineers building your solution. Mechatronics, Biomedical, Mechanical, Software, and AI specialists working together under one roof. No layers. No bureaucracy. Just builders.",
      },
    ],
  },

  compare: {
    eyebrow: "Stack us against anyone",
    line1: "The hand",
    line2: "speaks for itself.",
    recommended: "★ Recommended",
    cols: ["JokerLabs", "Hiring Employees", "Other Agencies"],
    rows: [
      { label: "Cost", jl: "Fair and transparent", hire: "$$$ (salary + benefits)", agency: "$$$ – $$$$ per project" },
      { label: "Expertise", jl: "Senior talent across 4 disciplines", hire: "Varies by hire", agency: "Varies" },
      { label: "Turnaround", jl: "Fast and reliable", hire: "Weeks plus onboarding", agency: "Often slower" },
      { label: "Flexibility", jl: "Scale whenever you need", hire: "Contracts required", agency: "Project-based only" },
      { label: "Approach", jl: "Multidisciplinary lab", hire: "Siloed specialists", agency: "Depends on the agency" },
      { label: "Client Focus", jl: "Engineering for any challenge, scoped upfront", hire: "Internal priorities", agency: "Multiple clients at once" },
      { label: "Support", jl: "Ongoing partnership", hire: "Internal capacity", agency: "Often ends after delivery" },
    ],
  },

  about: {
    eyebrow: "About us",
    line1: "We're the lab",
    line2: "that holds every suit.",
    lead: "JokerLabs is a creative technology laboratory founded by five engineers from three engineering disciplines: Mechatronics, Biomedical Engineering, and Mechanical Engineering, specializing in artificial intelligence, software engineering, automation, and systems architecture.",
    body1: "We're not a traditional agency or a siloed consulting firm. We're a multidisciplinary technology lab built to solve problems that live at the intersection of software, hardware, AI, automation, and operations. The kind of challenges that require every suit in the deck.",
    body2: "Based in Colombia and working globally. We bring Latin American innovation, engineering talent, and world-class execution to projects anywhere in the world.",
    statsTitle: "The lab, by the numbers.",
    stats: [
      { value: "4", label: "Core disciplines" },
      { value: "5", label: "Founding experts" },
      { value: "∞", label: "Problems solved" },
      { value: "1", label: "Unified lab" },
    ],
  },

  process: {
    eyebrow: "How we work",
    line1: "The lab's",
    line2: "five-step hand.",
    steps: [
      {
        title: "Scope",
        desc: "We map the real problem across every discipline before writing a single line of code.",
      },
      {
        title: "Design",
        desc: "One architecture that brings together AI, software, and infrastructure without friction.",
      },
      {
        title: "Build",
        desc: "Product-driven execution. We prototype fast, iterate hard, and ship working technology.",
      },
      {
        title: "Deploy",
        desc: "Implementation inside your operation: from model to machine, from dashboard to production line.",
      },
      {
        title: "Support",
        desc: "We stay. Monitoring, iteration, and a partner who knows every layer of what we built.",
      },
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
        answer: "JokerLabs is powered by five founders from three engineering backgrounds: Mechatronics, Biomedical Engineering, and Mechanical Engineering, with expertise spanning AI, software engineering, automation, and systems architecture. Every project receives direct involvement from the team building it. No outsourcing. No handoffs. No layers between you and the people creating your solution.",
      },
      {
        question: "Do you accept custom requirements?",
        answer: "Yes. Our engineering isn't limited to pre-built use cases: we can solve problems across any industry, constraint, or scale. Every project starts with a discovery call to map the real problem and define a clear scope from day one, and we work within that scope with discipline, without endless cycles of reopening what's already been agreed.",
      },
      {
        question: "What is your turnaround time?",
        answer: "It depends on scope, but we move fast. A focused MVP or automation workflow can be live in 1–3 weeks. Larger platforms typically take between 4 and 10 weeks. We define the scope carefully from the start and execute without surprises. Speed without cutting corners: that's the JokerLabs standard.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes. We consider support part of the job, not an add-on. We don't disappear after delivery. Every project includes a support phase: monitoring, iteration, and a direct line to the same team that built it. We stay as long as you need us.",
      },
      {
        question: "What's your pricing model?",
        answer: "We work with fixed-scope projects or retainer models depending on what fits your needs best. Pricing is always transparent and defined upfront: no surprise invoices, no mysterious hourly billing. You get a clear breakdown before any work begins. Fair pricing is one of our core commitments.",
      },
    ],
  },

  team: {
    eyebrow: "The lab",
    line1: "Five founders.",
    line2: "One mission.",
    sub: "Each founder brings a specialty. Together, we cover every angle of the problem, from the model to the machine.",
    roles: [
      "DevOps Engineer",
      "AI Engineer",
      "AI Engineer",
      "Frontend Engineer",
      "Fullstack Engineer"
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    line1: "Let's build",
    line2: "something big.",
    sub: "Have a project, a problem, or just an ambitious idea? Drop us a message. We read everything and respond fast.",
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
    tagline: "Creative technology laboratory. AI, software, automation, and systems under one roof. Every suit in the deck. One winning hand.",
    navigateLabel: "Navigate",
    contactLabel: "Contact",
    cta: "Start a Project ♠",
    taglineBottom: "Every suit in the deck. One winning hand.",
  },
};