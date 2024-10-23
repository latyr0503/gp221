import AboutSection from "@/components/sections/About-section";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/Info-section";
import Newsletter from "@/components/sections/Newsletter";
import RealisationSection from "@/components/sections/Realisation-Section";
import ServicesSection from "@/components/sections/Services-Section";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <InfoSection />
      <RealisationSection />
      <Newsletter />
    </div>
  );
}
