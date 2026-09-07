"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- SVG Icons ---
function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function SparkleBubbleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path
        d="M12 7.5c0 1.5-.8 2.5-2.2 2.5 1.4 0 2.2 1 2.2 2.5 0-1.5.8-2.5 2.2-2.5-1.4 0-2.2-1-2.2-2.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function SlantedSlidersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function AtomIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-30 12 12)" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AudioWaveformIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="8" y1="7" x2="8" y2="17" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="16" y1="9" x2="16" y2="15" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function DownloadIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<"search" | "ask-ai">("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("5.6 Luna");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isToolsActive, setIsToolsActive] = useState(false);
  const [isReasoningActive, setIsReasoningActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aiModels = ["5.6 Luna", "GPT-4o mini", "Claude 3.5 Haiku", "Llama 3.3 70B"];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF9F8]/95 backdrop-blur-md border-b border-gray-200/50 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Top Header Row (Mobile & Desktop) */}
          <div className="w-full md:w-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logo-horizontal-light.13cuc5c2xx53h.svg"
                alt="DuckDuckGo Logo"
                width={160}
                height={44}
                priority
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Right Action Icons on Mobile */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                href="https://duck.ai"
                target="_blank"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-black"
              >
                <SparkleBubbleIcon className="w-4 h-4 text-gray-700" />
                <span>Duck.ai</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="p-1.5 text-gray-700 hover:text-black rounded-lg hover:bg-gray-200/70 transition cursor-pointer"
                aria-label="Open menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Bar Container */}
          <div className="w-full md:flex-1 md:max-w-2xl lg:max-w-3xl">
            {activeTab === "search" ? (
              /* --- DEFAULT SEARCH MODE BAR --- */
              <div className="w-full bg-white rounded-full border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_3px_16px_rgba(0,0,0,0.09)] transition-all flex items-center justify-between p-1.5 pl-5 gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search privately"
                  className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 font-sans text-sm sm:text-[15px]"
                />

                {/* Mode Toggle Pill */}
                <div className="flex items-center bg-[#EDEDED] p-1 rounded-full text-xs font-medium shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("search")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-gray-900 font-semibold shadow-xs transition-all cursor-pointer"
                  >
                    <SearchIcon className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("ask-ai")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-600 hover:text-gray-900 font-medium transition-all cursor-pointer"
                  >
                    <SparkleBubbleIcon className="w-3.5 h-3.5" />
                    <span>Ask AI</span>
                  </button>
                </div>
              </div>
            ) : (
              /* --- ASK AI MODE EXPANDED CARD --- */
              <div className="w-full bg-white rounded-[26px] border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-3 sm:p-4 flex flex-col gap-3 transition-all">
                {/* Top Row: Input & Toggle */}
                <div className="flex items-center justify-between gap-2 pl-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask anything privately"
                    autoFocus
                    className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 font-sans text-sm sm:text-[15px]"
                  />

                  <div className="flex items-center bg-[#EDEDED] p-1 rounded-full text-xs font-medium shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveTab("search")}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-600 hover:text-gray-900 font-medium transition-all cursor-pointer"
                    >
                      <SearchIcon className="w-3.5 h-3.5" />
                      <span>Search</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("ask-ai")}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-gray-900 font-semibold shadow-xs transition-all cursor-pointer"
                    >
                      <SparkleBubbleIcon className="w-3.5 h-3.5" />
                      <span>Ask AI</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Row: Controls */}
                <div className="flex items-center justify-between pt-1 border-t border-gray-100/80">
                  {/* Tools button */}
                  <button
                    type="button"
                    onClick={() => setIsToolsActive(!isToolsActive)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      isToolsActive
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <SlantedSlidersIcon className="w-4 h-4" />
                    <span>Tools</span>
                  </button>

                  {/* Right controls */}
                  <div className="flex items-center gap-2">
                    {/* Reasoning button */}
                    <button
                      type="button"
                      onClick={() => setIsReasoningActive(!isReasoningActive)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                        isReasoningActive
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <AtomIcon className="w-4 h-4" />
                      <span>Reasoning</span>
                    </button>

                    {/* Model Selector Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200/90 hover:border-gray-300 rounded-full text-xs font-semibold text-gray-800 shadow-2xs transition-colors cursor-pointer"
                      >
                        <span>{selectedModel}</span>
                        <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                      </button>

                      {isModelDropdownOpen && (
                        <div className="absolute right-0 bottom-full mb-2 w-44 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 py-1.5 overflow-hidden">
                          {aiModels.map((model) => (
                            <button
                              key={model}
                              type="button"
                              onClick={() => {
                                setSelectedModel(model);
                                setIsModelDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3.5 py-2 text-xs font-medium hover:bg-gray-50 flex items-center justify-between cursor-pointer ${
                                selectedModel === model
                                  ? "text-blue-600 font-bold bg-blue-50/50"
                                  : "text-gray-700"
                              }`}
                            >
                              <span>{model}</span>
                              {selectedModel === model && <span>✓</span>}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Voice / Audio Icon Button */}
                    <button
                      type="button"
                      className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors cursor-pointer"
                      title="Voice input"
                    >
                      <AudioWaveformIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://duck.ai"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-gray-800 hover:text-black transition-colors rounded-full hover:bg-gray-100"
            >
              <SparkleBubbleIcon className="w-4 h-4 text-gray-800" />
              <span>Duck.ai</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-gray-700 hover:text-black rounded-lg hover:bg-gray-200/60 transition cursor-pointer"
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- SIDEBAR MENU DRAWER (ROOT LEVEL Z-[100]) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-over Drawer Panel */}
          <aside className="relative z-[101] h-screen w-[320px] max-w-[85vw] bg-white shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
              <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition cursor-pointer"
                aria-label="Close menu"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Sections */}
            <div className="p-5 space-y-6 text-sm text-gray-800">
              {/* Section 1: SEARCH */}
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                  Search
                </h4>
                <ul className="space-y-2.5 font-medium">
                  <li>
                    <Link href="/" className="hover:text-black block transition">
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Themes
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Section 2: DOWNLOADS */}
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                  Downloads
                </h4>
                <ul className="space-y-2.5 font-medium">
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      iOS Browser
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Android Browser
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Mac Browser
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Windows Browser
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Browser Extensions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Section 3: MORE FROM DUCKDUCKGO */}
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">
                  More from DuckDuckGo
                </h4>

                {/* Promo Card */}
                <div className="bg-[#FAF8F5] border border-[#EFEBE4] rounded-2xl p-4 mb-4 shadow-2xs">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-600">
                      <DownloadIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm leading-snug">
                        Upgrade to our Private Browser
                      </h5>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Fast. Secure. Free.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full mt-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>Download Browser</span>
                  </button>
                </div>

                <ul className="space-y-2.5 font-medium">
                  <li>
                    <Link href="https://duck.ai" target="_blank" className="hover:text-black block transition">
                      Duck.ai
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Email Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 hover:text-black transition">
                      <span>Collaborations</span>
                      <span className="bg-[#FFD600] text-black text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wide">
                        NEW
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Section 4: LEARN MORE */}
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                  Learn More
                </h4>
                <ul className="space-y-2.5 font-medium">
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      What&apos;s New
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Compare Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      About Our Browser
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      About DuckDuckGo
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Section 5: OTHER RESOURCES */}
              <div className="pb-6">
                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                  Other Resources
                </h4>
                <ul className="space-y-2.5 font-medium">
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Press Kit
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black block transition">
                      Advertise on Search
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

