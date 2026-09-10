"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 min-h-[90vh] flex items-center bg-[#00335B] text-white">
      {/* Soft Ambient Radial Light Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,167,206,0.15),rgba(0,51,91,1))]" />
      
      {/* Soft Floating Ambient Light Orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0A4A7A]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-[2]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8EA4BA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-site relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12 md:py-16">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8EA4BA]">
              Chartered Accountants · Est. 1986
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Clarity in Numbers.<br />
            <span className="font-normal text-[#C5A059]">
              Confidence in Decisions.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-[#8EA4BA] max-w-2xl mb-10"
          >
            Rafaqat Babar & Co. provides trusted accounting, audit, taxation and advisory services designed to help organizations operate with confidence and grow with clarity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/services"
              className="rounded-full bg-[#C5A059] px-8 py-4 text-sm font-semibold text-white hover:bg-[#b08d48] transition-all duration-300 shadow-lg shadow-[#C5A059]/20 hover:shadow-xl hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300 shadow-sm hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
