"use client";

import React from "react";
import {
  TestimonialsData,
  defaultTestimonialsData,
} from "@/data/testimonialsData";

interface TestimonialsCarouselSectionProps {
  data?: TestimonialsData;
  className?: string;
}

export default function TestimonialsCarouselSection({
  data = defaultTestimonialsData,
  className = "",
}: TestimonialsCarouselSectionProps) {
  // Duplicate array 3 times to guarantee smooth, seamless continuous infinite marquee loop
  const marqueeItems = [
    ...data.testimonials,
    ...data.testimonials,
    ...data.testimonials,
  ];

  return (
    <section className={`py-14 sm:py-18 md:py-20 w-full overflow-hidden relative select-none bg-white ${className}`}>
      
      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
          {data.title}
        </h2>
        {data.subheading && (
          <p className="mt-3 text-lg sm:text-xl text-gray-600 font-normal max-w-2xl mx-auto">
            {data.subheading}
          </p>
        )}
      </div>

      {/* MARQUEE CAROUSEL CONTAINER (SHOWS PARTIAL CARDS AT LEFT/RIGHT EDGES) */}
      <div className="w-full overflow-hidden py-4 px-0 relative">
        {/* Continuous Leftward Scrolling Marquee Track */}
        <div className="animate-marquee flex gap-4 sm:gap-5 md:gap-6 items-center">
          {marqueeItems.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] h-[210px] sm:h-[225px] bg-[#F2F4F7] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 border border-gray-200/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-grab active:cursor-grabbing"
              >
                {/* TOP BRAND LOGO / ICON */}
                <div className="h-7 flex items-center">
                  {item.outletLogoType === "wired" && (
                    <div className="flex items-center gap-1">
                      {["W", "I", "R", "E", "D"].map((letter, idx) => (
                        <span
                          key={idx}
                          className="w-5 h-5 sm:w-6 sm:h-6 bg-black text-white font-mono font-bold text-[10px] sm:text-xs flex items-center justify-center rounded-xs"
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.outletLogoType === "engadget" && (
                    <span className="font-mono text-lg sm:text-xl font-bold tracking-tighter text-black lowercase">
                      engadget
                    </span>
                  )}

                  {item.outletLogoType === "cnet" && (
                    <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#E52D27] tracking-tight">
                      CNET
                    </span>
                  )}

                  {item.outletLogoType === "techradar" && (
                    <div className="flex items-center gap-1 text-black font-sans text-base sm:text-lg font-bold tracking-tight">
                      <span>techradar</span>
                      <div className="w-4 h-4 text-[#E60067] flex items-center justify-center">
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3C6.48 3 2 7.48 2 13h2c0-4.41 3.59-8 8-8s8 3.59 8 8h2c0-5.52-4.48-10-10-10zm0 4c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6zm0 4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {item.outletLogoType === "pcmag" && (
                    <div className="bg-[#CC0000] text-white px-2 py-0.5 rounded-sm font-black text-xs sm:text-sm tracking-tight">
                      PCMAG
                    </div>
                  )}

                  {item.outletLogoType === "forbes" && (
                    <span className="font-serif text-lg sm:text-xl font-bold text-black tracking-tight">
                      Forbes
                    </span>
                  )}
                </div>

                {/* TESTIMONIAL QUOTE */}
                <div className="my-1.5 flex-1 flex items-center">
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-snug tracking-tight">
                    <span className="text-base sm:text-lg font-serif text-gray-400 mr-0.5">“</span>
                    {item.id === "wired" ? (
                      <>
                        <span className="underline underline-offset-4 decoration-2 decoration-gray-900 font-semibold">
                          you&apos;re getting
                        </span>{" "}
                        <span className="underline underline-offset-4 decoration-2 decoration-gray-900 font-semibold">
                          maximum protection
                        </span>{" "}
                        <span className="underline underline-offset-4 decoration-2 decoration-gray-900 font-semibold">
                          with minimal effort.
                        </span>
                      </>
                    ) : (
                      <span>{item.quote}</span>
                    )}
                    <span className="text-base sm:text-lg font-serif text-gray-400 ml-0.5">”</span>
                  </p>
                </div>

                {/* REVIEWER FOOTER */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-gray-200/50">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-slate-200 border border-slate-300">
                    {item.avatarUrl ? (
                      <img
                        src={item.avatarUrl}
                        alt={item.author}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                        {item.author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-gray-900">
                      {item.author}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {item.outlet}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

