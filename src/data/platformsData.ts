export interface PlatformItem {
  id: string;
  name: string;
  iconType: "windows" | "mac" | "android" | "ios";
  downloadUrl: string;
}

export const platformsData: PlatformItem[] = [
  {
    id: "windows",
    name: "Windows",
    iconType: "windows",
    downloadUrl: "#",
  },
  {
    id: "mac",
    name: "Mac",
    iconType: "mac",
    downloadUrl: "#",
  },
  {
    id: "android",
    name: "Android",
    iconType: "android",
    downloadUrl: "#",
  },
  {
    id: "ios",
    name: "iOS",
    iconType: "ios",
    downloadUrl: "#",
  },
];
