"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const COLORS = {
  sapphire: {
    primary: "var(--jl-primary)",
    glow: "color-mix(in srgb, var(--jl-primary) 22%, transparent)",
    bg: "radial-gradient(ellipse 130% 100% at 50% 110%, color-mix(in srgb, var(--jl-primary) 14%, transparent) 0%, transparent 70%)",
    iconBg: "color-mix(in srgb, var(--jl-primary) 13%, transparent)",
    tagBg: "color-mix(in srgb, var(--jl-primary) 10%, transparent)",
    tagBorder: "color-mix(in srgb, var(--jl-primary) 28%, transparent)",
    shadow: "0 28px 72px -16px color-mix(in srgb, var(--jl-primary) 28%, transparent), 0 0 0 1px var(--jl-primary)",
  },
  teal: {
    primary: "var(--jl-accent)",
    glow: "color-mix(in srgb, var(--jl-accent) 22%, transparent)",
    bg: "radial-gradient(ellipse 130% 100% at 50% 110%, color-mix(in srgb, var(--jl-accent) 14%, transparent) 0%, transparent 70%)",
    iconBg: "color-mix(in srgb, var(--jl-accent) 13%, transparent)",
    tagBg: "color-mix(in srgb, var(--jl-accent) 10%, transparent)",
    tagBorder: "color-mix(in srgb, var(--jl-accent) 28%, transparent)",
    shadow: "0 28px 72px -16px color-mix(in srgb, var(--jl-accent) 28%, transparent), 0 0 0 1px var(--jl-accent)",
  },
};

const FLOAT_DELAYS = [0, 1.1, 0.55, 1.65];

function ServiceCard({
  suit, title, tag, desc, color, index,
}: {
  suit: string; title: string; tag: string; desc: string;
  color: "sapphire" | "teal"; index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const g = COLORS[color];

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: ny * 10, y: -nx * 10 });
  };

  const onMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      style={{ perspective: "1100px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="relative flex flex-col rounded-2xl border overflow-hidden cursor-default"
        style={{
          background: "var(--surf)",
          borderColor: hovered ? g.primary : "var(--border)",
          minHeight: "296px",
          transformStyle: "preserve-3d",
          boxShadow: hovered ? g.shadow : "0 4px 28px -8px rgba(0,0,0,0.35)",
        }}
        animate={{
          rotateX: hovered ? tilt.x : 0,
          rotateY: hovered ? tilt.y : 0,
          y: hovered ? -10 : 0,
          scale: hovered ? 1.025 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
      >
        {/* Color wash on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: g.bg }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.45 }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 100%)",
            opacity: 0.5,
          }}
        />

        {/* Watermark suit */}
        <div
          className="absolute bottom-3 right-4 pointer-events-none select-none leading-none"
          style={{
            fontSize: "80px",
            fontWeight: 900,
            color: g.primary,
            opacity: hovered ? 0.09 : 0.04,
            transition: "opacity 0.4s ease",
          }}
          aria-hidden
        >
          {suit}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-7 gap-5">
          {/* Top row: icon + tag */}
          <div className="flex items-start justify-between gap-3">
            {/* Suit icon with float + glow */}
            <motion.div
              className="relative flex items-center justify-center w-14 h-14 rounded-xl text-2xl font-bold select-none flex-shrink-0"
              style={{ background: g.iconBg, color: g.primary }}
              animate={{
                y: [0, -7, 0],
                scale: hovered ? 1.12 : 1,
              }}
              transition={{
                y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: FLOAT_DELAYS[index] },
                scale: { type: "spring", stiffness: 280, damping: 18 },
              }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ background: g.glow }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.18, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: FLOAT_DELAYS[index] }}
              />
              <span className="relative z-10">{suit}</span>
            </motion.div>

            {/* Tag pill */}
            <motion.span
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap mt-1"
              style={{
                color: g.primary,
                background: g.tagBg,
                borderColor: g.tagBorder,
                fontFamily: "var(--font-mono-jb)",
              }}
              animate={{ opacity: hovered ? 1 : 0.75 }}
              transition={{ duration: 0.3 }}
            >
              {tag}
            </motion.span>
          </div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "var(--dim)" }}
            animate={{ opacity: hovered ? 1 : 0.6, y: hovered ? 0 : 3 }}
            transition={{ duration: 0.35 }}
          >
            {desc}
          </motion.p>

          {/* Animated accent bar */}
          <motion.div
            className="h-[2px] rounded-full self-start"
            style={{
              background: `linear-gradient(90deg, ${g.primary}, transparent)`,
            }}
            animate={{ width: hovered ? "100%" : "28px" }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

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
          {items.map(({ suit, title, tag, desc, color }, i) => (
            <ServiceCard
              key={suit}
              suit={suit}
              title={title}
              tag={tag}
              desc={desc}
              color={color}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
