"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ClipboardList, TrendingUp, Mail, ArrowLeft } from "lucide-react";

const provisions = [
  "Strategic corporate planning and organizational restructuring advisory.",
  "Financial analysis, modeling, and detailed cashflow forecasting.",
  "Comprehensive feasibility studies and project reports for capital investment.",
  "Risk assessment, mitigation planning, and operational audits.",
  "Due diligence reviews for acquisitions, joint ventures, and partnerships.",
  "Transaction advisory and corporate finance consultations.",
];

const steps = [
  { step: "01", name: "Discovery", desc: "Conduct structured interviews, financial reviews, and operational walkthroughs to understand your business context." },
  { step: "02", name: "Analysis", desc: "Build detailed financial models, scenario projections, and risk matrices based on real company data." },
  { step: "03", name: "Insight", desc: "Translate quantitative findings into clear management-level insights and strategic option evaluations." },
  { step: "04", name: "Recommendation", desc: "Present a concise, evidence-backed advisory report outlining recommended paths and their financial implications." },
  { step: "05", name: "Implementation", desc: "Support execution of chosen strategies with ongoing monitoring, KPI tracking, and quarterly review sessions." },
];

export default function AdvisoryPage() {
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
              Advisory Services
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Practical management consulting, financial modeling, and corporate advisory to guide stable organizational growth and navigate transitions.
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
              Correct strategic alignment prevents capital waste. Whether modeling a new project&apos;s ROI, assessing post-merger integration risks, or performing commercial due diligence, objective advisory ensures you make decisions driven by clear insight.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm text-center">
            <h3 className="text-lg font-bold text-[#0E2238]">Discuss Advisory Support</h3>
            <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
              Map out growth options or evaluate upcoming corporate transitions. Contact our Advisory Lead.
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
