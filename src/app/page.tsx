import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import DiscoverMore from "@/components/sections/DiscoverMore";
import BrowserProtection from "@/components/sections/BrowserProtection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import DownloadSection from "@/components/sections/DownloadSection";
import PrivacyControlSection from "@/components/sections/PrivacyControlSection";
import TestimonialsCarouselSection from "@/components/sections/TestimonialsCarouselSection";
import TrustStatsSection from "@/components/sections/TrustStatsSection";
import FAQSection from "@/components/sections/FAQSection";
import { defaultPrivacyControlData } from "@/data/privacyControlData";
import { defaultAdBlockingData } from "@/data/adBlockingData";
import { defaultAiChatData } from "@/data/aiChatData";
import { defaultDataProtectionData } from "@/data/dataProtectionData";

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
      <PrivacyControlSection data={defaultPrivacyControlData} />
      <PrivacyControlSection data={defaultAdBlockingData} />
      <PrivacyControlSection data={defaultAiChatData} />
      <PrivacyControlSection data={defaultDataProtectionData} />
      <TestimonialsCarouselSection />
      <TrustStatsSection />
      <FAQSection />
      
      <Footer />
    </main>
  );
}





