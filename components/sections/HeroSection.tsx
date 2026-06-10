"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { useContent } from "@/components/layout/LocaleProvider";
import { MARQUEE_ITEMS } from "@/lib/constants";

const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const CARD_W = "clamp(108px, 11vw, 148px)";
const CARD_H = "clamp(156px, 15.5vw, 212px)";

function JokerCard() {
  return (
    <div
      className="relative flex flex-col items-start justify-between p-3 rounded-2xl border overflow-hidden select-none"
      style={{
        width: CARD_W,
        height: CARD_H,
        background: "var(--surf)",
        borderColor: "var(--jl-primary)",
        boxShadow: "0 16px 48px -10px color-mix(in srgb, var(--jl-primary) 40%, transparent)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 110%, color-mix(in srgb, var(--jl-primary) 12%, transparent), transparent)",
        }}
      />
      {/* Inner frame */}
      <div
        className="absolute inset-[5px] rounded-[10px] pointer-events-none"
        style={{ border: "1px solid color-mix(in srgb, var(--jl-primary) 22%, transparent)" }}
      />
      {/* Watermark suit */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
        style={{ opacity: 0.045, fontSize: "90px", color: "var(--jl-primary)", lineHeight: 1 }}
      >
        ♠
      </div>

      {/* Top-left corner */}
      <div
        className="flex flex-col items-center leading-[1.1] z-10"
        style={{ color: "var(--jl-primary)", fontFamily: "var(--font-mono-jb)", fontSize: "11px", fontWeight: 700 }}
      >
        <span>JL</span>
        <span style={{ fontSize: "14px" }}>♠</span>
      </div>

      {/* Center brand text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span
          className="font-black tracking-tighter"
          style={{
            fontSize: "clamp(18px, 3.5vw, 27px)",
            background: "linear-gradient(135deg, var(--jl-primary) 0%, var(--jl-accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          JOKER
        </span>
      </div>

      {/* Bottom-right corner (rotated 180°) */}
      <div
        className="self-end flex flex-col items-center leading-[1.1] rotate-180 z-10"
        style={{ color: "var(--jl-primary)", fontFamily: "var(--font-mono-jb)", fontSize: "11px", fontWeight: 700 }}
      >
        <span>JL</span>
        <span style={{ fontSize: "14px" }}>♠</span>
      </div>
    </div>
  );
}

function LabsCard() {
  return (
    <div
      className="relative flex flex-col items-start justify-between p-3 rounded-2xl overflow-hidden select-none"
      style={{
        width: CARD_W,
        height: CARD_H,
        background: "linear-gradient(160deg, var(--jl-primary) 0%, var(--jl-accent) 100%)",
        boxShadow: "0 16px 48px -10px color-mix(in srgb, var(--jl-primary) 55%, transparent)",
      }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 15% 15%, rgba(255,255,255,0.22), transparent)",
        }}
      />
      {/* Inner frame */}
      <div
        className="absolute inset-[5px] rounded-[10px] pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.22)" }}
      />
      {/* Watermark suit */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
        style={{ opacity: 0.13, fontSize: "90px", color: "white", lineHeight: 1 }}
      >
        ♥
      </div>

      {/* Top-left corner */}
      <div
        className="flex flex-col items-center leading-[1.1] z-10"
        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-mono-jb)", fontSize: "11px", fontWeight: 700 }}
      >
        <span>JL</span>
        <span style={{ fontSize: "14px" }}>♥</span>
      </div>

      {/* Center brand text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span
          className="font-black tracking-tighter text-white"
          style={{ fontSize: "clamp(18px, 3.5vw, 27px)" }}
        >
          LABS
        </span>
      </div>

      {/* Bottom-right corner (rotated 180°) */}
      <div
        className="self-end flex flex-col items-center leading-[1.1] rotate-180 z-10"
        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-mono-jb)", fontSize: "11px", fontWeight: 700 }}
      >
        <span>JL</span>
        <span style={{ fontSize: "14px" }}>♥</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const c = useContent();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setWordIndex(0);
  }, [c.locale]);

  useEffect(() => {
    const t = setTimeout(
      () => setWordIndex((i) => (i + 1) % c.hero.cycleWords.length),
      2200,
    );
    return () => clearTimeout(t);
  }, [wordIndex, c.hero.cycleWords.length]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "100px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, var(--jl-primary) 12%, transparent) 0%, transparent 70%),
            radial-gradient(ellipse 40% 35% at 80% 80%, color-mix(in srgb, var(--jl-accent) 8%, transparent) 0%, transparent 60%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black, transparent)",
        }}
      />

      <div className="relative wrap flex flex-col items-center text-center gap-8 z-10 pb-36">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
        </motion.div>

        {/* JOKER | LABS playing cards */}
        <div className="flex items-center gap-4" style={{ perspective: "900px" }}>

          {/* JOKER — enters from top-left */}
          <motion.div
            initial={{ x: -220, y: -100, rotate: -24, opacity: 0, scale: 0.75 }}
            animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.25 }}
            whileHover={{ rotateY: -20, rotateX: 9, scale: 1.08, transition: { duration: 0.28 } }}
            style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
          >
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.9 }}
            >
              <JokerCard />
            </motion.div>
          </motion.div>

          {/* LABS — enters from bottom-right */}
          <motion.div
            initial={{ x: 220, y: 100, rotate: 24, opacity: 0, scale: 0.75 }}
            animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.45 }}
            whileHover={{ rotateY: 20, rotateX: -9, scale: 1.08, transition: { duration: 0.28 } }}
            style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
          >
            <motion.div
              animate={{ y: [0, 11, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            >
              <LabsCard />
            </motion.div>
          </motion.div>
        </div>

        {/* Cycling headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h1
            className="font-black tracking-tighter leading-none"
            style={{ fontSize: "clamp(40px, 6.5vw, 82px)" }}
          >
            <span style={{ color: "var(--foreground)" }}>{c.hero.cyclePrefix}</span>
            <br />
            <span
              className="relative flex justify-center overflow-hidden"
              style={{ height: "1.12em", paddingBottom: "0.06em" }}
            >
              &nbsp;
              {c.hero.cycleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="absolute whitespace-nowrap"
                  initial={{ opacity: 0, y: 80 }}
                  transition={{ type: "spring", stiffness: 58, damping: 22 }}
                  animate={
                    wordIndex === i
                      ? { y: 0, opacity: 1 }
                      : { y: wordIndex > i ? -80 : 80, opacity: 0 }
                  }
                  style={{
                    background:
                      "linear-gradient(135deg, var(--jl-primary) 0%, var(--jl-accent) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="lead max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.45, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {c.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <MagneticButton>
            <motion.button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white"
              style={{ background: "var(--jl-primary)" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {c.hero.cta}
            </motion.button>
          </MagneticButton>

          <motion.button
            onClick={() => scrollTo("work")}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium border"
            style={{ color: "var(--dim)", borderColor: "var(--border-s)", background: "var(--glass)" }}
            whileHover={{ color: "var(--foreground)", borderColor: "var(--jl-primary)", scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {c.hero.secondary}
          </motion.button>
        </motion.div>

        {/* Marquee chips */}
        <motion.div
          className="flex gap-3 mt-2 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          {MARQUEE_ITEMS.map(({ text, suit }, i) => (
            <motion.span
              key={suit}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border"
              style={{ color: "var(--dim)", borderColor: "var(--border)", background: "var(--surf)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75 + i * 0.08 }}
            >
              {suit} {text}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: "var(--faint)" }}
        onClick={() => scrollTo("services")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        aria-label="Scroll to services"
      >
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono-jb)" }}
        >
          {c.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      {/* Bottom marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 flex overflow-hidden py-3 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {MARQUEE_DOUBLED.map(({ text, suit }, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-xs font-medium px-4"
              style={{ color: "var(--faint)" }}
            >
              <span style={{ color: "var(--jl-primary)" }}>{suit}</span>
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
