import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroScreen } from "@/components/layout/IntroScreen";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WhySection } from "@/components/sections/WhySection";
import { CompareSection } from "@/components/sections/CompareSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <IntroScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <WhySection />
        <CompareSection />
        <AboutSection />
        <ProcessSection />
        <FaqSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
