export interface ProtectionFeature {
  id: string;
  iconType: "shield" | "cookie" | "mask";
  title: string;
  category: string;
}

export const protectionFeaturesData: ProtectionFeature[] = [
  {
    id: "scams-protection",
    iconType: "shield",
    title: "Evade scams & data-hungry companies",
    category: "PROTECTION",
  },
  {
    id: "ads-cookie-blocker",
    iconType: "cookie",
    title: "Block most ads & cookie pop-ups",
    category: "PRIVACY",
  },
  {
    id: "untracked-search",
    iconType: "mask",
    title: "Search & chat without being tracked",
    category: "PEACE OF MIND",
  },
];
