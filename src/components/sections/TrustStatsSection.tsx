"use client";

import React from "react";

export default function TrustStatsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full relative select-none">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN (~60% WIDTH ON DESKTOP) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* HEADING */}
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#222222] tracking-tight leading-snug mb-6 sm:mb-8">
              Trusted by tens of millions worldwide!
            </h2>

            {/* THREE STATISTICS IN ONE HORIZONTAL ROW WITH DIVIDERS */}
            <div className="flex items-center gap-5 sm:gap-8 md:gap-10 pt-1">
              
              {/* STAT 1 */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#222222] tracking-tight">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5">
                  Free
                </span>
              </div>

              {/* VERTICAL DIVIDER 1 */}
              <div className="h-8 sm:h-9 w-[1px] bg-gray-200 flex-shrink-0" />

              {/* STAT 2 */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#222222] tracking-tight">
                  3 Billion
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5">
                  Monthly Searches
                </span>
              </div>

              {/* VERTICAL DIVIDER 2 */}
              <div className="h-8 sm:h-9 w-[1px] bg-gray-200 flex-shrink-0" />

              {/* STAT 3 */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#222222] tracking-tight">
                  9 Million
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5">
                  Monthly Downloads
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN CARD (~40% WIDTH ON DESKTOP) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#FAF9F5] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 border border-black/5 shadow-xs text-center max-w-md mx-auto lg:ml-auto w-full flex flex-col items-center">
              
              {/* CARD HEADING */}
              <h3 className="text-base sm:text-lg font-semibold text-[#222222] tracking-tight mb-4 sm:mb-5">
                Get our free browser today!
              </h3>

              {/* WIDE ORANGE ROUNDED BUTTON */}
              <a
                href="#download"
                className="w-full py-3.5 px-6 bg-[#F05F2B] hover:bg-[#DE4E1A] active:bg-[#B53205] text-white font-bold text-sm sm:text-base rounded-full shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 mb-6 cursor-pointer"
              >
                <span>Download DuckDuckGo Browser</span>
              </a>

              {/* APP STORE & GOOGLE PLAY BADGES AND RATINGS SIDE BY SIDE */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                
                {/* APP STORE COLUMN */}
                <div className="flex flex-col items-center">
                  {/* App Store Badge Button */}
                  <a
                    href="#app-store"
                    className="w-full bg-black text-white rounded-[13px] px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center justify-center gap-2.5 hover:bg-gray-900 transition-colors border border-black cursor-pointer shadow-xs mb-2.5"
                  >
                    {/* Apple Logo SVG */}
                    <svg className="w-6 h-6 text-white fill-current flex-shrink-0" viewBox="0 0 170 170">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.16-1.9-14.49-6.09-3.26-2.64-7.14-7.25-11.64-13.83-7.51-10.99-13.16-22.75-16.94-35.29-3.78-12.54-5.67-24.58-5.67-36.13 0-14.71 3.59-27.14 10.77-37.3 7.18-10.15 16.51-15.3 27.99-15.44 5.3 0 10.89 1.34 16.78 4.03 5.88 2.68 9.87 4.03 11.98 4.03 1.83 0 5.92-1.39 12.28-4.17 6.36-2.78 11.75-4.04 16.16-3.78 10.7.67 19.34 4.54 25.92 11.63-9.47 5.72-14.1 13.84-13.88 24.36.22 8.16 3.4 15.22 9.54 21.18 6.14 5.96 13.43 9.4 21.87 10.33-2.28 6.83-5.27 13.91-8.97 21.24zM119.22 31.84c0-7.39 2.62-14.53 7.86-21.43 5.24-6.9 11.77-10.41 19.59-10.41.22 1.03.33 1.95.33 2.76 0 7.28-2.67 14.47-8.01 21.57-5.34 7.1-11.89 10.74-19.65 10.92-.12-.87-.12-2.01-.12-3.41z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-normal text-gray-300 leading-none mb-0.5 tracking-tight">
                        Download on the
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white leading-none tracking-tight">
                        App Store
                      </span>
                    </div>
                  </a>

                  {/* Rating & Review Count */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#4A4A4A]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#333333]">4.8</span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#555555] font-normal mt-1">
                      2.9 million ratings
                    </span>
                  </div>
                </div>

                {/* GOOGLE PLAY COLUMN */}
                <div className="flex flex-col items-center">
                  {/* Google Play Badge Button */}
                  <a
                    href="#google-play"
                    className="w-full bg-black text-white rounded-[13px] px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center justify-center gap-2.5 hover:bg-gray-900 transition-colors border border-black cursor-pointer shadow-xs mb-2.5"
                  >
                    {/* Multi-color Official Google Play Logo SVG */}
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 512 512">
                      <path fill="#00E676" d="M30.6 15.6c-4.4 4.7-7 11.9-7 20.8v439.2c0 8.9 2.6 16.1 7 20.8l2.2 2.1 245.9-245.9v-5.8L32.8 13.5l-2.2 2.1z" />
                      <path fill="#FF3D00" d="M377.9 346.7l-99.2-99.2v-5.8l99.2-99.2 2.2 1.3 117.5 66.8c33.5 19 33.5 50.3 0 69.4l-117.5 66.7-2.2 0z" />
                      <path fill="#FFEA00" d="M380.1 348l-101.4-101.4L32.8 492.5c11.1 11.7 29.4 13.1 50.1 1.4l297.2-145.9z" />
                      <path fill="#00B0FF" d="M380.1 164L82.9 18.1C62.2 6.4 43.9 7.8 32.8 19.5l245.9 245.9L380.1 164z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-semibold text-gray-300 leading-none mb-0.5 tracking-wider uppercase">
                        GET IT ON
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white leading-none tracking-tight">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* Rating & Review Count */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#4A4A4A]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#333333]">4.7</span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#555555] font-normal mt-1">
                      2.3 million reviews
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
