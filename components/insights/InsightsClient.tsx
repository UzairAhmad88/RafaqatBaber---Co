"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Tax", "Accounting", "Audit", "Advisory", "Regulatory", "Business"];

const articles = [
  {
    category: "Tax",
    title: "Understanding the New Corporate Tax Amendments in Pakistan",
    date: "August 12, 2026",
    readTime: "6 min read",
    summary: "An in-depth analysis of the recent tax policy changes, focusing on compliance requirements, modified rates, and corporate operational adjustments for local businesses.",
  },
  {
    category: "Accounting",
    title: "Key Financial Reporting Standard Shifts for SMEs",
    date: "July 28, 2026",
    readTime: "4 min read",
    summary: "Crucial guidance on compliance with updated international accounting framework requirements for small and medium enterprises preparing statutory audits.",
  },
  {
    category: "Regulatory",
    title: "Compliance Guidelines: Ultimate Beneficial Ownership (UBO)",
    date: "June 15, 2026",
    readTime: "5 min read",
    summary: "A practical checklist for corporate entities preparing statutory regulatory filings to meet government anti-money laundering and compliance mandates.",
  },
  {
    category: "Audit",
    title: "How to Prepare Your Team for a Statutory Audit",
    date: "May 22, 2026",
    readTime: "7 min read",
    summary: "A step-by-step audit preparation handbook mapping timelines, ledger reconciliations, internal control confirmations, and document management systems.",
  },
  {
    category: "Advisory",
    title: "Mitigating Cashflow Risks in High-Inflation Environments",
    date: "April 10, 2026",
    readTime: "5 min read",
    summary: "Strategic management consulting advice outlining cost optimization, treasury models, and working capital risk controls for large commerce businesses.",
  },
  {
    category: "Business",
    title: "Navigating E-Commerce Compliance in Cross-Border Trade",
    date: "March 05, 2026",
    readTime: "4 min read",
    summary: "Practical tax compliance and regulatory strategies for Pakistani digital sellers expanding customer bases across neighboring markets.",
  },
];

export default function InsightsClient() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredArticles =
    selectedCat === "All"
      ? articles
      : articles.filter((art) => art.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <>
      {/* Filter Bar */}
      <section className="container-site pt-12 pb-6">
        <div className="flex flex-wrap gap-2 pb-4 border-b border-black/5">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#00335B] text-white shadow-sm"
                  : "bg-white border border-black/5 text-[#64748B] hover:bg-black/5"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container-site pt-6 pb-20">
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((art, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={art.title}
                className={`group flex flex-col justify-between rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm hover:border-[#00335B] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  idx === 0 && selectedCat === "All"
                    ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#00335B]/5 via-white to-white"
                    : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#00335B] tracking-wider uppercase mb-5">
                    <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[10px] text-[#00335B] font-semibold border border-black/5">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-2 text-[#64748B] font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>
                  <h2
                    className={`font-display font-bold text-[#00335B] leading-tight tracking-tight group-hover:text-[#00A7CE] transition-colors ${
                      idx === 0 && selectedCat === "All"
                        ? "text-2xl sm:text-3xl max-w-4xl"
                        : "text-xl"
                    }`}
                  >
                    {art.title}
                  </h2>
                  <p
                    className={`mt-4 text-sm leading-relaxed text-[#64748B] ${
                      idx === 0 && selectedCat === "All" ? "max-w-4xl" : ""
                    }`}
                  >
                    {art.summary}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00335B] group-hover:text-[#00A7CE] transition-colors">
                    Read Article
                  </span>
                  <div className="rounded-full bg-[#F8FAFC] p-2 text-[#00335B] group-hover:bg-[#00335B] group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredArticles.length === 0 && (
          <p className="text-center text-[#64748B] mt-16">No articles found in this category.</p>
        )}
      </section>
    </>
  );
}
