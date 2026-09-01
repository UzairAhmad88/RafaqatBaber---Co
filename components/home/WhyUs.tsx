"use client";

import { motion } from "motion/react";

const principles = [
  {
    title: "Precision",
    description: "Accurate financial information and professional reporting that stands up to scrutiny.",
  },
  {
    title: "Integrity",
    description: "Professional responsibility, complete transparency, and ethical consulting practice.",
  },
  {
    title: "Insight",
    description: "Turning dry numbers and regulatory text into useful, practical business understanding.",
  },
  {
    title: "Partnership",
    description: "Prioritizing long-term relationship value over one-off transactional engagements.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24 md:py-32 border-b border-black/5">
      <div className="container-site">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1E3E62]">
              Our Core Philosophy
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E2238] leading-tight">
              Built on Professionalism.<br />Driven by Insight.
            </h2>
          </motion.div>
        </div>

        {/* Editorial Rows */}
        <div className="divide-y divide-black/10">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -25, y: 5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid py-8 md:py-12 gap-6 md:grid-cols-[1fr_2fr] items-baseline"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#C5A059] font-mono">0{idx + 1}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2238] tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-[#64748B] max-w-2xl">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
