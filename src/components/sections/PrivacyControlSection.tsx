"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PrivacyControlData,
  defaultPrivacyControlData,
} from "@/data/privacyControlData";

interface PrivacyControlSectionProps {
  data?: PrivacyControlData;
  className?: string;
}

export default function PrivacyControlSection({
  data = defaultPrivacyControlData,
  className = "",
}: PrivacyControlSectionProps) {
  // Initial state is null (no card expanded initially)
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  const activeCard = data.cards.find((card) => card.id === activeCardId);
  const activeCardIndex = data.cards.findIndex((card) => card.id === activeCardId);

  const containerBg = data.bgColor || "bg-[#CEEAD9]";
  const cardBg = data.cardBgColor || "bg-[#EAF7F0]";
  const buttonBg = data.buttonBgColor || "bg-[#D2EDE0] text-[#195642]";

  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative ${className}`}>
      {/* Outer Rounded Container with Customizable Background */}
      <div className={`${containerBg} rounded-[36px] md:rounded-[48px] px-6 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16 md:px-16 md:pt-14 md:pb-20 shadow-xs relative flex flex-col items-center transition-colors`}>
        
        {/* TOP ILLUSTRATION GRAPHIC */}
        {data.headerImage && (
          <div className="w-full max-w-3xl mx-auto mb-6 flex justify-center">
            <Image
              src={data.headerImage}
              alt={data.heading}
              width={720}
              height={400}
              className="w-full h-auto max-w-2xl md:max-w-3xl object-contain drop-shadow-sm select-none"
              priority
            />
          </div>
        )}

        {/* SECTION HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#191919] text-center max-w-2xl leading-tight tracking-tight">
          {data.heading}
        </h2>

        {/* SUBHEADING */}
        <p className="mt-4 text-base sm:text-lg text-slate-700 text-center max-w-3xl font-normal leading-relaxed">
          {data.subheading}
        </p>

        {/* INTERACTIVE CARDS ROW */}
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          {data.cards.map((card) => {
            const isActive = activeCardId === card.id;

            return (
              <button
                key={card.id}
                onClick={() => toggleCard(card.id)}
                type="button"
                className={`text-left w-full rounded-2xl p-5 transition-all duration-200 border flex items-center justify-between gap-3 cursor-pointer group shadow-xs ${
                  isActive
                    ? "bg-white border-yellow-600 ring-2 ring-yellow-500/20 shadow-md"
                    : `${cardBg} hover:bg-white border-slate-900/5 hover:border-slate-400/30 hover:shadow-xs`
                }`}
                aria-expanded={isActive}
              >
                {/* Card Icon & Text Container */}
                <div className="flex items-center gap-3.5 flex-1">
                  {/* Icon Renderer */}
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                    {/* Incognito Icon */}
                    {card.iconType === "incognito" && (
                      <div className="w-11 h-11 rounded-full bg-[#3B82F6] flex items-center justify-center relative shadow-xs">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                        </svg>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-black text-white p-0.5 rounded-full border border-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Trackers Window Icon */}
                    {card.iconType === "trackers" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#A855F7] p-2 flex flex-col justify-between relative shadow-xs">
                        <div className="w-full h-1.5 bg-purple-900/30 rounded-xs flex items-center px-1">
                          <div className="w-1 h-1 rounded-full bg-white/70" />
                        </div>
                        <div className="w-full flex-1 bg-purple-950/20 rounded-xs mt-1" />
                        <div className="absolute -bottom-0.5 -right-0.5 bg-rose-500 text-white rounded-full p-0.5 border border-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Fire Icon */}
                    {card.iconType === "fire" && (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center shadow-xs">
                        <svg className="w-6 h-6 text-white drop-shadow-xs" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-1.048c-2.4 1.2-4.225 3.484-4.8 5.688M16.5 12a4.5 4.5 0 11-9 0 3.5 3.5 0 014.288-3.418c.28.058.552.164.796.315.614.38 1.05.993 1.216 1.703.35 1.5.025 3.036-.8 4.3a.5.5 0 00.8.6c1.1-1.6 1.5-3.6 1-5.5a5.5 5.5 0 00-2.4-3.5 1 1 0 00-1.2.1A5.002 5.002 0 0010 10.5a.5.5 0 01-1 0 6.002 6.002 0 013.6-5.5 1 1 0 00.6-1.1c-.2-.7-.6-1.3-1.1-1.8z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Mask Icon */}
                    {card.iconType === "mask" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#C084FC] flex items-center justify-center relative shadow-xs p-1">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 4C7.03 4 3 7.13 3 11c0 2.22 1.32 4.18 3.38 5.42.23.14.37.38.37.64 0 1.2.45 2.3 1.21 3.12.18.2.45.29.72.24.27-.05.49-.24.58-.5.35-1.04 1.13-1.9 2.14-2.39.2-.1.43-.07.6.07C12.67 18.15 13.34 18.5 14 18.5c2.48 0 4.5-1.57 4.5-3.5 0-.28.22-.5.5-.5s.5.22.5.5c0 2.48-2.46 4.5-5.5 4.5-.83 0-1.63-.16-2.37-.45-.44.82-1.18 1.48-2.08 1.83C9.03 21.08 8.44 21.2 7.84 21.2c-.32 0-.64-.04-.95-.12-1.13-.3-2.08-1.01-2.69-1.99C1.65 17.47 0 14.42 0 11 0 5.48 5.37 1 12 1s12 4.48 12 10c0 3.42-1.65 6.47-4.2 8.09-.61.98-1.56 1.69-2.69 1.99-.31.08-.63.12-.95.12-.6 0-1.19-.12-1.71-.32-.9-.35-1.64-1.01-2.08-1.83-.74.29-1.54.45-2.37.45z" />
                          <circle cx="8" cy="11" r="2.5" fill="#3B0764" />
                          <circle cx="16" cy="11" r="2.5" fill="#3B0764" />
                        </svg>
                      </div>
                    )}

                    {/* Cookie Icon */}
                    {card.iconType === "cookie" && (
                      <div className="w-11 h-11 rounded-full bg-[#FBBF24] flex items-center justify-center relative shadow-xs border border-amber-300">
                        <svg className="w-7 h-7 text-amber-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1-.54.34-1.18.53-1.86.53-1.98 0-3.59-1.61-3.59-3.59 0-.68.19-1.32.53-1.86-.33-.03-.66-.05-1-.05-1.98 0-3.59-1.61-3.59-3.59 0-.68.19-1.32.53-1.86-.33-.03-.66-.05-1-.05zm-3 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-2 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm7 2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
                        </svg>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-rose-500 text-white rounded-full p-0.5 border border-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* YouTube Icon */}
                    {card.iconType === "youtube" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#EA580C] flex items-center justify-center relative shadow-xs">
                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                        </svg>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-[#22C55E] text-white rounded-full p-0.5 border border-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* AI Models Icon */}
                    {card.iconType === "ai-models" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#F59E0B] p-2 flex flex-col justify-between relative shadow-xs">
                        <div className="w-full h-1.5 bg-amber-900/30 rounded-xs flex items-center px-1">
                          <div className="w-1 h-1 rounded-full bg-white/80" />
                        </div>
                        <div className="w-full flex-1 bg-amber-950/20 rounded-xs mt-1" />
                        <div className="absolute -bottom-0.5 -right-0.5 bg-black text-white p-0.5 rounded-full border border-white">
                          <svg className="w-3 h-3 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Chat Lock Icon */}
                    {card.iconType === "chat-lock" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#C084FC] flex items-center justify-center relative shadow-xs">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                        <div className="absolute -bottom-0.5 -left-0.5 bg-black text-white p-0.5 rounded-full border border-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Sparkles Toggle Icon */}
                    {card.iconType === "sparkles-toggle" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#3B82F6] p-2 flex flex-col justify-between relative shadow-xs">
                        <div className="w-full h-1.5 bg-blue-900/30 rounded-xs flex items-center px-1">
                          <div className="w-1 h-1 rounded-full bg-white/80" />
                        </div>
                        <div className="w-full flex-1 bg-blue-950/20 rounded-xs mt-1" />
                        <div className="absolute -bottom-0.5 -right-0.5 bg-purple-600 text-white p-0.5 rounded-full border border-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Search Glass Icon (Purple magnifying glass) */}
                    {card.iconType === "search-glass" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#C084FC] flex items-center justify-center relative shadow-xs">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    )}

                    {/* Password Key Icon (Blue key) */}
                    {card.iconType === "password-key" && (
                      <div className="w-11 h-11 rounded-full bg-[#3B82F6] flex items-center justify-center relative shadow-xs">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                      </div>
                    )}

                    {/* Email Lock Icon (Yellow envelope with lock badge) */}
                    {card.iconType === "email-lock" && (
                      <div className="w-11 h-11 rounded-2xl bg-[#F59E0B] flex items-center justify-center relative shadow-xs">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-black text-white p-0.5 rounded-full border border-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Title Text */}
                  <span className="font-medium text-gray-900 text-sm leading-snug group-hover:text-slate-950">
                    {card.title}
                  </span>
                </div>

                {/* Plus / Minus Action Button */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive
                      ? "bg-slate-300 text-slate-800"
                      : `${buttonBg} group-hover:opacity-90`
                  }`}
                >
                  {isActive ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* COMPACT POPOVER SPEECH BUBBLE MODAL */}
      {activeCard && (
        <div className="w-full max-w-md sm:max-w-lg mx-auto -mt-6 sm:-mt-8 relative z-30 transition-all duration-300 animate-fadeIn">
          <div className="bg-[#FFFDF9] border border-amber-900/10 rounded-2xl p-5 sm:p-6 shadow-xl relative text-gray-900">
            
            {/* Pointer Arrow pointing UP towards active card */}
            <div
              className="absolute -top-2.5 w-5 h-5 bg-[#FFFDF9] border-t border-l border-amber-900/10 rotate-45 transition-all duration-300 shadow-xs"
              style={{
                left:
                  activeCardIndex === 0
                    ? "18%"
                    : activeCardIndex === 1
                    ? "50%"
                    : "82%",
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />

            {/* Compact Popover Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 tracking-tight">
              {activeCard.popover.heading}
            </h3>

            {/* Compact Popover Paragraphs */}
            <div className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {activeCard.popover.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
