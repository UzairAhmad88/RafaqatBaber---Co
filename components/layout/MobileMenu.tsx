"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm md:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-sm flex-col bg-[#F8FAFC] p-6 shadow-2xl md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-sans font-semibold tracking-tight text-[#0E2238]">
                Rafaqat Babar & Co.
              </span>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-[#0F172A]/70 hover:bg-black/5 hover:text-[#0F172A] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-12 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center justify-between text-2xl font-medium tracking-tight text-[#0E2238] hover:text-[#1E3E62] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="mt-auto border-t border-black/10 pt-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#0E2238] py-4 text-center font-medium text-white hover:bg-[#1E3E62] transition-colors shadow-sm"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
