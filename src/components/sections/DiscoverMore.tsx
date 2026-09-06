"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { discoverItems, DiscoverItem } from "@/data/discoverMore";

function TabIcon({ type }: { type: DiscoverItem["tabIconType"] }) {
  switch (type) {
    case "search":
      return (
        <div className="w-7 h-7 rounded-full bg-[#1A73E8] flex items-center justify-center text-white shrink-0 shadow-2xs">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>
        </div>
      );
    case "ai":
      return (
        <div className="w-7 h-7 rounded-full bg-[#DE5833] flex items-center justify-center text-white shrink-0 p-0.5 shadow-2xs">
          <Image
            src="/images/logo_social-media.png"
            alt="Duck.ai"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
      );
    case "subscription":
      return (
        <div className="w-7 h-7 rounded-full bg-[#9B51E0] flex items-center justify-center text-white shrink-0 shadow-2xs">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </div>
      );
    case "email":
      return (
        <div className="w-7 h-7 rounded-full bg-[#F2994A] flex items-center justify-center text-white shrink-0 shadow-2xs">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
      );
  }
}

export default function DiscoverMore() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = discoverItems.find((item) => item.id === activeId);
  const activeIndex = activeItem ? discoverItems.findIndex((item) => item.id === activeId) : -1;

  return (
    <section className="py-20 px-4 bg-[#FAF9F8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1E1E1E] tracking-tight leading-tight mb-10">
          Discover more from<br />DuckDuckGo.
        </h2>

        {/* Tab Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {discoverItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-gray-900 border border-gray-300 shadow-md ring-2 ring-gray-900/5"
                    : "bg-[#F5F4F0] hover:bg-[#EFECE5] text-gray-800 border border-transparent shadow-2xs"
                }`}
              >
                <TabIcon type={item.tabIconType} />
                <span>{item.tabLabel}</span>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ml-1 transition-colors ${
                    isActive
                      ? "bg-gray-200 text-gray-900"
                      : "bg-gray-200/80 text-gray-600"
                  }`}
                >
                  {isActive ? "−" : "+"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Popover Card & Mock Browser Container (Only shown when activeItem is selected) */}
        {activeItem && (
          <div className="relative max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Floating Popover Card */}
            <div
              className={`transition-all duration-300 relative z-20 mx-auto sm:mx-0 ${
                activeIndex === 0
                  ? "sm:ml-12"
                  : activeIndex === 1
                  ? "sm:ml-[26%]"
                  : activeIndex === 2
                  ? "sm:ml-[48%]"
                  : "sm:ml-[66%]"
              }`}
            >
              {/* Popover Card Container */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl border border-gray-100 max-w-md w-full text-left relative">
                {/* Pointer Triangle */}
                <div className="absolute -top-2.5 left-12 w-5 h-5 bg-white border-t border-l border-gray-100 rotate-45 z-30" />

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1E1E1E] mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-gray-600 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                <Link
                  href={activeItem.buttonUrl}
                  target={activeItem.buttonUrl.startsWith("http") ? "_blank" : "_self"}
                  className="bg-[#DE5833] hover:bg-[#C94723] active:bg-[#B53C1B] text-white font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>{activeItem.buttonText}</span>
                  {activeItem.hasArrow && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  )}
                </Link>
              </div>
            </div>

            {/* Large Blue Mockup Container underneath */}
            <div className="w-full rounded-[32px] bg-[#4A90E2] p-4 sm:p-8 md:p-10 -mt-16 sm:-mt-20 relative z-10 overflow-hidden shadow-xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-end">
              {/* Background Decorative Ripples */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

              {/* Mock Browser Interface */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl overflow-hidden w-full max-w-4xl mx-auto">
                {/* Browser Window Bar */}
                <div className="bg-[#F1F3F4] px-4 py-3 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Mock Address Bar */}
                  <div className="bg-white rounded-full px-4 py-1.5 text-xs text-gray-500 font-sans flex items-center gap-2 flex-1 max-w-md mx-4 shadow-2xs border border-gray-200/60">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.5" y2="16.5" />
                    </svg>
                    <span>duckduckgo.com</span>
                  </div>

                  <div className="w-12" />
                </div>

                {/* Browser Window Body Content Preview */}
                <div className="p-6 sm:p-8 bg-[#FAF9F8] min-h-[220px] flex flex-col items-center justify-center text-center">
                  {activeId === "private-search" && (
                    <div className="space-y-4 max-w-md w-full">
                      <div className="flex items-center gap-2 justify-center">
                        <Image
                          src="/images/logo_social-media.png"
                          alt="Logo"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-xl text-gray-900 font-display">DuckDuckGo</span>
                      </div>
                      <div className="bg-white rounded-full p-3 px-5 border border-gray-200 shadow-sm flex items-center justify-between text-xs text-gray-500">
                        <span>Search privately...</span>
                        <span className="bg-[#1A73E8] text-white px-3 py-1 rounded-full font-bold text-[10px]">
                          Protected
                        </span>
                      </div>
                    </div>
                  )}

                  {activeId === "duck-ai" && (
                    <div className="space-y-3 max-w-md w-full text-left">
                      <div className="bg-white p-3 rounded-2xl border border-gray-200 text-xs shadow-2xs text-gray-800 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-bold">Duck.ai Chat:</span> Anonymous AI models enabled.
                      </div>
                      <div className="bg-blue-50 p-3 rounded-2xl text-xs text-blue-900 font-medium">
                        "Summarize quantum computing in 3 bullet points privately."
                      </div>
                    </div>
                  )}

                  {activeId === "subscription" && (
                    <div className="space-y-3 max-w-md w-full">
                      <div className="bg-white p-4 rounded-2xl border border-purple-200 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                            🛡️
                          </div>
                          <div className="text-left text-xs">
                            <p className="font-bold text-gray-900">Privacy Pro VPN</p>
                            <p className="text-gray-500 text-[11px]">Connected • Encrypted</p>
                          </div>
                        </div>
                        <span className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                  )}

                  {activeId === "email" && (
                    <div className="space-y-3 max-w-md w-full">
                      <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                            ✉️
                          </div>
                          <div className="text-left text-xs">
                            <p className="font-bold text-gray-900">@duck.com Alias</p>
                            <p className="text-gray-500 text-[11px]">34 Trackers Blocked Today</p>
                          </div>
                        </div>
                        <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          Protected
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
