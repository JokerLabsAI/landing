"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { SiteContent } from "@/lib/locale-types";
import { en } from "@/content/en";
import { es } from "@/content/es";

type Locale = "en" | "es";

const CONTENT_MAP: Record<Locale, SiteContent> = { en, es };
const STORAGE_KEY = "jl-locale";

interface LocaleContextValue {
  locale: Locale;
  content: SiteContent;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  content: en,
  setLocale: () => {},
});

export function useContent() {
  return useContext(LocaleContext).content;
}

export function useLocale() {
  const { locale, setLocale } = useContext(LocaleContext);
  return { locale, setLocale };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "es") setLocaleState(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale, mounted]);

  const setLocale = (l: Locale) => setLocaleState(l);

  return (
    <LocaleContext.Provider value={{ locale, content: CONTENT_MAP[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
