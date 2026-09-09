"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState<"tos" | "privacy" | "refund" | "aup">("tos");

  return (
    <div className="relative min-h-screen bg-[#07090e] py-16 sm:py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#bcfc25]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] uppercase tracking-wider shadow-[0_0_20px_rgba(188,252,37,0.25)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#bcfc25]" />
            Legal & Governance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Policies & <span className="text-[#bcfc25] cyan-text-glow">Terms</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300">
            Official operational policies, customer agreements, and legal documentation for Rim Cloud hosting services.
          </p>
          <p className="text-xs font-mono text-zinc-500">
            Last Updated: September 2026 • Effective Immediately
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("tos")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "tos"
                ? "bg-[#0b0e14] border-2 border-[#bcfc25] text-white shadow-cyan-sm"
                : "bg-[#0b0e14]/60 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            <FileText className="w-4 h-4 text-[#bcfc25]" />
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "privacy"
                ? "bg-[#0b0e14] border-2 border-[#bcfc25] text-white shadow-cyan-sm"
                : "bg-[#0b0e14]/60 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            <Lock className="w-4 h-4 text-[#bcfc25]" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab("refund")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "refund"
                ? "bg-[#0b0e14] border-2 border-[#bcfc25] text-white shadow-cyan-sm"
                : "bg-[#0b0e14]/60 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            <RotateCcw className="w-4 h-4 text-emerald-400" />
            <span>24-Hour Refund Policy</span>
          </button>

          <button
            onClick={() => setActiveTab("aup")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "aup"
                ? "bg-[#0b0e14] border-2 border-[#bcfc25] text-white shadow-cyan-sm"
                : "bg-[#0b0e14]/60 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Acceptable Use (AUP)</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-8 text-zinc-300 leading-relaxed">
          {/* ==================== 1. TERMS OF SERVICE ==================== */}
          {activeTab === "tos" && (
            <div id="tos" className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Rim Cloud Terms of Service
                  </h2>
                  <p className="text-xs font-mono text-[#bcfc25] mt-1">
                    Agreement between Client and Rim Cloud (&quot;RimCloud&quot;)
                  </p>
                </div>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] transition-colors shrink-0 shadow-cyan-sm"
                >
                  <span>Full Terms of Service Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-white">1. Agreement to Terms</h3>
                <p>
                  By creating an account, accessing the storefront at{" "}
                  <code className="text-[#bcfc25] font-mono">https://billing.rimcloud.in/</code>,
                  or utilizing any Rim Cloud game server or compute instance, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must terminate your use immediately.
                </p>

                <h3 className="text-lg font-bold text-white">2. Provisioning & Service Delivery</h3>
                <p>
                  Rim Cloud delivers automated provisioning through our billing engine and Pterodactyl orchestration panel. Most services are deployed within 60 seconds of verified payment. We reserve the right to delay provisioning for fraud prevention and KYC verification if an order is flagged by our payment processors.
                </p>

                <h3 className="text-lg font-bold text-white">3. Billing, Renewals & Cancellation</h3>
                <p>
                  All active subscriptions renew automatically on their stated billing cycle (monthly, quarterly, or annually) unless canceled through the Client Portal prior to the renewal date. Invoices not paid within 48 hours of due date will result in automated service suspension, and services remaining unpaid past 7 days will be terminated and data permanently purged.
                </p>

                <h3 className="text-lg font-bold text-white">4. Service Level Agreement (99.9% Uptime)</h3>
                <p>
                  Rim Cloud maintains a guaranteed 99.9% network and compute node availability SLA. Unscheduled outages exceeding 0.1% in a given monthly billing period qualify for proportional service credits, excluding scheduled maintenance announced 24 hours in advance or issues caused by client-installed software faults.
                </p>
              </div>
            </div>
          )}

          {/* ==================== 2. PRIVACY POLICY ==================== */}
          {activeTab === "privacy" && (
            <div id="privacy" className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Privacy & Data Governance Policy
                  </h2>
                  <p className="text-xs font-mono text-[#bcfc25] mt-1">
                    Commitment to Confidentiality, Encryption & Data Integrity
                  </p>
                </div>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] transition-colors shrink-0 shadow-cyan-sm"
                >
                  <span>Full Privacy Policy Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <h3 className="text-lg font-bold text-white">1. Information We Collect</h3>
                <p>
                  Rim Cloud collects necessary identification and communication details to provision infrastructure: full name, email address, billing address, IP address for anti-fraud detection, and payment transactional metadata. We do not store full credit card or raw banking credentials; payments are tokenized securely through verified gateway partners.
                </p>

                <h3 className="text-lg font-bold text-white">2. Server Data Privacy & Confidentiality</h3>
                <p>
                  We treat all data stored on your instances—including world files, configuration files, databases, and custom plugins—with strict confidentiality. Rim Cloud staff will not inspect, access, duplicate, or disclose your server files except when explicitly authorized by you for support diagnostics, or when legally compelled by a certified court order.
                </p>

                <h3 className="text-lg font-bold text-white">3. Network Telemetry & Logging</h3>
                <p>
                  Diagnostic telemetry, including ping test measurements, volumetric bandwidth utilization, and packet filtering logs, are retained for diagnostic and DDoS mitigation purposes. Logs are rotated periodically and never sold to third-party advertising brokers.
                </p>
                <div className="pt-2">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#bcfc25] hover:underline"
                  >
                    <span>Read all 13 sections in the dedicated Privacy Policy →</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ==================== 3. 24-HOUR REFUND POLICY ==================== */}
          {activeTab === "refund" && (
            <div id="refund" className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      24-Hour Money-Back Guarantee
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold uppercase">
                      Risk-Free
                    </span>
                  </div>
                  <p className="text-xs font-mono text-emerald-400 mt-1">
                    Eligible on first-time orders within 24 hours of provisioning
                  </p>
                </div>
                <Link
                  href="/refund"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] transition-colors shrink-0 shadow-cyan-sm"
                >
                  <span>Full Refund Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <p>
                  We stand firmly behind the performance, low latency, and reliability of our infrastructure. If you are not completely satisfied with your Rim Cloud server for any legitimate technical or routing reason, you are entitled to request a 100% refund within the first 24 hours of your initial purchase.
                </p>

                <h3 className="text-lg font-bold text-white">Eligibility Criteria</h3>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Applicable strictly to your first service ordered on a new client account.</li>
                  <li>The refund request ticket must be submitted via the Client Portal within exactly 24 hours of initial order placement.</li>
                  <li>Applicable to standard Minecraft Hosting and Discord Bot Hosting tiers.</li>
                  <li>Custom dedicated hardware, domain name registrations, and IP address allocation fees are non-refundable due to upstream registrar costs.</li>
                  <li>Accounts terminated for violating the Acceptable Use Policy (e.g., launching DDoS attacks or hosting malicious binaries) immediately forfeit all refund eligibility.</li>
                </ul>

                <h3 className="text-lg font-bold text-white">How to Claim Your Refund</h3>
                <p>
                  Simply open a ticket under the Billing Department at{" "}
                  <a
                    href="https://billing.rimcloud.in/submitticket.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bcfc25] underline hover:text-white"
                  >
                    https://billing.rimcloud.in/submitticket.php
                  </a>{" "}
                  requesting cancellation under the 24-Hour Refund Policy. Approved refunds are processed back to the original payment method within 3 to 5 business days.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href="/refund"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#bcfc25] hover:underline"
                  >
                    <span>Read all 14 sections in the dedicated Refund Policy →</span>
                  </Link>
                  <span className="hidden sm:inline text-zinc-700">•</span>
                  <Link
                    href="/cancellation"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white hover:underline"
                  >
                    <span>Cancellation Policy →</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ==================== 4. ACCEPTABLE USE POLICY ==================== */}
          {activeTab === "aup" && (
            <div id="aup" className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Acceptable Use Policy (AUP)
                  </h2>
                  <p className="text-xs font-mono text-amber-400 mt-1">
                    Network Safety, Abuse Prevention & Prohibited Activities
                  </p>
                </div>
                <Link
                  href="/aup"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#bcfc25] hover:bg-[#cbfd4e] transition-colors shrink-0 shadow-cyan-sm"
                >
                  <span>Full AUP Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <p>
                  This policy outlines forbidden actions to safeguard our infrastructure, maintain Tier-1 peering agreements, and ensure zero degradation for all Rim Cloud clients.
                </p>

                <h3 className="text-lg font-bold text-white">Strictly Prohibited Activities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#07090e] border border-red-500/20 text-xs">
                    <strong className="text-red-400 block mb-1">DDoS / Flooding / Stressing</strong>
                    Launching outbound denial of service attacks, UDP booters, or participating in botnets.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#07090e] border border-red-500/20 text-xs">
                    <strong className="text-red-400 block mb-1">Cryptocurrency Mining</strong>
                    Running continuous Proof-of-Work crypto miners (e.g., Monero, Bitcoin) on shared compute pools.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#07090e] border border-red-500/20 text-xs">
                    <strong className="text-red-400 block mb-1">Malware & Phishing Distribution</strong>
                    Hosting ransomware, command & control (C2) servers, trojans, or deceptive credential harvesting pages.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#07090e] border border-red-500/20 text-xs">
                    <strong className="text-red-400 block mb-1">Unsolicited Mass Email (Spam)</strong>
                    Operating open email relays or transmitting commercial spam via Rim Cloud IP ranges.
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white">Copyright & Content Compliance</h3>
                <p>
                  Rim Cloud respects intellectual property rights and complies promptly with valid copyright takedown notices submitted through our compliance helpdesk. Infringing materials will be isolated upon investigation.
                </p>
                <div className="pt-2">
                  <Link
                    href="/aup"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#bcfc25] hover:underline"
                  >
                    <span>Read all 10 sections in the dedicated Acceptable Use Policy →</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Quick portal navigation */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-400">
              Need clarification on any policy clause?
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://discord.gg/TpYMknnHsX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord community"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] hover:text-white hover:border-[#bcfc25] transition-colors"
              >
                <DiscordIcon className="w-3.5 h-3.5" />
                <span>Discord Community</span>
              </a>
              <a
                href="https://billing.rimcloud.in/submitticket.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] hover:text-white hover:border-[#bcfc25] transition-colors"
              >
                <span>Contact Compliance Helpdesk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

