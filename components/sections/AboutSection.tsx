"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

// ─── Animated counter ─────────────────────────────────────────────────────────
function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");
  const isNumeric = /^\d+$/.test(value);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const target = parseInt(value, 10);
    const duration = 1400;
    const startAt = performance.now() + delay * 1000;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - startAt;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(String(Math.round(eased * target)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplayed(String(target));
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, isNumeric, delay]);

  if (!isNumeric) {
    return (
      <motion.span
        ref={ref as React.RefObject<HTMLSpanElement>}
        animate={inView ? { opacity: [0, 1] } : { opacity: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {value}
      </motion.span>
    );
  }

  return <span ref={ref}>{inView ? displayed : "0"}</span>;
}

// ─── Accent colours per card ───────────────────────────────────────────────────
const CARD_ACCENT = [
  "var(--jl-primary)",
  "var(--jl-accent)",
  "var(--jl-primary)",
  "var(--jl-accent)",
] as const;

const CARD_GLOW = [
  "rgba(26,110,219,0.18)",
  "rgba(0,201,167,0.18)",
  "rgba(26,110,219,0.18)",
  "rgba(0,201,167,0.18)",
] as const;

// ─── Ambient background orbs ──────────────────────────────────────────────────
const ORBS = [
  { left: "6%",  top: "25%", color: "var(--jl-primary)", dur: 18, dx: [0, 24, -18, 0], dy: [0, -28, 18, 0] },
  { left: "68%", top: "55%", color: "var(--jl-accent)",  dur: 22, dx: [0, -20, 30, 0], dy: [0, 22, -14, 0] },
  { left: "42%", top: "78%", color: "var(--jl-primary)", dur: 20, dx: [0, 18, -24, 0], dy: [0, -18, 28, 0] },
];

export function AboutSection() {
  const c = useContent();

  return (
    <section
      id="about"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ── Drifting ambient orbs ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {ORBS.map((orb, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: orb.left,
              top: orb.top,
              width: 340,
              height: 340,
              borderRadius: "50%",
              background: orb.color,
              filter: "blur(96px)",
              opacity: 0.045,
            }}
            animate={{ x: orb.dx, y: orb.dy }}
            transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="wrap" style={{ position: "relative" }}>

        {/* ── Centered section header ── */}
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.about.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)" }}>
              {c.about.line1}
              <br />
              <span style={{ color: "var(--jl-primary)" }}>{c.about.line2}</span>
            </h2>
          </RevealBlock>
        </div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: editorial text ── */}
          <div className="flex flex-col gap-8">

            {/* Lead paragraph — teal accent left border */}
            <RevealBlock delay={0.1}>
              <div
                style={{
                  paddingLeft: 20,
                  borderLeft: "3px solid var(--jl-accent)",
                }}
              >
                <p
                  style={{
                    color: "var(--foreground)",
                    fontSize: "clamp(16px, 1.15vw, 19px)",
                    lineHeight: 1.8,
                    fontWeight: 400,
                  }}
                >
                  {c.about.lead}
                </p>
              </div>
            </RevealBlock>

            {/* Body paragraphs */}
            {([c.about.body1, c.about.body2] as const).map((text, i) => (
              <RevealBlock key={i} delay={0.15 + i * 0.06}>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--dim)", lineHeight: 1.85 }}
                >
                  {text}
                </p>
              </RevealBlock>
            ))}

          </div>

          {/* ── Right: HUD stat panels ── */}
          <div className="flex flex-col gap-5">

            <RevealBlock delay={0.1}>
              <p
                className="font-mono text-xs uppercase"
                style={{ color: "var(--faint)", letterSpacing: "0.16em" }}
              >
                {c.about.statsTitle}
              </p>
            </RevealBlock>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {c.about.stats.map(({ value, label }, i) => {
                const accent = CARD_ACCENT[i];
                const glow   = CARD_GLOW[i];
                return (
                  <motion.div
                    key={value}
                    variants={fadeUp}
                    whileHover={{
                      y: -6,
                      borderColor: accent,
                      boxShadow: `0 16px 40px -10px ${glow}`,
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative flex flex-col justify-between rounded-2xl border overflow-hidden cursor-default"
                    style={{
                      background: "var(--surf)",
                      borderColor: "var(--border)",
                      padding: "26px 22px 22px",
                      minHeight: 148,
                    }}
                  >
                    {/* Top gradient accent bar */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${accent} 0%, transparent 100%)`,
                      }}
                    />

                    {/* Counting number */}
                    <span
                      className="font-black tracking-tighter"
                      style={{
                        fontSize: "clamp(40px, 3.8vw, 58px)",
                        lineHeight: 1,
                        color: accent,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      <CountUp value={value} delay={0.3 + i * 0.15} />
                    </span>

                    {/* Divider + label */}
                    <div style={{ marginTop: 14 }}>
                      <div
                        style={{
                          width: 20,
                          height: 1,
                          background: accent,
                          opacity: 0.5,
                          marginBottom: 8,
                        }}
                      />
                      <span
                        className="font-mono text-xs uppercase"
                        style={{ color: "var(--dim)", letterSpacing: "0.1em" }}
                      >
                        {label}
                      </span>
                    </div>

                    {/* HUD corner bracket — bottom-right */}
                    <svg
                      width="13" height="13" viewBox="0 0 13 13" fill="none"
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: 10, right: 11,
                        color: accent,
                        opacity: 0.3,
                      }}
                    >
                      <path d="M13 0 L13 13 L0 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
