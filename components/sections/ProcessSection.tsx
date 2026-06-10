"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function ProcessSection() {
  const c = useContent();

  const steps = PROCESS_STEPS.map((s, i) => ({
    ...s,
    ...(c.process.steps[i] ?? {}),
  }));

  return (
    <section id="process" className="section-pad">
      <div className="wrap">
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

        {/* Desktop */}
        <motion.div
          className="hidden md:grid grid-cols-5 gap-4 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="absolute top-8 left-[10%] right-[10%] h-px pointer-events-none" style={{ background: "var(--border-s)" }} />
          {steps.map(({ num, title, desc, highlight }) => (
            <motion.div key={num} variants={fadeUp} className="flex flex-col items-center text-center gap-4">
              <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold border-2 z-10"
                style={{
                  background: highlight ? "var(--jl-primary)" : "var(--surf)",
                  borderColor: highlight ? "var(--jl-primary)" : "var(--border-s)",
                  color: highlight ? "#fff" : "var(--jl-primary)",
                  boxShadow: highlight ? "0 0 24px color-mix(in srgb, var(--jl-primary) 40%, transparent)" : "none",
                  fontFamily: "var(--font-mono-jb)",
                }}
              >
                {num}
              </div>
              <h3 className="text-base font-bold tracking-tight" style={{ color: "var(--foreground)" }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile */}
        <motion.div
          className="flex md:hidden flex-col gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map(({ num, title, desc, highlight }) => (
            <motion.div
              key={num}
              variants={fadeUp}
              className="flex gap-5 p-5 rounded-2xl border"
              style={{
                background: highlight ? "color-mix(in srgb, var(--jl-primary) 8%, var(--surf))" : "var(--surf)",
                borderColor: highlight ? "var(--jl-primary)" : "var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  background: highlight ? "var(--jl-primary)" : "var(--surf2)",
                  color: highlight ? "#fff" : "var(--jl-primary)",
                  fontFamily: "var(--font-mono-jb)",
                }}
              >
                {num}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
