"use client";

import React from "react";
import Link from "next/link";
import { platformsData, PlatformItem } from "@/data/platformsData";

function PlatformIcon({ type }: { type: PlatformItem["iconType"] }) {
  switch (type) {
    case "windows":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" fill="currentColor" />
        </svg>
      );
    case "mac":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M2 20h20" />
        </svg>
      );
    case "android":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1v-8H6v8zM3.5 8C2.67 8 2 8.67 2 9.5v5c0 .83.67 1.5 1.5 1.5S5 15.33 5 14.5v-5C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71a.495.495 0 0 0-.71 0l-1.48 1.48C13.63 1.23 12.36 1 11 1c-1.36 0-2.63.23-3.64.63L5.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C4.59 3.56 3 5.95 3 8.7h16c0-2.75-1.59-5.14-3.47-6.54zM8.5 6.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      );
    case "ios":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.98.04-2.19.66-2.88 1.47-.62.72-1.16 1.88-.99 3.01 1.1.09 2.22-.55 2.88-1.38z" />
        </svg>
      );
  }
}

export default function DownloadSection() {
  return (
    <section className="py-24 px-4 bg-[#FAF9F8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Main Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#1E1E1E] leading-[1.18] tracking-tight max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-2">
            <span className="inline-flex items-center gap-1.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline-block text-[#3B8869]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#3B8869" />
              </svg>
              <span>Protection.</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline-block text-[#9B51E0]">
                <path d="M12 22c4 4 10 7 20 7s16-3 20-7c4 8 0 20-10 20-4 0-7-4-10-4s-6 4-10 4C12 42 8 30 12 22z" fill="#9B51E0" />
              </svg>
              <span>Privacy.</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline-block text-[#3B82F6]">
                <path d="M17.5 19C19.98 19 22 16.98 22 14.5c0-2.24-1.63-4.1-3.76-4.44C17.76 6.55 14.7 4 11 4 7.56 4 4.69 6.25 3.56 9.43 1.54 9.9 0 11.72 0 14c0 2.76 2.24 5 5 5h12.5z" fill="#3B82F6" />
              </svg>
              <span>Peace of mind.</span>
            </span>
          </div>
          <span>Get the browser built for data protection,</span>
          <br />
          <span>not data collection.</span>
        </h2>

        {/* Sub-headline */}
        <p className="text-gray-600 font-sans font-medium text-sm sm:text-base pt-2">
          The DuckDuckGo browser is available on
        </p>

        {/* Platform Pill Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap pt-2">
          {platformsData.map((platform) => (
            <Link
              key={platform.id}
              href={platform.downloadUrl}
              className="bg-[#EDEDED] hover:bg-[#E2E2E2] active:bg-[#D6D6D6] text-gray-900 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-colors shadow-2xs"
            >
              <PlatformIcon type={platform.iconType} />
              <span>{platform.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
