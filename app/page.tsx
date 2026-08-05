import Divider from "@/component/Divider";
import AboutSection from "@/pages/AboutSection";
import HeroSection from "@/pages/HeroSection";
import Skills from "@/pages/Skills";
import SmoothScroll from "@/providers/SmoothScroll";
import Scrollstripereveal from "@/component/Scrollstripereveal";
import ProjectSection from "@/pages/ProjectSection";

export default function Home() {
  return (
    <SmoothScroll>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Scrollstripereveal />
      <ProjectSection />
      <Skills />
    </SmoothScroll>
  );
}
