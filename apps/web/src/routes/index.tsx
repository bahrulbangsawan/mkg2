import { createFileRoute } from "@tanstack/react-router";
import { FaqSection } from "@/components/landing/faq-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { StatsSection } from "@/components/landing/stats-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <FooterSection />
    </>
  );
}
