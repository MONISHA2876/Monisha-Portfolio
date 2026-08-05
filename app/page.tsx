import Divider from "@/component/Divider";
import AboutSection from "@/pages/AboutSection";
import HeroSection from "@/pages/HeroSection";
import SmoothScroll from "@/providers/SmoothScroll";
import Scrollstripereveal from "@/component/Scrollstripereveal";

export default function Home() {
  return (
    <SmoothScroll>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Scrollstripereveal />
    </SmoothScroll>
  );
}
