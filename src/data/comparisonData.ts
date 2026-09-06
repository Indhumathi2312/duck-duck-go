export type StatusType = "included" | "limited" | "paid" | "none";
export type BrowserId = "chrome" | "edge" | "safari" | "firefox" | "brave";

export interface ComparisonRow {
  id: string;
  icon: string;
  title: string;
  statuses: {
    chrome: StatusType;
    edge: StatusType;
    safari: StatusType;
    firefox: StatusType;
    brave: StatusType;
    duckduckgo: StatusType;
  };
}

export interface BrowserTab {
  id: BrowserId;
  name: string;
}

export const browserTabs: BrowserTab[] = [
  { id: "chrome", name: "Chrome" },
  { id: "edge", name: "Edge" },
  { id: "safari", name: "Safari" },
  { id: "firefox", name: "Firefox" },
  { id: "brave", name: "Brave" },
];

export const comparisonRowsData: ComparisonRow[] = [
  {
    id: "search-private",
    icon: "search",
    title: "Search privately by default",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "none",
      firefox: "none",
      brave: "included",
      duckduckgo: "included",
    },
  },
  {
    id: "ai-chat",
    icon: "chat",
    title: "Chat privately with popular AI chatbots (optional)",
    statuses: {
      chrome: "none",
      edge: "limited",
      safari: "none",
      firefox: "none",
      brave: "included",
      duckduckgo: "included",
    },
  },
  {
    id: "trackers-3rd-party",
    icon: "shield",
    title: "Blocks 3rd-party trackers from Facebook, Google, and others",
    statuses: {
      chrome: "none",
      edge: "limited",
      safari: "limited",
      firefox: "limited",
      brave: "included",
      duckduckgo: "included",
    },
  },
  {
    id: "targeted-ads",
    icon: "ad",
    title: "Blocks targeted ads",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "none",
      firefox: "limited",
      brave: "included",
      duckduckgo: "included",
    },
  },
  {
    id: "cookie-popups",
    icon: "cookie",
    title: "Blocks cookie pop-ups",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "none",
      firefox: "none",
      brave: "limited",
      duckduckgo: "included",
    },
  },
  {
    id: "youtube-no-ads",
    icon: "play",
    title: "Watch YouTube videos without ads",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "none",
      firefox: "none",
      brave: "included",
      duckduckgo: "included",
    },
  },
  {
    id: "passwords-manager",
    icon: "key",
    title: "Securely manages passwords",
    statuses: {
      chrome: "included",
      edge: "included",
      safari: "included",
      firefox: "included",
      brave: "included",
      duckduckgo: "included",
    },
  },
  {
    id: "email-trackers",
    icon: "email",
    title: "Blocks email trackers",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "included",
      firefox: "limited",
      brave: "none",
      duckduckgo: "included",
    },
  },
  {
    id: "delete-browsing-data",
    icon: "flame",
    title: "Deletes browsing data with one button",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "none",
      firefox: "none",
      brave: "none",
      duckduckgo: "included",
    },
  },
  {
    id: "remove-personal-details",
    icon: "user-remove",
    title: "Removes personal details from sites that sell them",
    statuses: {
      chrome: "none",
      edge: "none",
      safari: "none",
      firefox: "paid",
      brave: "none",
      duckduckgo: "paid",
    },
  },
  {
    id: "restore-identity",
    icon: "credit-card",
    title: "Helps restore your identity",
    statuses: {
      chrome: "none",
      edge: "paid",
      safari: "none",
      firefox: "none",
      brave: "none",
      duckduckgo: "paid",
    },
  },
  {
    id: "vpn-protection",
    icon: "vpn",
    title: "Protects your connection with a VPN",
    statuses: {
      chrome: "none",
      edge: "limited",
      safari: "limited",
      firefox: "paid",
      brave: "paid",
      duckduckgo: "paid",
    },
  },
];
