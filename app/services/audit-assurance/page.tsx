"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ClipboardList, TrendingUp, Mail, ArrowLeft } from "lucide-react";

const provisions = [
  "Statutory audits of financial statements in accordance with international auditing standards.",
  "Assurance engagements providing confidence to shareholders and partners.",
  "Regulatory and financial reporting compliance under local and global frameworks.",
  "Rigorous internal controls reviews to detect leakages and strengthen operations.",
  "Agreed-upon procedures and formal review engagements for targeted transactions.",
];

const steps = [
  { step: "01", name: "Planning", desc: "Understand entity structure, assess risks, and design tailored audit procedures aligned with industry standards." },
  { step: "02", name: "Field Work", desc: "Perform substantive testing, vouching, and verification of ledger entries against source documents." },
  { step: "03", name: "Controls Testing", desc: "Evaluate internal controls, segregation of duties, and identify material weaknesses or control gaps." },
  { step: "04", name: "Reporting", desc: "Issue clear, structured audit reports meeting ISA and ICAP standards for regulatory submission." },
  { step: "05", name: "Follow-Up", desc: "Confirm management has addressed key findings and controls have been strengthened post-audit." },
];

export default function AuditAssurancePage() {
  return (
    <div className="bg-[#F7F6F1] min-h-screen pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#123C32] text-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#A8BDAF] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-[#A8BDAF]">
              Services / Overview
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Audit &amp; Assurance
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Independent, rigorous audits that verify accounting compliance, secure credit facilities, and build deep trust with stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="container-site py-20 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        
        {/* Left Column: Offerings & Approach */}
        <div className="space-y-16">
          
          {/* What We Provide */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#123C32] tracking-tight flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-[#B89B5E]" />
              <span>What We Provide</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {provisions.map((prov, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#68736E] leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F7F6F1] text-[#2F6F5E] mt-1">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{prov}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Approach */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#123C32] tracking-tight mb-8">
              Our Methodology
            </h2>
            <div className="grid gap-6">
              {steps.map((st, i) => (
                <div key={i} className="flex gap-4 items-start bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
                  <span className="text-2xl font-bold text-[#B89B5E] font-mono leading-none pt-1">
                    {st.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#123C32]">{st.name}</h3>
                    <p className="mt-2 text-sm text-[#68736E] leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Why It Matters & Action */}
        <div className="space-y-8">
          
          {/* Why It Matters */}
          <div className="bg-[#123C32] text-white rounded-[2rem] p-8 md:p-10 shadow-md">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#B89B5E]" />
              <span>Why It Matters</span>
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              In an era of tight regulations and detailed tax oversight, an independent audit acts as a seal of credibility. It helps you avoid hefty regulatory fines, matches credit compliance requirements for banking lines, and raises investor valuation.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm text-center">
            <h3 className="text-lg font-bold text-[#123C32]">Discuss Audit Requirements</h3>
            <p className="mt-2 text-sm text-[#68736E] leading-relaxed">
              We can help prepare your firm for statutory audits. Get in touch with our lead partner today.
            </p>
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-[#123C32] py-3 text-center text-sm font-semibold text-white hover:bg-[#2F6F5E] transition-colors"
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
