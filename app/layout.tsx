import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jokerlabs.ai"),
  title: "Joker Labs — Every suit. One hand.",
  description:
    "Joker Labs is the creative technology lab that turns any idea or problem into high-impact solutions — AI, software, automation, and systems under one roof.",
  keywords: ["AI", "software", "automation", "systems", "technology lab", "Colombia"],
  authors: [{ name: "Joker Labs" }],
  openGraph: {
    title: "Joker Labs — Every suit. One hand.",
    description: "Creative technology lab. AI, software, automation, and systems under one roof. Cali, Colombia — working globally.",
    type: "website",
    url: "https://jokerlabs.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joker Labs — Every suit. One hand.",
    description: "Creative technology lab. AI · Software · Automation · Systems.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jokerlabs.ai" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-space)]`}>
        <ThemeProvider defaultTheme="dark" storageKey="jl-theme">
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
