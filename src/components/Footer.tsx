import React from "react";
import Link from "next/link";
import { Terminal, Shield, ExternalLink, Activity, Server, Cpu, HardDrive } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

export default function Footer() {
  return (
    <footer className="relative bg-[#07090e] border-t border-[#00f0ff]/15 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#00f0ff]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0b0e14] border border-[#00f0ff]/40 shadow-cyan-sm">
                <Terminal className="w-5 h-5 text-[#00f0ff]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Rim<span className="text-[#00f0ff]">Cloud</span>
              </span>
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b0e14] border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all shadow-cyan-sm group"
              >
                <DiscordIcon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span>Join our Discord</span>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] font-semibold mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://billing.rimcloud.site"
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
                  href="https://billing.rimcloud.site"
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
                  href="https://billing.rimcloud.site"
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
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] font-semibold mb-4">
              Community & Team
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://discord.gg/TpYMknnHsX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Discord community"
                  className="text-zinc-300 hover:text-[#00f0ff] transition-colors flex items-center gap-2 group font-medium"
                >
                  <DiscordIcon className="w-4 h-4 text-[#00f0ff] group-hover:scale-110 transition-transform shrink-0" />
                  <span>Join our Discord</span>
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
                  href="https://billing.rimcloud.site/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Client Portal
                </a>
              </li>
              <li>
                <a
                  href="https://billing.rimcloud.site/submitticket.php"
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
                  className="text-xs font-mono text-zinc-400 hover:text-[#00f0ff] transition-colors block"
                >
                  <span className="text-zinc-500 block text-[10px] uppercase">Community Support:</span>
                  <span className="truncate block">https://discord.gg/TpYMknnHsX</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] font-semibold mb-4">
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

