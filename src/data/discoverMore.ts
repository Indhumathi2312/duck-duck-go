export interface DiscoverItem {
  id: string;
  tabLabel: string;
  tabIconType: "search" | "ai" | "subscription" | "email";
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  hasArrow?: boolean;
}

export const discoverItems: DiscoverItem[] = [
  {
    id: "private-search",
    tabLabel: "Private Search",
    tabIconType: "search",
    title: "Private Search",
    description:
      "Set DuckDuckGo as your default search engine to search online anonymously, without being tracked.",
    buttonText: "Set as Default Search",
    buttonUrl: "#",
    hasArrow: false,
  },
  {
    id: "duck-ai",
    tabLabel: "Duck.ai",
    tabIconType: "ai",
    title: "Duck.ai",
    description:
      "Free, anonymized access to popular AI chat models, like GPT-4o, Claude 3.5 Sonnet (and more) all in one place.",
    buttonText: "Try Duck.ai",
    buttonUrl: "https://duck.ai",
    hasArrow: true,
  },
  {
    id: "subscription",
    tabLabel: "Subscription",
    tabIconType: "subscription",
    title: "DuckDuckGo Subscription",
    description:
      "Protect more of what you do online, with our VPN, anonymous access to advanced AI models, and more.",
    buttonText: "Learn More",
    buttonUrl: "#",
    hasArrow: true,
  },
  {
    id: "email",
    tabLabel: "Email",
    tabIconType: "email",
    title: "Email Protection",
    description:
      "Block email trackers and hide your address without switching your email provider.",
    buttonText: "Get Email Protection",
    buttonUrl: "#",
    hasArrow: true,
  },
];
