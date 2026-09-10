"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Shield,
  Award,
  Compass,
  Users,
  HeartHandshake,
  RefreshCw,
  Building2,
  Factory,
  Heart,
  Laptop,
  Landmark,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { teamMembers, TEAM_PLACEHOLDER_IMAGE } from "@/lib/data/team";
import { offices } from "@/lib/data/offices";

const milestones = [
  {
    year: "1986",
    title: "Practice Established",
    desc: "Rafaqat Babar & Co. obtained its audit practice license and commenced operations in Peshawar.",
  },
  {
    year: "1998",
    title: "Capital Expansion",
    desc: "Opened our Islamabad office in Sector F-8 to cater to public sector clients and corporate hubs.",
  },
  {
    year: "2010",
    title: "Advisory Practice Launch",
    desc: "Formally set up the Management Advisory division to handle corporate restructurings and strategic planning.",
  },
  {
    year: "2018",
    title: "Cross-Border Office",
    desc: "Inaugurated our Kabul office to support international entities and development sector organizations.",
  },
  {
    year: "2026",
    title: "Strategic Re-positioning",
    desc: "Positioned the firm as a premium financial advisory partner combining technology with classic auditing precision.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Professional responsibility and transparent practices in every engagement.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Commitment to the highest standards of financial reporting and accuracy.",
  },
  {
    icon: HeartHandshake,
    title: "Professionalism",
    desc: "Expert conduct and absolute compliance with international standard frameworks.",
  },
  {
    icon: Compass,
    title: "Accountability",
    desc: "Taking complete ownership of our advice and supporting client outcomes.",
  },
  {
    icon: Users,
    title: "Client Focus",
    desc: "Aligning our services to the unique operational realities of your business.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "Updating our methods constantly to adapt to evolving global standards.",
  },
];

const sectors = [
  {
    name: "Public Sector & Govt",
    desc: "Compliance audits & regulatory policy consulting.",
    icon: Building2,
  },
  {
    name: "Manufacturing & Retail",
    desc: "Inventory audits, cost accounting & sales tax filings.",
    icon: Factory,
  },
  {
    name: "NGOs & Development",
    desc: "Donor audits, grant assurance, and tax-exempt compliance.",
    icon: Heart,
  },
  {
    name: "Technology & Scaleups",
    desc: "Cross-border compliance, R&D tax credits & financial modeling.",
    icon: Laptop,
  },
  {
    name: "Financial Institutions",
    desc: "Statutory audits, internal control reviews & corporate risk.",
    icon: Landmark,
  },
];

export default function AboutPage() {
  const partners = teamMembers.filter((m) => m.category === "partner");

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#00335B] text-white">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE] mb-4"
          >
            About Rafaqat Babar & Co.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl"
          >
            Experience That Builds Confidence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed"
          >
            Established in 1986, we provide comprehensive Chartered Accountancy, taxation, and corporate advisory services across Pakistan and international jurisdictions.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-site py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight">
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
          <h2 className="text-3xl font-display font-bold text-[#00335B] tracking-tight mb-16">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-[#00A7CE]/30 ml-4 md:ml-6 space-y-12">
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
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#00335B] bg-[#F8FAFC]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00A7CE]" />
                </span>
                <span className="text-lg font-bold text-[#00A7CE] block">{m.year}</span>
                <h3 className="text-xl font-bold text-[#00335B] mt-1">{m.title}</h3>
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
          <h3 className="text-2xl font-display font-bold text-[#00335B] mb-4">Our Mission</h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
            To empower organizations and decision-makers by delivering rigorous auditing compliance, proactive tax strategy, and insightful management advisory services. We resolve complexity, ensuring our clients operate with maximum confidence and transparency.
          </p>
        </div>
        <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-[#00335B] mb-4">Our Vision</h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
            To be recognized as the regional benchmark for accounting precision and advisory excellence. We seek to foster sustained, healthy corporate growth across Pakistan and cross-border regions, serving as the ultimate trusted partner in professional finance.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="container-site">
          <h2 className="text-3xl font-display font-bold text-[#00335B] tracking-tight mb-16 text-center">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00335B]">
                    <Icon className="h-6 w-6 text-[#00A7CE]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#00335B]">{v.title}</h3>
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
          <h2 className="text-3xl font-display font-bold text-[#00335B] tracking-tight mb-4 text-center">
            Sectors We Serve
          </h2>
          <p className="text-sm text-[#64748B] text-center max-w-xl mx-auto mb-16 leading-relaxed">
            Our firm delivers auditing compliance, strategic tax solutions, and advisory services across key regional industries.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="bg-white border border-black/5 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00335B]/5 text-[#00335B] mb-5">
                    <Icon className="h-6 w-6 text-[#00A7CE]" />
                  </div>
                  <h3 className="text-base font-bold text-[#00335B] leading-tight">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">{sector.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Preview Section */}
      <section className="container-site py-20 border-t border-black/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00A7CE] mb-2">
              Leadership & Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#00335B] tracking-tight">
              Firm Leadership
            </h2>
          </div>
          <Link
            href="/about/team"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#00335B] hover:text-[#00A7CE] transition-colors"
          >
            <span>View all partners &amp; directors</span>
            <ArrowRight className="h-4 w-4 text-[#00A7CE]" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((lead) => (
            <div
              key={lead.slug}
              className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-[#00335B]/5">
                  <Image
                    src={lead.image || TEAM_PLACEHOLDER_IMAGE}
                    alt={`${lead.name}, ${lead.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5">
                  <span className="text-xs font-bold text-[#00A7CE] uppercase tracking-wider">
                    {lead.role}
                  </span>
                  <h3 className="text-lg font-display font-bold text-[#00335B] mt-1 leading-snug">
                    {lead.name}
                  </h3>
                </div>
              </div>
              {lead.email && (
                <div className="mt-4 pt-4 border-t border-black/5">
                  <a
                    href={`mailto:${lead.email}`}
                    className="inline-flex items-center gap-2 text-xs text-[#00335B] hover:text-[#00A7CE] transition-colors break-all"
                    title={`Email ${lead.name}`}
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#00A7CE]" />
                    <span>{lead.email}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 rounded-full border border-[#00335B]/20 bg-white px-8 py-3.5 text-sm font-semibold text-[#00335B] hover:bg-[#00335B] hover:text-white transition-colors shadow-sm"
          >
            <span>Explore Complete Team &amp; Directors</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Our Locations Section (with #locations anchor) */}
      <section id="locations" className="py-20 bg-white border-y border-black/5 scroll-mt-20">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00A7CE] mb-2">
              Regional & International Presence
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#00335B] tracking-tight">
              Our Locations
            </h2>
            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              Operating across major financial and administrative centers with localized expertise and global standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.slug}
                className="bg-[#F8FAFC] border border-black/5 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-[#00A7CE]/30 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00335B]/10 text-[#00335B]">
                      {office.tag || office.city}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#00335B] mb-4">
                    {office.city}
                  </h3>

                  <div className="space-y-4 text-sm text-[#64748B]">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#00A7CE] shrink-0 mt-0.5" />
                      <span className="leading-snug">{office.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-[#00A7CE] shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                        className="hover:text-[#00335B] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-[#00A7CE] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#00335B] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    {office.hours && office.hours.length > 0 && (
                      <div className="flex items-start gap-3 pt-2 border-t border-black/5">
                        <Clock className="h-4 w-4 text-[#00A7CE] shrink-0 mt-0.5" />
                        <div className="text-xs space-y-1">
                          {office.hours.map((h, i) => (
                            <div key={i}>
                              <span className="font-semibold text-[#00335B]">{h.days}:</span>{" "}
                              {h.time}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5">
                  <Link
                    href={`/locations/${office.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00335B] group-hover:text-[#00A7CE] transition-colors"
                  >
                    <span>View Location Details</span>
                    <ArrowRight className="h-4 w-4 -translate-x-1 group-hover:translate-x-0 transition-transform text-[#00A7CE]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#00335B] text-white">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Ready to Partner with Rafaqat Babar & Co.?
          </h2>
          <p className="mt-4 text-base text-slate-200 leading-relaxed">
            Get in touch with our partners and advisory professionals to discuss your audit, tax, or corporate strategy requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#00335B] hover:bg-[#F8FAFC] transition-colors shadow-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
