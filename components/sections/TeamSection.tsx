"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { TEAM } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function TeamSection() {
  const c = useContent();

  const members = TEAM.map((m, i) => ({
    ...m,
    role: c.team.roles[i] ?? m.role,
  }));

  return (
    <section id="team" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.team.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.team.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.team.line2}</span>
            </h2>
          </RevealBlock>
          <RevealBlock delay={0.1}><p className="lead">{c.team.sub}</p></RevealBlock>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {members.map(({ initials, name, role, suit }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl border w-full max-w-[200px]"
              style={{ background: "var(--surf)", borderColor: "var(--border)" }}
              whileHover={{ y: -6, borderColor: "var(--jl-primary)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold"
                  style={{ background: "color-mix(in srgb, var(--jl-primary) 12%, var(--surf2))", color: "var(--jl-primary)" }}
                >
                  {initials}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: "var(--jl-primary)", color: "#fff" }}>
                  {suit}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{name}</span>
                <span className="text-xs" style={{ color: "var(--dim)", fontFamily: "var(--font-mono-jb)" }}>{role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
