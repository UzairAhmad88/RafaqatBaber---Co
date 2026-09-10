"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(true);
  const pathname = usePathname();

  const isAboutActive = pathname === "/about" || pathname?.startsWith("/about/");

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
            className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-sm flex-col bg-[#F8FAFC] p-6 shadow-2xl md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-display font-bold tracking-tight text-[#00335B]">
                Rafaqat Babar & Co.
              </span>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-[#00335B]/70 hover:bg-black/5 hover:text-[#00335B] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 flex flex-col gap-4">
              {/* About Accordion */}
              <div className="border-b border-black/5 pb-3">
                <button
                  type="button"
                  onClick={() => setAboutSubmenuOpen(!aboutSubmenuOpen)}
                  className="flex w-full items-center justify-between py-2 text-2xl font-medium tracking-tight text-[#00335B] hover:text-[#00A7CE] transition-colors"
                  aria-expanded={aboutSubmenuOpen}
                  aria-controls="mobile-about-submenu"
                >
                  <span className={isAboutActive ? "text-[#00A7CE] font-semibold" : ""}>About</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#00335B] transition-transform duration-200 ${
                      aboutSubmenuOpen ? "rotate-180 text-[#00A7CE]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {aboutSubmenuOpen && (
                    <motion.div
                      id="mobile-about-submenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 pt-2 flex flex-col gap-3"
                    >
                      <Link
                        href="/about"
                        onClick={onClose}
                        className={`flex items-center justify-between text-lg py-1 transition-colors ${
                          pathname === "/about"
                            ? "text-[#00A7CE] font-semibold"
                            : "text-[#64748B] hover:text-[#00335B]"
                        }`}
                      >
                        <span>About Us</span>
                        <ArrowRight className="h-4 w-4 opacity-50" />
                      </Link>
                      <Link
                        href="/about/team"
                        onClick={onClose}
                        className={`flex items-center justify-between text-lg py-1 transition-colors ${
                          pathname === "/about/team" || pathname === "/team"
                            ? "text-[#00A7CE] font-semibold"
                            : "text-[#64748B] hover:text-[#00335B]"
                        }`}
                      >
                        <span>Team</span>
                        <ArrowRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <div className="border-b border-black/5 pb-3">
                <Link
                  href="/services"
                  onClick={onClose}
                  className={`group flex items-center justify-between py-2 text-2xl font-medium tracking-tight transition-colors ${
                    pathname?.startsWith("/services")
                      ? "text-[#00A7CE] font-semibold"
                      : "text-[#00335B] hover:text-[#00A7CE]"
                  }`}
                >
                  <span>Services</span>
                  <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#00A7CE]" />
                </Link>
              </div>

              {/* Insights */}
              <div className="border-b border-black/5 pb-3">
                <Link
                  href="/insights"
                  onClick={onClose}
                  className={`group flex items-center justify-between py-2 text-2xl font-medium tracking-tight transition-colors ${
                    pathname?.startsWith("/insights")
                      ? "text-[#00A7CE] font-semibold"
                      : "text-[#00335B] hover:text-[#00A7CE]"
                  }`}
                >
                  <span>Insights</span>
                  <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#00A7CE]" />
                </Link>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="mt-auto border-t border-black/10 pt-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#00335B] py-4 text-center font-medium text-white hover:bg-[#002240] transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
