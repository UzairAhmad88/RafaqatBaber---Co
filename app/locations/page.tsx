"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const offices = [
  {
    city: "Peshawar",
    tag: "Head Office",
    address: "First Floor, Aman Center, Near Custom House, Main University Road, Peshawar, KPK",
    phone: "+92 91 5703151",
    email: "peshawar@rafaqatbabar.com",
    href: "/locations/peshawar",
    bg: "bg-[#123C32]",
    text: "text-white",
    accent: "text-[#A8BDAF]",
    btn: "bg-white text-[#123C32] hover:bg-[#F7F6F1]",
  },
  {
    city: "Islamabad",
    tag: "Capital Office",
    address: "House # 24-A, Street # 38, Sector F-8/1, Islamabad, Pakistan",
    phone: "+92 51 2856605",
    email: "islamabad@rafaqatbabar.com",
    href: "/locations/islamabad",
    bg: "bg-white",
    text: "text-[#123C32]",
    accent: "text-[#2F6F5E]",
    btn: "bg-[#123C32] text-white hover:bg-[#2F6F5E]",
  },
  {
    city: "Kabul",
    tag: "International Office",
    address: "House # 02, Sherpur Masjid Street, District 10, Shahr-e Naw, Kabul, Afghanistan",
    phone: "+93 700 081878",
    email: "kabul@rafaqatbabar.com",
    href: "/locations/kabul",
    bg: "bg-white",
    text: "text-[#123C32]",
    accent: "text-[#2F6F5E]",
    btn: "bg-[#123C32] text-white hover:bg-[#2F6F5E]",
  },
];

export default function LocationsPage() {
  return (
    <div className="bg-[#F7F6F1] min-h-screen pb-20">

      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#123C32] text-white">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A8BDAF] mb-4"
          >
            Our Presence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Three Offices. One Standard.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed"
          >
            Rafaqat Babar &amp; Co. operates from Peshawar, Islamabad, and Kabul — serving clients across Pakistan and the wider region with the same commitment to precision and professional excellence.
          </motion.p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="container-site py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {offices.map((office, idx) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`${office.bg} rounded-[2rem] border border-black/5 p-8 md:p-10 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <span className={`text-xs font-bold tracking-[0.2em] uppercase ${office.accent}`}>
                  {office.tag}
                </span>
                <h2 className={`mt-3 text-3xl font-bold tracking-tight ${office.text}`}>
                  {office.city}
                </h2>
                <div className="mt-6 space-y-3">
                  <div className={`flex items-start gap-2.5 text-sm ${office.city === "Peshawar" ? "text-white/75" : "text-[#68736E]"}`}>
                    <MapPin className={`h-4 w-4 shrink-0 mt-0.5 ${office.city === "Peshawar" ? "text-[#A8BDAF]" : "text-[#B89B5E]"}`} />
                    <span>{office.address}</span>
                  </div>
                  <div className={`flex items-center gap-2.5 text-sm ${office.city === "Peshawar" ? "text-white/75" : "text-[#68736E]"}`}>
                    <Phone className={`h-4 w-4 shrink-0 ${office.city === "Peshawar" ? "text-[#A8BDAF]" : "text-[#B89B5E]"}`} />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:underline">{office.phone}</a>
                  </div>
                  <div className={`flex items-center gap-2.5 text-sm ${office.city === "Peshawar" ? "text-white/75" : "text-[#68736E]"}`}>
                    <Mail className={`h-4 w-4 shrink-0 ${office.city === "Peshawar" ? "text-[#A8BDAF]" : "text-[#B89B5E]"}`} />
                    <a href={`mailto:${office.email}`} className="hover:underline break-all">{office.email}</a>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href={office.href}
                  className={`group flex items-center justify-between w-full rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${office.btn}`}
                >
                  <span>View Office Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#123C32] tracking-tight">
            Can&apos;t visit in person?
          </h2>
          <p className="mt-4 text-[#68736E] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We offer virtual consultations for clients across Pakistan and internationally. Get in touch and we&apos;ll arrange a call at your convenience.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#123C32] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#2F6F5E] transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
