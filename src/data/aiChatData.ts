import { PrivacyCardItem } from "./privacyControlData";

export interface AiChatData {
  bgColor?: string;
  cardBgColor?: string;
  buttonBgColor?: string;
  heading: string;
  subheading: string;
  headerImage?: string;
  cards: PrivacyCardItem[];
}

export const defaultAiChatData: AiChatData = {
  bgColor: "bg-[#FEE8D6]",
  cardBgColor: "bg-[#FFF3E8]",
  buttonBgColor: "bg-[#FED7AA] text-[#7C2D12]",
  heading: "AI chat that's private, and always optional.",
  subheading:
    "Duck.ai lets you chat with popular AI models privately for free. Your conversations are never used to train AI, and because AI is a choice at DuckDuckGo, you can turn it off anytime.",
  headerImage: "/images/ai-chat-hero.png",
  cards: [
    {
      id: "popular-ai-models",
      iconType: "ai-models",
      title: "Chat with popular AI models, anonymized by us",
      popover: {
        heading: "Chat privately with ChatGPT, Claude, and other AIs",
        paragraphs: [
          "Duck.ai gives you access to popular AI chat models, all in one place, with no account needed, so you don't have to switch between sites or apps.",
          "Whichever model you choose, Duck.ai anonymizes your chat before sending it to the provider, helping protect your chats from hackers, scammers, and data-hungry companies.",
        ],
      },
    },
    {
      id: "chats-stay-private",
      iconType: "chat-lock",
      title: "Your chats stay private and are never used to train AI",
      popover: {
        heading: "Not training data, just your chat.",
        paragraphs: [
          "AI chat tools often use your conversations to train their models, so what you type today could shape how the AI responds to someone else tomorrow.",
          "Duck.ai keeps your prompts out of that process entirely. Your chats are private and never used to train the AI models you're chatting with.",
        ],
      },
    },
    {
      id: "ai-always-optional",
      iconType: "sparkles-toggle",
      title: "AI is always optional with DuckDuckGo. Turn it off anytime.",
      popover: {
        heading: "Not interested in AI? No problem.",
        paragraphs: [
          "AI can be useful, but it isn't for everyone, and it shouldn't be forced on you.",
          "AI features are always optional with DuckDuckGo. You can turn them off in your settings anytime and keep using DuckDuckGo just the same.",
        ],
      },
    },
  ],
};
