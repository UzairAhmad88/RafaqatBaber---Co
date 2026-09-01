"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ClipboardList, TrendingUp, Mail, ArrowLeft } from "lucide-react";

const provisions = [
  "Comprehensive outsourced general ledger accounting.",
  "Daily or weekly bookkeeping and transaction recording.",
  "Compilation of internal management reports and dashboards.",
  "Outsourced accounts payable (AP) and accounts receivable (AR) processing.",
  "Bank accounts, credit lines, and intercompany reconciliations.",
  "End-to-end payroll processing and regulatory withholding calculations.",
];

const steps = [
  { step: "01", name: "Onboarding", desc: "Set up your chart of accounts, understand your transaction volume, and integrate with your existing systems." },
  { step: "02", name: "Recording", desc: "Systematically record all daily transactions, categorize expenses, and maintain clean general ledger entries." },
  { step: "03", name: "Reconciliation", desc: "Perform monthly bank and inter-company reconciliations to ensure ledger accuracy and catch discrepancies early." },
  { step: "04", name: "Reporting", desc: "Prepare management accounts, trial balances, and financial summaries in your required format and frequency." },
  { step: "05", name: "Review", desc: "Conduct periodic reviews, financial health checks, and provide actionable commentary on cash positions." },
];

export default function AccountingSupportPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#0E2238] text-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#8EA4BA] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-[#8EA4BA]">
              Services / Overview
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Accounting &amp; Support
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Compliant day-to-day bookkeeping, outsourced back-office ledgers, and automated payroll operations to streamline your overhead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="container-site py-20 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        
        {/* Left Column */}
        <div className="space-y-16">
          
          {/* What We Provide */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2238] tracking-tight flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-[#C5A059]" />
              <span>What We Provide</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {provisions.map((prov, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#1E3E62] mt-1">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{prov}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Approach */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2238] tracking-tight mb-8">
              Our Methodology
            </h2>
            <div className="grid gap-6">
              {steps.map((st, i) => (
                <div key={i} className="flex gap-4 items-start bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
                  <span className="text-2xl font-bold text-[#C5A059] font-mono leading-none pt-1">
                    {st.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E2238]">{st.name}</h3>
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Why It Matters */}
          <div className="bg-[#0E2238] text-white rounded-[2rem] p-8 md:p-10 shadow-md">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#C5A059]" />
              <span>Why It Matters</span>
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Managing ledgers internally adds headcount, software licenses, and training overhead. Outsourcing your accounting to chartered professionals gives you real-time visibility over cash positions, secures compliance, and lets your internal team focus purely on growth.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm text-center">
            <h3 className="text-lg font-bold text-[#0E2238]">Discuss Outsourcing Plans</h3>
            <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
              Transition books to our secure cloud bookkeeping portal. Get in touch with our operations partner.
            </p>
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-[#0E2238] py-3 text-center text-sm font-semibold text-white hover:bg-[#1E3E62] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Discuss Your Requirements</span>
            </Link>
          </div>

        </div>

      </section>
    </div>
  );
}
