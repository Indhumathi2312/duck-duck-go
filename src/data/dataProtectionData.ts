import { PrivacyCardItem } from "./privacyControlData";

export interface DataProtectionData {
  bgColor?: string;
  cardBgColor?: string;
  buttonBgColor?: string;
  heading: string;
  subheading: string;
  headerImage?: string;
  cards: PrivacyCardItem[];
}

export const defaultDataProtectionData: DataProtectionData = {
  bgColor: "bg-[#FEEFC3]",
  cardBgColor: "bg-[#FFF9EA]",
  buttonBgColor: "bg-[#FDE68A] text-[#78350F]",
  heading: "Data protection, not data collection.",
  subheading:
    "We believe the best way to protect your data is to stop it from being collected at all. We never track your searches, and our browsing protections help stop other companies from collecting your data.",
  headerImage: "/images/data-protection-hero.png",
  cards: [
    {
      id: "anonymous-search",
      iconType: "search-glass",
      title: "Search without being tracked",
      popover: {
        heading:
          "Other search engines track your every search, from where you go to what you buy. We don't track your search history. Ever.",
        paragraphs: [
          "Searching with DuckDuckGo is completely anonymous; we never save or share any personal information that could tie you back to your searches. We don't have the ability to create search histories or data profiles for anyone. It's privacy by design.",
        ],
      },
    },
    {
      id: "password-manager",
      iconType: "password-key",
      title: "A simple, secure password manager",
      popover: {
        heading: "Import, save, and encrypt your passwords.",
        paragraphs: [
          "You won't have to set up an account. That's because we don't store your passwords in the cloud by default — we encrypt them before stashing them securely on your device.",
          "With Sync & Backup, we use end-to-end-encryption, meaning nobody but you can see your passwords, not even us.",
        ],
      },
    },
    {
      id: "email-protection",
      iconType: "email-lock",
      title: "Block hidden trackers in emails",
      popover: {
        heading: "Did you know emails can track you?",
        paragraphs: [
          "Many emails contain hidden trackers that can tell companies when you opened their message, where you were, and what device you used.",
          "DuckDuckGo Email Protection removes many of these trackers before they even reach your inbox, helping stop companies from collecting data about you. It works with your current email account, so there's no need to switch providers.",
        ],
      },
    },
  ],
};
