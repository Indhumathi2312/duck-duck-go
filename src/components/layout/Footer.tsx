"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full relative mt-auto bg-white text-gray-900 pt-12 sm:pt-16 overflow-hidden select-none">
      
      {/* TOP THIN DIVIDER LINE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10 sm:mb-12">
        <div className="border-t border-gray-200/80 w-full" />
      </div>

      {/* MAIN FOOTER THREE-COLUMN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12">
        
        {/* COLUMN 1: LEARN MORE */}
        <div className="md:col-span-3">
          <h3 className="font-bold text-gray-900 text-base mb-4 sm:mb-5">
            Learn More
          </h3>
          <ul className="flex flex-col space-y-2.5 text-sm font-medium text-[#3B82F6]">
            <li>
              <a href="#" className="hover:underline">About DuckDuckGo</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Our Browser</a>
            </li>
            <li>
              <a href="#" className="hover:underline">What's New</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Compare Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Newsletter</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Podcast</a>
            </li>
          </ul>
        </div>

        {/* COLUMN 2: OTHER RESOURCES */}
        <div className="md:col-span-3">
          <h3 className="font-bold text-gray-900 text-base mb-4 sm:mb-5">
            Other Resources
          </h3>
          <ul className="flex flex-col space-y-2.5 text-sm font-medium text-[#3B82F6]">
            <li>
              <a href="#" className="hover:underline">Help</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Community</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Press Kit</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Advertise on Search</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Collaborations</a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: ABOUT DUCKDUCKGO TEXT */}
        <div className="md:col-span-6">
          <h3 className="font-bold text-gray-900 text-base mb-4 sm:mb-5">
            About DuckDuckGo
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed font-normal">
            At DuckDuckGo, we believe the best way to protect your personal information from hackers, scammers, and privacy-invasive companies is to stop it from being collected at all. That's why millions of people{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">
              choose DuckDuckGo over Chrome and other browsers
            </a>{" "}
            to search and browse online. Our built-in search engine is like Google but never tracks your searches, and our browser blocks ads, trackers, and cookies that collect your data. It also offers private, useful, and optional AI, including{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">
              Duck.ai
            </a>
            , which lets you chat privately with ChatGPT, Claude, and other AIs, all in one place. Oh, and our browser is free. We make money from{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">
              privacy-respecting search ads
            </a>
            , not by exploiting your data. Available to download on{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">Mac</a>,{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">Windows</a>,{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">iOS</a>, and{" "}
            <a href="#" className="text-[#3B82F6] hover:underline font-medium">Android</a>.
          </p>
        </div>

      </div>

      {/* MIDDLE THIN DIVIDER LINE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6">
        <div className="border-t border-gray-200/80 w-full" />
      </div>

      {/* COPYRIGHT & TAGLINE ROW */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-700 font-medium mb-12 sm:mb-16 gap-3">
        <span>
          © 2026 <a href="#" className="text-[#3B82F6] hover:underline font-medium">DuckDuckGo</a>
        </span>
        <span className="text-gray-700 font-medium">
          Protection. Privacy. Peace of mind.
        </span>
      </div>

      {/* BOTTOM PONDWATER ILLUSTRATION */}
      <div className="w-full overflow-hidden leading-none mt-auto">
        <img
          src="/images/footer-pondwater-light.01e3u~_txqt1r.svg"
          alt="DuckDuckGo Pondwater Footer Graphic"
          className="w-full h-auto object-cover block dark:hidden"
        />
        <img
          src="/images/footer-pondwater-dark.0c~-4vucj475c.svg"
          alt="DuckDuckGo Pondwater Footer Graphic Dark"
          className="w-full h-auto object-cover hidden dark:block"
        />
      </div>

    </footer>
  );
}
