import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Shield, ExternalLink, Activity, Server, Cpu, HardDrive } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

export default function Footer() {
  return (
    <footer className="relative bg-[#07090e] border-t border-[#bcfc25]/15 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#bcfc25]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-full.png"
                alt="Rim Cloud"
                width={180}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Engineered for uncompromising performance. Deploy high-frequency game servers and cloud compute instances with enterprise DDoS mitigation, ultra-fast NVMe arrays, and automated orchestration.
            </p>
            {/* Status indicator & Discord Badge */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b0e14] border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                All Systems Operational (99.9% SLA)
              </div>
              <a
                href="https://discord.gg/TpYMknnHsX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord community"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] hover:bg-[#bcfc25]/10 hover:border-[#bcfc25] transition-all shadow-[0_0_15px_rgba(188,252,37,0.2)] group"
              >
                <DiscordIcon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span>Join our Discord</span>
              </a>
              <a
                href="https://www.trustpilot.com/review/rimcloud.in"
                target="_blank"
                rel="noopener noreferrer"
                title="Review Rim Cloud on Trustpilot"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b0e14] border border-[#00b67a]/40 text-xs font-mono text-zinc-300 hover:text-white hover:bg-[#00b67a]/10 hover:border-[#00b67a] hover:shadow-[0_0_15px_rgba(0,182,122,0.25)] transition-all group"
              >
                <div className="flex items-center justify-center w-4 h-4 rounded-sm bg-[#00b67a] shrink-0">
                  <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 9.625l-9.156-.75L12 0 9.156 8.875 0 9.625l7.031 6.125-2.156 8.875L12 19.875 19.125 24.625l-2.156-8.875z" />
                  </svg>
                </div>
                <span>Review us on <strong className="font-semibold text-[#00b67a] group-hover:text-emerald-400">Trustpilot</strong></span>
              </a>
              <div className="inline-flex items-center">
                <a
                  href="https://www.dmca.com/Protection/Status.aspx?ID=bd0cb760-847c-4dd9-9ee8-8b7e7104558d"
                  title="DMCA.com Protection Status"
                  className="dmca-badge inline-block hover:opacity-85 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-10.png?ID=bd0cb760-847c-4dd9-9ee8-8b7e7104558d"
                    alt="DMCA.com Protection Status"
                    className="h-6 w-auto"
                    loading="lazy"
                  />
                </a>
                <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" strategy="lazyOnload" />
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#bcfc25] font-semibold mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://billing.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Minecraft Hosting</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://billing.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Discord Bot Hosting</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://billing.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Cloud VPS Instances</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link
                  href="/#ping-test"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Global Latency Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Organization Column */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#bcfc25] font-semibold mb-4">
              Community & Team
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://discord.gg/TpYMknnHsX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Discord community"
                  className="text-zinc-300 hover:text-[#bcfc25] transition-colors flex items-center gap-2 group font-medium"
                >
                  <DiscordIcon className="w-4 h-4 text-[#bcfc25] group-hover:scale-110 transition-transform shrink-0" />
                  <span>Join our Discord</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.trustpilot.com/review/rimcloud.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#00b67a] transition-colors flex items-center gap-2 group font-medium"
                >
                  <div className="flex items-center justify-center w-4 h-4 rounded-sm bg-[#00b67a] shrink-0">
                    <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                      <path d="M24 9.625l-9.156-.75L12 0 9.156 8.875 0 9.625l7.031 6.125-2.156 8.875L12 19.875 19.125 24.625l-2.156-8.875z" />
                    </svg>
                  </div>
                  <span>Trustpilot Reviews</span>
                </a>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-zinc-400 hover:text-white transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <a
                  href="https://panel.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Client Portal
                </a>
              </li>
              <li>
                <a
                  href="https://billing.rimcloud.in/submitticket.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Support Helpdesk
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a
                  href="https://discord.gg/TpYMknnHsX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Community Support via Discord"
                  className="text-xs font-mono text-zinc-400 hover:text-[#bcfc25] transition-colors block"
                >
                  <span className="text-zinc-500 block text-[10px] uppercase">Community Support:</span>
                  <span className="truncate block">https://discord.gg/TpYMknnHsX</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#bcfc25] font-semibold mb-4">
              Legal & Policy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-zinc-400 hover:text-white transition-colors">
                  24-Hour Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-zinc-400 hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/aup" className="text-zinc-400 hover:text-white transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Rim Cloud (RimCloud). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>High-Frequency Dedicated Compute</span>
            <span className="text-zinc-700">•</span>
            <span>Enterprise Multi-Core Architecture</span>
            <span className="text-zinc-700">•</span>
            <span>Ultra-Fast NVMe Storage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

