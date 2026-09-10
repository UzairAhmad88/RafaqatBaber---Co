"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function TrustSection() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-y border-black/5">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left column - Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start justify-start"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE] mb-2">
            Who We Are
          </span>
          <div className="h-0.5 w-12 bg-[#00A7CE] mt-2" />
        </motion.div>

        {/* Right column - Headline, Copy & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-start"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#00335B] leading-tight mb-6">
            Professional expertise.
            <br />
            Practical financial insight.
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#64748B] max-w-3xl mb-8">
            <p>
              Rafaqat Babar & Co. is a leading chartered accountancy firm established in 1986. With four decades of professional practice, the firm has built an unwavering reputation for financial precision, regulatory compliance, and strategic corporate advisory.
            </p>
            <p>
              We provide comprehensive audit, tax planning, corporate compliance, and management advisory services to diverse sectors including commerce, technology, manufacturing, and non-profits. We prioritize long-term partnerships over transactional engagements, equipping decision-makers with the confidence needed to navigate complex regulatory environments.
            </p>
          </div>

          <Link
            href="/about"
            className="group flex items-center gap-2 font-semibold text-[#00335B] hover:text-[#00A7CE] transition-colors"
          >
            <span>Discover Our Firm</span>
            <span className="transition-transform group-hover:translate-x-1.5 duration-200 text-[#00A7CE]">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
