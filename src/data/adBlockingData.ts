import { PrivacyCardItem } from "./privacyControlData";

export interface AdBlockingData {
  bgColor?: string;
  cardBgColor?: string;
  buttonBgColor?: string;
  heading: string;
  subheading: string;
  headerImage?: string;
  cards: PrivacyCardItem[];
}

export const defaultAdBlockingData: AdBlockingData = {
  bgColor: "bg-[#D4EDFC]",
  cardBgColor: "bg-[#E6F4FE]",
  buttonBgColor: "bg-[#CBE6F9] text-[#1E5B88]",
  heading: "Block most ads & cookie pop-ups for fewer interruptions.",
  subheading:
    "Our browser blocks most ads before they even appear, including on videos, so you can enjoy your favorite content with less hassle. We spot cookie pop-ups right away and, where possible, opt you out automatically, so you won't even see them.",
  headerImage: "/images/ad-blocking-hero.png",
  cards: [
    {
      id: "ads-everywhere",
      iconType: "mask",
      title: "Stop ads following you everywhere",
      popover: {
        heading: "Ever feel like ads are following you around the web?",
        paragraphs: [
          "Many online ads contain hidden 3rd-party trackers. Companies use these to collect data on you to sell to advertisers, which is why you often see similar ads everywhere you go.",
          "If our browser detects these trackers, we block them, stopping these ads from loading and keeping your data away from privacy-invasive companies.",
        ],
      },
    },
    {
      id: "cookie-popups",
      iconType: "cookie",
      title: "Block annoying cookie pop-ups",
      popover: {
        heading: "Say goodbye to annoying cookie pop-ups.",
        paragraphs: [
          "When DuckDuckGo detects a cookie pop-up on sites you visit, we try to automatically set your cookie preferences to maximize privacy and minimize cookies, then close the pop-up before you even see it.",
        ],
      },
    },
    {
      id: "youtube-ads",
      iconType: "youtube",
      title: "Block ads on YouTube",
      popover: {
        heading: "YouTube, without the ads.",
        paragraphs: [
          "DuckDuckGo blocks most video ads, including those that appear before and during YouTube videos. It's free, and available in the DuckDuckGo browser for Mac, Windows, iOS, and Android.",
        ],
      },
    },
  ],
};
