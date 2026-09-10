"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  "Audit & Assurance",
  "Taxation & Compliance",
  "Management Advisory",
  "Public Sector Advisory",
  "Corporate Campaign",
  "Corporate Regulatory Filings",
];

export default function IslamabadOfficePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#00335B] text-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#00A7CE] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Locations
            </Link>
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-slate-300">
              Capital Office · Est. 1998
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
              Islamabad
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Our Islamabad office in Sector F-8 serves the capital region, public sector organisations, and corporate clients headquartered in the federal capital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container-site py-20 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        {/* Left */}
        <div className="space-y-8">
          {/* Office Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm"
          >
            <h2 className="text-2xl font-display font-bold text-[#00335B] tracking-tight mb-6">
              Office Information
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00A7CE]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase mb-1">
                    Address
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    House # 24-A, Street # 38,<br />
                    Sector F-8/1, Islamabad, Pakistan
                  </p>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00A7CE]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+92512856605"
                    className="text-sm text-[#00335B] font-semibold hover:text-[#00A7CE] transition-colors"
                  >
                    +92 51 2856605
                  </a>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00A7CE]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:islamabad@rafaqatbabar.com"
                    className="text-sm text-[#00335B] font-semibold hover:text-[#00A7CE] transition-colors"
                  >
                    islamabad@rafaqatbabar.com
                  </a>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00A7CE]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase mb-1">
                    Office Hours
                  </p>
                  <p className="text-sm text-[#64748B]">Monday – Friday: 9:00 AM – 5:30 PM</p>
                  <p className="text-sm text-[#64748B]">Saturday: By appointment only</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Available */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm"
          >
            <h2 className="text-2xl font-display font-bold text-[#00335B] tracking-tight mb-6">
              Services Available at This Office
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-[#64748B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00A7CE] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00335B] hover:text-[#00A7CE] transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#00A7CE]" />
            </Link>
          </motion.div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#00335B] text-white rounded-[2rem] p-8 shadow-md"
          >
            <h3 className="text-xl font-display font-bold mb-3">Book a Consultation</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Our Islamabad partners are available for in-person or virtual consultations. Reach out to schedule a meeting.
            </p>
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-white py-3 text-center text-sm font-semibold text-[#00335B] hover:bg-[#F8FAFC] transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm"
          >
            <h3 className="text-lg font-display font-bold text-[#00335B] mb-4">Other Offices</h3>
            <div className="space-y-4">
              {[
                { city: "Peshawar", tag: "Head Office", href: "/locations/peshawar" },
                { city: "Kabul", tag: "International Office", href: "/locations/kabul" },
              ].map((loc) => (
                <Link
                  key={loc.city}
                  href={loc.href}
                  className="group flex items-center justify-between p-4 rounded-2xl border border-black/5 hover:border-[#00335B] hover:bg-[#F8FAFC] transition-all duration-200"
                >
                  <div>
                    <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase">
                      {loc.tag}
                    </p>
                    <p className="text-base font-display font-bold text-[#00335B] mt-0.5">
                      {loc.city}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#64748B] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
