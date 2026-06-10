"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { COMPARE_ROWS } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CompareSection() {
  const c = useContent();
  const { cols, rows, recommended } = c.compare;

  // Merge structural hireGood flag with translated row text
  const mergedRows = COMPARE_ROWS.map((r, i) => ({
    hireGood: r.hireGood,
    ...(rows[i] ?? { label: r.label, jl: r.jl, hire: r.hire, agency: r.agency }),
  }));

  return (
    <section id="compare" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.compare.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.compare.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.compare.line2}</span>
            </h2>
          </RevealBlock>
        </div>

        <motion.div
          className="overflow-x-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0", minWidth: "600px" }}>
            <thead>
              <tr>
                <th className="w-[28%] pb-4 text-left text-sm font-medium" style={{ color: "var(--faint)" }} />
                {cols.map((label, i) => (
                  <th key={label} className="pb-4 text-center text-sm font-semibold" style={{ color: i === 0 ? "var(--jl-primary)" : "var(--dim)" }}>
                    {i === 0 && (
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs mb-2 font-semibold"
                        style={{ background: "color-mix(in srgb, var(--jl-primary) 12%, transparent)", color: "var(--jl-primary)" }}
                      >
                        {recommended}
                      </span>
                    )}
                    <div>{label}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mergedRows.map(({ label, jl, hire, agency, hireGood }, i) => (
                <tr key={COMPARE_ROWS[i].label}>
                  <td className="py-4 pr-4 text-sm font-medium border-t" style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
                    {label}
                  </td>
                  <td className="py-4 text-center text-sm border-t" style={{ borderColor: "var(--border)", color: "var(--jl-accent)", background: i % 2 === 0 ? "color-mix(in srgb, var(--jl-primary) 4%, transparent)" : "transparent" }}>
                    <div className="flex flex-col items-center gap-1">
                      <Check size={14} strokeWidth={2.5} />
                      <span>{jl}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center text-sm border-t" style={{ borderColor: "var(--border)", color: hireGood ? "var(--dim)" : "var(--faint)" }}>
                    <div className="flex flex-col items-center gap-1">
                      {hireGood ? <Minus size={14} /> : <X size={14} style={{ color: "color-mix(in srgb, #F56565 70%, transparent)" }} />}
                      <span>{hire}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center text-sm border-t" style={{ borderColor: "var(--border)", color: "var(--faint)" }}>
                    <div className="flex flex-col items-center gap-1">
                      <X size={14} style={{ color: "color-mix(in srgb, #F56565 70%, transparent)" }} />
                      <span>{agency}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
