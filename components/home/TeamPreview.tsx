"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { teamMembers, TEAM_PLACEHOLDER_IMAGE } from "@/lib/data/team";

export default function TeamPreview() {
  const partners = teamMembers.filter((m) => m.category === "partner");

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] border-b border-black/5">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE]">
              Our Leadership
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#00335B]">
              People Behind the Expertise.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/team"
              className="group flex items-center gap-2 font-semibold text-[#00335B] hover:text-[#00A7CE] transition-colors"
            >
              <span>Meet Our Team</span>
              <span className="transition-transform group-hover:translate-x-1.5 duration-200 text-[#00A7CE]">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((member, idx) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-white rounded-[2rem] border border-black/5 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-black/5 bg-[#00335B]/5 shadow-sm transition-all duration-300">
                  <Image
                    src={member.image || TEAM_PLACEHOLDER_IMAGE}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Info */}
                <div className="mt-5">
                  <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase">
                    {member.role}
                  </p>
                  <h3 className="mt-1.5 text-lg font-display font-bold text-[#00335B] tracking-tight leading-snug">
                    {member.name}
                  </h3>
                </div>
              </div>

              {member.email && (
                <div className="mt-4 pt-3 border-t border-black/5">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#00335B] transition-colors truncate w-full"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#00A7CE]" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
