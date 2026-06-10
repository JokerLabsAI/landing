"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function ServicesSection() {
  const c = useContent();

  const items = SERVICES.map((s, i) => ({
    ...s,
    ...(c.services.items[i] ?? {}),
  }));

  return (
    <section id="services" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.services.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.services.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.services.line2}</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay={0.1}><p className="lead">{c.services.sub}</p></RevealBlock>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map(({ suit, title, tag, desc, color }) => (
            <motion.div
              key={suit}
              variants={fadeUp}
              className="group relative flex flex-col gap-5 p-8 rounded-2xl border overflow-hidden cursor-default"
              style={{ background: "var(--surf)", borderColor: "var(--border)" }}
              whileHover={{ y: -4, borderColor: color === "sapphire" ? "var(--jl-primary)" : "var(--jl-accent)" }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: color === "sapphire"
                    ? "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--jl-primary) 8%, transparent), transparent)"
                    : "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--jl-accent) 8%, transparent), transparent)",
                }}
              />
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                  style={{
                    background: color === "sapphire" ? "color-mix(in srgb, var(--jl-primary) 15%, transparent)" : "color-mix(in srgb, var(--jl-accent) 15%, transparent)",
                    color: color === "sapphire" ? "var(--jl-primary)" : "var(--jl-accent)",
                  }}
                >
                  {suit}
                </div>
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: color === "sapphire" ? "var(--jl-primary)" : "var(--jl-accent)",
                    background: color === "sapphire" ? "color-mix(in srgb, var(--jl-primary) 10%, transparent)" : "color-mix(in srgb, var(--jl-accent) 10%, transparent)",
                    fontFamily: "var(--font-mono-jb)",
                  }}
                >
                  {tag}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
