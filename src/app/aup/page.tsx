import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Clock,
  ArrowLeft,
  Shield,
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
  Ban,
  Cpu,
  Server,
  Globe,
  Bot,
  Flame,
  FileWarning,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Rim Cloud",
  description:
    "Official Acceptable Use Policy (AUP) establishing prohibited activities, security standards, and infrastructure protection rules for Rim Cloud customers.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#07090e] py-16 sm:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#bcfc25]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-[#0080ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#bcfc25] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Policies Overview</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-amber-500/30 text-xs font-mono text-amber-400 uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            Infrastructure & Network Protection
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Rim Cloud — <span className="text-[#bcfc25] cyan-text-glow">Acceptable Use Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#bcfc25]" />
              <strong>Last Updated:</strong> September 6, 2026
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-emerald-400 font-semibold">Effective Immediately</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
            This Acceptable Use Policy (&quot;AUP&quot;) establishes activities that are prohibited when using Rim Cloud services.
          </p>
          <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#bcfc25]/20 text-sm text-zinc-300">
            The purpose of this policy is to protect Rim Cloud, our customers, our infrastructure, and the wider internet.
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-zinc-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">01.</span>
              General Requirements
            </h2>
            <p>Customers must:</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Use Rim Cloud services legally and responsibly.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Protect their account credentials.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Prevent unauthorized access to their services.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Ensure that users operating under their account comply with this policy.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Respond reasonably to abuse or security reports.</span>
              </li>
            </ul>
            <p className="text-sm text-zinc-400">
              Customers are responsible for activity performed through their account and services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-6 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">02.</span>
              Prohibited Activities
            </h2>
            <p className="text-sm text-zinc-400">Rim Cloud services must not be used for:</p>

            {/* Illegal Activities */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                Illegal Activities
              </h3>
              <ul className="space-y-1.5 text-xs font-mono text-zinc-300 list-disc list-inside pl-2">
                <li>Any activity that violates applicable law.</li>
                <li>Fraud or financial crimes.</li>
                <li>Identity theft.</li>
                <li>Distribution of stolen information.</li>
                <li>Activities intended to facilitate criminal activity.</li>
              </ul>
            </div>

            {/* Malware and Malicious Software */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                <FileWarning className="w-4 h-4 text-red-400" />
                Malware and Malicious Software
              </h3>
              <p className="text-sm text-zinc-300">Customers may not intentionally host, distribute, develop, or operate:</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Viruses</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Trojans</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Worms</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Ransomware</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5 sm:col-span-2">Credential-stealing malware</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5 sm:col-span-2">Malware distribution systems</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5 col-span-2 sm:col-span-4">Other malicious software</li>
              </ul>
              <p className="text-xs text-zinc-400 pt-1">
                Security research may be permitted when explicitly authorized by Rim Cloud.
              </p>
            </div>

            {/* Network Abuse */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                <Ban className="w-4 h-4 text-red-400" />
                Network Abuse
              </h3>
              <p className="text-sm text-zinc-300">Customers may not use Rim Cloud infrastructure for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">DDoS attacks</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">DoS attacks</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Packet flooding</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Port scanning without authorization</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Network attacks</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Brute-force attacks against third-party systems</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Unauthorized penetration testing</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Vulnerability scanning of systems without permission</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5 sm:col-span-2">Attempts to bypass network security</li>
              </ul>
            </div>

            {/* Spam */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                Spam
              </h3>
              <p className="text-sm text-zinc-300">Customers may not use Rim Cloud services for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Unsolicited bulk email</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Spam</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Mass unsolicited messages</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Malicious advertising</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Email bombing</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Automated abuse of third-party platforms</li>
              </ul>
            </div>

            {/* Cryptocurrency Mining */}
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b] space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#bcfc25]" />
                Cryptocurrency Mining
              </h3>
              <p className="text-sm text-zinc-300">
                Cryptocurrency mining is prohibited unless explicitly authorized in writing by Rim Cloud.
              </p>
            </div>

            {/* Copyright and Intellectual Property */}
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b] space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#bcfc25]" />
                Copyright and Intellectual Property
              </h3>
              <p className="text-sm text-zinc-300">
                Customers must not use Rim Cloud services to knowingly distribute or host copyrighted material without authorization.
              </p>
            </div>

            {/* Child Sexual Abuse Material */}
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 space-y-2">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                Child Sexual Abuse Material
              </h3>
              <p className="text-sm font-semibold">
                Any creation, possession, distribution, hosting, or facilitation of child sexual abuse material is strictly prohibited.
              </p>
              <p className="text-xs text-red-300">
                Any such content may be immediately removed and reported to appropriate authorities where legally required.
              </p>
            </div>

            {/* Violence and Terrorism */}
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 space-y-2">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                <Ban className="w-4 h-4 text-red-400" />
                Violence and Terrorism
              </h3>
              <p className="text-sm">
                Customers may not use Rim Cloud services to facilitate terrorism, violent criminal activity, or other unlawful activities involving serious harm.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">03.</span>
              Minecraft-Specific Rules
            </h2>
            <p>Minecraft servers must not be used to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Conduct attacks against other servers.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Distribute malicious software.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Host illegal content.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Conduct DDoS attacks.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Abuse Rim Cloud infrastructure.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Deliberately interfere with other customers.</li>
            </ul>
            <p className="text-sm text-zinc-400 pt-1">
              Customers are responsible for ensuring their Minecraft communities comply with applicable Minecraft rules and guidelines.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">04.</span>
              Discord Bot Rules
            </h2>
            <p>Discord bots hosted with Rim Cloud must comply with applicable Discord policies.</p>
            <p className="text-sm text-zinc-400">Bots must not intentionally:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Spam users or servers.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Perform malicious actions.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Steal credentials or tokens.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Conduct attacks.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Circumvent Discord security systems.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Abuse Discord APIs.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">05.</span>
              Web Hosting Rules
            </h2>
            <p className="text-sm text-zinc-400">Web hosting services must not be used to host:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Phishing websites</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Malware</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Scam pages</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Credential harvesting pages</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Illegal marketplaces</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Malicious downloads</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Fraudulent services</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Content that violates applicable law</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">06.</span>
              Resource Abuse
            </h2>
            <p>
              Customers must not intentionally consume excessive resources in a way that negatively affects other customers or Rim Cloud infrastructure.
            </p>
            <p className="text-sm text-amber-300">
              Rim Cloud may investigate accounts that generate unusually high CPU, RAM, disk, bandwidth, network, or other resource usage.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">07.</span>
              Security Incidents
            </h2>
            <p>
              Customers must promptly cooperate with Rim Cloud when investigating suspected security incidents.
            </p>
            <p className="text-sm text-zinc-400">
              Rim Cloud may temporarily restrict a service to prevent further damage.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">08.</span>
              Enforcement
            </h2>
            <p>Depending on the severity of a violation, Rim Cloud may:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300">
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Issue a warning.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Request removal of content.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Restrict resources.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Suspend a service.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Terminate a service.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Terminate an account.</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b] sm:col-span-2">
                Report activity to appropriate authorities where legally required.
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm font-semibold">
              Severe violations may result in immediate suspension or termination without prior notice.
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">09.</span>
              Abuse Reports
            </h2>
            <p>
              Abuse reports may be submitted through Rim Cloud&apos;s official support channels.
            </p>
            <p className="text-sm text-zinc-400">
              Reports should include enough information for Rim Cloud to investigate the alleged violation.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">10.</span>
              Policy Changes
            </h2>
            <p>Rim Cloud may update this AUP when necessary.</p>
            <p className="text-sm text-zinc-400">
              Continued use of our services after the updated policy becomes effective constitutes acceptance of the revised policy.
            </p>

            {/* Brand Callout Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#0b0e14] border border-[#bcfc25]/30 shadow-[0_0_20px_rgba(188,252,37,0.25)] space-y-3">
              <p className="text-lg font-black text-white">Rim Cloud</p>
              <p className="text-sm text-[#bcfc25] italic font-serif">
                Reliable Hosting. Built for Your Community.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://billing.rimcloud.in/submitticket.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] transition-colors"
                >
                  <span>Submit Abuse Report</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/policies"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-300 bg-[#121824] hover:bg-[#182234] border border-white/10 transition-colors"
                >
                  <span>View All Policies</span>
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-300 bg-[#121824] hover:bg-[#182234] border border-white/10 transition-colors"
                >
                  <span>Terms of Service</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

