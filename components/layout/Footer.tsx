import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { offices } from "@/lib/data/offices";
import { serviceCategories } from "@/lib/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/10 bg-[#00335B] text-white">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 md:grid-cols-4">
        {/* Column 1: Firm Overview */}
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold tracking-tight text-white">
            Rafaqat Babar & Co.
          </h2>
          <p className="text-xs uppercase tracking-wider text-[#00A7CE]">
            Chartered Accountants
          </p>
          <p className="text-sm leading-relaxed text-slate-200">
            A trusted professional partner for accounting, audit, taxation, advisory and corporate growth, serving clients with excellence since 1986.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-base font-display font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {[
              { name: "About Us", href: "/about" },
              { name: "Our Services", href: "/services" },
              { name: "Our Team", href: "/team" },
              { name: "Our Locations", href: "/about#locations" },
              { name: "Insights", href: "/insights" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#00A7CE] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-base font-display font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {serviceCategories.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="hover:text-[#00A7CE] transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details & Clickable Locations */}
        <div className="space-y-4">
          <h3 className="text-base font-display font-semibold text-white">Office Locations</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {offices.map((office) => (
              <li key={office.slug}>
                <Link
                  href={`/locations/${office.slug}`}
                  className="group flex gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-[#00A7CE] mt-0.5" />
                  <div>
                    <span className="font-semibold text-white group-hover:text-[#00A7CE] transition-colors block">
                      {office.name}
                    </span>
                    <span className="text-xs text-slate-300 line-clamp-1">
                      {office.address}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2 border-t border-white/10">
              <Phone className="h-4 w-4 text-[#00A7CE]" />
              <a
                href="tel:+92915703151"
                className="text-xs text-slate-200 hover:text-white transition-colors"
              >
                +92 91 5703151
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#00A7CE]" />
              <a
                href="mailto:peshawar@rafaqatbabar.com"
                className="text-xs text-slate-200 hover:text-white transition-colors"
              >
                peshawar@rafaqatbabar.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-[#002240] py-6">
        <div className="container-site flex flex-col items-center justify-between gap-4 text-xs text-slate-300 sm:flex-row">
          <p>© {currentYear} Rafaqat Babar & Co. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A7CE] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A7CE] transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
