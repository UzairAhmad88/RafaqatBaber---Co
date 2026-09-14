"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { teamMembers, TEAM_PLACEHOLDER_IMAGE } from "@/lib/data/team";

export default function TeamPage() {
  const partners = teamMembers.filter((m) => m.category === "partner");
  const formerPartners = teamMembers.filter((m) => m.category === "former-partner");
  const directors = teamMembers.filter((m) => m.category === "director");
  const staffTeam = teamMembers.filter((m) => m.category === "team");

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
            Our Leadership &amp; Professionals
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl"
          >
            People Behind the Expertise.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed"
          >
            Meet the partners and practice directors leading our audit, taxation, corporate advisory, and consulting services.
          </motion.p>
        </div>
      </section>

      {/* Team Content */}
      <div className="container-site py-20 space-y-20">
        {/* PARTNERS */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight">
              Partners
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              The firm&apos;s equity leadership and senior practice partners.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((member, idx) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-black/5 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/5 bg-[#00335B]/5">
                    <Image
                      src={member.image || TEAM_PLACEHOLDER_IMAGE}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-5">
                    <span className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase">
                      {member.role}
                    </span>
                    <h3 className="mt-1.5 text-lg font-display font-bold text-[#00335B] tracking-tight leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {member.email && (
                  <div className="mt-5 pt-4 border-t border-black/5">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-xs text-[#00335B] hover:text-[#00A7CE] transition-colors break-all"
                      title={`Email ${member.name}`}
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0 text-[#00A7CE]" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* DIRECTORS */}
        {directors.length > 0 && (
          <section>
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight">
                Directors
              </h2>
              <p className="mt-2 text-sm text-[#64748B]">
                Practice leaders directing specialized client advisory and taxation engagements.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
              {directors.map((member, idx) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl border border-black/5 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/5 bg-[#00335B]/5">
                      <Image
                        src={member.image || TEAM_PLACEHOLDER_IMAGE}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                      />
                    </div>

                    <div className="mt-5">
                      <span className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase">
                        {member.role}
                      </span>
                      <h3 className="mt-1.5 text-lg font-display font-bold text-[#00335B] tracking-tight leading-snug">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {member.email && (
                    <div className="mt-5 pt-4 border-t border-black/5">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-xs text-[#00335B] hover:text-[#00A7CE] transition-colors break-all"
                        title={`Email ${member.name}`}
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0 text-[#00A7CE]" />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Former Partners (if any) */}
        {formerPartners.length > 0 && (
          <section>
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight">
                Former Partners
              </h2>
              <p className="mt-2 text-sm text-[#64748B]">
                Partners who contributed significantly to the firm&apos;s growth and standing.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {formerPartners.map((member) => (
                <div
                  key={member.slug}
                  className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-display font-bold text-[#00335B]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00A7CE] uppercase mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Staff Team Members (if any) */}
        {staffTeam.length > 0 && (
          <section>
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#00335B] tracking-tight">
                Team
              </h2>
              <p className="mt-2 text-sm text-[#64748B]">
                Our dedicated managers, senior auditors, and accounting professionals.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {staffTeam.map((member) => (
                <div
                  key={member.slug}
                  className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm"
                >
                  <h3 className="text-base font-display font-bold text-[#00335B]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00A7CE] uppercase mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="rounded-3xl bg-[#00335B] p-10 md:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Looking to Join Our Team or Consult an Expert?
          </h2>
          <p className="mt-3 text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            Reach out to our partners for specialized audit, tax advisory, or corporate consulting services across our offices.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-8 py-3.5 text-sm font-semibold text-[#00335B] hover:bg-[#F8FAFC] transition-colors shadow-sm"
            >
              Contact Our Firm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
