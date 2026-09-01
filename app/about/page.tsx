"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Shield, Award, Compass, Users, HeartHandshake, RefreshCw, Building2, Factory, Heart, Laptop, Landmark } from "lucide-react";

const milestones = [
  { year: "1986", title: "Practice Established", desc: "Rafaqat Babar & Co. obtained its audit practice license and commenced operations in Peshawar." },
  { year: "1998", title: "Capital Expansion", desc: "Opened our Islamabad office in Blue Area to cater to public sector clients and corporate hubs." },
  { year: "2010", title: "Advisory Practice Launch", desc: "Formally set up the Management Advisory division to handle corporate restructurings and strategic planning." },
  { year: "2018", title: "Cross-Border Office", desc: "Inaugurated our Kabul office to support international entities and development sector organizations." },
  { year: "2026", title: "Strategic Re-positioning", desc: "Positioned the firm as a premium financial advisory partner combining technology with classic auditing precision." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Professional responsibility and transparent practices in every engagement." },
  { icon: Award, title: "Excellence", desc: "Commitment to the highest standards of financial reporting and accuracy." },
  { icon: HeartHandshake, title: "Professionalism", desc: "Expert conduct and absolute compliance with international standard frameworks." },
  { icon: Compass, title: "Accountability", desc: "Taking complete ownership of our advice and supporting client outcomes." },
  { icon: Users, title: "Client Focus", desc: "Aligning our services to the unique operational realities of your business." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "Updating our methods constantly to adapt to evolving global standards." },
];

const leadership = [
  { name: "Rafaqat Babar", title: "Founding Partner", img: "/images/partner1.jpg" },
  { name: "Farhan Babar", title: "Tax Partner", img: "/images/partner2.jpg" },
  { name: "Ayesha Rahman", title: "Head of Advisory", img: "/images/partner3.jpg" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#0E2238] text-white">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8EA4BA] mb-4"
          >
            About Rafaqat Babar & Co.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Experience That Builds Confidence.
          </motion.h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-site py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2238] tracking-tight">
            A Legacy of Financial Integrity
          </h2>
          <div className="space-y-6 text-[#64748B] text-base sm:text-lg leading-relaxed">
            <p>
              Founded in 1986, Rafaqat Babar & Co. is a premier Chartered Accountancy firm registered with the Institute of Chartered Accountants of Pakistan (ICAP). Over the past four decades, we have evolved from a local auditing practice into a comprehensive financial services and corporate advisory firm.
            </p>
            <p>
              Our firm is built upon a simple foundation: helping business owners, corporate entities, and entrepreneurs make confident decisions backed by precise, compliant numbers. We combine institutional knowledge with modern consulting practices to service regional and international clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-[#0E2238] tracking-tight mb-16">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-[#8EA4BA]/30 ml-4 md:ml-6 space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0E2238] bg-[#F8FAFC]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C5A059]" />
                </span>
                <span className="text-lg font-bold text-[#C5A059] block">{m.year}</span>
                <h3 className="text-xl font-bold text-[#0E2238] mt-1">{m.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-site py-20 grid gap-12 md:grid-cols-2">
        <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-sm">
          <h3 className="text-2xl font-bold text-[#0E2238] mb-4">Our Mission</h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
            To empower organizations and decision-makers by delivering rigorous auditing compliance, proactive tax strategy, and insightful management advisory services. We resolve complexity, ensuring our clients operate with maximum confidence and transparency.
          </p>
        </div>
        <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-sm">
          <h3 className="text-2xl font-bold text-[#0E2238] mb-4">Our Vision</h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
            To be recognized as the regional benchmark for accounting precision and advisory excellence. We seek to foster sustained, healthy corporate growth across Pakistan and cross-border regions, serving as the ultimate trusted partner in professional finance.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-[#0E2238] tracking-tight mb-16 text-center">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#0E2238]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E2238]">{v.title}</h3>
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-[#0E2238] tracking-tight mb-4 text-center">
            Sectors We Serve
          </h2>
          <p className="text-sm text-[#64748B] text-center max-w-xl mx-auto mb-16 leading-relaxed">
            Our firm delivers auditing compliance, strategic tax solutions, and advisory services across key regional industries.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "Public Sector & Govt", desc: "Compliance audits & regulatory policy consulting.", icon: Building2 },
              { name: "Manufacturing & Retail", desc: "Inventory audits, cost accounting & sales tax filings.", icon: Factory },
              { name: "NGOs & Development", desc: "Donor audits, grant assurance, and tax-exempt compliance.", icon: Heart },
              { name: "Technology & Scaleups", desc: "Cross-border compliance, R&D tax credits & financial modeling.", icon: Laptop },
              { name: "Financial Institutions", desc: "Statutory audits, internal control reviews & corporate risk.", icon: Landmark }
            ].map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div key={sector.name} className="bg-white border border-black/5 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#0E2238] mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E2238] leading-tight">{sector.name}</h3>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">{sector.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-site py-20">
        <h2 className="text-3xl font-bold text-[#0E2238] tracking-tight mb-16">
          Firm Leadership
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {leadership.map((lead) => (
            <div key={lead.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/5 bg-[#8EA4BA]/10">
                <Image
                  src={lead.img}
                  alt={lead.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-[#0E2238]">{lead.name}</h3>
                <p className="text-sm font-semibold text-[#C5A059] mt-1">{lead.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
