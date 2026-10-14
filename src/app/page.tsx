import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}