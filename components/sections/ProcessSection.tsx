"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { PROCESS_STEPS } from "@/lib/constants";

const AUTO_MS = 4500;
const N = 5;
const TAB_H = 68;

// ─── Step SVG icons ────────────────────────────────────────────────────────────

function IconScope() {
  return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width: "100%", height: "100%" }}>
      <motion.circle cx="40" cy="40" r="30" stroke="var(--jl-primary)" strokeWidth="1"
        strokeDasharray="5 3" opacity={0.3}
        animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "40px 40px" }} />
      <circle cx="40" cy="40" r="18" stroke="var(--jl-primary)" strokeWidth="1.5" opacity={0.5} />
      <line x1="40" y1="4"  x2="40" y2="20" stroke="var(--jl-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="60" x2="40" y2="76" stroke="var(--jl-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4"  y1="40" x2="20" y2="40" stroke="var(--jl-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="40" x2="76" y2="40" stroke="var(--jl-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <motion.circle cx="40" cy="40" r="5" fill="var(--jl-primary)"
        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "40px 40px" }} />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width: "100%", height: "100%" }}>
      <circle cx="40" cy="14" r="5" fill="var(--jl-primary)" />
      <circle cx="14" cy="64" r="5" fill="var(--jl-primary)" />
      <circle cx="66" cy="64" r="5" fill="var(--jl-primary)" />
      <motion.path d="M40 14 L14 64" stroke="var(--jl-primary)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }} />
      <motion.path d="M40 14 L66 64" stroke="var(--jl-primary)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }} />
      <motion.path d="M14 64 L66 64" stroke="var(--jl-primary)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }} />
      <circle cx="40" cy="47" r="3" fill="var(--jl-accent)" opacity={0.85} />
    </svg>
  );
}

function IconBuild() {
  return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width: "100%", height: "100%" }}>
      <motion.path d="M36 16 L28 27 L36 38 L28 49 L36 60 L28 71"
        stroke="var(--jl-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} />
      <motion.path d="M44 16 L52 27 L44 38 L52 49 L44 60 L52 71"
        stroke="var(--jl-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} />
      <motion.rect x="37" y="38" width="6" height="3" rx="1" fill="var(--jl-accent)"
        animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
    </svg>
  );
}

function IconDeploy() {
  return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width: "100%", height: "100%" }}>
      <motion.ellipse cx="40" cy="44" rx="28" ry="9" stroke="var(--jl-primary)"
        strokeWidth="1" strokeDasharray="4 3" opacity={0.25}
        animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "40px 44px" }} />
      <motion.path d="M40 8 L50 32 L45 32 L45 60 L35 60 L35 32 L30 32 Z"
        fill="color-mix(in srgb, var(--jl-primary) 14%, transparent)"
        stroke="var(--jl-primary)" strokeWidth="1.5" strokeLinejoin="round"
        animate={{ y: [0, -5, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.path d="M36 60 L34 70 L40 63 L46 70 L44 60"
        fill="var(--jl-accent)" opacity={0.8}
        animate={{ scaleY: [1, 1.5, 0.7, 1.3, 1] }}
        transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "40px 65px" }} />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width: "100%", height: "100%" }}>
      <path d="M4 40 L20 40 L26 22 L33 58 L40 26 L47 40 L54 40 L60 30 L66 40 L76 40"
        stroke="var(--jl-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={0.2} />
      <motion.path d="M4 40 L20 40 L26 22 L33 58 L40 26 L47 40 L54 40 L60 30 L66 40 L76 40"
        stroke="var(--jl-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }} />
    </svg>
  );
}

const ICONS = [IconScope, IconDesign, IconBuild, IconDeploy, IconSupport] as const;

// ─── Panel transition variants ─────────────────────────────────────────────────
const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;
const EASE_IN  = [0.55, 0, 0.55, 0.08] as const;

const panelV = {
  enter: (d: number) => ({ y: d > 0 ? 30 : -30, opacity: 0, filter: "blur(6px)" }),
  center: {
    y: 0, opacity: 1, filter: "blur(0px)",
    transition: { duration: 0.38, ease: EASE_OUT },
  },
  exit: (d: number) => ({
    y: d > 0 ? -30 : 30, opacity: 0, filter: "blur(6px)",
    transition: { duration: 0.24, ease: EASE_IN },
  }),
};

// ─── Component ─────────────────────────────────────────────────────────────────
export function ProcessSection() {
  const c = useContent();
  const steps = PROCESS_STEPS.map((s, i) => ({ ...s, ...(c.process.steps[i] ?? {}) }));

  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const activeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % N;
      activeRef.current = next;
      setDir(1);
      setActive(next);
    }, AUTO_MS);
  }, []);

  const goTo = useCallback((i: number) => {
    if (i === activeRef.current) return;
    setDir(i > activeRef.current ? 1 : -1);
    activeRef.current = i;
    setActive(i);
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const step = steps[active];
  const Icon = ICONS[active];

  const TRACK_TOP = TAB_H / 2;
  const TRACK_H = TAB_H * (N - 1);

  return (
    <section id="process" className="section-pad">
      <div className="wrap">

        {/* ── Header ── */}
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.process.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.process.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.process.line2}</span>
            </h2>
          </RevealBlock>
        </div>

        {/* ── Desktop ── */}
        <RevealBlock delay={0.1}>
          <div className="hidden md:flex gap-8" style={{ alignItems: "stretch" }}>

            {/* Left: vertical step tabs */}
            <div className="relative flex flex-col" style={{ width: 224, flexShrink: 0, paddingTop: 0 }}>
              {/* Track background */}
              <div style={{
                position: "absolute", left: 8,
                top: TRACK_TOP, height: TRACK_H,
                width: 1, background: "var(--border-s)",
              }} />
              {/* Track fill */}
              <motion.div
                style={{
                  position: "absolute", left: 8,
                  top: TRACK_TOP, height: TRACK_H,
                  width: 1, background: "var(--jl-primary)",
                  transformOrigin: "top",
                }}
                animate={{ scaleY: active / (N - 1) }}
                initial={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              />

              {steps.map(({ num, title }, i) => {
                const isActive = i === active;
                const isPast   = i < active;
                return (
                  <button
                    key={num}
                    onClick={() => goTo(i)}
                    aria-label={`Step ${num}: ${title}`}
                    style={{
                      height: TAB_H,
                      display: "flex", alignItems: "center", gap: 16,
                      cursor: "pointer", background: "none", border: "none", padding: 0,
                      width: "100%", textAlign: "left",
                    }}
                  >
                    {/* Bullet */}
                    <div style={{
                      width: 17, height: 17, borderRadius: "50%", flexShrink: 0,
                      position: "relative", zIndex: 1,
                      background: isActive
                        ? "var(--jl-primary)"
                        : isPast
                          ? "color-mix(in srgb, var(--jl-primary) 35%, transparent)"
                          : "var(--surf)",
                      border: `1.5px solid ${
                        isActive ? "var(--jl-primary)"
                        : isPast ? "color-mix(in srgb, var(--jl-primary) 45%, transparent)"
                        : "var(--border-s)"
                      }`,
                      boxShadow: isActive
                        ? "0 0 16px color-mix(in srgb, var(--jl-primary) 55%, transparent)"
                        : "none",
                      transition: "all 0.3s ease",
                    }} />
                    {/* Label */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{
                        fontFamily: "var(--font-mono-jb)", fontSize: 11,
                        color: isActive ? "var(--jl-primary)" : "var(--faint)",
                        letterSpacing: "0.08em",
                        transition: "color 0.3s",
                      }}>
                        {num}
                      </span>
                      <span style={{
                        fontSize: 14, fontWeight: 600,
                        color: isActive ? "var(--foreground)" : "var(--dim)",
                        transition: "color 0.3s",
                      }}>
                        {title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: content panel */}
            <div
              className="flex-1 relative rounded-3xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surf)",
                minHeight: 340,
              }}
            >
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  variants={panelV}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "40px 44px 32px",
                  }}
                >
                  {/* Ghost step number */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute", top: 20, right: 28,
                      fontSize: 110, lineHeight: 1, fontWeight: 900,
                      color: "var(--foreground)", opacity: 0.045,
                      fontFamily: "var(--font-mono-jb)",
                      userSelect: "none", pointerEvents: "none",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Top: icon + content */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {/* Icon disc */}
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      border: "1px solid var(--border)",
                      background: "var(--bg2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: 16, flexShrink: 0,
                    }}>
                      <Icon />
                    </div>

                    <div>
                      <h3 style={{
                        fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 700,
                        letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: 12,
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        color: "var(--dim)", fontSize: 15, lineHeight: 1.75,
                        maxWidth: 520,
                      }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: dot nav + progress bar */}
                  <div style={{ marginTop: 32 }}>
                    {/* Step dots */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          aria-label={`Go to step ${i + 1}`}
                          style={{
                            height: 6, borderRadius: 3,
                            width: i === active ? 24 : 6,
                            background: i === active
                              ? "var(--jl-primary)"
                              : i < active
                                ? "color-mix(in srgb, var(--jl-primary) 40%, transparent)"
                                : "var(--border)",
                            border: "none", cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </div>
                    {/* Auto-advance progress */}
                    <div style={{ height: 2, background: "var(--border)", borderRadius: 1, overflow: "hidden" }}>
                      <motion.div
                        key={active}
                        style={{ height: "100%", background: "var(--jl-primary)", transformOrigin: "left" }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </RevealBlock>

        {/* ── Mobile: accordion ── */}
        <div className="flex md:hidden flex-col gap-3" style={{ marginTop: 8 }}>
          {steps.map(({ num, title, desc }, i) => {
            const isOpen = i === active;
            return (
              <div
                key={num}
                className="rounded-2xl border overflow-hidden"
                style={{
                  background: isOpen ? "var(--surf)" : "transparent",
                  borderColor: isOpen ? "var(--jl-primary)" : "var(--border)",
                  transition: "border-color 0.3s, background 0.3s",
                }}
              >
                <button
                  onClick={() => goTo(i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 16,
                    padding: "18px 20px", background: "none", border: "none", cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-mono-jb)", fontSize: 12, fontWeight: 700,
                    color: isOpen ? "var(--jl-primary)" : "var(--dim)", minWidth: 28,
                    transition: "color 0.3s",
                  }}>
                    {num}
                  </span>
                  <span style={{
                    flex: 1, fontSize: 15, fontWeight: 600,
                    color: isOpen ? "var(--foreground)" : "var(--dim)",
                    transition: "color 0.3s",
                  }}>
                    {title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: isOpen ? "var(--jl-primary)" : "var(--faint)", fontSize: 22, lineHeight: 1, display: "block" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ padding: "0 20px 20px", fontSize: 14, lineHeight: 1.8, color: "var(--dim)" }}>
                        {desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
