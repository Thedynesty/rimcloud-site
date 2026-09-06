"use client";

import React, { useState, useId } from "react";
import {
  Sliders,
  Cpu,
  HardDrive,
  Users,
  Layers,
  Eye,
  CheckCircle2,
  ExternalLink,
  Zap,
  ShieldCheck,
  Sparkles,
  Server,
  ArrowRight
} from "lucide-react";

interface SoftwareOption {
  id: string;
  name: string;
  badge: string;
  desc: string;
  baseRam: number;
  playerFactor: number; // RAM per 10 players
}

const SOFTWARE_OPTIONS: SoftwareOption[] = [
  {
    id: "paper",
    name: "Paper / Purpur",
    badge: "Optimized Vanilla / SMP",
    desc: "Aikar flags, async chunk loading, high tick rate stability",
    baseRam: 2,
    playerFactor: 1.0,
  },
  {
    id: "fabric",
    name: "Fabric",
    badge: "Light / Performance Mods",
    desc: "Lithium, Sodium, lightweight modded server environment",
    baseRam: 3,
    playerFactor: 1.1,
  },
  {
    id: "forge",
    name: "Forge / NeoForge",
    badge: "Heavy Modpacks",
    desc: "All The Mods, Pixelmon, Create, RLCraft, technical packs",
    baseRam: 4,
    playerFactor: 1.4,
  },
  {
    id: "proxy",
    name: "Proxy / Velocity / Bungee",
    badge: "Network Hub / Routing",
    desc: "Multi-server network gateway, hub routing & packet forwarding",
    baseRam: 2,
    playerFactor: 0.8,
  },
];

interface ModTier {
  id: string;
  name: string;
  range: string;
  extraRam: number;
}

const MOD_TIERS: ModTier[] = [
  { id: "none", name: "Pure Vanilla", range: "0 mods / plugins", extraRam: 0 },
  { id: "light", name: "Light", range: "1–15 plugins or utility mods", extraRam: 1 },
  { id: "medium", name: "Medium", range: "15–40 plugins / medium pack", extraRam: 3 },
  { id: "heavy", name: "Heavy", range: "40+ plugins / large packs (ATM/Pixelmon)", extraRam: 6 },
  { id: "extreme", name: "Extreme", range: "100+ plugins or 250+ heavy mods", extraRam: 10 },
];

export default function RamCalculator() {
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareOption>(SOFTWARE_OPTIONS[0]);
  const [playerCount, setPlayerCount] = useState<number>(20);
  const [selectedModTier, setSelectedModTier] = useState<ModTier>(MOD_TIERS[2]);
  const [viewDistance, setViewDistance] = useState<number>(10);

  // Calculate View Distance Impact (6 chunks = 0GB up to 24+ chunks = 4GB)
  const getViewDistanceImpact = (dist: number): number => {
    if (dist <= 8) return 0;
    if (dist <= 12) return 1;
    if (dist <= 16) return 2;
    if (dist <= 20) return 3;
    return 4;
  };

  const viewImpact = getViewDistanceImpact(viewDistance);
  const playerImpact = ((Math.max(1, playerCount) - 1) / 10) * selectedSoftware.playerFactor;
  const rawRam = selectedSoftware.baseRam + playerImpact + selectedModTier.extraRam + viewImpact;
  
  // Uncapped dynamic calculation with minimum floor of 2 GB
  const finalRam = Math.max(2, Math.ceil(rawRam));

  // Compute recommended thread estimation
  const getThreadRecommendation = (ram: number) => {
    if (ram <= 4) return "2 Dedicated High-Frequency Compute Threads";
    if (ram <= 8) return "4 Dedicated High-Frequency Compute Threads";
    if (ram <= 16) return "6 Dedicated High-Frequency Compute Threads";
    if (ram <= 32) return "8 Dedicated High-Frequency Compute Threads";
    return "12+ Enterprise Multi-Core Dedicated Threads";
  };

  // Compute suggested NVMe storage
  const getStorageRecommendation = (ram: number) => {
    if (ram <= 4) return "50 GB Gen4 NVMe";
    if (ram <= 8) return "100 GB Gen4 NVMe";
    if (ram <= 16) return "200 GB Gen4 NVMe";
    if (ram <= 32) return "350 GB Gen4 NVMe";
    return "500+ GB Mirrored Enterprise NVMe Array";
  };

  const isEnterpriseScale = finalRam > 32;

  // Preset quick picks
  const applyPreset = (softwareId: string, players: number, modId: string, dist: number) => {
    const sw = SOFTWARE_OPTIONS.find((s) => s.id === softwareId) || SOFTWARE_OPTIONS[0];
    const mt = MOD_TIERS.find((m) => m.id === modId) || MOD_TIERS[0];
    setSelectedSoftware(sw);
    setPlayerCount(players);
    setSelectedModTier(mt);
    setViewDistance(dist);
  };

  return (
    <section className="relative py-20 bg-[#07090e] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f0ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[250px] bg-[#0080ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] uppercase tracking-wider shadow-cyan-sm">
            <Sliders className="w-3.5 h-3.5 text-[#00f0ff]" />
            Smart Hardware Diagnostic Recommender
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Minecraft Specs & <span className="text-[#00f0ff] cyan-text-glow">RAM Calculator</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Dynamically calculate the precise compute and memory allocation your server demands for guaranteed 20.0 TPS stability.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-mono text-zinc-500 mr-1">Quick Presets:</span>
            <button
              type="button"
              onClick={() => applyPreset("paper", 12, "light", 10)}
              className="px-3 py-1 rounded-lg bg-[#0b0e14] border border-white/10 hover:border-[#00f0ff]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              Friends SMP (12p)
            </button>
            <button
              type="button"
              onClick={() => applyPreset("forge", 25, "heavy", 12)}
              className="px-3 py-1 rounded-lg bg-[#0b0e14] border border-white/10 hover:border-[#00f0ff]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              Modded Realm (25p)
            </button>
            <button
              type="button"
              onClick={() => applyPreset("paper", 75, "medium", 14)}
              className="px-3 py-1 rounded-lg bg-[#0b0e14] border border-white/10 hover:border-[#00f0ff]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              Public Community (75p)
            </button>
            <button
              type="button"
              onClick={() => applyPreset("paper", 150, "extreme", 18)}
              className="px-3 py-1 rounded-lg bg-[#0b0e14] border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all cursor-pointer"
            >
              Megaserver (150p+)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================================= */}
          {/* LEFT: INTERACTIVE SLIDERS & OPTIONS (7 COLS) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-8 glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
            {/* 1. Software Selection */}
            <div className="space-y-3">
              <label className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-300">
                <span className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#00f0ff]" />
                  1. Server Software Platform
                </span>
                <span className="text-[#00f0ff] font-semibold">
                  Base: {selectedSoftware.baseRam} GB
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOFTWARE_OPTIONS.map((sw) => {
                  const isSelected = selectedSoftware.id === sw.id;
                  return (
                    <button
                      key={sw.id}
                      type="button"
                      onClick={() => setSelectedSoftware(sw)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#0b0e14] border-[#00f0ff] shadow-cyan-sm scale-[1.01]"
                          : "bg-[#07090e]/80 border-white/10 hover:border-white/20 hover:bg-[#0b0e14]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-bold text-sm ${isSelected ? "text-[#00f0ff]" : "text-white"}`}>
                          {sw.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400">
                          +{sw.baseRam}GB
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{sw.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Concurrent Player Count Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Users className="w-4 h-4 text-[#00f0ff]" />
                  2. Peak Concurrent Players
                </label>
                <div className="flex items-baseline gap-1.5 px-3 py-1 rounded-lg bg-[#07090e] border border-[#00f0ff]/30">
                  <span className="text-lg font-black font-mono text-white">{playerCount}</span>
                  <span className="text-xs font-mono text-[#00f0ff]">
                    {playerCount >= 150 ? "150+ Players" : "Players"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="150"
                  step="1"
                  value={playerCount}
                  onChange={(e) => setPlayerCount(parseInt(e.target.value, 10))}
                  className="w-full h-2 rounded-lg bg-zinc-800 appearance-none cursor-pointer accent-[#00f0ff]"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>1 Player (Solo / Dev)</span>
                  <span>50 Players</span>
                  <span>100 Players</span>
                  <span>150+ Players (Megaserver)</span>
                </div>
              </div>
            </div>

            {/* 3. Mod & Plugin Tier */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-300">
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00f0ff]" />
                  3. Plugins & Modpacks Complexity
                </span>
                <span className="text-emerald-400 font-semibold font-mono">
                  +{selectedModTier.extraRam} GB RAM
                </span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {MOD_TIERS.map((tier) => {
                  const isSelected = selectedModTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedModTier(tier)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#0b0e14] border-[#00f0ff] shadow-cyan-sm"
                          : "bg-[#07090e]/80 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className={`block text-xs font-bold ${isSelected ? "text-[#00f0ff]" : "text-white"}`}>
                        {tier.name}
                      </span>
                      <span className="block text-[10px] font-mono text-zinc-400 mt-0.5">
                        +{tier.extraRam} GB
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-zinc-400 font-mono italic">
                Selected: {selectedModTier.range}
              </p>
            </div>

            {/* 4. View / Simulation Distance Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Eye className="w-4 h-4 text-[#00f0ff]" />
                  4. View & Simulation Distance
                </label>
                <div className="flex items-baseline gap-1.5 px-3 py-1 rounded-lg bg-[#07090e] border border-[#00f0ff]/30">
                  <span className="text-lg font-black font-mono text-white">{viewDistance}</span>
                  <span className="text-xs font-mono text-[#00f0ff]">
                    {viewDistance >= 24 ? "24+ Chunks" : "Chunks"}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 ml-1">
                    (+{viewImpact} GB)
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="range"
                  min="6"
                  max="24"
                  step="1"
                  value={viewDistance}
                  onChange={(e) => setViewDistance(parseInt(e.target.value, 10))}
                  className="w-full h-2 rounded-lg bg-zinc-800 appearance-none cursor-pointer accent-[#00f0ff]"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>6 Chunks (Standard)</span>
                  <span>12 Chunks (Optimal)</span>
                  <span>18 Chunks</span>
                  <span>24+ Chunks (Extreme Render)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: LIVE OUTPUT DISPLAY CARD (5 COLS) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-2 border-[#00f0ff]/40 shadow-cyan-md relative overflow-hidden">
              {/* Subtle top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00f0ff] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
                    Engine Telemetry Recommendation
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
                    20.0 TPS Target
                  </span>
                </div>

                {/* Big Dynamic RAM Display */}
                <div className="p-6 rounded-2xl bg-[#07090e] border border-white/10 text-center relative overflow-hidden">
                  <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block mb-1">
                    Recommended Memory Allocation
                  </span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl sm:text-7xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-white">
                      {finalRam}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#00f0ff]">
                      GB RAM
                    </span>
                  </div>

                  {/* High-Capacity Threshold Indicator */}
                  {isEnterpriseScale && (
                    <div className="mt-3 p-2.5 rounded-xl bg-[#0080ff]/15 border border-[#0080ff]/40 text-xs font-mono text-[#38bdf8]">
                      ⚡ Enterprise / Network Cluster Scale ({finalRam} GB+)
                      <span className="block text-[11px] text-zinc-300 font-sans mt-0.5">
                        High-memory instance with dedicated multi-core thread isolation recommended.
                      </span>
                    </div>
                  )}
                </div>

                {/* Compute Spec Highlights (Strictly hardware-neutral) */}
                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#07090e] border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-white font-bold">
                      <Cpu className="w-4 h-4 text-[#00f0ff]" />
                      <span>High-Frequency Dedicated Compute</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono">
                      {getThreadRecommendation(finalRam)}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#07090e] border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-white font-bold">
                      <HardDrive className="w-4 h-4 text-[#00f0ff]" />
                      <span>Ultra-Fast Gen4 NVMe Storage</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono">
                      {getStorageRecommendation(finalRam)} (Up to 7,200 MB/s I/O)
                    </p>
                  </div>
                </div>

                {/* Dynamic Requirement Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-white/[0.08] text-xs font-mono text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Targeting smooth 20 TPS for ~{playerCount} concurrent players</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span>Optimized runtime configuration for {selectedSoftware.name}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Includes enterprise multi-layer DDoS shielding, automated backups, and Pterodactyl panel</span>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-4">
                  <a
                    href="https://billing.rimcloud.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-black bg-[#00f0ff] hover:bg-[#33f3ff] shadow-cyan-md hover:shadow-cyan-lg transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer"
                  >
                    <span>Deploy {finalRam}GB Server on Storefront</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Trust Footer */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#0b0e14] border border-white/10 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                24-Hour Refund Guarantee
              </span>
              <span>Instant Setup &lt; 60s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

