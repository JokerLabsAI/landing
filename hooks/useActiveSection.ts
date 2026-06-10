"use client";

import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds: string[], rootMargin = "-40% 0px -55% 0px") {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin },
    );

    const obs = observerRef.current;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
