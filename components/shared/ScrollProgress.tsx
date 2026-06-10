"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[9998] h-[2px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #1A6EDB, #00C9A7)",
        boxShadow: "0 0 8px rgba(26,110,219,.5)",
        transition: "width 0.1s linear",
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
