"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/Logo";

const SUITS = ["♠", "♦", "♣", "♥"];

export function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [suitIndex, setSuitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuitIndex((i) => (i + 1) % SUITS.length);
    }, 400);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setVisible(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
          style={{ background: "var(--background)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Logo size={100} />
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              JokerLabs
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={suitIndex}
                className="text-2xl"
                style={{ color: "var(--jl-accent)" }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
              >
                {SUITS[suitIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--dim)" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
