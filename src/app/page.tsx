import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import DiscoverMore from "@/components/sections/DiscoverMore";
import BrowserProtection from "@/components/sections/BrowserProtection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import DownloadSection from "@/components/sections/DownloadSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col relative z-0">
      <Navbar />
      <Hero />
      <DiscoverMore />
      <BrowserProtection />
      <ComparisonSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
