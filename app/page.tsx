import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TechStack } from "@/components/landing/TechStack";
import { Services } from "@/components/landing/Services";
import { BarberShowcase } from "@/components/landing/BarberShowcase";
import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-zinc-950">
      <Navbar />
      <Hero />
      <div className="flex flex-col w-full">
        <div className="order-2 md:order-1 w-full">
          <TechStack />
        </div>
        <div className="order-1 md:order-2 w-full">
          <Services />
        </div>
      </div>
      <BarberShowcase />
      <About />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
}
