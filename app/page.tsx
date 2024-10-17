import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import React from "react";
// import hero from "@/assets/Baniere Marché Alizé 2.png";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <div className="hero_section text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          veritatis esse, quos autem adipisci pariatur quibusdam at quo dicta
          tempora quas sunt ea rerum voluptatibus, minus consequuntur in minima
          provident!
        </div>
      </header>
      <main className="">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <p className="text-3xl p-5">
          Get started by editing Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nulla, neque quae repudiandae exercitationem
          voluptatibus odio corporis! Laboriosam, nobis asperiores quam at iste
          accusamus consequuntur quis a perspiciatis ipsam voluptates. Rem.
        </p>
      </main>
      <footer className="bg-red-700 text-white text-center">
        <Footer />
      </footer>
    </div>
  );
}
