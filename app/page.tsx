import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import TrustSection from "@/components/home/TrustSection";
import WhyUs from "@/components/home/WhyUs";
import Stats from "@/components/home/Stats";
import TeamPreview from "@/components/home/TeamPreview";
import InsightsPreview from "@/components/home/InsightsPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <WhyUs />
      <Stats />
      <TeamPreview />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
