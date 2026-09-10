"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { offices } from "@/lib/data/offices";

export default function LocationsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#00335B] text-white">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE] mb-4"
          >
            Our Presence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl"
          >
            Three Offices. One Standard.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed"
          >
            Rafaqat Babar &amp; Co. operates from Peshawar, Islamabad, and Kabul — serving clients across Pakistan and the wider region with the same commitment to precision and professional excellence.
          </motion.p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="container-site py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {offices.map((office, idx) => {
            const isHead = office.slug === "peshawar";
            return (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`${
                  isHead ? "bg-[#00335B] text-white" : "bg-white text-[#00335B]"
                } rounded-[2rem] border border-black/5 p-8 md:p-10 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span
                    className={`text-xs font-bold tracking-[0.2em] uppercase ${
                      isHead ? "text-[#00A7CE]" : "text-[#00A7CE]"
                    }`}
                  >
                    {office.tag || office.city}
                  </span>
                  <h2
                    className={`mt-3 text-3xl font-display font-bold tracking-tight ${
                      isHead ? "text-white" : "text-[#00335B]"
                    }`}
                  >
                    {office.city}
                  </h2>
                  <div className="mt-6 space-y-3">
                    <div
                      className={`flex items-start gap-2.5 text-sm ${
                        isHead ? "text-slate-200" : "text-[#64748B]"
                      }`}
                    >
                      <MapPin
                        className={`h-4 w-4 shrink-0 mt-0.5 ${
                          isHead ? "text-[#00A7CE]" : "text-[#00A7CE]"
                        }`}
                      />
                      <span>{office.address}</span>
                    </div>
                    <div
                      className={`flex items-center gap-2.5 text-sm ${
                        isHead ? "text-slate-200" : "text-[#64748B]"
                      }`}
                    >
                      <Phone
                        className={`h-4 w-4 shrink-0 ${
                          isHead ? "text-[#00A7CE]" : "text-[#00A7CE]"
                        }`}
                      />
                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                        className="hover:underline"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div
                      className={`flex items-center gap-2.5 text-sm ${
                        isHead ? "text-slate-200" : "text-[#64748B]"
                      }`}
                    >
                      <Mail
                        className={`h-4 w-4 shrink-0 ${
                          isHead ? "text-[#00A7CE]" : "text-[#00A7CE]"
                        }`}
                      />
                      <a href={`mailto:${office.email}`} className="hover:underline break-all">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Link
                    href={`/locations/${office.slug}`}
                    className={`group flex items-center justify-between w-full rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      isHead
                        ? "bg-white text-[#00335B] hover:bg-[#F8FAFC]"
                        : "bg-[#00335B] text-white hover:bg-[#002240]"
                    }`}
                  >
                    <span>View Office Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-site pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-white border border-black/5 p-8 md:p-12 text-center shadow-sm"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight">
            Can&apos;t visit in person?
          </h2>
          <p className="mt-4 text-[#64748B] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We offer virtual consultations for clients across Pakistan and internationally. Get in touch and we&apos;ll arrange a call at your convenience.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00335B] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#002240] transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
