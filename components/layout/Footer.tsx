"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { useContent } from "@/components/layout/LocaleProvider";
import { SITE, NAV_ITEMS, MARQUEE_ITEMS_2 } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const MARQUEE_ITEMS_DOUBLED = [...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2];
const SUITS = ["♠", "♦", "♣", "♥"];

// ── Custom brand SVG icons ────────────────────────────────────────────────────
function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconTikTok({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: SITE.instagram, label: "Instagram", Icon: IconInstagram },
  { href: SITE.tiktok,    label: "TikTok",    Icon: IconTikTok },
  { href: SITE.facebook,  label: "Facebook",  Icon: IconFacebook },
  { href: SITE.linkedin,  label: "LinkedIn",  Icon: IconLinkedIn },
  { href: SITE.youtube,   label: "YouTube",   Icon: IconYouTube },
];

export function Footer() {
  const c = useContent();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const rawScale   = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.55, 0.1]);
  const rawY       = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const scale   = useSpring(rawScale,   { stiffness: 60, damping: 18 });
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 18 });
  const y       = useSpring(rawY,       { stiffness: 60, damping: 18 });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      {/* Top accent glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--jl-primary), transparent)",
          boxShadow: "0 0 24px 2px color-mix(in srgb, var(--jl-primary) 40%, transparent)",
        }}
      />

      {/* Ghost JOKERLABS — soft scroll-driven parallax */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        aria-hidden
      >
        <motion.span
          className="text-[clamp(64px,16vw,200px)] font-black tracking-tighter leading-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px var(--border-s)",
            scale,
            opacity,
            y,
          }}
        >
          JOKERLABS
        </motion.span>
      </div>

      {/* Marquee strip */}
      <div
        className="relative flex overflow-hidden py-4 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {MARQUEE_ITEMS_DOUBLED.map(({ text, suit }, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-medium px-4"
              style={{ color: "var(--dim)" }}
            >
              <span style={{ color: "var(--jl-accent)" }}>{suit}</span>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bold CTA callout */}
      <motion.div
        className="relative border-b"
        style={{ borderColor: "var(--border)" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="wrap py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--jl-primary)", fontFamily: "var(--font-mono-jb)" }}
            >
              {c.footer.contactLabel}
            </p>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight leading-none"
              style={{ color: "var(--foreground)" }}
            >
              {c.footer.cta}
            </h2>
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-base font-bold text-white flex-shrink-0"
            style={{
              background: "var(--jl-primary)",
              boxShadow: "0 0 32px color-mix(in srgb, var(--jl-primary) 45%, transparent)",
            }}
            whileHover={{ scale: 1.06, boxShadow: "0 0 48px color-mix(in srgb, var(--jl-primary) 60%, transparent)" }}
            whileTap={{ scale: 0.96 }}
          >
            {c.footer.cta}
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </motion.a>
        </div>
      </motion.div>

      {/* Main grid */}
      <div className="relative wrap section-pad">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand col */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <span className="text-xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>
                JokerLabs
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
              {c.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--dim)" }}>
              <MapPin size={13} />
              <span>{SITE.location}</span>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--dim)" }}
            >
              <Mail size={13} />
              {SITE.email}
            </a>

            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <SocialLink key={label} href={href} label={label}>
                  <Icon size={16} />
                </SocialLink>
              ))}
            </div>
          </motion.div>

          {/* Nav col */}
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--faint)", fontFamily: "var(--font-mono-jb)" }}
            >
              {c.footer.navigateLabel}
            </span>
            {NAV_ITEMS.map(({ href }, i) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href.replace("#", "")); }}
                className="group flex items-center gap-1.5 text-sm transition-colors w-fit"
                style={{ color: "var(--dim)" }}
              >
                <span className="transition-colors group-hover:text-[var(--foreground)]">
                  {c.nav.items[i]}
                </span>
                <ArrowUpRight
                  size={11}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--jl-primary)" }}
                />
              </a>
            ))}
          </motion.div>

          {/* Contact col */}
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--faint)", fontFamily: "var(--font-mono-jb)" }}
            >
              {c.footer.contactLabel}
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
            >
              {SITE.email}
            </a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="mt-2 flex w-fit items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white"
              style={{
                background: "var(--jl-primary)",
                boxShadow: "0 0 24px color-mix(in srgb, var(--jl-primary) 35%, transparent)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 36px color-mix(in srgb, var(--jl-primary) 50%, transparent)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {c.footer.cta}
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-xs" style={{ color: "var(--faint)" }}>
            © {new Date().getFullYear()} JokerLabs. All rights reserved.
          </span>

          {/* Animated suits */}
          <div className="flex items-center gap-4">
            {SUITS.map((suit, i) => (
              <motion.span
                key={suit}
                className="text-lg font-bold"
                style={{ color: "var(--faint)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ color: "var(--jl-accent)", scale: 1.4 }}
              >
                {suit}
              </motion.span>
            ))}
          </div>

          <span
            className="text-xs"
            style={{ color: "var(--faint)", fontFamily: "var(--font-mono-jb)" }}
          >
            {c.footer.taglineBottom}
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-full border transition-colors"
      style={{ color: "var(--dim)", borderColor: "var(--border-s)" }}
      whileHover={{
        color: "var(--foreground)",
        borderColor: "var(--jl-primary)",
        scale: 1.12,
        boxShadow: "0 0 12px color-mix(in srgb, var(--jl-primary) 35%, transparent)",
      }}
      whileTap={{ scale: 0.92 }}
    >
      {children}
    </motion.a>
  );
}
