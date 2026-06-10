"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fire once when the section enters the viewport
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  // Large enough to exceed the full stroke perimeter of all 9 glyphs
  const DASH = 2500;

  return (
    <div ref={containerRef} className={cn("w-full h-full", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
        aria-hidden
      >
        {/* ── Layer 1: Solid fill fades in after drawing completes ─────
            Gives the letters their final "soft bold watermark" weight.  */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-[helvetica] text-7xl font-black"
          style={{ fill: "var(--foreground)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.11 } : { opacity: 0 }}
          transition={{ duration: 2.5, delay: 4.0, ease: "easeOut" }}
        >
          {text}
        </motion.text>

        {/* ── Layer 2: Drawing stroke ──────────────────────────────────
            Bright while writing, then fades to a barely-there outline. */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.7"
          className="fill-transparent font-[helvetica] text-7xl font-black"
          style={{
            stroke: "var(--foreground)",
            strokeDasharray: DASH,
          }}
          initial={{ strokeDashoffset: DASH, opacity: 0 }}
          animate={
            isInView
              ? {
                  strokeDashoffset: 0,
                  // snap visible → hold bright during draw → soften to rest
                  opacity: [0, 0.85, 0.85, 0.16],
                }
              : {}
          }
          transition={{
            strokeDashoffset: { duration: 4.0, ease: "easeInOut" },
            opacity: {
              duration: 5.8,
              // 0% → snap in | 5% → full brightness | 68% → hold | 100% → soft
              times: [0, 0.05, 0.68, 1],
              ease: "easeOut",
            },
          }}
        >
          {text}
        </motion.text>
      </svg>
    </div>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(26, 110, 219, 0.08) 0%, transparent 65%)",
      }}
    />
  );
};
