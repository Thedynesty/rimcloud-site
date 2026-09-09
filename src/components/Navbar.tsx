"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Server, Shield, Activity, Menu, X, ExternalLink } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import DiscordIcon from "@/components/DiscordIcon";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, mounted } = useTheme();
  const isSpiderman = mounted && theme === "spiderman";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090e]/90 backdrop-blur-xl border-b border-[#bcfc25]/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="Rim Cloud"
              className="h-9 w-auto object-contain"
              height={42}
              priority
              src="/logo-full.png"
              width={180}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/minecraft"
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-[#bcfc25] rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              Minecraft
            </Link>
            <Link
              href="/#services"
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-[#bcfc25] rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              Cloud VPS
            </Link>
            <Link
              href="/#ping-test"
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-[#bcfc25] rounded-lg hover:bg-white/[0.03] transition-colors flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5 text-[#bcfc25]" />
              Ping Test
            </Link>
            <Link
              href="/about"
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-[#bcfc25] rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/policies"
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-[#bcfc25] rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              Policies
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="https://discord.gg/TpYMknnHsX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord community"
              title="Join Discord Community"
              className={`p-2.5 rounded-lg border transition-all duration-200 flex items-center justify-center group ${
                isSpiderman
                  ? "bg-[#0b0e14] border-white/10 text-zinc-300 hover:text-white hover:border-[#ff2a36] hover:shadow-[0_0_18px_rgba(226,27,36,0.55)]"
                  : "bg-[#0b0e14] border-white/10 text-zinc-300 hover:text-[#bcfc25] hover:border-[#bcfc25]/50 hover:shadow-[0_0_15px_rgba(188,252,37,0.25)]"
              }`}
            >
              <DiscordIcon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isSpiderman ? "group-hover:text-[#ff2a36]" : "group-hover:text-[#bcfc25]"}`} />
            </a>
            <a
              href="https://panel.rimcloud.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-sm font-medium text-zinc-200 hover:text-white bg-[#0b0e14] hover:bg-[#121824] border border-white/10 hover:border-[#bcfc25]/40 rounded-lg transition-all duration-200"
            >
              Client Portal
            </a>
            <a
              href="https://billing.rimcloud.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] rounded-lg shadow-[0_0_20px_rgba(188,252,37,0.25)] hover:shadow-[0_0_28px_rgba(188,252,37,0.45)] transition-all duration-200 group"
            >
              <span>Order Now</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu button and ThemeToggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0b0e14] border border-white/10 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 border-b border-[#bcfc25]/20 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/minecraft"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:text-[#bcfc25] hover:bg-white/[0.04]"
          >
            Minecraft Hosting
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:text-[#bcfc25] hover:bg-white/[0.04]"
          >
            Cloud VPS
          </Link>
          <Link
            href="/#ping-test"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:text-[#bcfc25] hover:bg-white/[0.04]"
          >
            Latency Ping Test
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:text-[#bcfc25] hover:bg-white/[0.04]"
          >
            About Us
          </Link>
          <Link
            href="/policies"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:text-[#bcfc25] hover:bg-white/[0.04]"
          >
            Policies
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://discord.gg/TpYMknnHsX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord community"
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium rounded-lg border transition-all ${
                isSpiderman
                  ? "bg-[#18090e] border-[#e21b24]/40 text-white hover:border-[#ff2a36]"
                  : "bg-[#0b0e14] border-[#bcfc25]/30 text-[#bcfc25] hover:bg-[#bcfc25]/10"
              }`}
            >
              <DiscordIcon className="w-4 h-4" />
              <span>Join Discord Community</span>
            </a>
            <a
              href="https://panel.rimcloud.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 text-sm font-medium text-zinc-200 bg-[#0b0e14] border border-white/10 rounded-lg"
            >
              Client Portal
            </a>
            <a
              href="https://billing.rimcloud.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] rounded-lg shadow-[0_0_20px_rgba(188,252,37,0.25)]"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
