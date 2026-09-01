"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const team = [
  {
    name: "Rafaqat Babar",
    role: "Founding Partner",
    specialty: "Audit & Assurance Practice",
    img: "/images/partner1.jpg",
  },
  {
    name: "Farhan Babar",
    role: "Partner",
    specialty: "Taxation & Regulatory Affairs",
    img: "/images/partner2.jpg",
  },
  {
    name: "Ayesha Rahman",
    role: "Head of Advisory",
    specialty: "Corporate Strategy & Transactions",
    img: "/images/partner3.jpg",
  },
];

export default function TeamPreview() {
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
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1E3E62]">
              Our Leadership
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E2238]">
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
              className="group flex items-center gap-2 font-semibold text-[#0E2238] hover:text-[#1E3E62] transition-colors"
            >
              <span>Meet Our Team</span>
              <span className="transition-transform group-hover:translate-x-1.5 duration-200">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-black/5 bg-[#8EA4BA]/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Professional Text Info */}
              <div className="mt-6">
                <p className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
                  {member.role}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0E2238] tracking-tight group-hover:text-[#1E3E62] transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#64748B]">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
