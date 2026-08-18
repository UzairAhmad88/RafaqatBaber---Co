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

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 min-h-[90vh] flex items-center bg-[#123C32]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none"
      >
        <source src="/videos/HomeHero.mp4" type="video/mp4" />
      </video>

      {/* Dark Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#123C32]/95 via-[#123C32]/85 to-[#123C32]/75 z-[1]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-[2]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A8BDAF" strokeWidth="0.5" />
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
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A8BDAF] mb-4"
          >
            Chartered Accountants · Est. 1986
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Clarity in Numbers.<br />
            <span className="display-font font-normal text-[#B89B5E] italic">
              Confidence in Decisions.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-[#A8BDAF] max-w-2xl mb-8"
          >
            Rafaqat Babar & Co. provides trusted accounting, audit, taxation and advisory services designed to help organizations operate with confidence and grow with clarity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/services"
              className="rounded-full bg-[#B89B5E] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#a6864c] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200 shadow-sm"
            >
              Talk to an Advisor
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
