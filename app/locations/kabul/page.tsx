"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  "Audit & Assurance",
  "Taxation Advisory",
  "International Business Advisory",
  "Development Sector Accounting",
  "Cross-Border Compliance",
];

export default function KabulOfficePage() {
  return (
    <div className="bg-[#F7F6F1] min-h-screen pb-20">

      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#123C32] text-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#A8BDAF] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Locations
            </Link>
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-[#A8BDAF]">
              International Office · Est. 2018
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Kabul
            </h1>
            <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
              Our Kabul office in Shahr-e Naw supports international entities, development sector organisations, and cross-border businesses operating in Afghanistan.
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
            <h2 className="text-2xl font-bold text-[#123C32] tracking-tight mb-6">Office Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F7F6F1] text-[#B89B5E]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#B89B5E] tracking-wider uppercase mb-1">Address</p>
                  <p className="text-sm text-[#68736E] leading-relaxed">
                    House # 02, Sherpur Masjid Street,<br />
                    District 10, Shahr-e Naw, Kabul, Afghanistan
                  </p>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F7F6F1] text-[#B89B5E]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#B89B5E] tracking-wider uppercase mb-1">Phone</p>
                  <a href="tel:+93700081878" className="text-sm text-[#123C32] font-semibold hover:text-[#2F6F5E] transition-colors">
                    +93 700 081878
                  </a>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F7F6F1] text-[#B89B5E]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#B89B5E] tracking-wider uppercase mb-1">Email</p>
                  <a href="mailto:kabul@rafaqatbabar.com" className="text-sm text-[#123C32] font-semibold hover:text-[#2F6F5E] transition-colors">
                    kabul@rafaqatbabar.com
                  </a>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F7F6F1] text-[#B89B5E]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#B89B5E] tracking-wider uppercase mb-1">Office Hours</p>
                  <p className="text-sm text-[#68736E]">Saturday – Wednesday: 9:00 AM – 5:00 PM</p>
                  <p className="text-sm text-[#68736E]">Thursday: 9:00 AM – 1:00 PM</p>
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
            <h2 className="text-2xl font-bold text-[#123C32] tracking-tight mb-6">Services Available at This Office</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-[#68736E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B89B5E] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#123C32] hover:text-[#2F6F5E] transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#123C32] text-white rounded-[2rem] p-8 shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">International Enquiries</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our Kabul office handles cross-border advisory and international entity support. Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-white py-3 text-center text-sm font-semibold text-[#123C32] hover:bg-[#F7F6F1] transition-colors"
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
            <h3 className="text-lg font-bold text-[#123C32] mb-4">Other Offices</h3>
            <div className="space-y-4">
              {[
                { city: "Peshawar", tag: "Head Office", href: "/locations/peshawar" },
                { city: "Islamabad", tag: "Capital Office", href: "/locations/islamabad" },
              ].map((loc) => (
                <Link
                  key={loc.city}
                  href={loc.href}
                  className="group flex items-center justify-between p-4 rounded-2xl border border-black/5 hover:border-[#123C32] hover:bg-[#F7F6F1] transition-all duration-200"
                >
                  <div>
                    <p className="text-xs font-bold text-[#B89B5E] tracking-wider uppercase">{loc.tag}</p>
                    <p className="text-base font-bold text-[#123C32] mt-0.5">{loc.city}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#68736E] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
}
