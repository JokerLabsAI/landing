"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { WORK_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function WorkSection() {
  const c = useContent();

  const items = WORK_ITEMS.map((w, i) => ({
    ...w,
    ...(c.work.items[i] ?? {}),
  }));

  return (
    <section id="work" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.work.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.work.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.work.line2}</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay={0.1}><p className="lead">{c.work.sub}</p></RevealBlock>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map(({ tags, industry, title, desc, stat, statLabel, inProgress }, idx) => (
            <motion.article
              key={WORK_ITEMS[idx].title}
              variants={fadeUp}
              className="group relative flex flex-col gap-6 p-8 rounded-2xl border overflow-hidden"
              style={{ background: "var(--surf)", borderColor: "var(--border)" }}
              whileHover={{ y: -6, borderColor: "var(--jl-primary)" }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--jl-primary) 8%, transparent), transparent)" }}
              />

              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--surf2)", color: "var(--dim)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {inProgress && (
                  <span
                    className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: "color-mix(in srgb, var(--jl-accent) 12%, transparent)", color: "var(--jl-accent)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {c.work.liveBadge}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--jl-accent)", fontFamily: "var(--font-mono-jb)" }}>
                  {industry}
                </span>
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{desc}</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <Clock size={14} style={{ color: "var(--faint)", flexShrink: 0 }} />
                <span className="text-sm font-medium" style={{ color: "var(--jl-primary)" }}>{stat}</span>
                <span className="text-sm" style={{ color: "var(--dim)" }}>· {statLabel}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <RevealBlock delay={0.3}>
          <div className="mt-12 flex justify-center">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border"
              style={{ color: "var(--dim)", borderColor: "var(--border-s)" }}
              whileHover={{ color: "var(--foreground)", borderColor: "var(--jl-primary)" }}
              whileTap={{ scale: 0.97 }}
            >
              {c.work.cta}
            </motion.a>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
