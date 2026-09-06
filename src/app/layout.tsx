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
  title: "Rim Cloud | Next-Gen Game & Cloud Server Hosting",
  description:
    "Deploy high-frequency game servers and cloud compute instances with enterprise DDoS filtering, automated Pterodactyl orchestration, and 99.9% uptime.",
  keywords: [
    "Rim Cloud",
    "RimCloud",
    "Game Server Hosting",
    "Minecraft Hosting",
    "Cloud VPS",
    "Pterodactyl",
    "Low Latency Server",
    "DDoS Protected Hosting",
  ],
  authors: [{ name: "Rim Cloud Infrastructure Team" }],
  openGraph: {
    title: "Rim Cloud | High-Performance Game & Cloud Compute Hosting",
    description:
      "Enterprise Multi-Core Architecture, High-Frequency Dedicated Compute, and Ultra-Fast Gen4 NVMe Storage.",
    url: "https://rimcloud.site",
    siteName: "Rim Cloud",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rim Cloud | Next-Gen Game & Cloud Server Hosting",
    description:
      "Ultra low-latency game servers and high-frequency cloud compute instances.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#07090e] text-[#f3f4f6] selection:bg-[#00f0ff] selection:text-black">
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

