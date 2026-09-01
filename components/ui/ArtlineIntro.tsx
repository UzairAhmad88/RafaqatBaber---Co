"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const SERVICES_ARTLINE = [
  {
    id: "audit",
    title: "Audit & Assurance",
    subtitle: "Rigorous Financial Audits & Compliance Reviews",
    iconPath: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield Outer */}
        <motion.path
          d="M 50 10 L 85 25 V 50 C 85 70 50 90 50 90 C 50 90 15 70 15 50 V 25 Z"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {/* Checkmark inside */}
        <motion.path
          d="M 35 48 L 47 60 L 68 35"
          stroke="#8EA4BA"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        />
      </svg>
    ),
  },
  {
    id: "taxation",
    title: "Taxation & Compliance",
    subtitle: "Corporate & Individual Strategic Tax Planning",
    iconPath: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document Outline */}
        <motion.path
          d="M 25 15 H 60 L 80 35 V 85 H 25 Z"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* Fold Corner */}
        <motion.path
          d="M 60 15 V 35 H 80"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        {/* Tax Lines */}
        <motion.path
          d="M 35 45 H 65 M 35 58 H 65 M 35 71 H 52"
          stroke="#8EA4BA"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        />
      </svg>
    ),
  },
  {
    id: "advisory",
    title: "Advisory Services",
    subtitle: "Corporate Restructuring & Business Growth",
    iconPath: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circle Compass Outline */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          stroke="#C5A059"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        {/* Trending Arrow Line */}
        <motion.path
          d="M 28 65 L 45 48 L 56 57 L 72 32"
          stroke="#8EA4BA"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        {/* Arrow Head */}
        <motion.path
          d="M 60 32 H 72 V 44"
          stroke="#8EA4BA"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
      </svg>
    ),
  },
  {
    id: "accounting",
    title: "Accounting & Support",
    subtitle: "Full-Scope Bookkeeping & Financial Reporting",
    iconPath: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ledger Base */}
        <motion.path
          d="M 20 20 H 80 V 80 H 20 Z"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* Bar Charts Artline */}
        <motion.path
          d="M 33 68 V 52 M 50 68 V 38 M 67 68 V 44"
          stroke="#8EA4BA"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </svg>
    ),
  },
];

export default function ArtlineIntro({ onComplete }: { onComplete?: () => void }) {
  const [stage, setStage] = useState<"logo" | "services" | "completed">("logo");
  const [currentServiceIdx, setCurrentServiceIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("hasSeenArtlineIntro");
      if (hasSeen === "true") {
        setIsVisible(false);
        setHasCheckedSession(true);
        return;
      }
    } catch {
      // Storage access error fallback
    }

    setIsVisible(true);
    setHasCheckedSession(true);

    // Stage 0: Logo Artline display (2.4s)
    const logoTimer = setTimeout(() => {
      setStage("services");
    }, 2400);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (!isVisible || stage !== "services") return;

    // Cycle through services one by one
    if (currentServiceIdx < SERVICES_ARTLINE.length - 1) {
      const serviceTimer = setTimeout(() => {
        setCurrentServiceIdx((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(serviceTimer);
    } else {
      // Final stage transition after last service
      const endTimer = setTimeout(() => {
        handleFinish();
      }, 2000);
      return () => clearTimeout(endTimer);
    }
  }, [stage, currentServiceIdx, isVisible]);

  const handleFinish = () => {
    try {
      sessionStorage.setItem("hasSeenArtlineIntro", "true");
    } catch {
      // Ignore storage errors
    }
    setStage("completed");
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!hasCheckedSession || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#071322] text-white overflow-hidden"
      >
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E3E62]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Skip Button */}
        <button
          onClick={handleFinish}
          className="absolute top-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white/80 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Floating Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="intro-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8EA4BA" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#intro-grid)" />
          </svg>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-xl text-center px-6">
          {stage === "logo" && (
            <motion.div
              key="logo-stage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* 2D Artline Crest Monogram SVG Animation */}
              <div className="relative mb-6">
                <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Diamond */}
                  <motion.path
                    d="M 60 10 L 110 60 L 60 110 L 10 60 Z"
                    stroke="#C5A059"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  {/* Inner Emblem Monogram R & B Lines */}
                  <motion.path
                    d="M 40 38 V 82 M 40 38 H 68 C 76 38 76 56 68 56 H 40 M 60 56 L 74 82"
                    stroke="#8EA4BA"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path
                    d="M 50 30 L 70 30 M 50 90 L 70 90"
                    stroke="#C5A059"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  />
                </svg>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2"
              >
                RAFAQAT BABAR & CO.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-xs font-semibold tracking-[0.3em] uppercase text-[#8EA4BA]"
              >
                Chartered Accountants · Est. 1986
              </motion.p>
            </motion.div>
          )}

          {stage === "services" && (
            <AnimatePresence mode="wait">
              <motion.div
                key={SERVICES_ARTLINE[currentServiceIdx].id}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full"
              >
                {/* 2D Line-art Icon Container */}
                <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-[#C5A059]/30 shadow-inner">
                  {SERVICES_ARTLINE[currentServiceIdx].iconPath}
                </div>

                {/* Counter indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold tracking-wider uppercase mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>Service {currentServiceIdx + 1} of {SERVICES_ARTLINE.length}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {SERVICES_ARTLINE[currentServiceIdx].title}
                </h2>

                <p className="text-sm text-[#8EA4BA] leading-relaxed max-w-md">
                  {SERVICES_ARTLINE[currentServiceIdx].subtitle}
                </p>

                {/* Progress bar line */}
                <div className="mt-8 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#C5A059] to-[#8EA4BA]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
