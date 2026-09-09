import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import SpiderManEasterEgg from "@/components/SpiderManEasterEgg";

export const viewport: Viewport = {
  themeColor: "#07090e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rimcloud.site"),
  title: "Rim Cloud | High-Performance Game, Bot & Web Hosting",
  description:
    "Ultra-low latency Minecraft servers, Discord bot hosting, and high-performance cloud solutions powered by Rim Cloud.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "Rim Cloud",
    "RimCloud",
    "Game Server Hosting",
    "Minecraft Hosting",
    "Discord Bot Hosting",
    "Cloud VPS",
    "Pterodactyl",
    "Low Latency Server",
    "DDoS Protected Hosting",
  ],
  authors: [{ name: "Rim Cloud Infrastructure Team" }],
  openGraph: {
    title: "Rim Cloud | High-Performance Game, Bot & Web Hosting",
    description:
      "Ultra-low latency Minecraft servers, Discord bot hosting, and high-performance cloud solutions powered by Rim Cloud.",
    url: "https://rimcloud.site",
    siteName: "Rim Cloud",
    images: [{ url: "/logo-full.png", width: 1920, height: 570, alt: "Rim Cloud" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rim Cloud | High-Performance Game, Bot & Web Hosting",
    description:
      "Ultra-low latency Minecraft servers, Discord bot hosting, and high-performance cloud solutions powered by Rim Cloud.",
    images: ["/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#07090e] text-[#f3f4f6] selection:bg-[#bcfc25] selection:text-black">
        <ThemeProvider>
          <SpiderManEasterEgg />
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

