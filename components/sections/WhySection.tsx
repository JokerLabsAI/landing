"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { fadeUp, viewportOnce } from "@/lib/motion";

// ─── HUD corner bracket decoration for each card ─────────────────────────────
function HudCorners({ color }: { color: string }) {
  const s = { stroke: color, strokeWidth: "1.5", strokeLinecap: "square" as const, fill: "none", strokeOpacity: "0.35" };
  return (
    <>
      <svg className="absolute top-3 left-3" width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M1 7 L1 1 L7 1" {...s} /></svg>
      <svg className="absolute top-3 right-3" width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M7 1 L13 1 L13 7" {...s} /></svg>
      <svg className="absolute bottom-3 left-3" width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M1 7 L1 13 L7 13" {...s} /></svg>
      <svg className="absolute bottom-3 right-3" width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M7 13 L13 13 L13 7" {...s} /></svg>
    </>
  );
}

// ─── Icon 1: Diamond Forge ────────────────────────────────────────────────────
// Weapons, Not Templates — precision diamond being etched by laser beams
function IconForge() {
  const beams: [number, number, number, number][] = [
    [44, 4, 44, 18], [80, 44, 66, 44], [44, 84, 44, 70], [8, 44, 22, 44],
  ];
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
      {/* Outer dashed rotating ring */}
      <motion.circle cx="44" cy="44" r="40" stroke="var(--jl-primary)" strokeWidth="0.8"
        strokeDasharray="5 3" strokeOpacity="0.28" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "44px 44px" }}
      />
      {/* Grid cross */}
      <line x1="4" y1="44" x2="84" y2="44" stroke="var(--jl-primary)" strokeOpacity="0.1" strokeWidth="0.5" />
      <line x1="44" y1="4" x2="44" y2="84" stroke="var(--jl-primary)" strokeOpacity="0.1" strokeWidth="0.5" />
      {/* Main gem diamond */}
      <motion.path d="M44 16 L72 44 L44 72 L16 44Z"
        stroke="var(--jl-primary)" strokeWidth="1.8" fill="color-mix(in srgb, var(--jl-primary) 8%, transparent)"
        animate={{ opacity: [0.65, 1, 0.65] }} transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Top + horizontal facet lines */}
      <path d="M44 16 L44 44 M16 44 L72 44" stroke="var(--jl-primary)" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M44 16 L58 30 M44 16 L30 30" stroke="var(--jl-primary)" strokeWidth="0.6" strokeOpacity="0.22" />
      {/* Inner accent diamond */}
      <motion.path d="M44 28 L58 42 L44 56 L30 42Z"
        stroke="var(--jl-accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--jl-accent) 10%, transparent)"
        animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
      />
      {/* Center dot */}
      <circle cx="44" cy="44" r="3.5" fill="var(--jl-accent)" />
      {/* Laser beams from cardinal directions */}
      {beams.map(([x1, y1, x2, y2], i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="var(--jl-accent)" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}

// ─── Icon 2: Rocket Launch ────────────────────────────────────────────────────
// Ship Before Your Coffee Cools — sleek HUD-style rocket
function IconRocket() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
      {/* Trajectory arc */}
      <path d="M10 80 Q44 30 80 14" stroke="var(--jl-primary)" strokeWidth="0.8"
        strokeDasharray="3.5 3" strokeOpacity="0.28" fill="none" />
      {/* Speed lines */}
      {[0, 1, 2].map(i => (
        <motion.line key={i} x1={8} y1={50 + i * 7} x2={20 + i * 3} y2={50 + i * 7}
          stroke="var(--jl-primary)" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35"
          animate={{ opacity: [0.2, 0.7, 0.2], x: [-3, 0, -3] }}
          transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
      {/* Rocket group — subtle float */}
      <motion.g animate={{ y: [0, -3.5, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}>
        {/* Nose cone */}
        <path d="M44 10 L56 26 L32 26Z"
          fill="color-mix(in srgb, var(--jl-primary) 55%, transparent)" stroke="var(--jl-primary)" strokeWidth="1.5" />
        {/* Body */}
        <rect x="32" y="26" width="24" height="34" rx="2"
          fill="color-mix(in srgb, var(--jl-primary) 10%, var(--surf))" stroke="var(--jl-primary)" strokeWidth="1.5" />
        {/* Window / porthole with crosshair */}
        <circle cx="44" cy="40" r="7" fill="color-mix(in srgb, var(--jl-accent) 12%, transparent)" stroke="var(--jl-accent)" strokeWidth="1.2" />
        <line x1="44" y1="35" x2="44" y2="45" stroke="var(--jl-accent)" strokeWidth="0.8" />
        <line x1="39" y1="40" x2="49" y2="40" stroke="var(--jl-accent)" strokeWidth="0.8" />
        {/* Left fin */}
        <path d="M32 48 L22 62 L32 59Z" fill="color-mix(in srgb, var(--jl-primary) 40%, transparent)" stroke="var(--jl-primary)" strokeWidth="1.2" />
        {/* Right fin */}
        <path d="M56 48 L66 62 L56 59Z" fill="color-mix(in srgb, var(--jl-primary) 40%, transparent)" stroke="var(--jl-primary)" strokeWidth="1.2" />
        {/* Nozzle */}
        <rect x="38" y="60" width="12" height="5" fill="color-mix(in srgb, var(--jl-primary) 30%, transparent)" stroke="var(--jl-primary)" strokeWidth="1" />
        {/* Exhaust flame */}
        <motion.path d="M38 65 L34 82 L44 75 L54 82 L50 65Z"
          fill="var(--jl-accent)" fillOpacity="0.5"
          animate={{ scaleY: [0.7, 1.3, 0.7], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "44px 65px" }}
        />
      </motion.g>
    </svg>
  );
}

// ─── Icon 3: Card Fan ─────────────────────────────────────────────────────────
// Cards Face Up. Always. — three playing cards fanned open
function IconCardFan() {
  const CARDS = [
    { deg: -22, sym: "♦", col: "var(--jl-primary)", delay: 0.2 },
    { deg: 0,   sym: "♠", col: "var(--jl-primary)", delay: 0 },
    { deg: 22,  sym: "♣", col: "var(--jl-accent)",  delay: 0.4 },
  ];
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
      {/* Glow behind fan */}
      <motion.ellipse cx="44" cy="72" rx="28" ry="6"
        fill="var(--jl-primary)" fillOpacity="0.08"
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      {CARDS.map(({ deg, sym, col, delay }, i) => (
        <motion.g key={i}
          style={{ transformOrigin: "44px 80px" }}
          animate={{ rotate: [deg - 1.5, deg + 1.5, deg - 1.5] }}
          transition={{ duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay }}
        >
          {/* Pivot rotation applied via SVG transform so children are drawn upright relative to card */}
          <g transform={`rotate(${deg} 44 80)`}>
            {/* Card body */}
            <rect x="28" y="10" width="32" height="50" rx="4"
              fill="color-mix(in srgb, var(--jl-primary) 5%, var(--surf))"
              stroke={col} strokeWidth="1.2" strokeOpacity="0.6"
            />
            {/* Top-left marker */}
            <text x="34" y="22" fontSize="8" fontWeight="700" fontFamily="monospace"
              fill={col} fillOpacity="0.8">J</text>
            <text x="33" y="31" fontSize="9" fontFamily="system-ui"
              fill={col} fillOpacity="0.7">{sym}</text>
            {/* Center symbol */}
            <text x="44" y="42" textAnchor="middle" fontSize="16" fontFamily="system-ui"
              fill={col} fillOpacity="0.85">{sym}</text>
          </g>
        </motion.g>
      ))}
    </svg>
  );
}

// ─── Icon 4: Target Lock ──────────────────────────────────────────────────────
// Every Bug Has a Predator — HUD targeting / acquisition scope
function IconTarget() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
      {/* Outer rotating ring */}
      <motion.circle cx="44" cy="44" r="40" stroke="var(--jl-primary)" strokeWidth="0.8"
        strokeDasharray="4 2.5" strokeOpacity="0.3" fill="none"
        animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "44px 44px" }}
      />
      {/* Middle ring */}
      <circle cx="44" cy="44" r="26" stroke="var(--jl-primary)" strokeWidth="1"
        strokeOpacity="0.4" fill="none" />
      {/* Crosshair lines (with center gap) */}
      <line x1="4" y1="44" x2="30" y2="44" stroke="var(--jl-primary)" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="58" y1="44" x2="84" y2="44" stroke="var(--jl-primary)" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="44" y1="4" x2="44" y2="30" stroke="var(--jl-primary)" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="44" y1="58" x2="44" y2="84" stroke="var(--jl-primary)" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Lock corner brackets */}
      {([[22, 22], [66, 22], [22, 66], [66, 66]] as const).map(([cx, cy], i) => {
        const dx = cx < 44 ? 1 : -1;
        const dy = cy < 44 ? 1 : -1;
        return (
          <motion.path key={i}
            d={`M${cx - dx * 7} ${cy} L${cx} ${cy} L${cx} ${cy - dy * 7}`}
            stroke="var(--jl-accent)" strokeWidth="1.5" strokeLinecap="square" fill="none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
      {/* Scanning ring */}
      <motion.circle cx="44" cy="44" r="14"
        stroke="var(--jl-accent)" strokeWidth="1" fill="none"
        animate={{ r: [10, 18, 10], opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: "44px 44px" }}
      />
      {/* Target center */}
      <motion.circle cx="44" cy="44" r="4.5" fill="var(--jl-accent)"
        animate={{ r: [3.5, 5.5, 3.5], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
    </svg>
  );
}

// ─── Icon 5: Signal Tower ─────────────────────────────────────────────────────
// Always in the Room — live broadcast antenna
function IconSignal() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
      {/* Tower mast */}
      <line x1="44" y1="24" x2="44" y2="68" stroke="var(--jl-primary)" strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <path d="M30 68 L44 68 L58 68 M36 76 L44 68 L52 76" stroke="var(--jl-primary)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Horizontal cross-arms */}
      <line x1="36" y1="40" x2="52" y2="40" stroke="var(--jl-primary)" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="40" y1="52" x2="48" y2="52" stroke="var(--jl-primary)" strokeWidth="1.2" strokeOpacity="0.4" />
      {/* Signal arcs — stagger animate */}
      {[14, 21, 28, 35].map((r, i) => (
        <motion.path key={r}
          d={`M${44 - r} 24 A${r} ${r} 0 0 1 ${44 + r} 24`}
          stroke={i % 2 === 0 ? "var(--jl-accent)" : "var(--jl-primary)"}
          strokeWidth={i === 0 ? 1.6 : 1.1} strokeLinecap="round" fill="none"
          animate={{ opacity: [0, 0.9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: i * 0.38 }}
        />
      ))}
      {/* Live pulse dot at mast top */}
      <motion.circle cx="44" cy="20" r="4" fill="var(--jl-accent)"
        animate={{ r: [3, 5.5, 3], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
      <circle cx="44" cy="20" r="2" fill="var(--foreground)" />
    </svg>
  );
}

// ─── Icon 6: Joker Card ───────────────────────────────────────────────────────
// Senior Minds. Zero Middlemen. — MANDATORY playing card (the Joker)
function IconJokerCard() {
  const SPARKLES: [number, number, number][] = [
    [12, 20, 0], [76, 14, 0.5], [80, 60, 1.0], [8, 64, 1.5], [44, 4, 0.3], [44, 84, 0.8],
  ];
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
      {/* Subtle radial glow */}
      <circle cx="44" cy="44" r="40" fill="color-mix(in srgb, var(--jl-accent) 5%, transparent)" />

      {/* Card shadow / depth */}
      <rect x="24" y="12" width="44" height="66" rx="6" fill="rgba(0,0,0,0.3)" />

      {/* Card background with diamond pattern */}
      <defs>
        <pattern id="jkPattern" patternUnits="userSpaceOnUse" width="10" height="10">
          <path d="M5 0 L10 5 L5 10 L0 5Z" fill="none"
            stroke="var(--jl-accent)" strokeWidth="0.35" strokeOpacity="0.18" />
        </pattern>
      </defs>
      <motion.rect x="22" y="10" width="44" height="66" rx="6"
        fill="url(#jkPattern)"
        stroke="var(--jl-accent)" strokeWidth="1.5"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Card solid inner layer */}
      <rect x="22" y="10" width="44" height="66" rx="6"
        fill="color-mix(in srgb, var(--jl-accent) 5%, var(--surf))" />

      {/* Top-left corner: J + ♦ */}
      <text x="29" y="24" fontSize="10" fontWeight="800" fontFamily="monospace"
        fill="var(--jl-accent)">J</text>
      <text x="28" y="34" fontSize="11" fontFamily="system-ui"
        fill="var(--jl-accent)" fillOpacity="0.9">♦</text>

      {/* Bottom-right corner (rotated 180°) */}
      <g transform="rotate(180 44 43)">
        <text x="29" y="24" fontSize="10" fontWeight="800" fontFamily="monospace"
          fill="var(--jl-accent)">J</text>
        <text x="28" y="34" fontSize="11" fontFamily="system-ui"
          fill="var(--jl-accent)" fillOpacity="0.9">♦</text>
      </g>

      {/* Center diamond (large) */}
      <motion.path d="M44 36 L54 44 L44 52 L34 44Z"
        fill="color-mix(in srgb, var(--jl-accent) 18%, transparent)"
        stroke="var(--jl-accent)" strokeWidth="1.5"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
      />
      {/* Center J text */}
      <text x="44" y="48" textAnchor="middle" fontSize="11" fontWeight="800"
        fontFamily="monospace" fill="var(--jl-accent)">J</text>

      {/* Crown above card */}
      <motion.path d="M34 10 L36 6 L38 9 L40 4 L44 8 L48 4 L50 9 L52 6 L54 10"
        stroke="var(--jl-accent)" strokeWidth="1.4" strokeLinecap="round"
        fill="color-mix(in srgb, var(--jl-accent) 8%, transparent)"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Sparkle particles */}
      {SPARKLES.map(([cx, cy, delay], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 2 : 1.5}
          fill="var(--jl-accent)"
          animate={{ opacity: [0, 1, 0], r: [1, i % 2 === 0 ? 2.5 : 2, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay }}
        />
      ))}
    </svg>
  );
}

// ─── Card metadata ────────────────────────────────────────────────────────────
const CARDS = [
  { Icon: IconForge,    color: "blue",  index: 0 },
  { Icon: IconRocket,   color: "blue",  index: 1 },
  { Icon: IconCardFan,  color: "blue",  index: 2 },
  { Icon: IconTarget,   color: "teal",  index: 3 },
  { Icon: IconSignal,   color: "teal",  index: 4 },
  { Icon: IconJokerCard,color: "teal",  index: 5 },
] as const;

// ─── Section ──────────────────────────────────────────────────────────────────
export function WhySection() {
  const c = useContent();

  return (
    <section
      id="why"
      className="section-pad"
      style={{
        background: `
          linear-gradient(rgba(26,110,219,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,110,219,0.025) 1px, transparent 1px),
          var(--background)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      <div className="wrap">
        {/* Header */}
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.why.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.why.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.why.line2}</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay={0.1}><p className="lead">{c.why.sub}</p></RevealBlock>
        </div>

        {/* 3×2 icon grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          {CARDS.map(({ Icon, color, index }) => {
            const item = c.why.items[index];
            const isJoker = index === 5;
            const primary = color === "blue" ? "var(--jl-primary)" : "var(--jl-accent)";
            const accent  = color === "blue" ? "var(--jl-accent)"  : "var(--jl-primary)";

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center gap-5 p-7 rounded-2xl border overflow-hidden"
                style={{
                  background: "var(--surf)",
                  borderColor: isJoker ? "color-mix(in srgb, var(--jl-accent) 30%, transparent)" : "var(--border)",
                }}
                whileHover={{ y: -5, borderColor: primary }}
                transition={{ duration: 0.28 }}
              >
                {/* HUD corner brackets */}
                <HudCorners color={primary} />

                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, ${primary} 10%, transparent), transparent)` }}
                />

                {/* Icon area with halo */}
                <div className="relative flex items-center justify-center w-[100px] h-[100px]">
                  {/* Glow disc */}
                  <div className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle, color-mix(in srgb, ${primary} 14%, transparent), transparent 70%)`,
                    }}
                  />
                  {/* Bright glow on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: `radial-gradient(circle, color-mix(in srgb, ${primary} 24%, transparent), transparent 68%)`,
                    }}
                  />
                  <Icon />
                </div>

                {/* Index label */}
                <span className="absolute top-4 right-5 font-mono text-xs select-none pointer-events-none"
                  style={{ color: "var(--faint)", letterSpacing: "0.14em" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Text */}
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="font-semibold tracking-tight leading-snug"
                    style={{ color: "var(--foreground)", fontSize: "15px" }}>
                    {item?.title}
                  </h3>
                  <p style={{ color: "var(--dim)", fontSize: "13px", lineHeight: 1.75 }}>
                    {item?.desc}
                  </p>
                </div>

                {/* Bottom accent line for joker card */}
                {isJoker && (
                  <motion.div className="absolute bottom-0 left-6 right-6 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, var(--jl-accent), transparent)" }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
