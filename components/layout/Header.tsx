"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MobileMenu from "./MobileMenu";

import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAboutDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isDarkHeroOverlay = pathname === "/" && !isScrolled;
  const isAboutActive = pathname === "/about" || pathname?.startsWith("/about/");

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-black/5 bg-[#F8FAFC]/95 shadow-sm backdrop-blur-md py-3 md:py-4"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container-site flex items-center justify-between gap-4">
          {/* LEFT SIDE: RBCO LOGO */}
          <Link
            href="/"
            className="flex items-center shrink-0 z-10 hover:opacity-95 transition-opacity"
            aria-label="Rafaqat Babar & Co. Home"
          >
            <Image
              src="/images/logos/RBCO LOGO.svg"
              alt="Rafaqat Babar & Co. logo"
              width={190}
              height={44}
              priority
              className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all ${
                isDarkHeroOverlay ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {/* About Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setAboutDropdownOpen(!aboutDropdownOpen);
                  }
                }}
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  isDarkHeroOverlay
                    ? isAboutActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                    : isAboutActive
                      ? "text-[#00335B] font-semibold"
                      : "text-[#64748B] hover:text-[#00335B]"
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <span>About</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    aboutDropdownOpen ? "rotate-180 text-[#00A7CE]" : ""
                  }`}
                />
                {isAboutActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00A7CE]" />
                )}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-2xl border border-black/5 bg-white p-2 shadow-xl backdrop-blur-md z-50"
                  >
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={`flex flex-col rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors ${
                        pathname === "/about"
                          ? "bg-[#00335B]/5 text-[#00335B]"
                          : "text-[#00335B] hover:bg-[#F8FAFC] hover:text-[#00A7CE]"
                      }`}
                    >
                      <span>About Us</span>
                    </Link>
                    <Link
                      href="/team"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={`flex flex-col rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors mt-0.5 ${
                        pathname === "/team" || pathname === "/about/team"
                          ? "bg-[#00335B]/5 text-[#00335B]"
                          : "text-[#00335B] hover:bg-[#F8FAFC] hover:text-[#00A7CE]"
                      }`}
                    >
                      <span>Team</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Link */}
            <Link
              href="/services"
              className={`relative py-1 transition-colors whitespace-nowrap ${
                isDarkHeroOverlay
                  ? pathname?.startsWith("/services")
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                  : pathname?.startsWith("/services")
                    ? "text-[#00335B] font-semibold"
                    : "text-[#64748B] hover:text-[#00335B]"
              }`}
            >
              Services
              {pathname?.startsWith("/services") && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00A7CE]" />
              )}
            </Link>

            {/* Insights Link */}
            <Link
              href="/insights"
              className={`relative py-1 transition-colors whitespace-nowrap ${
                isDarkHeroOverlay
                  ? pathname?.startsWith("/insights")
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                  : pathname?.startsWith("/insights")
                    ? "text-[#00335B] font-semibold"
                    : "text-[#64748B] hover:text-[#00335B]"
              }`}
            >
              Insights
              {pathname?.startsWith("/insights") && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00A7CE]" />
              )}
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 shadow-sm whitespace-nowrap ${
                isDarkHeroOverlay
                  ? "bg-white text-[#00335B] hover:bg-[#F8FAFC] hover:shadow-md"
                  : "bg-[#00335B] text-white hover:bg-[#002240] hover:shadow-md"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* RIGHT SIDE: LEA LOGO & Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 z-10">
            <Image
              src="/images/logos/LEA LOGO.svg"
              alt="LEA Global logo"
              width={140}
              height={40}
              priority
              className={`h-7 sm:h-8 md:h-9 w-auto object-contain transition-all ${
                isDarkHeroOverlay ? "brightness-0 invert opacity-90" : "opacity-90 hover:opacity-100"
              }`}
            />

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isDarkHeroOverlay
                    ? "bg-white text-[#00335B] hover:bg-[#F8FAFC]"
                    : "bg-[#00335B] text-white hover:bg-[#002240]"
                }`}
              >
                Contact
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`rounded-full p-2 transition-colors ${
                  isDarkHeroOverlay
                    ? "text-white hover:bg-white/10"
                    : "text-[#00335B] hover:bg-black/5"
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to push content below the header - except on home page where hero starts under glass */}
      {pathname !== "/" && <div className="h-20 w-full" />}

      {/* Mobile navigation sliding panel */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
