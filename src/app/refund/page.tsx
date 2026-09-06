import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CreditCard,
  Clock,
  ArrowLeft,
  AlertTriangle,
  FileText,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RefreshCw,
  Ban,
  LifeBuoy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Rim Cloud",
  description:
    "Official Rim Cloud Refund & Return Policy explaining our 24-hour guarantee, eligible services, refund conditions, processing timelines, and dispute policies.",
};

export default function RefundPolicyPage() {
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
            <CreditCard className="w-3.5 h-3.5 text-[#00f0ff]" />
            Billing & Customer Protection
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Rim Cloud — <span className="text-[#00f0ff] cyan-text-glow">Refund Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
              <strong>Last Updated:</strong> September 6, 2026
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-emerald-400 font-semibold">24-Hour Guarantee</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
            At <strong className="text-white">Rim Cloud</strong>, we want our customers to be confident when choosing our hosting services. This Refund & Return Policy explains when you may request a refund for our Minecraft Hosting, Web Hosting, Discord Bot Hosting, and other eligible services.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400">
            By purchasing a service from Rim Cloud, you acknowledge and agree to the terms outlined below.
          </p>
        </header>

        {/* Policy Body */}
        <div className="space-y-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#00f0ff] font-mono text-lg">01.</span>
                24-Hour Refund Guarantee
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 shrink-0">
                First-Time Orders
              </span>
            </div>
            <p>
              Rim Cloud provides a <strong className="text-white">24-hour refund window</strong> for eligible <strong className="text-white">first-time purchases</strong>.
            </p>
            <p>
              A refund request must be submitted within <strong className="text-white">24 hours of the initial payment</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#07090e] border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
              <div>
                <strong>Timing Calculation:</strong> The 24-hour period begins from the time the payment is successfully completed, not from the time the customer first uses the service.
              </div>
            </div>
            <p className="text-zinc-400 text-sm">
              After the 24-hour period has expired, the purchase will generally become <strong className="text-white">non-refundable</strong>, except where required by applicable law or where Rim Cloud determines that a refund is appropriate due to a verified service-side issue.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">02.</span>
              Eligible Services
            </h2>
            <p>The 24-hour refund policy may apply to the following services:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#07090e] border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white text-sm font-medium">Minecraft Server Hosting</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#07090e] border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white text-sm font-medium">Discord Bot Hosting</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#07090e] border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white text-sm font-medium">Web Hosting</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#07090e] border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white text-sm font-medium">Other Shared Hosting (marked refundable)</span>
              </div>
            </div>
            <p>
              Refund eligibility is limited to the <strong className="text-white">initial purchase of the service</strong>.
            </p>
            <p className="text-xs font-mono text-zinc-400">
              Renewals, recurring payments, upgrades, and additional purchases are not covered by the standard 24-hour refund guarantee.
            </p>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">03.</span>
              Refund Conditions
            </h2>
            <p>To qualify for a refund, all of the following conditions must be met:</p>
            <ol className="space-y-2.5 list-decimal pl-5 text-zinc-300 text-sm">
              <li>
                The refund request is submitted within <strong className="text-white">24 hours of the original payment</strong>.
              </li>
              <li>The service is eligible for refunds under this policy.</li>
              <li>The customer account is in good standing.</li>
              <li>
                The customer has not violated Rim Cloud&apos;s{" "}
                <Link href="/terms" className="text-[#00f0ff] underline hover:text-white">
                  Terms of Service
                </Link>{" "}
                or{" "}
                <Link href="/aup" className="text-[#00f0ff] underline hover:text-white">
                  Acceptable Use Policy
                </Link>.
              </li>
              <li>The service has not been intentionally abused, exploited, or used for malicious activity.</li>
              <li>The refund request does not involve fraudulent or deceptive activity.</li>
              <li>The customer has provided the required order and account information.</li>
            </ol>
            <p className="text-xs text-zinc-400 font-mono pt-2 border-t border-white/5">
              Rim Cloud may review the service&apos;s usage and account history before approving a refund.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">04.</span>
              Technical Problems
            </h2>
            <p>
              If you experience a technical problem with your service, please contact Rim Cloud Support before requesting a refund.
            </p>
            <p>
              Our support team will attempt to diagnose and resolve the issue. If the problem is caused by Rim Cloud and cannot reasonably be resolved, Rim Cloud may approve a refund even when the normal refund requirements are not met.
            </p>
            <div className="p-4 rounded-xl bg-[#07090e] border border-white/10 space-y-2 text-xs">
              <strong className="text-white block font-mono">Qualifying Service-Side Examples:</strong>
              <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                <li>Service cannot be provisioned.</li>
                <li>Server cannot be accessed due to a Rim Cloud infrastructure issue.</li>
                <li>Persistent control-panel or backend problems caused by Rim Cloud.</li>
                <li>Major infrastructure failures preventing the service from functioning as advertised.</li>
              </ul>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              Issues caused by customer configuration, third-party software, plugins, mods, applications, scripts, or incorrect usage are generally not considered Rim Cloud service failures.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#00f0ff] font-mono text-lg">05.</span>
                Non-Refundable Services and Purchases
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 shrink-0">
                Excluded
              </span>
            </div>
            <p>
              The following are generally <strong className="text-white">non-refundable</strong> once purchased or provisioned:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
              {[
                "VPS or dedicated server resources",
                "Dedicated IP addresses",
                "Domain registrations and domain renewals",
                "SSL certificates purchased separately",
                "Server migrations or custom setup services",
                "Paid technical / support services",
                "Premium or third-party add-ons",
                "Additional storage or resource upgrades",
                "Renewal payments",
                "Service upgrades",
                "Account credit",
                "Gift cards or promotional credits",
                "Services purchased through special or custom agreements",
                "Any service explicitly marked as non-refundable at time of purchase",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#07090e] border border-red-500/10 flex items-center gap-2 text-zinc-300"
                >
                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-zinc-400 pt-2">
              Rim Cloud may make exceptions where required by law or at its sole discretion.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">06.</span>
              Renewals and Recurring Payments
            </h2>
            <p>
              The 24-hour refund guarantee applies only to the <strong className="text-white">initial purchase</strong> of an eligible service. Renewals are not automatically refundable.
            </p>
            <p>
              Customers are responsible for cancelling their services before the next billing date if they no longer wish to continue using the service.
            </p>
            <p className="text-sm text-zinc-400">
              A refund for an accidental renewal may be considered at Rim Cloud&apos;s discretion, provided the service has not been significantly used after renewal.
            </p>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">07.</span>
              Promotional and Discounted Services
            </h2>
            <p>
              Services purchased using promotional pricing, special discounts, coupons, giveaways, or limited-time offers may have different refund conditions.
            </p>
            <p className="text-sm text-zinc-400">
              If a promotion specifies separate refund terms, those terms will take precedence over this policy.
            </p>
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-red-500/20 space-y-4 hover:border-red-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <Ban className="w-5 h-5 text-red-400 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-red-400 font-mono text-lg">08.</span>
                Abuse and Terms of Service Violations
              </h2>
            </div>
            <p>
              Refunds will not normally be issued for accounts or services that have been suspended or terminated because of:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Fraudulent activity & payment fraud
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Chargeback abuse
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Malware or malicious activity
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                DDoS attacks or network abuse
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Cryptocurrency mining without authorization
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Illegal activities or spamming
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Attempts to disrupt infrastructure
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Abuse of other customers or staff
              </li>
            </ul>
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
              <strong>Account Safeguard:</strong> Submitting false information to obtain a refund may result in the suspension or termination of the customer&apos;s account.
            </div>
          </section>

          {/* Section 9 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#00f0ff]/30 space-y-4 shadow-cyan-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">09.</span>
              How to Request a Refund
            </h2>
            <p>
              To request a refund, contact <strong className="text-white">Rim Cloud Support</strong> through the official support channel provided on our website or customer panel.
            </p>
            <div className="p-4 rounded-xl bg-[#07090e] border border-white/10 space-y-2 text-xs">
              <strong className="text-white block font-mono">Your request should include:</strong>
              <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                <li>Customer / account email</li>
                <li>Order or invoice ID</li>
                <li>Name of the purchased service</li>
                <li>Reason for the refund request</li>
                <li>Any relevant information regarding the issue</li>
              </ul>
            </div>
            <p className="text-xs font-mono text-amber-400">
              Refund requests submitted after the 24-hour refund window may be rejected unless an exception applies.
            </p>
            <div className="pt-2">
              <a
                href="https://billing.rimcloud.site/submitticket.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] transition-colors shadow-cyan-sm"
              >
                <span>Open Refund Ticket via Billing Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* Section 10 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">10.</span>
              Refund Processing
            </h2>
            <p>
              Once a refund is approved, Rim Cloud will initiate the refund through the original payment method whenever possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-[#07090e] border border-emerald-500/20 text-xs space-y-1">
                <strong className="text-emerald-400 font-mono block">Standard Processing</strong>
                <p className="text-zinc-300">
                  Refunds typically take approximately <strong className="text-white">7 to 14 business days</strong> to be credited, depending on your payment gateway, bank, or card issuer.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#07090e] border border-amber-500/20 text-xs space-y-1">
                <strong className="text-amber-400 font-mono block">Exceptional Circumstances</strong>
                <p className="text-zinc-300">
                  In exceptional cases involving third-party clearing, processing may take <strong className="text-white">up to 30 business days</strong>.
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              The refund processing period begins from the date Rim Cloud approves and initiates the refund. Rim Cloud is not responsible for delays caused by third-party payment processors, banks, financial institutions, or other services outside Rim Cloud&apos;s reasonable control.
            </p>
            <p className="text-xs text-zinc-400">
              Customers should contact Rim Cloud Support if the refund has not been received after the stated processing period.
            </p>
          </section>

          {/* Section 11 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">11.</span>
              Service Cancellation
            </h2>
            <p>
              Customers may cancel their service at any time through the available Rim Cloud billing or customer-support system.
            </p>
            <p>
              Cancellation of a service does not automatically entitle the customer to a refund. If the refund period has expired, the service may remain active until the end of the already-paid billing period unless otherwise stated.
            </p>
            <div className="pt-1">
              <Link
                href="/cancellation"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f0ff] hover:underline"
              >
                <span>Read our full Cancellation Policy (Immediate vs End-of-Term) →</span>
              </Link>
            </div>
          </section>

          {/* Section 12 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-amber-500/20 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-amber-400 font-mono text-lg">12.</span>
                Chargebacks and Payment Disputes
              </h2>
            </div>
            <p>
              If you believe you are entitled to a refund, please contact Rim Cloud Support before initiating a chargeback or payment dispute.
            </p>
            <div className="p-4 rounded-xl bg-[#07090e] border border-amber-500/20 text-xs space-y-2">
              <strong className="text-amber-300 font-mono block">Consequences of Unjustified Disputes:</strong>
              <p className="text-zinc-300">
                Unjustified chargebacks or fraudulent payment disputes may result in:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                <li>Immediate service suspension</li>
                <li>Account termination</li>
                <li>Loss of access to Rim Cloud services</li>
                <li>Permanent restriction from future purchases</li>
              </ul>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              This section does not limit any rights available to customers under applicable law.
            </p>
          </section>

          {/* Section 13 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-4 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">13.</span>
              Policy Changes
            </h2>
            <p>
              Rim Cloud reserves the right to modify this Refund & Return Policy at any time. Changes will become effective when the updated policy is published on the Rim Cloud website.
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              The refund terms applicable to a purchase will generally be determined by the policy in effect at the time of that purchase, subject to applicable law.
            </p>
          </section>

          {/* Section 14 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0b0e14] border border-[#1e293b] space-y-6 hover:border-white/20 transition-colors">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">14.</span>
              Contact Information
            </h2>
            <p>
              If you have any questions regarding this Refund & Return Policy or would like to request a refund, please contact <strong className="text-white">Rim Cloud Support</strong> through our official support channels.
            </p>
            <div className="p-4 rounded-xl bg-[#07090e] border border-white/10 space-y-2 text-xs font-mono">
              <div className="text-white font-bold text-sm">Rim Cloud</div>
              <div className="text-zinc-400 italic">Reliable Hosting. Built for Your Community.</div>
              <div className="text-zinc-400 pt-1">
                Client Portal:{" "}
                <a
                  href="https://billing.rimcloud.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] underline hover:text-white"
                >
                  https://billing.rimcloud.site
                </a>
              </div>
              <div className="text-zinc-400">
                Support Tickets:{" "}
                <a
                  href="https://billing.rimcloud.site/submitticket.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] underline hover:text-white"
                >
                  https://billing.rimcloud.site/submitticket.php
                </a>
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
          </section>
        </div>

        {/* Footer Navigation Cards */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/cancellation"
            className="p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/50 transition-colors group"
          >
            <div className="text-xs font-mono text-zinc-400 group-hover:text-[#00f0ff]">Related Policy</div>
            <div className="text-sm font-bold text-white mt-1">Cancellation Policy →</div>
          </Link>
          <Link
            href="/terms"
            className="p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/50 transition-colors group"
          >
            <div className="text-xs font-mono text-zinc-400 group-hover:text-[#00f0ff]">Full Agreement</div>
            <div className="text-sm font-bold text-white mt-1">Terms of Service →</div>
          </Link>
          <Link
            href="/policies"
            className="p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b] hover:border-[#00f0ff]/50 transition-colors group"
          >
            <div className="text-xs font-mono text-zinc-400 group-hover:text-[#00f0ff]">Unified Hub</div>
            <div className="text-sm font-bold text-white mt-1">All Policies & Rules →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

