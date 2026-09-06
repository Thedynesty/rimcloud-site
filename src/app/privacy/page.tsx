import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  Clock,
  ArrowLeft,
  Shield,
  CheckCircle2,
  FileText,
  ExternalLink,
  Server,
  Database,
  Cookie,
  UserCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Rim Cloud",
  description:
    "Official Privacy Policy explaining how Rim Cloud collects, uses, stores, and protects customer personal and technical information.",
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5 text-[#00f0ff]" />
            Data Protection & Privacy
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Rim Cloud — <span className="text-[#00f0ff] cyan-text-glow">Privacy Policy</span>
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
            Rim Cloud (&quot;Rim Cloud&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal information.
          </p>
          <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#00f0ff]/20 text-sm text-zinc-300">
            This Privacy Policy explains how we collect, use, store, and protect information when you use Rim Cloud websites, hosting services, billing systems, control panels, and support services.
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-zinc-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-6 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">01.</span>
              Information We Collect
            </h2>
            <p>Depending on how you use our services, we may collect:</p>

            {/* Account Information */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#00f0ff]" />
                Account Information
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Name</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Email address</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Username</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Account credentials</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5 col-span-2 sm:col-span-1">Contact information</li>
              </ul>
            </div>

            {/* Billing Information */}
            <div className="space-y-3 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00f0ff]" />
                Billing Information
              </h3>
              <p className="text-sm text-zinc-400">
                Payments may be processed by third-party payment providers.
              </p>
              <p className="text-sm text-zinc-300">Rim Cloud may receive information such as:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Payment status</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Transaction ID</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Amount paid</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Payment method</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5 sm:col-span-2">Billing details required for accounting or fraud prevention</li>
              </ul>
              <p className="text-xs text-emerald-400 font-mono pt-1">
                Rim Cloud generally does not store complete card numbers or payment authentication information.
              </p>
            </div>

            {/* Technical Information */}
            <div className="space-y-3 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-[#00f0ff]" />
                Technical Information
              </h3>
              <p className="text-sm text-zinc-300">We may collect:</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">IP address</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Browser information</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Device information</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Operating system</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Login information</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Service usage information</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Error logs</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Security logs</li>
              </ul>
            </div>

            {/* Support Information */}
            <div className="space-y-3 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#00f0ff]" />
                Support Information
              </h3>
              <p className="text-sm text-zinc-300">When contacting support, we may retain:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Support messages</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Tickets</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Attachments</li>
                <li className="p-2 rounded bg-[#07090e] border border-white/5">Technical information relevant to resolving your issue</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">02.</span>
              Information Stored on Hosting Services
            </h2>
            <p>
              When you use Rim Cloud hosting services, you may upload or generate data on our infrastructure.
            </p>
            <p className="text-sm text-zinc-400">Depending on the service, this may include:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Minecraft worlds</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Plugins and mods</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Website files</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Databases</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Discord bot files</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Configuration files</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b] col-span-2 sm:col-span-1">Logs</li>
            </ul>
            <p className="text-sm text-zinc-300 pt-1">
              You remain responsible for the content stored on your service.
            </p>
            <p className="text-sm text-zinc-400">
              Rim Cloud processes such information only as reasonably necessary to provide, secure, maintain, and support the services.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">03.</span>
              How We Use Information
            </h2>
            <p>We may use information to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Create and manage accounts</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Provide hosting services</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Process payments</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Provide customer support</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Maintain infrastructure</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Prevent fraud</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Detect abuse</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Protect network security</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Communicate important service information</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Improve our services</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Comply with legal obligations</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Enforce our Terms and policies</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">04.</span>
              Marketing
            </h2>
            <p>
              Where required by applicable law, Rim Cloud will obtain appropriate consent before sending marketing communications.
            </p>
            <p className="text-sm text-zinc-300">
              Customers may unsubscribe from marketing communications at any time.
            </p>
            <p className="text-sm text-zinc-400">
              Service-related communications may still be sent when necessary to operate an account or service.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">05.</span>
              Cookies
            </h2>
            <p>Our websites may use cookies and similar technologies for purposes such as:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Authentication</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Account sessions</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Security</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Website functionality</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Preferences</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Analytics</li>
            </ul>
            <p className="text-sm text-zinc-400">
              Where required by applicable law, non-essential cookies may require consent.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">06.</span>
              Third-Party Providers
            </h2>
            <p>We may use third-party providers for:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Payment processing</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Infrastructure</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Cloud storage</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Networking</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Analytics</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Security</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Customer support</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Email delivery</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Domain registration</li>
            </ul>
            <p className="text-sm text-zinc-400">
              These providers may process information according to their own privacy policies.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">07.</span>
              Data Security
            </h2>
            <p>
              Rim Cloud takes reasonable technical and organizational measures to protect customer information.
            </p>
            <p className="text-sm text-zinc-400">
              However, no internet-based system can be guaranteed to be completely secure.
            </p>
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#00f0ff]/20 text-sm text-zinc-300">
              Customers are responsible for maintaining secure passwords and protecting their account credentials.
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">08.</span>
              Data Retention
            </h2>
            <p>We retain information for as long as reasonably necessary to:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-300">
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Provide services</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Maintain business records</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Resolve disputes</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Prevent fraud</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Meet legal requirements</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Enforce agreements</li>
            </ul>
            <p className="text-sm text-zinc-400 pt-1">
              When information is no longer required, it may be deleted or anonymized.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">09.</span>
              Data Deletion
            </h2>
            <p>
              Customers may request deletion of eligible personal information, subject to legal, accounting, security, fraud-prevention, and other legitimate retention requirements.
            </p>
            <p className="text-sm text-amber-300">
              Deleting an account may also result in deletion of associated hosting services and customer data.
            </p>
            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
              Customers should download any required data before requesting account deletion.
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">10.</span>
              Children&apos;s Privacy
            </h2>
            <p>
              Rim Cloud services are not intended to knowingly collect personal information from children in violation of applicable law.
            </p>
            <p className="text-sm text-zinc-400">
              Where required, parental or guardian consent may be necessary.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">11.</span>
              Data Disclosure
            </h2>
            <p>Rim Cloud may disclose information when reasonably necessary to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300">
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Provide our services</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Work with service providers</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Prevent fraud or abuse</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Protect Rim Cloud and our customers</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Comply with legal obligations</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Respond to valid legal requests</li>
            </ul>
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-emerald-500/30 text-sm text-emerald-400 font-mono">
              Rim Cloud does not sell customer personal information merely for the purpose of selling personal data to third parties.
            </div>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">12.</span>
              Changes to This Policy
            </h2>
            <p>We may update this Privacy Policy periodically.</p>
            <p className="text-sm text-zinc-400">
              The updated policy will be published on our website with a revised &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#00f0ff] font-mono text-lg">13.</span>
              Contact
            </h2>
            <p>
              Privacy-related questions or requests may be submitted through Rim Cloud&apos;s official support channels.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-[#0b0e14] border border-[#00f0ff]/30 shadow-cyan-sm space-y-3">
              <p className="text-lg font-black text-white">Rim Cloud</p>
              <p className="text-sm text-[#00f0ff] italic font-serif">
                Reliable Hosting. Built for Your Community.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://billing.rimcloud.site/submitticket.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] transition-colors"
                >
                  <span>Contact Privacy Support</span>
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

