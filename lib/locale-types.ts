export interface SiteContent {
  locale: "en" | "es";

  nav: {
    items: string[];   // order matches NAV_ITEMS in constants.ts
    cta: string;
  };

  hero: {
    eyebrow: string;
    cyclePrefix: string;
    cycleWords: string[];
    sub: string;
    cta: string;
    secondary: string;
    scroll: string;
  };

  services: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    items: Array<{ title: string; tag: string; desc: string }>;
  };

  work: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    liveBadge: string;
    items: Array<{ industry: string; title: string; desc: string; stat: string; statLabel: string }>;
    cta: string;
  };

  why: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    items: Array<{ title: string; desc: string }>;
  };

  compare: {
    eyebrow: string;
    line1: string;
    line2: string;
    recommended: string;
    cols: [string, string, string];
    rows: Array<{ label: string; jl: string; hire: string; agency: string }>;
  };

  about: {
    eyebrow: string;
    line1: string;
    line2: string;
    lead: string;
    body1: string;
    body2: string;
    statsTitle: string;
    stats: Array<{ value: string; label: string }>;
  };

  process: {
    eyebrow: string;
    line1: string;
    line2: string;
    steps: Array<{ title: string; desc: string }>;
  };

  faq: {
    eyebrow: string;
    line1: string;
    line2: string;
    selectLabel: string;
    chatHeader: string;
    chatStatus: string;
    chatEmpty: string;
    items: Array<{ question: string; answer: string }>;
  };

  team: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    roles: string[];   // order matches TEAM in constants.ts
  };

  contact: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    sendingLabel: string;
    responseTime: string;
    successTitle: string;
    successMsg: string;
  };

  footer: {
    tagline: string;
    navigateLabel: string;
    contactLabel: string;
    cta: string;
    taglineBottom: string;
  };
}
