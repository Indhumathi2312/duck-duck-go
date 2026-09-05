import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo_social-media.png"
            alt="DuckDuckGo Logo"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="font-display font-bold text-xl tracking-tight text-gray-900">
            DuckDuckGo
          </span>
        </Link>
      </div>

      {/* Middle Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200 shadow-sm w-full max-w-2xl mx-6">
        <input
          type="text"
          placeholder="Private search"
          className="bg-transparent border-none outline-none flex-grow text-gray-900 font-sans px-2 placeholder-gray-500"
        />
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            To sea...
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200/50 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              <path d="M12 12 2.1 7.1"></path>
              <path d="m12 12 6.9 8.9"></path>
            </svg>
            Duck.ai
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
            <path d="M12 12 2.1 7.1"></path>
            <path d="m12 12 6.9 8.9"></path>
          </svg>
          Duck.ai
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
