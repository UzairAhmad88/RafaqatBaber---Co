import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for could not be found. Return to the Rafaqat Babar & Co. homepage.",
};

export default function NotFound() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center">
      <div className="container-site py-20 text-center max-w-2xl mx-auto">
        {/* Large 404 */}
        <div className="text-[120px] sm:text-[180px] font-bold leading-none text-[#00335B]/10 select-none font-mono">
          404
        </div>

        {/* Content */}
        <div className="-mt-6 sm:-mt-12 relative z-10">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#00A7CE] mb-4">
            Page Not Found
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#00335B] leading-tight">
            This Page Doesn&apos;t Exist.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-lg mx-auto">
            The page you&apos;re looking for may have been moved, renamed, or never existed. Let us help you find what you need.
          </p>

          {/* Navigation options */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-lg mx-auto">
            {[
              { label: "Return Home", href: "/", primary: true },
              { label: "Our Services", href: "/services", primary: false },
              { label: "Contact Us", href: "/contact", primary: false },
              { label: "Insights", href: "/insights", primary: false },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
                  item.primary
                    ? "bg-[#00335B] text-white hover:bg-[#002240] shadow-md"
                    : "border border-black/10 bg-white text-[#00335B] hover:bg-black/5 hover:border-black/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Subtle divider & contact */}
          <div className="mt-16 pt-8 border-t border-black/10">
            <p className="text-sm text-[#64748B]">
              Need help?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#00335B] underline underline-offset-4 hover:text-[#00A7CE] transition-colors"
              >
                Contact our team
              </Link>{" "}
              and we&apos;ll assist you directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
