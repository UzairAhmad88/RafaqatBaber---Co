import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/10 bg-[#123C32] text-white">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 md:grid-cols-4">
        {/* Column 1: Firm Overview */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Rafaqat Babar & Co.</h2>
          <p className="text-xs uppercase tracking-wider text-[#A8BDAF]">
            Chartered Accountants
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            A trusted professional partner for accounting, audit, taxation, advisory and business growth, serving clients with excellence since 1986.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Our Services", href: "/services" },
              { name: "Our Team", href: "/team" },
              { name: "Insights", href: "/insights" },
              { name: "Our Locations", href: "/locations" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#A8BDAF] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-base font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              { name: "Audit & Assurance", href: "/services/audit-assurance" },
              { name: "Taxation & Compliance", href: "/services/taxation-compliance" },
              { name: "Advisory Services", href: "/services/advisory" },
              { name: "Accounting & Support", href: "/services/accounting-business-support" },
            ].map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="hover:text-[#A8BDAF] transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-white">Office Locations</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#B89B5E]" />
              <div>
                <span className="font-semibold text-white block">Peshawar (Head Office)</span>
                <span className="text-xs">Aman Center, University Road</span>
              </div>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#B89B5E]" />
              <div>
                <span className="font-semibold text-white block">Islamabad Office</span>
                <span className="text-xs">Sector F-8</span>
              </div>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#B89B5E]" />
              <div>
                <span className="font-semibold text-white block">Kabul Office</span>
                <span className="text-xs">Shahr-e Naw</span>
              </div>
            </li>
            <li className="flex items-center gap-2 pt-2 border-t border-white/10">
              <Phone className="h-4 w-4 text-[#B89B5E]" />
              <a href="tel:+92915703151" className="text-xs text-white/70 hover:text-white transition-colors">
                +92 91 5703151
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#B89B5E]" />
              <a href="mailto:peshawar@rafaqatbabar.com" className="text-xs text-white/70 hover:text-white transition-colors">
                peshawar@rafaqatbabar.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-[#0c2a23] py-6">
        <div className="container-site flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>© {currentYear} Rafaqat Babar & Co. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
