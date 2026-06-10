"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useContent } from "@/components/layout/LocaleProvider";
import { SITE } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const c = useContent();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <RevealBlock><Eyebrow>{c.contact.eyebrow}</Eyebrow></RevealBlock>
            <RevealBlock delay={0.05}>
              <h2 style={{ color: "var(--foreground)", marginTop: "16px" }}>
                {c.contact.line1}
                <br />
                <span style={{ color: "var(--jl-primary)" }}>{c.contact.line2}</span>
              </h2>
            </RevealBlock>
            <RevealBlock delay={0.1}><p className="lead">{c.contact.sub}</p></RevealBlock>
            <RevealBlock delay={0.15}>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3 text-sm" style={{ color: "var(--dim)" }}>
                  <span style={{ color: "var(--jl-accent)" }}>✉</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">{SITE.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "var(--dim)" }}>
                  <span style={{ color: "var(--jl-accent)" }}>📍</span>
                  <span>{SITE.location}</span>
                </div>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <div className="mt-4 p-5 rounded-2xl border" style={{ background: "var(--surf)", borderColor: "var(--border)" }}>
                <p className="text-sm" style={{ color: "var(--dim)" }}>
                  <span style={{ color: "var(--jl-accent)" }}>★</span>{" "}
                  {c.contact.responseTime.split("under 24 hours")[0].split("menos de 24 horas")[0]}
                  <strong style={{ color: "var(--foreground)" }}>
                    {c.locale === "es" ? "menos de 24 horas." : "under 24 hours."}
                  </strong>
                  {" "}{c.locale === "es"
                    ? "Tomamos cada consulta en serio, sin importar el tamaño del proyecto."
                    : "We take every inquiry seriously, regardless of project size."}
                </p>
              </div>
            </RevealBlock>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {status === "sent" ? (
              <motion.div
                className="flex flex-col items-center justify-center gap-5 p-12 rounded-2xl border text-center"
                style={{ background: "var(--surf)", borderColor: "var(--jl-accent)" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={40} style={{ color: "var(--jl-accent)" }} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{c.contact.successTitle}</h3>
                  <p className="text-sm" style={{ color: "var(--dim)" }}>{c.contact.successMsg}</p>
                </div>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                className="flex flex-col items-center justify-center gap-5 p-12 rounded-2xl border text-center"
                style={{ background: "var(--surf)", borderColor: "oklch(0.577 0.245 27.325)" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle size={40} style={{ color: "oklch(0.577 0.245 27.325)" }} />
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                    {c.locale === "es" ? "Error al enviar" : "Failed to send"}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--dim)" }}>
                    {c.locale === "es"
                      ? "Hubo un problema al enviar tu mensaje. Intenta de nuevo o contáctanos por email."
                      : "Something went wrong. Please try again or reach us directly by email."}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-white self-center"
                    style={{ background: "var(--jl-primary)" }}
                  >
                    {c.locale === "es" ? "Intentar de nuevo" : "Try again"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 rounded-2xl border"
                style={{ background: "var(--surf)", borderColor: "var(--border)" }}
              >
                <FormField id="name" label={c.contact.nameLabel} type="text" value={form.name} onChange={handleChange} required autoComplete="name" />
                <FormField id="email" label={c.contact.emailLabel} type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {c.contact.messageLabel} <span style={{ color: "var(--jl-accent)" }}>*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4} value={form.message} onChange={handleChange} required
                    placeholder={c.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border text-sm resize-none outline-none transition-colors"
                    style={{ background: "var(--surf2)", borderColor: "var(--border-s)", color: "var(--foreground)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--jl-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-s)")}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--jl-primary)" }}
                  whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                >
                  {status === "sending" ? (
                    <><Loader2 size={16} className="animate-spin" />{c.contact.sendingLabel}</>
                  ) : (
                    <><Send size={16} />{c.contact.submitLabel}</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ id, label, type, value, onChange, required, autoComplete }: {
  id: string; label: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
        {label}{required && <span style={{ color: "var(--jl-accent)", marginLeft: "4px" }}>*</span>}
      </label>
      <input
        id={id} name={id} type={type} value={value} onChange={onChange} required={required} autoComplete={autoComplete}
        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
        style={{ background: "var(--surf2)", borderColor: "var(--border-s)", color: "var(--foreground)" }}
        onFocus={(e) => (e.target.style.borderColor = "var(--jl-primary)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border-s)")}
      />
    </div>
  );
}
