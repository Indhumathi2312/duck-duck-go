import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative mt-auto overflow-hidden">
      {/* Background SVG for Footer */}
      <div className="absolute bottom-0 w-full z-[-1] hidden dark:block">
        <Image 
          src="/images/footer-pondwater-dark.0c~-4vucj475c.svg"
          alt="footer background"
          layout="responsive"
          width={1920}
          height={300}
        />
      </div>
      <div className="absolute bottom-0 w-full z-[-1] dark:hidden">
        <Image 
          src="/images/footer-pondwater-light.01e3u~_txqt1r.svg"
          alt="footer background"
          layout="responsive"
          width={1920}
          height={300}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 pb-24 flex flex-col items-center justify-end min-h-[300px]">
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-sans font-medium text-gray-600">
          <Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">DuckDuckGo.com</Link>
        </div>
        <p className="text-gray-500 text-xs font-sans text-center">
          © DuckDuckGo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
