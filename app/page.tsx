import CarteSection from "@/components/sections/Carte-section";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Newsletter from "@/components/sections/Newsletter";
import RealisationSection from "@/components/sections/Realisation-Section";
import ServicesSection from "@/components/sections/Services-Section";
import React from "react";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="py-12">
        <ServicesSection />
        <CarteSection />
        <RealisationSection />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
