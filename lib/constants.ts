import { Home, Grid2x2, Briefcase, Info, MessageCircle, Mail } from "lucide-react";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { name: "Home",     href: "#home",     icon: Home },
  { name: "Services", href: "#services", icon: Grid2x2 },
  { name: "Work",     href: "#work",     icon: Briefcase },
  { name: "About",    href: "#why",      icon: Info },
  { name: "FAQ",      href: "#faq",      icon: MessageCircle },
  { name: "Contact",  href: "#contact",  icon: Mail },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    suit: "♠",
    id: "AI",
    color: "sapphire" as const,
    title: "AI & Intelligence",
    tag: "Think. Decide. Learn.",
    desc: "Models, vision systems, and decision engines that turn raw data into real-world judgment. Built to reason, not just to run.",
  },
  {
    suit: "♦",
    id: "Software",
    color: "teal" as const,
    title: "Software Engineering",
    tag: "Build. Scale. Ship.",
    desc: "Full-stack platforms, APIs and data pipelines that grow from prototype to production — and stay there reliably.",
  },
  {
    suit: "♣",
    id: "Automation",
    color: "sapphire" as const,
    title: "Automation",
    tag: "Work that runs itself.",
    desc: "Workflows, agents and pipelines that eliminate every manual step between intent and outcome. Set it — and it actually works.",
  },
  {
    suit: "♥",
    id: "Systems",
    color: "teal" as const,
    title: "Systems Architecture",
    tag: "Connect everything.",
    desc: "Infrastructure and architecture that ties AI, software and hardware into one unified operating whole — the layer that makes it all work.",
  },
] as const;

// ─── Work / Case Studies ──────────────────────────────────────────────────────
export const WORK_ITEMS = [
  {
    tags: ["♣ Automation", "♦ Software"],
    industry: "Fintech",
    title: "Currency Exchange Legacy Modernization",
    desc: "Full automation overhaul of a traditional currency exchange operation — replacing manual entry and paper-based processes with intelligent workflows, real-time compliance validation, and a unified reporting dashboard.",
    stat: "In progress",
    statLabel: "Automation pipeline",
    inProgress: true,
  },
  {
    tags: ["♠ AI", "♦ Software"],
    industry: "E-Commerce · AI",
    title: "Agentic Brand Configuration Platform",
    desc: "AI-powered seller platform where customers fully configure their own branded storefront through a conversational agent — no code required. Real-time personalization, product logic, and brand identity controlled end-to-end by the AI.",
    stat: "In progress",
    statLabel: "Our best AI project",
    inProgress: true,
  },
] as const;

// ─── Why JokerLabs ────────────────────────────────────────────────────────────
export const WHY_ITEMS = [
  {
    color: "blue" as const,
    icon: "Target" as const,
    title: "Impact-Driven Solutions",
    desc: "Every product we build is custom-crafted to create real business impact. No templates, no shortcuts — only solutions that move the needle.",
  },
  {
    color: "teal" as const,
    icon: "Zap" as const,
    title: "Fast & Reliable Delivery",
    desc: "Get high-quality results in days or weeks, not months. We prototype fast, iterate hard, and ship working technology on schedule.",
  },
  {
    color: "blue" as const,
    icon: "DollarSign" as const,
    title: "Transparent & Fair Pricing",
    desc: "Honest, customized pricing with no hidden fees or surprises. A clear breakdown upfront — you always know what you're paying for.",
  },
  {
    color: "teal" as const,
    icon: "Lightbulb" as const,
    title: "Expert Problem Solvers",
    desc: "We tackle the most complex technical and creative challenges with innovative solutions. No problem is too hard for the right lab.",
  },
  {
    color: "blue" as const,
    icon: "Users" as const,
    title: "Seamless Collaboration",
    desc: "Clear communication and real feedback at every stage. You're always in the loop — never left wondering what's happening.",
  },
  {
    color: "teal" as const,
    icon: "Star" as const,
    title: "Direct Access to Top Talent",
    desc: "Work directly with senior experts — no long-term hiring, no middlemen, no agency layers between you and the people building your product.",
  },
] as const;

// ─── Comparison Table ─────────────────────────────────────────────────────────
export const COMPARE_ROWS: Array<{
  label: string;
  jl: string;
  hire: string;
  agency: string;
  hireGood?: boolean;
}> = [
  { label: "Cost",        jl: "Fair, transparent",          hire: "$$$ (salary + benefits)",     agency: "$$$ – $$$$ project-based" },
  { label: "Expertise",   jl: "Senior talent, 4 disciplines", hire: "Varies per hire",            agency: "Varies" },
  { label: "Turnaround",  jl: "Fast, reliable",             hire: "Weeks + onboarding",          agency: "Often slower" },
  { label: "Flexibility", jl: "Scale up/down anytime",      hire: "Contracts required",          agency: "Project-based only" },
  { label: "Approach",    jl: "Cross-discipline lab",       hire: "Siloed specialists",          agency: "Agency styles vary" },
  { label: "Client Focus",jl: "Custom solutions only",      hire: "Internal priorities",         agency: "Multiple clients at once" },
  { label: "Support",     jl: "Ongoing partnership",        hire: "Internal capacity",           agency: "Often ends at delivery", hireGood: true },
];

// ─── Process Pipeline ─────────────────────────────────────────────────────────
export const PROCESS_STEPS: Array<{
  num: string;
  title: string;
  desc: string;
  highlight?: boolean;
}> = [
  { num: "01", title: "Scope",   desc: "We map the real problem across disciplines before writing a single line of code." },
  { num: "02", title: "Design",  desc: "One architecture spanning AI, software and infrastructure — no seams." },
  { num: "03", title: "Build",   desc: "Builder-first execution. We prototype fast, iterate hard and ship working technology.", highlight: true },
  { num: "04", title: "Deploy",  desc: "Into your operation — from model to machine, from dashboard to production line." },
  { num: "05", title: "Support", desc: "We stay. Monitoring, iteration and a partner who knows every layer of what we built." },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM = [
  { initials: "JC", name: "Joker Camilo",     role: "DevOps Engineer",        suit: "♠" },
  { initials: "JC", name: "Joker Cisthian",   role: "AI Engineer",      suit: "♦" },
  { initials: "JJ", name: "Joker Jhonas", role: "AI Engineer",    suit: "♣" },
  { initials: "JJ", name: "Joker Julian",  role: "Frontend Engineer",  suit: "♥" },
  { initials: "JA", name: "Joker Jose Avenia",  role: "Fullstack Engineer",   suit: "★" },
] as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "Who's behind JokerLabs?",
    answer:
      "JokerLabs is powered by five founders across four disciplines — AI, software engineering, automation, and systems architecture. We're a cross-discipline creative technology lab based in Colombia, working globally. Every project gets the full lab behind it. No subcontractors, no offshore handoffs.",
  },
  {
    question: "Do you accept custom requirements?",
    answer:
      "Absolutely — custom is our default. We don't believe in cookie-cutter solutions. Every engagement starts with a deep discovery call to map your real problem, then we architect the solution from scratch. Any industry, any constraint, any scale.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "It depends on scope, but we move fast. A focused MVP or automation workflow can be live in 1–3 weeks. Larger platforms typically take 4–10 weeks. We scope carefully upfront, then execute with zero surprises. Speed without cutting corners — that's the JokerLabs standard.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes — we consider support part of the job, not an add-on. We don't drop off at delivery. Every project includes a support phase: monitoring, iteration, and a direct line to the same team that built it. We stay as long as you need us.",
  },
  {
    question: "Can you handle branding & design too?",
    answer:
      "Yes. Design is one of our four core disciplines. We handle everything from brand identity and design systems to product UI/UX and motion design. You get a coherent experience end-to-end — not a patchwork of different vendors with different aesthetics.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We work on fixed-scope or retainer models depending on what fits best. Pricing is always transparent and defined upfront — no surprise invoices, no hourly mystery billing. You get a clear breakdown before any work begins. Fair pricing is one of our core commitments.",
  },
] as const;

// ─── Marquee items ────────────────────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  { text: "AI", suit: "♠" },
  { text: "Software", suit: "♦" },
  { text: "Automation", suit: "♣" },
  { text: "Systems", suit: "♥" },
];

export const MARQUEE_ITEMS_2 = [
  { text: "Every suit", suit: "♠" },
  { text: "One hand", suit: "♦" },
  { text: "Any problem", suit: "♣" },
  { text: "Every solution", suit: "♥" },
];

// ─── Site config ──────────────────────────────────────────────────────────────
export const SITE = {
  email: "jokermaster@jokerlabs.ai",
  linkedin: "https://linkedin.com/company/jokerlabsai",
  instagram: "https://instagram.com/jokerlabsai",
  tiktok: "https://tiktok.com/@jokerlabsai",
  facebook: "https://facebook.com/jokerlabsai",
  youtube: "https://youtube.com/@jokerlabsai",
  location: "Colombia · Working globally",
} as const;
