import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col relative z-0">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
