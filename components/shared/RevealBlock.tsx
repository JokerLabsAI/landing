"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface RevealBlockProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export function RevealBlock({ children, delay = 0, className, as = "div" }: RevealBlockProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}
