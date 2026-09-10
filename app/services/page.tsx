"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceCategories, serviceIcons } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero Header */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#00335B] text-white">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE] mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl"
          >
            Financial Expertise Built Around Your Business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed"
          >
            From statutory auditing and proactive tax strategy to corporate advisory and strategic campaigns, our practice areas provide complete financial confidence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-site py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, idx) => {
            const Icon = serviceIcons[cat.slug as keyof typeof serviceIcons];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {Icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00335B] mb-6">
                      <Icon className="h-6 w-6 text-[#00A7CE]" />
                    </div>
                  )}
                  <h2 className="text-2xl font-display font-bold text-[#00335B] tracking-tight">
                    {cat.title}
                  </h2>
                  <p className="mt-3 text-[#64748B] text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="h-px bg-black/5 my-6" />
                  <ul className="space-y-2.5">
                    {cat.subservices.map((sub) => (
                      <li key={sub} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#00335B]">
                        <CheckCircle2 className="h-4 w-4 text-[#00A7CE] shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-black/5">
                  <Link
                    href={cat.href}
                    className="group flex items-center justify-between w-full rounded-full bg-[#F8FAFC] px-5 py-3 text-xs sm:text-sm font-semibold text-[#00335B] hover:bg-[#00335B] hover:text-white transition-all duration-300"
                  >
                    <span>Explore Detail & Approach</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
