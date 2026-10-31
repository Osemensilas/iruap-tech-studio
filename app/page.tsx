import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import HomeHeroComponent from "@/components/pages/home/Home";
import OtherServices from "@/components/pages/home/OtherServices";
import Services from "@/components/pages/home/Services";
import SelectedProjects from "@/components/pages/home/Project";
import type { Metadata } from "next";
import PricingSection from "@/components/pages/home/PricingSection";

export const metadata: Metadata = {
  title: "Home Page - Iruap Tech Studio",
  description: "",
};

export default function Home() {
  return (
    <>
    <main className="h-max w-screen">
      <HomeHeroComponent />
      <Services />
      <About />
      <SelectedProjects />
      <PricingSection />
      <Contact />
      <OtherServices />
    </main>
    </>
  );
}
