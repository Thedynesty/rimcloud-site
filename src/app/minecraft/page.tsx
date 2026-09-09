import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Server,
  Zap,
  Shield,
  Activity,
  HardDrive,
  Cpu,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Layers,
  RotateCcw
} from "lucide-react";
import RamCalculator from "@/components/RamCalculator";

export const metadata = {
  title: "Minecraft Server Hosting | Rim Cloud",
  description:
    "High-Frequency Dedicated Compute, unmetered Gen4 NVMe storage, and 99.9% uptime SLA for Purpur, Paper, Forge, Fabric, and Modpacks.",
};

export default function MinecraftPage() {
  const plans = [
    {
      name: "Grass Tier",
      memory: "4 GB ECC DDR5/DDR4",
      compute: "2 Dedicated Threads",
      storage: "50 GB Gen4 NVMe",
      slots: "Recommended for 15+ Players",
      price: "$4.99",
      billingUrl: "https://billing.rimcloud.in/",
      popular: false,
    },
    {
      name: "Iron Tier",
      memory: "8 GB ECC DDR5/DDR4",
      compute: "4 Dedicated Threads",
      storage: "100 GB Gen4 NVMe",
      slots: "Recommended for 40+ Players / Modpacks",
      price: "$9.99",
      billingUrl: "https://billing.rimcloud.in/",
      popular: true,
    },
    {
      name: "Diamond Tier",
      memory: "16 GB ECC DDR5/DDR4",
      compute: "6 Dedicated Threads",
      storage: "200 GB Gen4 NVMe",
      slots: "Recommended for 100+ Players / Heavy Networks",
      price: "$19.99",
      billingUrl: "https://billing.rimcloud.in/",
      popular: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090e] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO BANNER SHOWCASE */}
      {/* ========================================================================= */}
      <section className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        {/* Full-width Minecraft Cinematic Wallpaper Banner */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://www.gamemaps.com/img/media/162/wallpaper/364435a96593d824f72c57c258ed5900aa89f493.jpg?1610655285"
            alt="Rim Cloud Minecraft Cinematic Infrastructure Wallpaper"
            fill
            priority
            className="object-cover object-center pointer-events-none select-none opacity-35 scale-105 transition-transform duration-1000"
          />
          {/* Multi-layered dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/80 via-[#07090e]/70 to-[#07090e]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-transparent to-[#07090e]/80" />
        </div>

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#bcfc25]/10 blur-[140px] rounded-full pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14]/90 border border-[#bcfc25]/40 text-xs font-mono text-[#bcfc25] uppercase tracking-wider shadow-[0_0_20px_rgba(188,252,37,0.25)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bcfc25] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bcfc25]"></span>
              </span>
              <span>⚡ MINECRAFT ENTERPRISE CLUSTERS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
              High-Frequency <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcfc25] via-[#d9ff66] to-[#a3e635] cyan-text-glow">
                Minecraft Hosting
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Experience stutter-free, stable 20.0 TPS gameplay powered by High-Frequency Dedicated Compute, unmetered Gen4 NVMe arrays, and automated Pterodactyl orchestration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://billing.rimcloud.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] shadow-[0_0_20px_rgba(188,252,37,0.25)] hover:shadow-[0_0_30px_rgba(188,252,37,0.45)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Deploy Minecraft Server</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/#ping-test"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-zinc-200 hover:text-white bg-[#0b0e14] hover:bg-[#121824] border border-[#bcfc25]/30 hover:border-[#bcfc25] transition-all"
              >
                <Activity className="w-4 h-4 text-[#bcfc25]" />
                <span>Test Server Latency</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>20.0 TPS Locked Single-Core Priority</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25]" />
                <span>Paper, Purpur, Forge & Fabric 1-Click</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Automated Free DDoS Scrubbing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PLANS & TIERS */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-[#07090e] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] uppercase tracking-wider mb-3">
              Storefront Tiers
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Choose Your Minecraft Compute
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              All plans feature automated instant provisioning, full SFTP access, and unmetered NVMe bandwidth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[#bcfc25] shadow-cyan-md scale-105 z-10"
                    : "border border-white/10 hover:border-[#bcfc25]/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#bcfc25] text-black text-xs font-mono font-bold uppercase tracking-wider shadow-cyan-sm">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">{plan.slots}</p>
                  </div>

                  <div className="py-2 border-y border-white/[0.06]">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-zinc-400"> / month</span>
                  </div>

                  <ul className="space-y-3 text-sm text-zinc-300">
                    <li className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-[#bcfc25] shrink-0" />
                      <span>{plan.memory}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-[#bcfc25] shrink-0" />
                      <span>{plan.compute}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <HardDrive className="w-4 h-4 text-[#bcfc25] shrink-0" />
                      <span>{plan.storage}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>1.2+ Tbps Multi-Layer DDoS Shield</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Automated Scheduled Backups</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Free Subdomain (*.rimcloud.site)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href={plan.billingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                      plan.popular
                        ? "bg-[#bcfc25] hover:bg-[#cbfd4e] text-black shadow-cyan-sm hover:shadow-cyan-md"
                        : "bg-[#0b0e14] hover:bg-[#121824] border border-white/20 hover:border-[#bcfc25] text-white"
                    }`}
                  >
                    <span>Configure on Storefront</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURE HIGHLIGHTS */}
      {/* 3. INTERACTIVE RAM & SPECS RECOMMENDER */}
      {/* ========================================================================= */}
      <RamCalculator />

      {/* ========================================================================= */}
      {/* 4. FEATURE HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-[#07090e] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b0e14] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-[#bcfc25]/30 flex items-center justify-center text-[#bcfc25]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">High-Frequency Single-Core Priority</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Minecraft server ticks rely intensely on single-threaded frequency. Our compute nodes are tuned to eliminate redstone lag, chunk loading stutter, and entity ticks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0e14] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-[#bcfc25]/30 flex items-center justify-center text-[#bcfc25]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Instant Modpack & Version Switching</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Switch seamlessly between Paper, Purpur, Forge, Fabric, Mohist, or complete CurseForge/FTB modpack archives with one click inside the Pterodactyl dashboard.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0e14] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">24-Hour Money-Back Guarantee</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Test your server risk-free. If our network latency or server performance does not satisfy your standards, claim a 100% refund within the first 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOOTER BANNER CTA */}
      {/* 5. FOOTER BANNER CTA */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-gradient-to-b from-[#0d121c] to-[#07090e] border border-[#bcfc25]/20 p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to launch your Minecraft server on <span className="text-[#bcfc25]">Rim Cloud</span>?
            </h2>
            <p className="text-base text-zinc-300 max-w-xl mx-auto">
              Automated provisioning ready in under 60 seconds directly through Paymenter billing.
            </p>
            <div className="pt-2">
              <a
                href="https://billing.rimcloud.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] shadow-cyan-md hover:shadow-cyan-lg transition-all"
              >
                <span>Deploy Now on Storefront</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
