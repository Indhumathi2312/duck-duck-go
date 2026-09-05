import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const duckSansDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/DuckSansDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DuckSansDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DuckSansDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-duck-sans-display",
});-+

const duckSansProduct = localFont({
  src: [
    {
      path: "../../public/fonts/DuckSansProduct-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DuckSansProduct-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DuckSansProduct-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-duck-sans-product",
});

export const metadata: Metadata = {
  title: "DuckDuckGo - Privacy, simplified.",
  description: "The Internet privacy company that empowers you to seamlessly take control of your personal information online, without any tradeoffs.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/DDG-iOS-icon_152x152.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${duckSansDisplay.variable} ${duckSansProduct.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
