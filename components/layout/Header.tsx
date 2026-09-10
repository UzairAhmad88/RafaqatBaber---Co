"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
  ];

  const isDarkHeroOverlay = pathname === "/" && !isScrolled;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-black/5 bg-[#F8FAFC]/90 shadow-sm backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-site flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl font-bold font-display tracking-tight transition-colors ${
              isDarkHeroOverlay
                ? "text-white hover:text-[#00A7CE]"
                : "text-[#00335B] hover:text-[#00A7CE]"
            }`}
          >
            Rafaqat Babar & Co.
          </Link>

          {/* Desktop Navigation & Contact Us Button grouped inline */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors ${
                      isDarkHeroOverlay
                        ? isActive
                          ? "text-white font-semibold"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-[#00335B] font-semibold"
                          : "text-[#64748B] hover:text-[#00335B]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00A7CE]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 shadow-sm ${
                isDarkHeroOverlay
                  ? "bg-white text-[#00335B] hover:bg-[#F8FAFC] hover:shadow-md"
                  : "bg-[#00335B] text-white hover:bg-[#002240] hover:shadow-md"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/contact"
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                isDarkHeroOverlay
                  ? "bg-white text-[#00335B] hover:bg-[#F8FAFC]"
                  : "bg-[#00335B] text-white hover:bg-[#002240]"
              }`}
            >
              Contact Us
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
              <Menu className="h-6 w-6" />
            </button>
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
