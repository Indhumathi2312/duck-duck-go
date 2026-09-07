export interface PrivacyCardPopover {
  heading: string;
  paragraphs: string[];
}

export interface PrivacyCardItem {
  id: string;
  iconType:
    | "incognito"
    | "trackers"
    | "fire"
    | "mask"
    | "cookie"
    | "youtube"
    | "ai-models"
    | "chat-lock"
    | "sparkles-toggle"
    | "search-glass"
    | "password-key"
    | "email-lock";
  title: string;
  popover: PrivacyCardPopover;
}

export interface PrivacyControlData {
  bgColor?: string;
  cardBgColor?: string;
  buttonBgColor?: string;
  heading: string;
  subheading: string;
  userName?: string;
  headerImage?: string;
  cards: PrivacyCardItem[];
}

export const defaultPrivacyControlData: PrivacyControlData = {
  bgColor: "bg-[#CEEAD9]",
  cardBgColor: "bg-[#EAF7F0]",
  buttonBgColor: "bg-[#D2EDE0] text-[#195642]",
  heading: "Take back control of your personal information.",
  subheading:
    "Hidden trackers lurk on 85% of popular websites. We actively block them by default, helping you evade hackers, scammers, and data-hungry companies.",
  userName: "Jason Duckworth",
  headerImage: "/images/privacy-hero.png",
  cards: [
    {
      id: "incognito",
      iconType: "incognito",
      title: "Goodbye Incognito mode, hello real privacy in every tab",
      popover: {
        heading: "Isn't Incognito mode private?",
        paragraphs: [
          "No. All it does is delete information on your computer. Google can still save your searches and companies, service providers, and governments can still track you in Incognito mode.",
          "Our built-in search engine is like Google but never tracks your searches. And our browsing protections, like ad tracker blocking and cookie blocking, help stop other companies from collecting your personal data in every tab that you use.",
        ],
      },
    },
    {
      id: "trackers",
      iconType: "trackers",
      title: "Block 3rd-party trackers from Google, Facebook, and others",
      popover: {
        heading: "Web tracking protection.",
        paragraphs: [
          "DuckDuckGo's powerful tracker blocking, in our browser and extension, helps stop privacy-invasive companies from collecting your personal information.",
        ],
      },
    },
    {
      id: "fire",
      iconType: "fire",
      title: "Delete all tabs, history, and browsing data in one click",
      popover: {
        heading: "Burn after reading.",
        paragraphs: [
          "The Fire Button helps erase traces of websites that you've visited and browsing session information.",
        ],
      },
    },
  ],
};
