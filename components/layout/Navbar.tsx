"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useContent, useLocale } from "@/components/layout/LocaleProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_ITEMS } from "@/lib/constants";

const SECTION_IDS = NAV_ITEMS.map((n) => n.href.replace("#", ""));

export function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const content = useContent();
  const activeId = useActiveSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = NAV_ITEMS.map((item, i) => ({
    ...item,
    label: content.nav.items[i] ?? item.name,
  }));

  const pillStyle = {
    background: "var(--glass)",
    borderColor: "var(--border-s)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: "0 4px 24px rgba(0,0,0,.35)",
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-20 sm:h-24"
        style={{ pointerEvents: "none" }}
      >
        {/* Brand pill — LEFT */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          className="absolute left-3 top-4 sm:left-6 sm:top-5 md:left-8 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border sm:px-4"
          style={{ ...pillStyle, pointerEvents: "auto" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Logo size={26} />
          <span className="hidden text-sm font-semibold tracking-tight min-[380px]:inline" style={{ color: "var(--foreground)" }}>
            JokerLabs
          </span>
        </motion.a>

        {/* Links pill — ABSOLUTE CENTER (desktop only) */}
        <div
          className="absolute left-1/2 top-4 hidden -translate-x-1/2 items-center gap-1 rounded-full border px-2 py-2 sm:top-5 lg:flex"
          style={{ ...pillStyle, pointerEvents: "auto" }}
        >
          {navItems.map(({ label, href, icon: Icon }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                className="relative flex h-9 items-center gap-1.5 rounded-full px-3 text-[13px] font-medium transition-colors duration-200 xl:px-3.5"
                style={{ color: isActive ? "var(--foreground)" : "var(--dim)" }}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
              >
                {isActive && (
                  <motion.div
                    layoutId="tubelight-lamp"
                    className="absolute inset-0 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ background: "color-mix(in srgb, var(--jl-primary) 10%, transparent)" }}
                  >
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-t-full"
                      style={{ background: "var(--jl-primary)", boxShadow: "0 0 8px var(--jl-primary)" }}
                    >
                      <div className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                        style={{ background: "color-mix(in srgb, var(--jl-primary) 30%, transparent)" }} />
                      <div className="absolute w-8 h-6 rounded-full blur-md -top-1"
                        style={{ background: "color-mix(in srgb, var(--jl-primary) 20%, transparent)" }} />
                      <div className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                        style={{ background: "color-mix(in srgb, var(--jl-primary) 15%, transparent)" }} />
                    </div>
                  </motion.div>
                )}
                <Icon size={13} strokeWidth={2} />
                <span className="hidden xl:inline">{label}</span>
              </a>
            );
          })}
        </div>

        {/* Controls pill — RIGHT */}
        <div
          className="absolute right-3 top-4 flex items-center gap-1 rounded-full border px-2 py-2 sm:right-6 sm:top-5 md:right-8"
          style={{ ...pillStyle, pointerEvents: "auto" }}
        >
          {/* Language toggle */}
          <motion.button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="flex items-center justify-center h-9 px-2.5 rounded-full text-[12px] font-semibold tracking-wider transition-colors"
            style={{ color: "var(--dim)", fontFamily: "var(--font-mono-jb)" }}
            whileHover={{ color: "var(--foreground)", scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
            aria-label="Toggle language"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={locale}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18 }}
              >
                {locale === "en" ? "EN" : "ES"}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{ color: "var(--dim)" }}
            whileHover={{ color: "var(--foreground)", scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={16} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={16} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA — desktop */}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="hidden items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-white lg:flex"
            style={{ background: "var(--jl-primary)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {content.nav.cta}
          </motion.a>

          {/* Hamburger — mobile only */}
          <motion.button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
            style={{ color: "var(--dim)" }}
            whileHover={{ color: "var(--foreground)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-6 px-8"
            style={{ background: "var(--glass)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map(({ label, href, icon: Icon }, i) => {
              const id = href.replace("#", "");
              return (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  className="flex items-center gap-3 text-2xl font-semibold"
                  style={{ color: activeId === id ? "var(--jl-primary)" : "var(--foreground)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Icon size={22} />
                  {label}
                </motion.a>
              );
            })}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="mt-4 px-8 py-3.5 rounded-full font-semibold text-white text-base"
              style={{ background: "var(--jl-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.06 }}
            >
              {content.nav.cta}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
