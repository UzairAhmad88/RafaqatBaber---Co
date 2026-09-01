"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Calculator, TrendingUp, BookOpen } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Audit & Assurance",
    description: "Financial reporting, statutory audits, assurance standards, and control frameworks.",
    href: "/services/audit-assurance",
    icon: ShieldCheck,
  },
  {
    num: "02",
    name: "Taxation & Compliance",
    description: "Personal and corporate tax filing, economic substance compliance, and corporate tax strategy.",
    href: "/services/taxation-compliance",
    icon: Calculator,
  },
  {
    num: "03",
    name: "Advisory",
    description: "Financial feasibility modeling, strategic scaling plans, risk assessment, and corporate transactions.",
    href: "/services/advisory",
    icon: TrendingUp,
  },
  {
    num: "04",
    name: "Accounting & Business Support",
    description: "Day-to-day general ledger maintenance, business outsourcing, reconciling accounts, and payroll.",
    href: "/services/accounting-business-support",
    icon: BookOpen,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-site">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1E3E62]">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E2238]">
              Financial expertise built<br />around your business.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/services"
              className="group flex items-center gap-2 font-semibold text-[#0E2238] hover:text-[#1E3E62] transition-colors"
            >
              <span>View All Services</span>
              <span className="transition-transform group-hover:translate-x-1.5 duration-200">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Services List Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Link
                  href={service.href}
                  className="group relative block rounded-3xl border border-black/10 border-l-4 border-l-transparent bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-l-[#C5A059] hover:border-y-black/5 hover:border-r-black/5 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#0E2238] group-hover:bg-[#0E2238] group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="rounded-full bg-[#F8FAFC] p-3 text-[#0E2238] transition-colors group-hover:bg-[#0E2238] group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <span className="text-[10px] font-bold text-[#C5A059] tracking-[0.2em] uppercase block mb-1">
                      Service {service.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E2238]">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#64748B]">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
