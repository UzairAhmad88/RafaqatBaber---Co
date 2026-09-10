"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-[#00335B] px-8 py-16 text-white md:px-16 md:py-20 shadow-xl overflow-hidden"
        >
          {/* Subtle Abstract Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 150 C 100 50, 200 250, 500 100 T 1100 300" fill="none" stroke="#C5A059" strokeWidth="2" />
              <path d="M-100 180 C 100 80, 200 280, 500 130 T 1100 330" fill="none" stroke="#8EA4BA" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8EA4BA]">
              Start a Conversation
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Let&apos;s Make Your Next Financial Decision With Confidence.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Whether you need audit, taxation, accounting or strategic advisory support, our team is ready to understand your requirements and deliver practical value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#00335B] hover:bg-[#F8FAFC] transition-all duration-200 shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
