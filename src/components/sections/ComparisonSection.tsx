"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  browserTabs,
  comparisonRowsData,
  BrowserId,
  StatusType,
} from "@/data/comparisonData";

// --- Browser Logos ---
function ChromeLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#FFF" />
      <path d="M24 12h20.8A23.9 23.9 0 0 0 24 1z" fill="#EA4335" />
      <path d="M24 12l10.4 18H44.8A23.9 23.9 0 0 0 44.8 12z" fill="#EA4335" />
      <path d="M24 12H3.2a23.9 23.9 0 0 0 10.4 18z" fill="#FBBC05" />
      <path d="M13.6 30L3.2 12A23.9 23.9 0 0 0 24 47l10.4-18z" fill="#34A853" />
      <circle cx="24" cy="24" r="11" fill="#FFF" />
      <circle cx="24" cy="24" r="8.5" fill="#1A73E8" />
    </svg>
  );
}

function EdgeLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 6c-9.9 0-17.9 8-17.9 17.9 0 7.4 4.5 13.8 11 16.5 2.1-4 6.7-6.2 11.5-5.2 2.7.6 5.1 2.3 6.6 4.6 2-1.7 3.6-3.8 4.7-6.2-4.5 2-9.7 1.5-13.8-1.4-5.2-3.7-6.5-10.8-2.8-16 1.4-2 3.4-3.5 5.8-4.2C27.3 6.8 25.6 6 24 6z"
        fill="url(#edgeGrad1)"
      />
      <path
        d="M38.8 21.8c-2.3 0-4.4.9-6 2.5-3.3 3.3-3.3 8.7 0 12 1.6 1.6 3.7 2.5 6 2.5 3.3 0 6.3-1.8 7.8-4.7 1-2 1.4-4.3 1.2-6.5-.4-3.3-2.5-6.1-5.6-7.1-.6-.2-1.2-.2-1.8-.2z"
        fill="url(#edgeGrad2)"
      />
      <defs>
        <linearGradient id="edgeGrad1" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0078D4" />
          <stop offset="1" stopColor="#00C853" />
        </linearGradient>
        <linearGradient id="edgeGrad2" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0288D1" />
          <stop offset="1" stopColor="#00C853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SafariLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#007AFF" />
      <path d="M24 6v3M24 39v3M6 24h3M39 24h3" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="24,10 28,24 24,24" fill="#FF3B30" />
      <polygon points="24,38 28,24 24,24" fill="#FFF" />
      <polygon points="24,10 20,24 24,24" fill="#FF3B30" opacity="0.8" />
      <polygon points="24,38 20,24 24,24" fill="#E5E5EA" />
      <circle cx="24" cy="24" r="2" fill="#FFF" />
    </svg>
  );
}

function FirefoxLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" fill="#4B0082" />
      <path
        d="M42 22C42 32 34 40 24 40S6 32 6 22C6 14 12 8 20 6c-3 3-4 7-2 11 2 4 6 6 10 5s7-4 7-8c4 2 7 5 7 8z"
        fill="url(#ffGrad)"
      />
      <defs>
        <linearGradient id="ffGrad" x1="6" y1="6" x2="42" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9500" />
          <stop offset="0.5" stopColor="#FF2D55" />
          <stop offset="1" stopColor="#5856D6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BraveLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M24 4L8 10v14c0 10.5 6.8 20 16 23 9.2-3 16-12.5 16-23V10L24 4z" fill="#FF5500" />
      <path d="M24 10l-9 3.5v9.5c0 6 3.8 11.5 9 13.5 5.2-2 9-7.5 9-13.5v-9.5L24 10z" fill="#FF3300" />
      <path d="M19 22h10M24 18v8" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function BrowserHeaderLogo({ id }: { id: BrowserId }) {
  switch (id) {
    case "chrome":
      return <ChromeLogo className="w-7 h-7" />;
    case "edge":
      return <EdgeLogo className="w-7 h-7" />;
    case "safari":
      return <SafariLogo className="w-7 h-7" />;
    case "firefox":
      return <FirefoxLogo className="w-7 h-7" />;
    case "brave":
      return <BraveLogo className="w-7 h-7" />;
  }
}

// --- Row Feature Icons ---
function RowIcon({ name }: { name: string }) {
  switch (name) {
    case "search":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "chat":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "ad":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="13" y2="12" />
        </svg>
      );
    case "cookie":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-6-6z" />
        </svg>
      );
    case "play":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="4" />
          <polygon points="10,8 16,12 10,16" fill="currentColor" />
        </svg>
      );
    case "key":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 2l-2 2m-2-2l2 2m7 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          <circle cx="7.5" cy="16.5" r="3.5" />
          <path d="M10 14l8-8" />
        </svg>
      );
    case "email":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "flame":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-.61-.22-1.17-.58-1.61L12 11.5l-.92 1.39c-.36.44-.58 1-.58 1.61z" />
          <path d="M12 2c0 4.5-5 7-5 12a7 7 0 0 0 14 0c0-5-5-7.5-5-12z" />
        </svg>
      );
    case "user-remove":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      );
    case "credit-card":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    case "vpn":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    default:
      return null;
  }
}

// --- Status Badge ---
function StatusBadge({ type }: { type: StatusType }) {
  switch (type) {
    case "included":
      return (
        <div
          className="w-5 h-5 rounded-full bg-[#27AE60] text-white flex items-center justify-center font-bold text-[11px] shadow-2xs"
          title="Included"
        >
          ✓
        </div>
      );
    case "limited":
      return (
        <div
          className="w-5 h-5 rounded-full bg-[#F2994A] text-white flex items-center justify-center font-bold text-[11px] shadow-2xs"
          title="Limited"
        >
          −
        </div>
      );
    case "paid":
      return (
        <div
          className="w-5 h-5 rounded-full bg-[#828282] text-white flex items-center justify-center font-bold text-[11px] shadow-2xs"
          title="Paid"
        >
          $
        </div>
      );
    case "none":
      return (
        <div
          className="w-5 h-5 rounded-full bg-[#EB5757] text-white flex items-center justify-center font-bold text-[11px] shadow-2xs"
          title="None"
        >
          ✕
        </div>
      );
  }
}

export default function ComparisonSection() {
  const [selectedBrowser, setSelectedBrowser] = useState<BrowserId>("chrome");

  return (
    <section className="py-20 px-4 bg-[#FAF9F8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Section Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1E1E1E] tracking-tight leading-tight">
          See how DuckDuckGo compares.
        </h2>

        {/* Browser Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {browserTabs.map((tab) => {
            const isSelected = tab.id === selectedBrowser;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedBrowser(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#111111] text-white shadow-md"
                    : "bg-[#EDEDED] hover:bg-[#E2E2E2] text-gray-800"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Matrix Table Box */}
        <div className="bg-white/60 backdrop-blur-xs rounded-[32px] p-4 sm:p-8 border border-gray-100/80 shadow-xs mt-8">
          {/* Header Row: Selected Browser Logo vs DuckDuckGo Logo */}
          <div className="flex items-center justify-end gap-10 px-6 mb-4">
            <div className="flex items-center justify-center w-8 h-8">
              <BrowserHeaderLogo id={selectedBrowser} />
            </div>
            <div className="flex items-center justify-center w-8 h-8">
              <Image
                src="/images/logo_social-media.png"
                alt="DuckDuckGo"
                width={32}
                height={32}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>

          {/* Rows List */}
          <div className="space-y-2.5">
            {comparisonRowsData.map((row) => {
              const competitorStatus = row.statuses[selectedBrowser];
              const duckStatus = row.statuses.duckduckgo;

              return (
                <div
                  key={row.id}
                  className="bg-[#FAF8F5] border border-[#EFEBE4] rounded-full px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shadow-2xs hover:border-gray-300/80 transition-colors"
                >
                  {/* Left: Icon + Title */}
                  <div className="flex items-center gap-3 text-left min-w-0 flex-1">
                    <span className="text-gray-600 shrink-0">
                      <RowIcon name={row.icon} />
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-gray-900 truncate">
                      {row.title}
                    </span>
                  </div>

                  {/* Right: Badges */}
                  <div className="flex items-center gap-10 shrink-0 px-2">
                    <div className="w-8 flex items-center justify-center">
                      <StatusBadge type={competitorStatus} />
                    </div>
                    <div className="w-8 flex items-center justify-center">
                      <StatusBadge type={duckStatus} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Table Footer Disclaimer & Legend */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 px-2 text-xs text-gray-500 font-medium">
            <p className="text-left text-gray-500 max-w-md">
              Browser comparisons were made with default settings. Information is correct as of December 2025
            </p>

            {/* Legend */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <StatusBadge type="included" />
                <span>Included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <StatusBadge type="limited" />
                <span>Limited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <StatusBadge type="paid" />
                <span>Paid</span>
              </div>
              <div className="flex items-center gap-1.5">
                <StatusBadge type="none" />
                <span>None</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="#"
            className="w-full sm:w-auto bg-[#DE5833] hover:bg-[#C94723] active:bg-[#B53C1B] text-white font-bold py-3.5 px-8 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
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

          <button
            type="button"
            className="w-full sm:w-auto bg-[#EDEDED] hover:bg-[#E2E2E2] text-gray-900 font-bold py-3.5 px-6 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs cursor-pointer"
          >
            <span>Compare More Protections</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
