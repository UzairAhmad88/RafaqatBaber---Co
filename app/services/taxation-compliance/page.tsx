"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ClipboardList, TrendingUp, Mail, ArrowLeft } from "lucide-react";

const provisions = [
  "Personal income tax planning, preparation, and secure e-filing.",
  "Corporate income tax management and regulatory compliance filings.",
  "Capital gains tax assessments and strategic minimization advisory.",
  "Excise tax and indirect taxation consulting.",
  "Regulatory compliance advisory under local revenue authority regulations.",
  "Ultimate Beneficial Ownership (UBO) declaration & maintenance support.",
  "Economic Substance Regulations (ESR) compliance evaluations and reporting.",
];

const steps = [
  {
    step: "01",
    name: "Assessment",
    desc: "Review your entity structure, income streams, and prior tax positions to identify optimization opportunities.",
  },
  {
    step: "02",
    name: "Strategy",
    desc: "Design a compliant tax strategy aligned with ICAP guidelines, local tax law, and international treaty obligations.",
  },
  {
    step: "03",
    name: "Preparation",
    desc: "Prepare accurate returns, schedules, and supporting documentation for corporate and personal filings.",
  },
  {
    step: "04",
    name: "Filing",
    desc: "Submit verified returns to FBR and relevant authorities, ensuring deadlines and e-filing requirements are met.",
  },
  {
    step: "05",
    name: "Representation",
    desc: "Handle queries, appeals, and notices from tax authorities on your behalf to resolve disputes efficiently.",
  },
];

export default function TaxationCompliancePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#00335B] text-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#00A7CE] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-slate-300">
              Services / Overview
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
              Taxation &amp; Compliance
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Strategic tax management and regulatory filing compliance to minimize risk, optimize corporate structures, and protect capital.
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
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-[#00A7CE]" />
              <span>What We Provide</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {provisions.map((prov, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#64748B] leading-relaxed"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00335B]/5 text-[#00335B] mt-1">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{prov}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Approach */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight mb-8">
              Our Methodology
            </h2>
            <div className="grid gap-6">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-white border border-black/5 rounded-2xl p-6 shadow-sm"
                >
                  <span className="text-2xl font-bold text-[#00A7CE] font-mono leading-none pt-1">
                    {st.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#00335B]">
                      {st.name}
                    </h3>
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
          <div className="bg-[#00335B] text-white rounded-[2rem] p-8 md:p-10 shadow-md">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#00A7CE]" />
              <span>Why It Matters</span>
            </h3>
            <p className="mt-4 text-sm text-slate-200 leading-relaxed">
              Tax compliance has transitioned from a routine filing chore to a critical risk management challenge. With reporting systems like ESR, UBO, and automated revenue audits, non-compliance poses immediate threats of severe financial penalties and reputational damage.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm text-center">
            <h3 className="text-lg font-display font-bold text-[#00335B]">
              Optimize Tax Strategy
            </h3>
            <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
              Ensure compliance with local laws and international regulatory frameworks. Get in touch with our tax lead.
            </p>
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-[#00335B] py-3 text-center text-sm font-semibold text-white hover:bg-[#002240] transition-colors"
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
