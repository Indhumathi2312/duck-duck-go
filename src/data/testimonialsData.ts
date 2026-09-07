export interface TestimonialItem {
  id: string;
  outlet: string;
  outletLogoType: "wired" | "engadget" | "cnet" | "techradar" | "pcmag" | "forbes";
  quote: string;
  underlinedText?: string;
  author: string;
  avatarUrl?: string;
}

export interface TestimonialsData {
  title: string;
  subheading?: string;
  testimonials: TestimonialItem[];
}

export const defaultTestimonialsData: TestimonialsData = {
  title: "Don’t just take our word for it.",
  testimonials: [
    {
      id: "wired",
      outlet: "WIRED",
      outletLogoType: "wired",
      quote: "you're getting maximum protection with minimal effort.",
      underlinedText: "you're getting maximum protection with minimal effort.",
      author: "David Nield",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "engadget",
      outlet: "engadget",
      outletLogoType: "engadget",
      quote: "easy and quick to import passwords and bookmarks from other browsers like Chrome.",
      author: "Mariella Moon",
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "cnet",
      outlet: "CNET",
      outletLogoType: "cnet",
      quote: "frees up bandwidth and lets websites load faster.",
      author: "Zachary McAuliffe",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "techradar",
      outlet: "techradar",
      outletLogoType: "techradar",
      quote: "DuckDuckGo is a must-try",
      author: "Desire Athow",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "pcmag",
      outlet: "PCMag",
      outletLogoType: "pcmag",
      quote: "The simplest way to protect your privacy online across all your devices.",
      author: "Kim Key",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "forbes",
      outlet: "Forbes",
      outletLogoType: "forbes",
      quote: "DuckDuckGo makes online privacy completely effortless for everyone.",
      author: "Davey Winder",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    },
  ],
};
