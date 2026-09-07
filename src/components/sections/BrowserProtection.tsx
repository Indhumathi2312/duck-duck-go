"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { protectionFeaturesData, ProtectionFeature } from "@/data/protectionFeatures";

function FeatureIcon({ type }: { type: ProtectionFeature["iconType"] }) {
  switch (type) {
    case "shield":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center -mt-11 mb-2">
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 6L10 16v18c0 14 10 23 22 26 12-3 22-12 22-26V16L32 6z"
              fill="#3B8869"
              stroke="#2C6951"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Sparkle lines */}
            <line x1="6" y1="12" x2="2" y2="10" stroke="#3B8869" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="6" x2="8" y2="2" stroke="#3B8869" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "cookie":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center -mt-11 mb-2">
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 8c-2 0-4 .3-6 1 1.5 3.5.8 7.5-2 10s-6.5 3.5-10 2C13.3 22.8 13 25.3 13 28c0 10.5 8.5 19 19 19s19-8.5 19-19c0-2.7-.3-5.2-1-7-3.5 1.5-7.5.8-10-2s-3.5-6.5-2-10c-1.8-.7-4.3-1-7-1z"
              fill="#F5BA42"
              stroke="#D49925"
              strokeWidth="2.5"
            />
            <circle cx="27" cy="29" r="2" fill="#333" />
            <circle cx="39" cy="29" r="2" fill="#333" />
            <circle cx="33" cy="37" r="1.8" fill="#D49925" />
            <circle cx="23" cy="38" r="1.5" fill="#D49925" />
            <circle cx="41" cy="36" r="1.8" fill="#D49925" />
          </svg>
        </div>
      );
    case "mask":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center -mt-11 mb-2">
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
            <path
              d="M12 24c4 4 10 7 20 7s16-3 20-7c4 8 0 20-10 20-4 0-7-4-10-4s-6 4-10 4C12 44 8 32 12 24z"
              fill="#B08BBB"
              stroke="#8A6496"
              strokeWidth="2.5"
            />
            <ellipse cx="22" cy="30" rx="4.5" ry="3.5" fill="#FAF8F5" stroke="#8A6496" strokeWidth="1.5" />
            <ellipse cx="42" cy="30" rx="4.5" ry="3.5" fill="#FAF8F5" stroke="#8A6496" strokeWidth="1.5" />
          </svg>
        </div>
      );
  }
}

export default function BrowserProtection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FAF9F8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Blue Showcase Banner */}
        <div className="w-full rounded-[36px] bg-[#4A90E2] p-4 sm:p-10 md:p-14 relative overflow-hidden shadow-xl">
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

          {/* Container with Mascot and Mock Browser */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Cartoon Duck Mascot (Left Side) */}
            <div className="hidden lg:block absolute -left-12 bottom-0 z-20 pointer-events-none">
              <div className="relative w-44 h-52">
                <Image
                  src="/images/logo_social-media.png"
                  alt="Duck Mascot"
                  width={160}
                  height={190}
                  className="w-full h-full object-contain transform -rotate-6 hover:rotate-0 transition-transform"
                />
              </div>
            </div>

            {/* Central Mock Browser Window */}
            <div className="bg-white rounded-[28px] shadow-2xl border border-gray-100 overflow-hidden w-full max-w-2xl text-center">
              {/* Browser Window Bar */}
              <div className="bg-[#F1F3F4] px-4 py-3 flex items-center justify-between border-b border-gray-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto py-0.5 max-w-xs sm:max-w-md">
                  <div className="bg-white px-3 py-1 rounded-t-lg font-medium text-gray-800 text-[11px] flex items-center gap-1.5 shadow-2xs border border-gray-200 border-b-0">
                    <Image src="/images/logo_social-media.png" alt="DDG" width={14} height={14} />
                    <span>DuckDuckGo</span>
                  </div>
                  <div className="bg-gray-200/70 px-2.5 py-1 rounded-t-lg text-gray-500 text-[11px]">
                    🛡️ Privacy
                  </div>
                  <div className="bg-gray-200/70 px-2.5 py-1 rounded-t-lg text-gray-500 text-[11px]">
                    +
                  </div>
                </div>

                <div className="text-gray-400 font-bold">🔥</div>
              </div>

              {/* Browser Address Input Bar */}
              <div className="bg-[#F8F9FA] px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                <div className="flex items-center gap-1 text-gray-400">
                  <span>←</span>
                  <span>→</span>
                  <span>↻</span>
                </div>
                <div className="bg-white border border-gray-200/80 rounded-full px-4 py-1 text-xs text-gray-400 font-sans flex-1 text-left flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.5" y2="16.5" />
                  </svg>
                  <span>Search or enter address</span>
                </div>
              </div>

              {/* Main Card Content */}
              <div className="p-8 sm:p-12 bg-white flex flex-col items-center justify-center">
                {/* Logo Badge */}
                <div className="mb-4">
                  <Image
                    src="/images/logo_social-media.png"
                    alt="DuckDuckGo Logo"
                    width={72}
                    height={72}
                    className="w-16 h-16 sm:w-18 sm:h-18 object-contain"
                  />
                </div>

                {/* Main Card Headline */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-[34px] text-[#1E1E1E] leading-snug max-w-lg mb-8">
                  The browser that actively protects your personal information.
                </h3>

                {/* Primary Button */}
                <Link
                  href="#"
                  className="bg-[#DE5833] hover:bg-[#C94723] active:bg-[#B53C1B] text-white font-bold py-3.5 px-8 rounded-full text-sm sm:text-base inline-flex items-center gap-2 shadow-md transition-colors mb-6"
                >
                  <span>Download DuckDuckGo for Windows</span>
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
                </Link>

                {/* Secondary Microsoft Store Subtext */}
                <div className="flex items-center justify-center gap-3 text-xs text-gray-500 font-medium">
                  <span>Also available on the Microsoft Store</span>
                  <div className="border border-gray-200 rounded-lg px-3 py-1.5 bg-white flex items-center gap-2 shadow-2xs hover:border-gray-300 transition-colors cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" fill="#00A4EF" />
                    </svg>
                    <div className="text-left text-[10px] leading-tight">
                      <p className="text-gray-400">Download from the</p>
                      <p className="font-bold text-gray-800">Microsoft Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {protectionFeaturesData.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FAF8F5] border border-[#EFEBE4] rounded-[24px] p-6 sm:p-7 flex flex-col items-center justify-between text-center min-h-[170px] shadow-2xs hover:shadow-md transition-shadow relative"
            >
              <FeatureIcon type={feature.iconType} />

              <h4 className="font-display font-bold text-base sm:text-lg text-[#1E1E1E] leading-snug my-2 px-2">
                {feature.title}
              </h4>

              <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mt-2">
                {feature.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
