"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { COMPARE_ROWS } from "@/lib/constants";
import { viewportOnce } from "@/lib/motion";

// ─── Stagger fade used on every grid cell ────────────────────────────────────
const cellFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: [0.22, 0.61, 0.36, 1], delay: d },
  }),
};

// ─── Column order: Hire | JokerLabs (center, featured) | Agency ──────────────
// The cols content array is [JokerLabs, Hire, Agency], so we reorder for display.
const DISPLAY_ORDER = [1, 0, 2] as const; // indices into `cols` / `rowValues`

export function CompareSection() {
  const c = useContent();
  const { cols, rows, recommended } = c.compare;
  const [hovered, setHovered] = useState<number | null>(null);

  const mergedRows = COMPARE_ROWS.map((r, i) => ({
    hireGood: r.hireGood,
    ...(rows[i] ?? { label: r.label, jl: r.jl, hire: r.hire, agency: r.agency }),
  }));

  const totalRows = mergedRows.length;

  // Derive display column labels and a flag for the featured column (JokerLabs)
  const displayColLabels = DISPLAY_ORDER.map((idx) => cols[idx]);
  // cols[0] = JokerLabs → display index 1 (center) → di === 1
  const isJLDisplayIdx = (di: number) => DISPLAY_ORDER[di] === 0;

  // Visual tokens for the featured JokerLabs strip
  const JL_BORDER = "color-mix(in srgb, var(--jl-primary) 28%, transparent)";
  const JL_BG     = "color-mix(in srgb, var(--jl-primary) 6%, var(--surf))";
  const JL_BG_HDR = "color-mix(in srgb, var(--jl-primary) 10%, var(--surf))";
  const JL_BG_HOV = "color-mix(in srgb, var(--jl-primary) 10%, var(--surf))";

  function cellStyle(ri: number, di: number): React.CSSProperties {
    const isJL  = isJLDisplayIdx(di);
    const isHov = hovered === ri;
    const last  = ri === totalRows - 1;
    return {
      borderTop:    isJL ? `1px solid ${JL_BORDER}` : "1px solid var(--border)",
      borderLeft:   isJL ? `1px solid ${JL_BORDER}` : "none",
      borderRight:  isJL ? `1px solid ${JL_BORDER}` : "none",
      borderBottom: last && isJL ? `1px solid ${JL_BORDER}` : "none",
      borderRadius: last && isJL ? "0 0 14px 14px" : 0,
      background: isJL
        ? isHov ? JL_BG_HOV : JL_BG
        : isHov ? "color-mix(in srgb, var(--foreground) 3%, transparent)" : "transparent",
      transition: "background 0.18s ease",
    };
  }

  function getRowValue(row: typeof mergedRows[0], di: number) {
    // DISPLAY_ORDER maps display-index → cols-index: 0=hire, 1=jl, 2=agency
    const colIdx = DISPLAY_ORDER[di];
    if (colIdx === 0) return { val: row.jl,     isJL: true,  good: true };
    if (colIdx === 1) return { val: row.hire,   isJL: false, good: !!row.hireGood };
    return             { val: row.agency, isJL: false, good: false };
  }

  return (
    <section id="compare" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="wrap">

        {/* ── Section header ── */}
        <div className="section-head">
          <RevealBlock>
            <Eyebrow>{c.compare.eyebrow}</Eyebrow>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.compare.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.compare.line2}</span>
            </h2>
          </RevealBlock>
        </div>

        {/* ── Animated win-streak bar ── */}
        <RevealBlock delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-10">
            {mergedRows.map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{ width: 20, height: 3, background: "var(--jl-accent)" }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
              />
            ))}
            <span
              className="ml-2 font-mono text-xs"
              style={{ color: "var(--jl-accent)", letterSpacing: "0.14em" }}
            >
              {totalRows}/{totalRows}
            </span>
          </div>
        </RevealBlock>

        {/* ── Comparison grid ── */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <motion.div
            className="min-w-[540px]"
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(70px, 16%, 180px) 1fr 1.1fr 1fr",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* ── Column headers ─────────────────────────────────── */}

            {/* Empty label cell */}
            <motion.div variants={cellFade} custom={0} className="pb-3" />

            {displayColLabels.map((colLabel, di) => {
              const isJL = isJLDisplayIdx(di);
              return (
                <motion.div
                  key={`hdr-${di}`}
                  variants={cellFade}
                  custom={0.04 * (di + 1)}
                  className="px-4 pt-5 pb-4 flex flex-col items-center gap-2"
                  style={{
                    background:   isJL ? JL_BG_HDR : "transparent",
                    borderTop:    isJL ? `1px solid ${JL_BORDER}` : "none",
                    borderLeft:   isJL ? `1px solid ${JL_BORDER}` : "none",
                    borderRight:  isJL ? `1px solid ${JL_BORDER}` : "none",
                    borderRadius: isJL ? "14px 14px 0 0" : 0,
                  }}
                >
                  {isJL && (
                    <motion.span
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "color-mix(in srgb, var(--jl-accent) 12%, transparent)",
                        color: "var(--jl-accent)",
                        letterSpacing: "0.02em",
                      }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ★ {recommended}
                    </motion.span>
                  )}
                  <span
                    className="text-xs font-semibold text-center leading-snug"
                    style={{ color: isJL ? "var(--foreground)" : "var(--faint)" }}
                  >
                    {colLabel}
                  </span>
                </motion.div>
              );
            })}

            {/* ── Data rows ──────────────────────────────────────── */}
            {mergedRows.map((row, ri) => {
              const rowDelay = 0.14 + ri * 0.055;
              const isHov = hovered === ri;

              return [
                /* Row label */
                <motion.div
                  key={`lbl-${ri}`}
                  variants={cellFade}
                  custom={rowDelay}
                  className="flex items-center"
                  style={{
                    padding: "16px 14px 16px 0",
                    borderTop: "1px solid var(--border)",
                    background: isHov
                      ? "color-mix(in srgb, var(--foreground) 2%, transparent)"
                      : "transparent",
                    transition: "background 0.18s ease",
                  }}
                >
                  <span
                    className="font-mono text-xs uppercase tracking-widest leading-tight"
                    style={{
                      color: isHov ? "var(--foreground)" : "var(--dim)",
                      letterSpacing: "0.14em",
                      transition: "color 0.18s ease",
                    }}
                  >
                    {row.label}
                  </span>
                </motion.div>,

                /* 3 value cells */
                ...[0, 1, 2].map((di) => {
                  const { val, isJL, good } = getRowValue(row, di);

                  const iconBg = isJL
                    ? "color-mix(in srgb, var(--jl-accent) 14%, transparent)"
                    : good
                      ? "color-mix(in srgb, var(--dim) 10%, transparent)"
                      : "color-mix(in srgb, #F56565 10%, transparent)";

                  const iconEl = isJL
                    ? <Check size={10} strokeWidth={3} style={{ color: "var(--jl-accent)" }} />
                    : good
                      ? <Minus size={10} style={{ color: "var(--dim)" }} />
                      : <X size={10} style={{ color: "color-mix(in srgb, #F56565 65%, transparent)" }} />;

                  const textColor = isJL
                    ? "var(--jl-accent)"
                    : good ? "var(--dim)" : "var(--faint)";

                  return (
                    <motion.div
                      key={`cell-${ri}-${di}`}
                      variants={cellFade}
                      custom={rowDelay + di * 0.018}
                      className="px-3 py-4 flex flex-col items-center justify-center gap-1.5 text-center"
                      style={cellStyle(ri, di)}
                      onMouseEnter={() => setHovered(ri)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: iconBg }}
                      >
                        {iconEl}
                      </div>
                      <span
                        className="text-xs leading-tight"
                        style={{
                          color: textColor,
                          fontWeight: isJL ? 500 : 400,
                          maxWidth: "120px",
                        }}
                      >
                        {val}
                      </span>
                    </motion.div>
                  );
                }),
              ];
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
