"use client";

import { motion } from "framer-motion";
import { Target, Zap, DollarSign, Lightbulb, Users, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { WHY_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = { Target, Zap, DollarSign, Lightbulb, Users, Star };

export function WhySection() {
  const c = useContent();

  const items = WHY_ITEMS.map((w, i) => ({
    ...w,
    ...(c.why.items[i] ?? {}),
  }));

  return (
    <section id="why" className="section-pad">
      <div className="wrap">
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map(({ title, desc, color, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <motion.div
                key={icon}
                variants={fadeUp}
                className="group relative flex flex-col gap-4 p-7 rounded-2xl border overflow-hidden"
                style={{ background: "var(--surf)", borderColor: "var(--border)" }}
                whileHover={{ y: -4, borderColor: color === "blue" ? "var(--jl-primary)" : "var(--jl-accent)" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: color === "blue"
                      ? "radial-gradient(ellipse 100% 80% at 50% 0%, color-mix(in srgb, var(--jl-primary) 7%, transparent), transparent)"
                      : "radial-gradient(ellipse 100% 80% at 50% 0%, color-mix(in srgb, var(--jl-accent) 7%, transparent), transparent)",
                  }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: color === "blue" ? "color-mix(in srgb, var(--jl-primary) 14%, transparent)" : "color-mix(in srgb, var(--jl-accent) 14%, transparent)",
                    color: color === "blue" ? "var(--jl-primary)" : "var(--jl-accent)",
                  }}
                >
                  {Icon && <Icon size={18} strokeWidth={1.75} />}
                </div>
                <h3 className="text-base font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
