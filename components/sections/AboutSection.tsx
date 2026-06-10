"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function AboutSection() {
  const c = useContent();

  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <RevealBlock><Eyebrow>{c.about.eyebrow}</Eyebrow></RevealBlock>
            <RevealBlock delay={0.05}>
              <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
                {c.about.line1}
                <br />
                <span style={{ color: "var(--jl-primary)" }}>{c.about.line2}</span>
              </h2>
            </RevealBlock>
            <RevealBlock delay={0.1}><p className="lead">{c.about.lead}</p></RevealBlock>
            <RevealBlock delay={0.15}><p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{c.about.body1}</p></RevealBlock>
            <RevealBlock delay={0.2}><p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{c.about.body2}</p></RevealBlock>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {c.about.stats.map(({ value, label }) => (
              <motion.div
                key={value}
                variants={fadeUp}
                className="flex flex-col gap-2 p-7 rounded-2xl border"
                style={{ background: "var(--surf)", borderColor: "var(--border)" }}
              >
                <span className="text-5xl font-black tracking-tighter" style={{ color: "var(--jl-primary)" }}>{value}</span>
                <span className="text-sm" style={{ color: "var(--dim)" }}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
