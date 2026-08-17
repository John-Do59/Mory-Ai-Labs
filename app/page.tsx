import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectsSection from "@/components/ProjectsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProjectsSection />
      <ExpertiseSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
