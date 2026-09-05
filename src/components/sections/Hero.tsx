import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background SVG - light mode pond water */}
      <div className="absolute inset-0 z-[-1] flex justify-center w-full h-full pointer-events-none opacity-50 hidden dark:block">
        <Image 
          src="/images/hero-pondwater-dark.08dduo68t0qdl.svg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-[-1] flex justify-center w-full h-full pointer-events-none opacity-100 dark:hidden">
        <Image 
          src="/images/hero-pondwater-light.03vfa0oh968qg.svg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl w-full text-center space-y-12 z-10 relative">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[56px] leading-tight text-gray-900 mx-auto max-w-[800px]">
          Switch to DuckDuckGo.<br />
          <span className="flex items-center justify-center gap-2 flex-wrap">
            It is private <span className="inline-block mt-2"><Image src="/images/shield-burst-light.0mn81rqc-79~t.svg" alt="Shield" width={48} height={48} className="dark:hidden" /><Image src="/images/shield-burst-dark.17y.4wo0f9d.1.svg" alt="Shield" width={48} height={48} className="hidden dark:block" /></span> and free!
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mt-12 w-full max-w-[900px] mx-auto px-2">
          {/* Default Search Engine Card */}
          <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
            <div className="mb-6 h-[100px] flex items-end">
              <Image 
                src="/images/set-as-default.15sik~ccs1lxl.svg"
                alt="Search Icon"
                width={80}
                height={80}
              />
            </div>
            <h3 className="font-sans text-lg font-medium text-gray-800 mb-6 min-h-[56px]">
              Set DuckDuckGo as your default search engine.
            </h3>
            <button className="w-full sm:w-auto bg-gray-100/80 hover:bg-gray-200/80 text-gray-800 font-bold py-3.5 px-8 rounded-full transition-colors text-base">
              Set as default search engine
            </button>
          </div>

          {/* Browser Download Card */}
          <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative">
            <div className="absolute -top-3 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Best Privacy
            </div>
            <div className="mb-6 h-[100px] flex items-end">
              <Image 
                src="/images/download-browser.07.8d8b2vpl1n.svg"
                alt="Browser Icon"
                width={80}
                height={80}
              />
            </div>
            <h3 className="font-sans text-lg font-medium text-gray-800 mb-6 min-h-[56px]">
              Download our free browser for even more privacy.
            </h3>
            <button className="w-full sm:w-auto bg-[#f05f2b] hover:bg-[#cc3b0a] text-white font-bold py-3.5 px-8 rounded-full transition-colors text-base">
              Download browser
            </button>
          </div>
        </div>

        <p className="text-gray-600 font-sans font-medium text-[15px] pt-8">
          Trusted by millions of people all over the world!
        </p>
      </div>
    </section>
  );
}
