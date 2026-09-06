import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Gamepad2,
  Bot,
  Globe,
  Zap,
  ExternalLink,
  ShieldCheck,
  Users,
  Target,
  Heart,
  ArrowRight,
  Terminal,
  Cpu,
  Server,
  Sparkles,
} from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

export const metadata: Metadata = {
  title: "About Us | Rim Cloud",
  description:
    "Learn about Rim Cloud, our mission, infrastructure, and the team powering community-first cloud and game hosting.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Agrim Kumar",
      initials: "AK",
      role: "Owner",
      focus: "Technical Development & Infrastructure Systems",
      bio: "Leads core technical development, server infrastructure architecture, automated deployment pipelines, and node performance optimization across Rim Cloud's global network.",
      accentColor: "from-[#00f0ff] to-[#0080ff]",
      badgeBorder: "border-[#00f0ff]/40",
      badgeText: "text-[#00f0ff]",
    },
    {
      name: "Mr.Soul",
      initials: "MS",
      role: "Owner",
      focus: "Management & Customer Experience",
      bio: "Directs business operations, customer experience, service quality assurance, and community partnerships to ensure every hosting client receives dedicated, prompt support.",
      accentColor: "from-[#0080ff] to-[#7928ca]",
      badgeBorder: "border-[#0080ff]/40",
      badgeText: "text-[#0080ff]",
    },
    {
      name: "Ekko",
      initials: "EK",
      role: "Owner",
      focus: "Technical Workflows & Maintenance",
      bio: "Oversees technical and operational workflows, feature development, system maintenance routines, and telemetry monitoring to keep hosting environments consistently stable.",
      accentColor: "from-[#00f0ff] to-[#10b981]",
      badgeBorder: "border-emerald-500/40",
      badgeText: "text-emerald-400",
    },
  ];

  const services = [
    {
      icon: Gamepad2,
      emoji: "🎮",
      title: "Minecraft Hosting",
      description:
        "Affordable and high-performance server hosting for communities of all sizes. Engineered with high-frequency compute, zero tick-drop tuning, instant modpack support, and continuous NVMe I/O throughput.",
      linkText: "Explore Minecraft Plans",
      href: "/minecraft",
      tag: "20.0 TPS Guarantee",
    },
    {
      icon: Bot,
      emoji: "🤖",
      title: "Discord Bot Hosting",
      description:
        "High-uptime hosting designed to keep bot projects running smoothly. Built with native 24/7 runtime support for Node.js, Python, Java, and Go, coupled with isolated containerized environments.",
      linkText: "Deploy Discord Bot",
      href: "https://billing.rimcloud.site",
      external: true,
      tag: "99.9% Uptime",
    },
    {
      icon: Globe,
      emoji: "🌐",
      title: "Web Hosting",
      description:
        "Simple and fast hosting for websites, portfolios, and web apps. Benefit from automated SSL certification, one-click installer utilities, resilient DNS routing, and fast global delivery.",
      linkText: "View Web Solutions",
      href: "https://billing.rimcloud.site",
      external: true,
      tag: "Free SSL & CDN",
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "Reliable Infrastructure",
      description:
        "Continuous optimization for stability, low latency, and maximum value. Running on enterprise multi-core architecture, mirrored Gen4 NVMe arrays, and advanced multi-terabit DDoS shielding.",
      linkText: "Test Network Latency",
      href: "/#ping-test",
      tag: "Enterprise Compute",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090e] py-16 sm:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00f0ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[350px] bg-[#0080ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[350px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* ========================================================================= */}
        {/* HERO HEADER */}
        {/* ========================================================================= */}
        <header className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-wider shadow-cyan-sm">
            <Building className="w-3.5 h-3.5 text-[#00f0ff]" />
            About Rim Cloud
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Hosting Built for{" "}
            <span className="text-[#00f0ff] cyan-text-glow">Your Community</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            At Rim Cloud, we focus on delivering reliable, affordable, and powerful hosting without unnecessary complexity. Whether you are launching your first Minecraft SMP, deploying a production Discord bot, or hosting a community web platform, our infrastructure is engineered to run seamlessly 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://billing.rimcloud.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] transition-all shadow-cyan-sm hover:shadow-cyan-md"
            >
              <span>Explore Services</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/#ping-test"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-white bg-[#0b0e14] hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/40 transition-all"
            >
              <span>Verify Ping & Latency</span>
              <ArrowRight className="w-4 h-4 text-[#00f0ff]" />
            </Link>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 1: WHAT WE PROVIDE (BENTO GRID) */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Service Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                What We Provide
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Purpose-built hosting solutions engineered for maximum performance, minimal latency, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#07090e] border border-white/10 flex items-center justify-center text-xl shadow-inner group-hover:border-[#00f0ff]/40 transition-colors">
                        <span className="text-2xl">{srv.emoji}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-xs font-mono text-[#00f0ff]">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-[#00f0ff] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 relative z-10">
                    {srv.external ? (
                      <a
                        href={srv.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f0ff] hover:text-[#33f3ff] transition-colors"
                      >
                        <span>{srv.linkText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={srv.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f0ff] hover:text-[#33f3ff] transition-colors"
                      >
                        <span>{srv.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MEET THE TEAM (3-CARD GRID) */}
        {/* ========================================================================= */}
        <section id="team" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5" />
                Leadership & Operations
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Meet the Team
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              The dedicated team steering Rim Cloud&apos;s development, customer satisfaction, and infrastructure stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-7 bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                {/* Top glow accent */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#00f0ff]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00f0ff]/20 transition-all" />

                <div className="space-y-4 relative z-10">
                  {/* Avatar & Role Badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#07090e] to-[#0f172a] border border-white/15 flex items-center justify-center text-xl font-mono font-black text-white shadow-cyan-sm group-hover:border-[#00f0ff]/50 transition-all">
                      <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        {member.initials}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] font-semibold uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>

                  {/* Name & Focus */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#00f0ff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {member.focus}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>

                {/* Bottom Verification Indicator */}
                <div className="pt-5 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Leadership
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span>Rim Cloud</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DISCORD COMMUNITY CALLOUT CARD */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0b0e14] via-[#0c1220] to-[#0b0e14] border border-[#00f0ff]/30 relative overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-6 group">
          <div className="space-y-2 text-center sm:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
              <DiscordIcon className="w-3.5 h-3.5" />
              Official Community
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Join the Rim Cloud Community
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl">
              Connect with the owners, get real-time support, and meet other server owners.
            </p>
          </div>
          <a
            href="https://discord.gg/TpYMknnHsX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Discord community"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] transition-all shadow-cyan-sm hover:shadow-cyan-md shrink-0 group-hover:scale-105 duration-200 relative z-10"
          >
            <DiscordIcon className="w-4 h-4" />
            <span>Join Discord Server →</span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: OUR MISSION & BUILT TOGETHER */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="rounded-3xl bg-gradient-to-b from-[#0b0e14] to-[#07090e] border border-[#1e293b] p-8 sm:p-12 relative overflow-hidden space-y-8 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            {/* Ambient corner highlights */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0080ff]/5 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                Our Mission
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                &ldquo;Make quality hosting{" "}
                <span className="text-[#00f0ff] cyan-text-glow">
                  accessible to everyone.
                </span>
                &rdquo;
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
                Rim Cloud was founded on the belief that gaming communities, developers, and creators shouldn&apos;t have to compromise between exorbitant server costs and unreliable performance. We eliminate hidden fees, avoid artificial throttling, and provide raw, enterprise-grade compute at transparent prices.
              </p>
            </div>

            {/* Built Together Note */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#07090e]/90 border border-white/10 space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Heart className="w-4 h-4 text-red-400 fill-red-400/20" />
                <span>Built Together With Our Community</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We are deeply grateful to every player, bot developer, server administrator, and community leader who chooses to power their projects on Rim Cloud. Your feedback, uptime expectations, and trust drive our continuous system optimizations every single day.
              </p>
              <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="text-[#00f0ff] font-semibold">
                  Rim Cloud — Reliable Hosting. Built for Your Community.
                </div>
                <div className="text-zinc-400">
                  Community Support:{" "}
                  <a
                    href="https://discord.gg/TpYMknnHsX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join our Discord community"
                    className="text-[#00f0ff] underline hover:text-white"
                  >
                    https://discord.gg/TpYMknnHsX
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action Grid */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">Ready to start your server?</h4>
                <p className="text-xs text-zinc-400">Instant automated provisioning within seconds of ordering.</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://billing.rimcloud.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] transition-all shadow-cyan-sm"
                >
                  <span>Deploy Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/policies"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-[#07090e] border border-white/10 hover:border-white/20 transition-all"
                >
                  <span>Our Policies</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation Backlinks */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
          <Link
            href="/minecraft"
            className="p-3.5 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/40 text-zinc-300 hover:text-white transition-colors text-center"
          >
            Minecraft Hosting →
          </Link>
          <Link
            href="/terms"
            className="p-3.5 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/40 text-zinc-300 hover:text-white transition-colors text-center"
          >
            Terms of Service →
          </Link>
          <Link
            href="/refund"
            className="p-3.5 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/40 text-zinc-300 hover:text-white transition-colors text-center"
          >
            Refund Policy →
          </Link>
          <Link
            href="/policies"
            className="p-3.5 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/40 text-zinc-300 hover:text-white transition-colors text-center"
          >
            Policies Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
