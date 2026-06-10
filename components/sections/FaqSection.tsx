"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { fadeUp, viewportOnce } from "@/lib/motion";

function useTypewriter(text: string, speed = 22, active = false) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) { setDisplayed(""); return; }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 1000 / speed);
    return () => clearInterval(interval);
  }, [text, speed, active]);
  return displayed;
}

function BotBubble({ text, active }: { text: string; active: boolean }) {
  const displayed = useTypewriter(text, 22, active);
  const done = displayed.length >= text.length;
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "color-mix(in srgb, var(--jl-primary) 15%, transparent)", color: "var(--jl-primary)" }}>
        <Bot size={14} />
      </div>
      <div className="flex-1 px-4 py-3.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed max-w-[85%]" style={{ background: "var(--surf2)", color: "var(--foreground)" }}>
        {displayed}
        {!done && <span className="inline-block w-0.5 h-4 ml-0.5 animate-pulse" style={{ background: "var(--jl-accent)", verticalAlign: "middle" }} />}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="flex-1 px-4 py-3.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed max-w-[85%] text-right" style={{ background: "color-mix(in srgb, var(--jl-primary) 12%, transparent)", color: "var(--foreground)" }}>
        {text}
      </div>
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--surf2)", color: "var(--dim)" }}>
        <User size={14} />
      </div>
    </div>
  );
}

export function FaqSection() {
  const c = useContent();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  // Reset chat on locale change
  useEffect(() => { setActiveIndex(null); setHistory([]); }, [c.locale]);

  const handleQuestion = (i: number) => {
    setActiveIndex(i);
    setHistory((prev) => prev.includes(i) ? prev : [...prev, i]);
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [history, activeIndex]);

  return (
    <section id="faq" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <RevealBlock><Eyebrow>{c.faq.eyebrow}</Eyebrow></RevealBlock>
          <RevealBlock delay={0.05}>
            <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
              {c.faq.line1}
              <br />
              <span style={{ color: "var(--dim)" }}>{c.faq.line2}</span>
            </h2>
          </RevealBlock>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Questions */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--faint)", fontFamily: "var(--font-mono-jb)" }}>
              {c.faq.selectLabel}
            </p>
            {c.faq.items.map(({ question }, i) => (
              <motion.button
                key={i}
                onClick={() => handleQuestion(i)}
                className="flex items-start gap-3 px-4 py-3.5 rounded-xl border text-left text-sm font-medium transition-colors"
                style={{
                  background: activeIndex === i ? "color-mix(in srgb, var(--jl-primary) 10%, transparent)" : "var(--surf)",
                  borderColor: activeIndex === i ? "var(--jl-primary)" : "var(--border)",
                  color: activeIndex === i ? "var(--foreground)" : "var(--dim)",
                }}
                whileHover={{ scale: 1.01, borderColor: "var(--jl-primary)" }}
                whileTap={{ scale: 0.99 }}
              >
                <span style={{ color: "var(--jl-accent)", flexShrink: 0, fontFamily: "var(--font-mono-jb)", fontSize: "11px", paddingTop: "2px" }}>
                  0{i + 1}
                </span>
                {question}
              </motion.button>
            ))}
          </div>

          {/* Chat window */}
          <div className="flex flex-col rounded-2xl border overflow-hidden" style={{ background: "var(--surf)", borderColor: "var(--border)", minHeight: "440px" }}>
            <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex gap-1.5">
                {["#F56565", "#ECC94B", "#68D391"].map((col) => (
                  <div key={col} className="w-2.5 h-2.5 rounded-full" style={{ background: col }} />
                ))}
              </div>
              <span className="text-xs font-medium" style={{ color: "var(--dim)", fontFamily: "var(--font-mono-jb)" }}>
                {c.faq.chatHeader}
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs" style={{ color: "var(--dim)" }}>{c.faq.chatStatus}</span>
              </div>
            </div>

            <div ref={chatRef} className="flex flex-col gap-4 p-5 flex-1 overflow-y-auto" style={{ maxHeight: "380px" }}>
              {history.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-center" style={{ color: "var(--faint)" }}>{c.faq.chatEmpty}</p>
                </div>
              )}
              <AnimatePresence initial={false}>
                {history.map((idx) => (
                  <motion.div key={`pair-${idx}`} className="flex flex-col gap-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                    <UserBubble text={c.faq.items[idx].question} />
                    <BotBubble text={c.faq.items[idx].answer} active={activeIndex === idx && history[history.length - 1] === idx} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
