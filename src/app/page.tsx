import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Server,
  Shield,
  Activity,
  Cpu,
  HardDrive,
  Clock,
  ArrowRight,
  ExternalLink,
  Layers,
  Terminal,
  RefreshCw,
  FolderLock,
  Headphones,
  CheckCircle2,
  Sliders,
  ChevronRight,
} from "lucide-react";
import PingTestMap from "@/components/PingTestMap";
import RamCalculator from "@/components/RamCalculator";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#07090e] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Full-width Minecraft Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://i.imgur.com/gRmcjEu.png"
            alt="Rim Cloud Minecraft High-Performance Infrastructure"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center pointer-events-none select-none opacity-40"
          />
          {/* Dark gradient overlay so hero text, headings, and buttons stand out cleanly */}
          <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/75 to-transparent" />
        </div>

        {/* Subtle ambient lighting accent behind content */}
        <div className="hero-cyber-glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#bcfc25]/10 via-transparent to-transparent blur-[90px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge with animated cyan radar pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0b0e14] border border-[#bcfc25]/40 text-xs font-mono text-[#bcfc25] uppercase tracking-wider shadow-[0_0_20px_rgba(188,252,37,0.25)] hover:border-[#bcfc25] transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bcfc25] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bcfc25]"></span>
              </span>
              <span>⚡ ULTRA LOW-LATENCY INFRASTRUCTURE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Next-Gen Game & Cloud Server Hosting with{" "}
              <span className="hero-brand-gradient relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#bcfc25] via-[#d9ff66] to-[#a3e635] cyan-text-glow">
                Rim Cloud
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Deploy reliable game servers and cloud compute instances with enterprise DDoS filtering, automated Pterodactyl orchestration, and 99.9% uptime.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://billing.rimcloud.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-deploy-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] shadow-[0_0_20px_rgba(188,252,37,0.25)] hover:shadow-[0_0_30px_rgba(188,252,37,0.45)] transform hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Deploy Server</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#ping-test"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-zinc-200 hover:text-white bg-[#0b0e14] hover:bg-[#121824] border border-[#bcfc25]/30 hover:border-[#bcfc25] transition-all duration-200 group"
              >
                <Activity className="w-4 h-4 text-[#bcfc25] group-hover:scale-110 transition-transform" />
                <span>Test Network Latency</span>
              </a>
            </div>

            {/* Trustpilot Social Proof Banner */}
            <div className="pt-2 flex items-center justify-center">
              <a
                href="https://www.trustpilot.com/review/rimcloud.in"
                target="_blank"
                rel="noopener noreferrer"
                title="Rated on Trustpilot — Leave a Review"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0b0e14]/90 border border-[#00b67a]/40 hover:border-[#00b67a] shadow-[0_0_15px_rgba(0,182,122,0.15)] hover:shadow-[0_0_25px_rgba(0,182,122,0.3)] transition-all group backdrop-blur-md cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="flex items-center justify-center w-4 h-4 rounded-sm bg-[#00b67a] text-white shrink-0">
                      <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                        <path d="M24 9.625l-9.156-.75L12 0 9.156 8.875 0 9.625l7.031 6.125-2.156 8.875L12 19.875 19.125 24.625l-2.156-8.875z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                  Rated on <span className="font-semibold text-white">Trustpilot</span> — <span className="text-[#00b67a] font-semibold underline underline-offset-2">Leave a Review</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#00b67a] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Live Micro-Stats Bar */}
            <div className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[#0b0e14]/90 border border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
                <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/[0.05] last:border-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Uptime SLA</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">99.9%</span>
                  <span className="text-[11px] text-emerald-400 font-mono mt-0.5">Guaranteed</span>
                </div>

                <div className="flex flex-col items-center justify-center p-3 text-center sm:border-r border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#bcfc25]" />
                    <span>Instant Setup</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">&lt; 60s</span>
                  <span className="text-[11px] text-[#bcfc25] font-mono mt-0.5">Automated</span>
                </div>

                <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <Activity className="w-3.5 h-3.5 text-[#bcfc25]" />
                    <span>Global Nodes</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">4</span>
                  <span className="text-[11px] text-zinc-400 font-mono mt-0.5">Active Tier-1 PoPs</span>
                </div>

                <div className="flex flex-col items-center justify-center p-3 text-center">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>DDoS Scrubbing</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">1.2+ Tbps</span>
                  <span className="text-[11px] text-emerald-400 font-mono mt-0.5">Zero Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BENTO-STYLE FEATURE SHOWCASE */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-[#07090e] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(188,252,37,0.25)]">
              Performance Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Engineered Without Compromise
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Built on enterprise-grade infrastructure with automated orchestration, industry-leading DDoS filtering, and high-frequency compute power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Card 1: Pterodactyl Control Panel Preview (Large 7 Cols) */}
            <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-[#bcfc25]/30 flex items-center justify-center shadow-cyan-sm">
                  <Sliders className="w-6 h-6 text-[#bcfc25]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Pterodactyl Control Panel Orchestration
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
                    Take full control of your instances with our streamlined custom Pterodactyl panel. Featuring 1-click modpack installers, automated scheduled backups, SFTP file access, and live resource telemetry.
                  </p>
                </div>

                {/* Modpacks & Server Engine Visual Showcase */}
                <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-[#bcfc25]/25 shadow-cyan-sm my-3 group/img">
                  <Image
                    src="https://i.imgur.com/b0Jg5pv.png"
                    alt="Pterodactyl Modpacks & Server Engine Showcase"
                    fill
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07090e]/85 backdrop-blur-md border border-[#bcfc25]/30 text-[10px] font-mono text-[#bcfc25]">
                    <Zap className="w-3 h-3" />
                    <span>Instant 1-Click Engine Provisioning</span>
                  </div>
                </div>

                {/* Interactive Simulated Panel Elements */}
                <div className="mt-4 rounded-xl bg-[#07090e] border border-white/10 p-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>node-nova-01.rimcloud.site</span>
                    </div>
                    <span className="text-[#bcfc25] px-2 py-0.5 rounded bg-[#bcfc25]/10">ONLINE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-[#0b0e14] border border-white/[0.05]">
                      <span className="text-zinc-500 block">COMPUTE LOAD</span>
                      <span className="text-white font-bold">14.2% (Multi-Core)</span>
                    </div>
                    <div className="p-2 rounded bg-[#0b0e14] border border-white/[0.05]">
                      <span className="text-zinc-500 block">NVMe I/O</span>
                      <span className="text-white font-bold">7,200 MB/s</span>
                    </div>
                    <div className="p-2 rounded bg-[#0b0e14] border border-white/[0.05]">
                      <span className="text-zinc-500 block">NETWORK</span>
                      <span className="text-emerald-400 font-bold">10 Gbps Active</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-[#0b0e14] border border-white/10 text-zinc-300">
                      ✓ Instant Modpacks
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0b0e14] border border-white/10 text-zinc-300">
                      ✓ Automated Backups
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0b0e14] border border-white/10 text-zinc-300">
                      ✓ Web SFTP File Manager
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Multi-Layer DDoS Shield (5 Cols) */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Multi-Layer DDoS Shield
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
                    Automated real-time packet filtering protects your services against Layer 3, 4, and 7 volumetric attacks. Malicious traffic is scrubbed instantly at the edge with zero latency penalty or downtime.
                  </p>
                </div>

                {/* Performance & High Tick Rate Visual Showcase */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] my-3 group/img">
                  <Image
                    src="https://i.imgur.com/eNONZmc.jpeg"
                    alt="Performance and Low Latency Infrastructure"
                    fill
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07090e]/85 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <Shield className="w-3 h-3" />
                    <span>20.0 TPS Guaranteed Stability</span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-[#07090e] border border-emerald-500/20 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Active Mitigation:</span>
                    <span className="text-emerald-400 font-bold">100% Zero-Loss</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[98%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-500 pt-1">
                    <span>TCP SYN / UDP Flood Filtered</span>
                    <span>Continuous Edge Scrubbing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: High-Frequency Enterprise Compute (6 Cols) */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-[#bcfc25]/30 flex items-center justify-center shadow-cyan-sm">
                  <Cpu className="w-6 h-6 text-[#bcfc25]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    High-Frequency Enterprise Compute
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
                    Powered by enterprise multi-core compute clusters, unbuffered ECC memory, and enterprise Gen4 NVMe storage arrays. Designed to prevent tick rate degradation and handle high player concurrency effortlessly.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#07090e] border border-white/10">
                    <span className="text-zinc-500 block text-[10px]">STORAGE ENGINE</span>
                    <span className="text-white font-bold">Gen4 NVMe Arrays</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#07090e] border border-white/10">
                    <span className="text-zinc-500 block text-[10px]">NETWORK UPLINK</span>
                    <span className="text-[#bcfc25] font-bold">10 Gbps Tier-1 Redundant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: 24/7 Priority Support & Health Telemetry (6 Cols) */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-[#0080ff]/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,128,255,0.2)]">
                  <Headphones className="w-6 h-6 text-[#0080ff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    24/7 Priority Support & Node Telemetry
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
                    Around-the-clock systems monitoring and dedicated technician helpdesk. Every node is tracked continuously with automated failover routing, predictive health diagnostics, and sub-15 minute ticket turnaround.
                  </p>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#07090e] border border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Live Fleet Telemetry: Active</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% HEALTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUICK SERVICE CATEGORIES (Paymenter Redirection) */}
      {/* ========================================================================= */}
      <section id="services" className="relative py-24 bg-[#07090e] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] uppercase tracking-wider mb-3">
              Storefront Categories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              High-Compute Hosting Plans
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Select your instance type to instantly configure and deploy through our automated Paymenter storefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Minecraft Hosting */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#bcfc25]/20 hover:border-[#bcfc25] relative group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-[#bcfc25]/40 flex items-center justify-center shadow-cyan-sm">
                    <Server className="w-6 h-6 text-[#bcfc25]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#bcfc25]/10 border border-[#bcfc25]/30 text-[11px] font-mono text-[#bcfc25] uppercase shadow-[0_0_20px_rgba(188,252,37,0.25)]">
                    High Performance
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Minecraft Hosting
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    Lag-free game hosting with dedicated thread priority and instant modpack installation.
                  </p>
                </div>

                <div className="pt-2 space-y-2.5 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>High-Frequency Dedicated Compute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Purpur, Paper, Forge & Fabric</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Unmetered Gen4 NVMe Storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Automated Scheduled Backups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Free Custom Subdomain</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://billing.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-[#bcfc25] hover:bg-[#cbfd4e] shadow-[0_0_20px_rgba(188,252,37,0.25)] hover:shadow-[0_0_28px_rgba(188,252,37,0.45)] transition-all duration-200 group/btn"
                >
                  <span>Configure on Storefront</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Category 2: Discord Bot Hosting */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#bcfc25]/50 relative group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-white/20 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-zinc-200" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono text-zinc-300 uppercase">
                    24/7 Always On
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Discord Bot Hosting
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    Continuous, zero-downtime execution for Node.js, Python, Java, and Go bots.
                  </p>
                </div>

                <div className="pt-2 space-y-2.5 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Node.js, Python 3, Java, Rust & Go</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Instant Crash Auto-Restart Engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>GitHub Webhook & Git Pull Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Ultra-Low Resource Overhead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Pterodactyl Console & Live Logs</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://billing.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0b0e14] hover:bg-[#121824] border border-white/20 hover:border-[#bcfc25]/60 transition-all duration-200 group/btn"
                >
                  <span>Configure on Storefront</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Category 3: Cloud VPS */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#0080ff]/30 hover:border-[#bcfc25] relative group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0e14] border border-[#0080ff]/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,128,255,0.25)]">
                    <Cpu className="w-6 h-6 text-[#0080ff]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0080ff]/10 border border-[#0080ff]/30 text-[11px] font-mono text-[#0080ff] uppercase">
                    Root Access
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Cloud VPS
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    Full KVM root virtual machines built with Enterprise Multi-Core Architecture.
                  </p>
                </div>

                <div className="pt-2 space-y-2.5 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Enterprise Multi-Core Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Dedicated Clean IPv4 & IPv6 Subnet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Full Root Access (Ubuntu, Debian, Alma)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>10 Gbps Tier-1 Redundant Uplink</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0" />
                    <span>Instant Snapshot & Recovery Backups</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://billing.rimcloud.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0080ff] to-[#bcfc25] hover:opacity-90 transition-all duration-200 shadow-cyan-sm group/btn"
                >
                  <span>Configure on Storefront</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE WORLD MAP PING TEST */}
      {/* 4. MINECRAFT RAM & SPECS RECOMMENDER */}
      {/* ========================================================================= */}
      <RamCalculator />

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE WORLD MAP PING TEST */}
      {/* ========================================================================= */}
      <PingTestMap />

      {/* ========================================================================= */}
      {/* 5. SLA & HARDWARE NEUTRAL INFRASTRUCTURE PROMISE */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-b from-[#0d121c] to-[#07090e] border border-[#bcfc25]/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center space-y-8">
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            
            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-[#bcfc25]/10 border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] uppercase tracking-wider shadow-[0_0_20px_rgba(188,252,37,0.25)]">
                Enterprise SLA Guarantee
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Ready to elevate your hosting to <span className="text-[#bcfc25]">Rim Cloud</span>?
              </h2>
              <p className="text-base sm:text-lg text-zinc-300">
                Experience high-frequency dedicated compute with instant automated provisioning and a 24-hour money-back guarantee.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="https://billing.rimcloud.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] shadow-[0_0_20px_rgba(188,252,37,0.25)] hover:shadow-[0_0_30px_rgba(188,252,37,0.45)] transition-all"
              >
                <span>Deploy on Rim Cloud Storefront</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.trustpilot.com/review/rimcloud.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-white bg-[#0b0e14] border border-[#00b67a]/40 hover:border-[#00b67a] hover:shadow-[0_0_20px_rgba(0,182,122,0.25)] transition-all group"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-sm bg-[#00b67a] shrink-0">
                  <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                    <path d="M24 9.625l-9.156-.75L12 0 9.156 8.875 0 9.625l7.031 6.125-2.156 8.875L12 19.875 19.125 24.625l-2.156-8.875z" />
                  </svg>
                </div>
                <span>Review on <strong className="text-[#00b67a] group-hover:text-emerald-400">Trustpilot</strong></span>
                <ExternalLink className="w-4 h-4 text-[#00b67a]" />
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-zinc-200 hover:text-white bg-[#0b0e14] border border-white/10 hover:border-[#bcfc25]/40 transition-all"
              >
                <span>Learn About Our Infrastructure</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

