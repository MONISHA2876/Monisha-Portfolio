import Divider from "@/component/Divider";
import AboutSection from "@/pages/AboutSection";
import HeroSection from "@/pages/HeroSection";
import SmoothScroll from "@/providers/SmoothScroll";
import Scrollstripereveal from "@/component/Scrollstripereveal";
import SelectedWork from "@/component/ProjectDisplay";

export default function Home() {
  return (
    <SmoothScroll>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Scrollstripereveal />
      <div className="pt-40 bg-neutral-100">
        <SelectedWork />
      </div>
      
    </SmoothScroll>
  );
}
