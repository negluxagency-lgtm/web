import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { TechStack } from "@/components/landing/TechStack";
import { BarberShowcase } from "@/components/landing/BarberShowcase";
import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#fe9a00] selection:text-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <BarberShowcase />
      <About />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
