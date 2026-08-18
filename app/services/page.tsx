"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const serviceCategories = [
  {
    title: "Audit & Assurance",
    href: "/services/audit-assurance",
    desc: "Robust auditing and verification processes to deliver trust and satisfy compliance requirements.",
    subservices: [
      "Financial statement audit",
      "Assurance engagements",
      "Financial reporting compliance",
      "Internal controls auditing",
      "Review engagements",
    ],
  },
  {
    title: "Taxation & Compliance",
    href: "/services/taxation-compliance",
    desc: "Proactive strategic tax planning and comprehensive compliance filings to navigate local laws.",
    subservices: [
      "Personal income tax preparation",
      "Corporate income tax management",
      "Capital gains tax strategy",
      "Excise tax advisory",
      "Regulatory compliance & filings",
      "Ultimate Beneficial Ownership (UBO) declaration",
      "Economic Substance Regulations (ESR) compliance",
    ],
  },
  {
    title: "Advisory",
    href: "/services/advisory",
    desc: "Management consulting and tactical financial analysis to shape successful corporate choices.",
    subservices: [
      "Business advisory & growth plans",
      "Financial advisory & capital consulting",
      "Strategic corporate planning",
      "Financial analysis & modeling",
      "Risk assessment & mitigation",
      "Feasibility studies & project reports",
      "Due diligence reviews",
    ],
  },
  {
    title: "Accounting & Business Support",
    href: "/services/accounting-business-support",
    desc: "Day-to-day back office financial management, bookkeeping, and payroll operational support.",
    subservices: [
      "General ledger accounting",
      "Day-to-day bookkeeping support",
      "Financial reporting preparation",
      "Accounts outsourcing (AP/AR)",
      "Bank & account reconciliation",
      "Payroll & business support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F7F6F1] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#123C32] text-white">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A8BDAF] mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Financial Expertise Built Around Your Business.
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-site py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {serviceCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#123C32] tracking-tight">
                  {cat.title}
                </h2>
                <p className="mt-4 text-[#68736E] text-sm sm:text-base leading-relaxed">
                  {cat.desc}
                </p>
                <div className="h-px bg-black/10 my-6" />
                <ul className="space-y-3">
                  {cat.subservices.map((sub) => (
                    <li key={sub} className="flex items-start gap-2.5 text-sm text-[#17201D]">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#B89B5E] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-black/5">
                <Link
                  href={cat.href}
                  className="group flex items-center justify-between w-full rounded-full bg-[#F7F6F1] px-6 py-3.5 text-sm font-semibold text-[#123C32] hover:bg-[#123C32] hover:text-white transition-all duration-300"
                >
                  <span>Explore Detail & Approach</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
