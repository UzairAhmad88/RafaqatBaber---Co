"use client";

import Link from "next/link";
import { motion } from "motion/react";

const articles = [
  {
    category: "Tax Updates",
    title: "Understanding the New Corporate Tax Amendments in Pakistan",
    date: "August 12, 2026",
    summary: "An in-depth analysis of the recent tax policy changes and their operational implications for local businesses.",
    href: "/insights",
  },
  {
    category: "Accounting Insights",
    title: "Key Financial Reporting Standard Shifts for SMEs",
    date: "July 28, 2026",
    summary: "Crucial guidance on compliance with updated international accounting framework requirements.",
    href: "/insights",
  },
  {
    category: "Regulatory Updates",
    title: "Compliance Guidelines: Ultimate Beneficial Ownership (UBO)",
    date: "June 15, 2026",
    summary: "A checklist for corporate entities preparing regulatory filings to meet government compliance mandates.",
    href: "/insights",
  },
];

export default function InsightsPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE]">
              Insights
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#00335B]">
              Financial Perspective.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/insights"
              className="group flex items-center gap-2 font-semibold text-[#00335B] hover:text-[#00A7CE] transition-colors"
            >
              <span>View All Insights</span>
              <span className="transition-transform group-hover:translate-x-1.5 duration-200 text-[#00A7CE]">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((art, idx) => (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-black/10 bg-[#F8FAFC]/50 p-8 hover:border-[#00335B] hover:bg-white transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#00335B] tracking-wider uppercase mb-5">
                  <span className="text-[#00A7CE]">{art.category}</span>
                  <span className="text-[#64748B] font-medium">{art.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#00335B] leading-tight tracking-tight group-hover:text-[#00A7CE] transition-colors">
                  {art.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                  {art.summary}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/5">
                <Link
                  href={art.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00335B] group-hover:text-[#00A7CE] transition-colors"
                >
                  <span>Read Article</span>
                  <span className="transition-transform group-hover:translate-x-1 duration-200 text-[#00A7CE]">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
