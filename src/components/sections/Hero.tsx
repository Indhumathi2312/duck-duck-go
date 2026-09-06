"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 px-4 overflow-hidden bg-[#FAF9F8]">
      {/* Background SVG - pond water motif */}
     

      <div className="max-w-4xl w-full text-center space-y-8 sm:space-y-10 z-10 relative">
        {/* Main Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-[52px] lg:text-[58px] leading-[1.16] text-[#1E1E1E] tracking-tight max-w-[760px] mx-auto">
          Switch to DuckDuckGo.<br />
          <span className="inline-flex items-center justify-center gap-1.5 flex-wrap mt-1">
            <span>It’s private</span>
            <Image
              src="/images/shield-burst-light.0mn81rqc-79~t.svg"
              alt="Shield graphic"
              width={48}
              height={48}
              className="w-9 h-9 sm:w-11 sm:h-11 inline-block object-contain"
            />
            <span>and free!</span>
          </span>
        </h1>

        {/* Action Cards Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-4 w-full max-w-[780px] mx-auto px-2">
          {/* Card 1: Default Search Engine */}
          <div className="w-full sm:w-[350px] bg-white rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-between text-center border border-gray-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all min-h-[300px]">
            <div className="flex-1 flex flex-col items-center justify-center">
              <Image
                src="/images/set-as-default.15sik~ccs1lxl.svg"
                alt="Magnifying glass illustration"
                width={80}
                height={80}
                className="w-18 h-18 sm:w-20 sm:h-20 object-contain my-2"
              />
              <p className="text-[#222222] font-medium text-sm sm:text-[15px] leading-snug px-3 my-4">
                Make DuckDuckGo your default search engine.
              </p>
            </div>
            <button
              type="button"
              className="w-full bg-[#EDEDED] hover:bg-[#E2E2E2] active:bg-[#D6D6D6] text-[#222222] font-bold py-3 px-6 rounded-full text-xs sm:text-sm transition-colors shadow-2xs"
            >
              Set As Default Search
            </button>
          </div>

          {/* Card 2: Browser Download */}
          <div className="w-full sm:w-[350px] bg-white rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-between text-center border border-gray-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all min-h-[300px] relative">
            {/* Top Left Badge */}
            <div className="absolute -top-3 left-6 sm:left-7 bg-[#D2EAFC] text-[#1B6CA8] text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full tracking-wider uppercase shadow-2xs z-10">
              Best Privacy
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <Image
                src="/images/download-browser.07.8d8b2vpl1n.svg"
                alt="Browser illustration"
                width={80}
                height={80}
                className="w-18 h-18 sm:w-20 sm:h-20 object-contain my-2"
              />
              <p className="text-[#222222] font-medium text-sm sm:text-[15px] leading-snug px-3 my-4">
                Get our free browser for even more privacy.
              </p>
            </div>

            <button
              type="button"
              className="w-full bg-[#DE5833] hover:bg-[#C94723] active:bg-[#B53C1B] text-white font-bold py-3 px-6 rounded-full text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Download Browser</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sub-caption */}
        <p className="text-gray-600 font-sans font-medium text-xs sm:text-sm text-center pt-2 tracking-wide">
          Trusted by tens of millions worldwide!
        </p>
      </div>

      {/* Center Bottom Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition cursor-pointer"
          aria-label="Scroll down"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </button>
      </div>

      {/* Bottom Right AI Settings Pill Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        <button
          type="button"
          className="flex items-center gap-1.5 bg-[#EDEDED] hover:bg-[#E2E2E2] active:bg-[#D6D6D6] text-gray-800 font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-full shadow-md transition-all"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          <span className="hidden sm:inline">AI Settings</span>
        </button>
      </div>
    </section>
  );
}

