import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  RotateCcw,
  Clock,
  ArrowLeft,
  AlertTriangle,
  FileText,
  ExternalLink,
  ShieldAlert,
  Server,
  DownloadCloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation Policy | Rim Cloud",
  description:
    "Official Cancellation Policy explaining how customers may cancel Rim Cloud services, immediate vs end-of-term cancellation, and data handling.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#07090e] py-16 sm:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00f0ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-[#0080ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#00f0ff] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Policies Overview</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-wider shadow-cyan-sm">
            <RotateCcw className="w-3.5 h-3.5 text-[#00f0ff]" />
            Service Management
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Rim Cloud — <span className="text-[#00f0ff] cyan-text-glow">Cancellation Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
              <strong>Last Updated:</strong> September 6, 2026
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-emerald-400 font-semibold">Effective Immediately</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
            This Cancellation Policy explains how customers may cancel Rim Cloud services.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-zinc-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">01.</span>
              Cancelling a Service
            </h2>
            <p>
              Customers may request cancellation through the Rim Cloud customer panel or official support channels.
            </p>
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#00f0ff]/20 text-sm text-zinc-300">
              Customers should cancel services before their next renewal date if they do not wish to be charged for another billing period.
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">02.</span>
              Immediate Cancellation
            </h2>
            <p>Customers may request immediate termination of a service.</p>
            <p className="text-sm text-amber-300">
              Immediate cancellation may result in the service and associated data becoming unavailable.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
              <DownloadCloud className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
              <span>
                Customers should download any required files before requesting immediate cancellation.
              </span>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">03.</span>
              End-of-Term Cancellation
            </h2>
            <p>
              Where available, customers may request cancellation at the end of the current billing period.
            </p>
            <p className="text-sm text-zinc-400">
              In this case, the service may remain active until the end of the period that has already been paid for.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">04.</span>
              Automatic Renewal
            </h2>
            <p>
              Cancelling a service prevents future renewal charges when the cancellation is successfully processed before the applicable renewal.
            </p>
            <p className="text-sm text-zinc-300">
              Cancellation does not automatically refund previous payments.
            </p>
            <p className="text-sm text-zinc-400">
              Refunds are governed by the Rim Cloud Refund Policy.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">05.</span>
              Non-Payment
            </h2>
            <p>If an invoice remains unpaid, Rim Cloud may suspend the service.</p>
            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
              Continued non-payment may result in permanent termination and deletion of associated data after the applicable retention period.
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">06.</span>
              Data After Cancellation
            </h2>
            <p>
              After a service is cancelled or terminated, Rim Cloud may retain or delete service data according to its operational requirements and Privacy Policy.
            </p>
            <p className="text-sm text-zinc-400">
              Customers are responsible for maintaining independent backups of important data.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">07.</span>
              Termination for Abuse
            </h2>
            <p>Rim Cloud may terminate services immediately when required because of:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Illegal activity</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Fraud</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Network abuse</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Security threats</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Serious Terms violations</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Acceptable Use Policy violations</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b] sm:col-span-2">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>Repeated abuse</span>
              </li>
            </ul>
            <p className="text-sm text-red-300 pt-1">
              Termination for policy violations may not qualify for a refund.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">08.</span>
              Refunds After Cancellation
            </h2>
            <p>Cancellation and refunds are separate processes.</p>
            <p className="text-sm text-zinc-300">
              Cancelling a service does not automatically create a refund.
            </p>
            <p className="text-sm text-emerald-400 font-mono">
              Eligible refunds are handled according to the Rim Cloud Refund Policy.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">09.</span>
              Policy Changes
            </h2>
            <p>Rim Cloud may update this Cancellation Policy when necessary.</p>

            {/* Brand Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-[#0b0e14] border border-[#00f0ff]/30 shadow-cyan-sm space-y-3">
              <p className="text-lg font-black text-white">Rim Cloud</p>
              <p className="text-sm text-[#00f0ff] italic font-serif">
                Reliable Hosting. Built for Your Community.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://billing.rimcloud.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] transition-colors"
                >
                  <span>Manage in Client Portal</span>
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

