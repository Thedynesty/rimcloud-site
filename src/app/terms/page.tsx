import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Shield,
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Server,
  Layers,
  HardDrive,
  Cpu,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Rim Cloud",
  description:
    "These Terms of Service govern your access to and use of high-performance hosting services provided by Rim Cloud.",
};

export default function TermsOfServicePage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-[#bcfc25]/30 text-xs font-mono text-[#bcfc25] uppercase tracking-wider shadow-[0_0_20px_rgba(188,252,37,0.25)]">
            <FileText className="w-3.5 h-3.5 text-[#bcfc25]" />
            Legal Documentation
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Rim Cloud — <span className="text-[#bcfc25] cyan-text-glow">Terms of Service</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#bcfc25]" />
              <strong>Last Updated:</strong> September 6, 2026
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-emerald-400 font-semibold">Effective Immediately</span>
          </div>
          <p className="text-base text-zinc-300 leading-relaxed pt-2">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of services provided by{" "}
            <strong className="text-white">Rim Cloud</strong> (&quot;Rim Cloud&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#bcfc25]/20 text-sm text-zinc-300">
            By purchasing, accessing, or using any Rim Cloud service, you agree to these Terms. If you do not agree with these Terms, you must not use our services.
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-zinc-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">01.</span>
              Services
            </h2>
            <p>Rim Cloud provides hosting and related services, including but not limited to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Minecraft Server Hosting</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Discord Bot Hosting</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Web Hosting</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>VPS or other hosting services offered by Rim Cloud</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Storage and backup services</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e14] border border-[#1e293b]">
                <CheckCircle2 className="w-4 h-4 text-[#bcfc25] shrink-0 mt-0.5" />
                <span>Additional hosting-related products and services</span>
              </li>
            </ul>
            <p className="text-sm text-zinc-400">
              Service specifications, limitations, features, and pricing may vary depending on the plan purchased.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">02.</span>
              Account Requirements
            </h2>
            <p>Customers are responsible for providing accurate information when creating an account.</p>
            <p>You are responsible for:</p>
            <ul className="space-y-2 list-disc list-inside text-sm pl-2">
              <li>Keeping your account credentials secure.</li>
              <li>Keeping your email address and contact information accurate.</li>
              <li>All activity performed through your account.</li>
              <li>Immediately notifying Rim Cloud if you believe your account has been compromised.</li>
            </ul>
            <p className="text-sm text-zinc-400">
              You must not share your account credentials in a manner that compromises the security of your account.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">03.</span>
              Age Requirement
            </h2>
            <p>You must be at least 13 years old to use Rim Cloud services.</p>
            <p className="text-sm text-zinc-400">
              Customers under the age of 18 must have permission from a parent or legal guardian where required by applicable law.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">04.</span>
              Payments and Billing
            </h2>
            <p>Services must be paid for before they are provisioned unless otherwise agreed in writing.</p>
            <p>Customers are responsible for paying invoices before their due date.</p>
            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
              Failure to pay an invoice may result in service suspension or termination.
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">05.</span>
              Service Renewals
            </h2>
            <p>Services may automatically renew where recurring billing is enabled.</p>
            <p>
              Customers are responsible for cancelling recurring services before the next billing date if they no longer wish to continue using them.
            </p>
            <p className="text-sm text-zinc-400">
              Renewal payments are subject to the Rim Cloud Refund Policy.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-6 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">06.</span>
              Resource Allocation and Overcommitment
            </h2>
            <p>
              Rim Cloud may use <strong className="text-white">resource overcommitment or overselling</strong> as part of its infrastructure and service management strategy.
            </p>
            <p className="text-sm text-zinc-300">
              This means that the total amount of resources advertised or allocated across customer services may, in certain circumstances, exceed the physical resources available on a particular physical server or infrastructure cluster.
            </p>
            <p className="text-sm text-zinc-400">This may apply to resources including, but not limited to:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b] text-center">RAM</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b] text-center">CPU / vCPU</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b] text-center">Storage</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b] text-center">Disk I/O</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b] text-center">Network capacity</li>
            </ul>
            <p className="text-sm text-zinc-400">
              Resource allocations are based on the service specifications and virtualization or containerization technology used by Rim Cloud.
            </p>

            {/* 6.1 */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#bcfc25] font-mono text-sm">6.1</span>
                RAM and Memory
              </h3>
              <p className="text-sm text-zinc-300">
                The RAM amount shown in a customer&apos;s hosting plan represents the amount of memory allocated to that customer&apos;s service. It does not necessarily represent dedicated physical RAM reserved exclusively for that customer.
              </p>
              <p className="text-sm text-zinc-300">
                Rim Cloud may allocate memory across multiple services based on expected usage patterns and infrastructure capacity.
              </p>
              <p className="text-sm text-emerald-400 font-mono">
                Rim Cloud will make reasonable efforts to ensure that resource overcommitment does not negatively affect normal service performance.
              </p>
            </div>

            {/* 6.2 */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#bcfc25] font-mono text-sm">6.2</span>
                CPU and vCPU
              </h3>
              <p className="text-sm text-zinc-300">CPU resources may be shared between multiple customers.</p>
              <p className="text-sm text-zinc-300">
                A plan providing a specified number of vCPU cores does not necessarily mean that the corresponding physical CPU cores are dedicated exclusively to that customer unless the service is explicitly advertised as dedicated CPU.
              </p>
              <p className="text-sm text-zinc-400">
                CPU performance may vary depending on overall node utilization and workload.
              </p>
            </div>

            {/* 6.3 */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#bcfc25] font-mono text-sm">6.3</span>
                Storage
              </h3>
              <p className="text-sm text-zinc-300">
                Storage capacity may be logically allocated to customers independently of the physical storage capacity of an individual server or storage system.
              </p>
              <p className="text-sm text-zinc-300">
                Rim Cloud may use storage technologies such as virtualization, pooling, compression, or other infrastructure mechanisms to provide allocated storage capacity.
              </p>
              <p className="text-sm text-amber-300 font-mono">
                Customers must remain within the storage limits specified by their plan.
              </p>
            </div>

            {/* 6.4 */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#bcfc25] font-mono text-sm">6.4</span>
                Resource Performance
              </h3>
              <p className="text-sm text-zinc-300">
                The resources advertised by Rim Cloud describe the resources available to the customer&apos;s service according to the applicable hosting plan.
              </p>
              <p className="text-sm text-zinc-400">Actual performance may vary depending on:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-300 list-disc list-inside pl-2">
                <li>Customer workload</li>
                <li>Server utilization</li>
                <li>Software configuration</li>
                <li>Plugins and modifications</li>
                <li>Operating system</li>
                <li>Network conditions</li>
                <li>Other customers sharing the infrastructure</li>
                <li>Hardware and infrastructure conditions</li>
              </ul>
              <p className="text-sm text-zinc-400 pt-1">
                Rim Cloud does not guarantee dedicated physical resources unless a service is specifically advertised as dedicated.
              </p>
            </div>

            {/* 6.5 */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#bcfc25] font-mono text-sm">6.5</span>
                Infrastructure Management
              </h3>
              <p className="text-sm text-zinc-300">
                Rim Cloud reserves the right to migrate, rebalance, resize, or otherwise modify the underlying infrastructure used to provide a service when reasonably necessary to maintain stability, performance, security, or availability.
              </p>
              <p className="text-sm text-zinc-400">
                Such changes may occur without changing the customer&apos;s advertised plan specifications.
              </p>
            </div>

            {/* 6.6 */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#0b0e14] border border-[#1e293b]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#bcfc25] font-mono text-sm">6.6</span>
                Severe Resource Abuse
              </h3>
              <p className="text-sm text-zinc-300">
                If a customer&apos;s service consistently consumes substantially more resources than reasonably expected for its plan and negatively affects other customers or infrastructure, Rim Cloud may contact the customer and may request an upgrade, optimization, or migration to a more appropriate service.
              </p>
              <p className="text-sm text-amber-300">
                Rim Cloud may temporarily restrict or suspend a service where necessary to protect the stability of the infrastructure.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">07.</span>
              Service Usage
            </h2>
            <p>Customers must use Rim Cloud services responsibly and in accordance with:</p>
            <ul className="space-y-2 list-disc list-inside text-sm pl-2">
              <li>These Terms of Service</li>
              <li>Rim Cloud&apos;s Acceptable Use Policy</li>
              <li>Applicable laws and regulations</li>
              <li>Minecraft&apos;s applicable usage guidelines where relevant</li>
              <li>Third-party service requirements where relevant</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">08.</span>
              Minecraft Services
            </h2>
            <p>
              Minecraft hosting customers are responsible for ensuring that their servers comply with applicable Minecraft usage guidelines and Microsoft&apos;s/Mojang&apos;s applicable terms.
            </p>
            <p className="text-sm text-zinc-400">
              Rim Cloud is not affiliated with, endorsed by, or officially connected with Mojang Studios or Microsoft unless explicitly stated.
            </p>
            <p className="text-sm text-zinc-300">
              Customers are responsible for the content, plugins, mods, configurations, and activities conducted on their Minecraft servers.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">09.</span>
              Web Hosting
            </h2>
            <p>
              Customers are responsible for all websites, applications, files, databases, and content hosted through Rim Cloud.
            </p>
            <p className="text-sm text-zinc-400">
              Customers must ensure that their websites and applications do not contain or distribute prohibited material.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">10.</span>
              Discord Bot Hosting
            </h2>
            <p>
              Customers are responsible for their Discord bots and the actions performed by their bots.
            </p>
            <p className="text-sm text-zinc-300">
              Bots must comply with Discord&apos;s applicable Terms of Service and Developer Terms.
            </p>
            <p className="text-sm text-amber-300">
              Rim Cloud may suspend a bot if it causes excessive resource usage, network abuse, or other problems affecting our infrastructure.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">11.</span>
              Resource Abuse
            </h2>
            <p>Customers must not intentionally abuse or circumvent resource limitations.</p>
            <p className="text-sm text-zinc-400">
              Rim Cloud may take reasonable action when a customer&apos;s usage negatively impacts other customers or our infrastructure.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">12.</span>
              Suspension and Termination
            </h2>
            <p>Rim Cloud may suspend or terminate services when necessary due to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Non-payment</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Violation of these Terms</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Violation of the Acceptable Use Policy</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Illegal activity</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Network abuse</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Security threats</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Fraud</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Abuse of Rim Cloud infrastructure</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Requests from law enforcement or other legally authorized entities</li>
              <li className="p-2.5 rounded bg-[#0b0e14] border border-[#1e293b]">Activities that create significant risk to Rim Cloud or other customers</li>
            </ul>
            <p className="text-sm text-zinc-400 pt-2">
              Where reasonably possible, Rim Cloud may provide notice before suspension. However, immediate suspension may occur when necessary to protect our infrastructure, customers, or third parties.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">13.</span>
              Data and Backups
            </h2>
            <p>Customers are responsible for maintaining their own backups of important data.</p>
            <p className="text-sm text-zinc-300">
              Rim Cloud may provide backups depending on the service or plan, but backups should not be considered guaranteed unless explicitly stated.
            </p>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
              Rim Cloud is not responsible for permanent data loss resulting from hardware failure, software failure, accidental deletion, malicious activity, customer actions, suspension, termination, or other events beyond our reasonable control.
            </div>
          </section>

          {/* Section 14 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">14.</span>
              Refunds
            </h2>
            <p>
              Refunds are governed by the separate <strong className="text-white">Rim Cloud Refund Policy</strong>.
            </p>
            <p className="text-sm text-emerald-400 font-mono">
              The standard refund period for eligible services is 24 hours from the original payment.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">15.</span>
              Availability
            </h2>
            <p>
              Rim Cloud aims to provide reliable and stable services but does not guarantee that services will always be uninterrupted or error-free.
            </p>
            <p className="text-sm text-zinc-400">
              Rim Cloud does not currently provide a formal Service Level Agreement (SLA) unless explicitly stated for a particular service.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">16.</span>
              Intellectual Property
            </h2>
            <p>
              Customers retain ownership of content they upload to Rim Cloud unless otherwise agreed.
            </p>
            <p className="text-sm text-zinc-300">
              Customers grant Rim Cloud the limited rights necessary to store, process, transmit, and operate customer content for the purpose of providing the purchased services.
            </p>
            <p className="text-sm text-zinc-400">
              Rim Cloud&apos;s website, branding, software, control panels, logos, documentation, and other proprietary materials remain the property of Rim Cloud or their respective owners.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">17.</span>
              Third-Party Services
            </h2>
            <p>
              Rim Cloud may rely on third-party providers for infrastructure, payment processing, networking, software, domain registration, security, or other services.
            </p>
            <p className="text-sm text-zinc-400">
              Third-party services may be subject to their own terms and policies.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">18.</span>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Rim Cloud shall not be liable for indirect, incidental, consequential, special, or punitive damages resulting from the use or inability to use our services.
            </p>
            <p className="text-sm text-zinc-400">This includes, where legally permitted:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-zinc-400">
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Loss of profits</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Loss of revenue</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Loss of business</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Loss of data</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Loss of customers</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b]">Loss of reputation</li>
              <li className="p-2 rounded bg-[#0b0e14] border border-[#1e293b] col-span-2 sm:col-span-1">Service interruption</li>
            </ul>
            <p className="text-sm text-zinc-400 pt-1">
              Nothing in these Terms excludes liability that cannot legally be excluded or limited.
            </p>
          </section>

          {/* Section 19 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">19.</span>
              Customer Responsibility
            </h2>
            <p>
              Customers are responsible for their own content, applications, users, players, website visitors, bot users, and activities performed through their services.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-4 border-b border-white/[0.06] pb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">20.</span>
              Policy Changes
            </h2>
            <p>Rim Cloud may update these Terms from time to time.</p>
            <p className="text-sm text-zinc-300">
              Updated Terms will become effective when published on the Rim Cloud website unless a different effective date is specified.
            </p>
            <p className="text-sm text-zinc-400">
              Continued use of Rim Cloud services after an update constitutes acceptance of the revised Terms, to the extent permitted by applicable law.
            </p>
          </section>

          {/* Section 21 */}
          <section className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-[#bcfc25] font-mono text-lg">21.</span>
              Contact
            </h2>
            <p>
              Questions regarding these Terms may be directed to Rim Cloud through our official support channels.
            </p>
            <div className="p-6 rounded-2xl bg-[#0b0e14] border border-[#bcfc25]/30 shadow-cyan-sm space-y-3">
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
                  <span>Open Support Ticket</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/policies"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-300 bg-[#121824] hover:bg-[#182234] border border-white/10 transition-colors"
                >
                  <span>View All Policies</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

