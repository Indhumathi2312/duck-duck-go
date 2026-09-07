"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: "what-is-ddg",
    question: "What is DuckDuckGo?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        At DuckDuckGo, we believe the best way to protect your personal information from hackers, scammers, and privacy-invasive companies is to stop it from being collected at all. That&apos;s why millions of people{" "}
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
        , not by exploiting your data. Take back control of your personal information with the browser designed for data protection, not data collection.{" "}
        <a href="#" className="text-[#3B82F6] hover:underline font-medium">
          Learn more
        </a>
      </p>
    ),
  },
  {
    id: "protect-privacy",
    question: "How does DuckDuckGo protect my privacy?",
    answer: (
      <div className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal space-y-4">
        <p>
          If you&apos;re like most people on the Internet, you use Google to search the web and Google Chrome to browse the web. That means, by default, Google can keep track of every single search you make and website you visit. On those websites, other companies may also track you.
        </p>
        <p>
          DuckDuckGo is an independent Google alternative that also lets you search and browse the web, but we don&apos;t track your searches or browsing history, and our{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            browsers
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            extensions
          </a>{" "}
          help you block other companies from trying to track you as well, all by default. Our free browser comes with seamless protection built-in, including{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            tracker blocking
          </a>
          ,{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            increased encryption
          </a>
          , and{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            private search
          </a>
          . We also offer paid subscriptions to Privacy Pro, which includes access to our{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            VPN
          </a>
          , a{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Personal Information Removal
          </a>{" "}
          service, and an{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Identity Theft Restoration
          </a>{" "}
          service. That&apos;s how DuckDuckGo helps protect you in a nutshell.{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Learn more
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "block-trackers",
    question: "Does DuckDuckGo block all trackers on websites I visit?",
    answer: (
      <div className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal space-y-4">
        <p>
          DuckDuckGo{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            never tracks you
          </a>
          . And when you leave our search engine and use our browsers or extensions to visit other sites, we aim to protect your privacy as much as possible. No service can eliminate all hidden tracking or all profiling online because trackers are always trying to evade specific protections. To be effective, our protections continually evolve to mitigate this while avoiding website breakage. That&apos;s also why we offer multiple types of{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            web tracking protections
          </a>
          .
        </p>
        <p>
          Other browsers offer some of these by default, like cookie and fingerprinting protections, but we also provide many other protections that most browsers do not offer by default, like{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            3rd-Party Tracker Loading Protection
          </a>
          ,{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Global Privacy Control
          </a>
          ,{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Link Tracking Protection
          </a>
          ,{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            CNAME Cloaking Protection
          </a>
          ,{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Google AMP Protection
          </a>
          , and{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            more
          </a>
          , which all help cover different tracking angles. Our{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            list of trackers
          </a>
          is open source, along with the{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            list of exceptions
          </a>{" "}
          we make to preserve usability.{" "}
          <a href="#" className="text-[#3B82F6] hover:underline font-medium">
            Learn more
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "how-many-users",
    question: "How many people use DuckDuckGo?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        Our best guess — over 100 million people! We don&apos;t track our users, so it&apos;s impossible for us to know how many people in total actually use our product. However, we can make an estimate based on the number of searches we get each month. Thanks to all these users, DuckDuckGo{" "}
        <a href="#" className="text-[#3B82F6] hover:underline font-medium">
          holds the #2 position in mobile search market share
        </a>{" "}
        in the US, and 20 other markets including the United Kingdom, Canada, Australia, Poland, Italy, and Spain.
      </p>
    ),
  },
  {
    id: "make-money",
    question: "How does DuckDuckGo make money?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        We make money from search advertising (when you search, we show ads related to your search query) and from our paid subscription service, Privacy Pro. On search ads, we partner with Microsoft to serve search ads, and Microsoft does not track your search queries or ad clicks to build a profile. We do not make money from selling your personal data or tracking you across the web.{" "}
        <a href="#" className="text-[#3B82F6] hover:underline font-medium">
          Learn more
        </a>
      </p>
    ),
  },
  {
    id: "instead-of-google",
    question: "Why use DuckDuckGo instead of Google?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        Google tracks your search history, location, and web activity to build a detailed advertising profile on you. DuckDuckGo does not track you, does not store your search history, and does not profile you for ads. With DuckDuckGo, you get private search, tracker blocking, and encryption protection all in one free browser.{" "}
        <a href="#" className="text-[#3B82F6] hover:underline font-medium">
          Learn more
        </a>
      </p>
    ),
  },
  {
    id: "incognito-private",
    question: "Is Incognito Mode private?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        No. Incognito mode only prevents your browser from saving your history on your local device. It does not hide your IP address, prevent websites or Google from tracking you, or protect your data online. DuckDuckGo provides true online privacy by blocking trackers and encrypted connections across the web.{" "}
        <a href="#" className="text-[#3B82F6] hover:underline font-medium">
          Learn more
        </a>
      </p>
    ),
  },
  {
    id: "search-results-compare",
    question: "How do DuckDuckGo Search results compare to Google's?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        DuckDuckGo search results come from over 400 sources, including Bing, Yahoo, and our own web crawler, DuckDuckBot. For most queries, you get the exact same high-quality, relevant results as Google, without personalized search bubble distortion or privacy tracking.{" "}
        <a href="#" className="text-[#3B82F6] hover:underline font-medium">
          Learn more
        </a>
      </p>
    ),
  },
  {
    id: "owned-by-google",
    question: "Is DuckDuckGo owned by Google or any other entity?",
    answer: (
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
        No. DuckDuckGo is an independent company owned by its founder, Gabriel Weinberg, and employees. We are completely independent of Google, Microsoft, and all major tech giants.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full relative select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP THIN DIVIDER LINE */}
        <div className="border-t border-gray-200/70 w-full mb-12 sm:mb-16 md:mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: HEADING */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191919] tracking-tight leading-tight sticky top-24">
              Still have questions?
            </h2>
          </div>

          {/* RIGHT COLUMN: FAQ ACCORDION LIST */}
          <div className="lg:col-span-8 flex flex-col space-y-3.5 sm:space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`w-full border border-gray-200/80 transition-all duration-300 text-left ${
                    isOpen
                      ? "bg-[#FAF9F5] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-xs"
                      : "bg-white rounded-full px-6 py-4 hover:border-gray-300 cursor-pointer shadow-2xs"
                  }`}
                  onClick={() => !isOpen && toggleFAQ(index)}
                >
                  {/* QUESTION HEADER ROW */}
                  <div
                    className="flex items-center justify-between cursor-pointer select-none gap-4"
                    onClick={(e) => {
                      if (isOpen) {
                        e.stopPropagation();
                        toggleFAQ(index);
                      }
                    }}
                  >
                    <span className="text-base sm:text-lg font-medium sm:font-semibold text-[#191919] tracking-tight">
                      {item.question}
                    </span>
                    <button
                      type="button"
                      className="text-gray-700 hover:text-black flex-shrink-0 focus:outline-hidden"
                      aria-label={isOpen ? "Collapse question" : "Expand question"}
                    >
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* EXPANDED ANSWER CONTENT */}
                  {isOpen && (
                    <div className="pt-4 mt-2 border-t border-gray-200/40">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
