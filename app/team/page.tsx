"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mail } from "lucide-react";


function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const team = [
  {
    name: "Rafaqat Babar",
    role: "Founding Partner",
    specialty: "Audit & Assurance Practice",
    bio: "Founding partner with over 40 years of audit practice. Under his leadership, the firm has obtained its audit license in 1986 and built trust across major sectors in Pakistan.",
    img: "/images/partner1.jpg",
    email: "rafaqat.babar@rafaqatbabar.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Farhan Babar",
    role: "Partner",
    specialty: "Taxation & Regulatory Affairs",
    bio: "Specializes in corporate taxation compliance, tax planning, and representation before local appellate forums. Leads compliance filings for multi-sector corporate clients.",
    img: "/images/partner2.jpg",
    email: "farhan.babar@rafaqatbabar.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ayesha Rahman",
    role: "Head of Advisory",
    specialty: "Corporate Strategy & Transactions",
    bio: "Brings extensive international experience in transaction advisory, financial feasibility modeling, and corporate restructuring audits. Leads the management consulting division.",
    img: "/images/partner3.jpg",
    email: "ayesha.rahman@rafaqatbabar.com",
    linkedin: "https://linkedin.com",
  },
];

export default function TeamPage() {
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
            Our Experts
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl"
          >
            People Behind the Expertise.
          </motion.h1>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-site py-20">
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-black/5 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-black/5 bg-[#A8BDAF]/10">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                  />
                </div>

                {/* Details */}
                <div className="mt-6">
                  <span className="text-xs font-bold text-[#B89B5E] tracking-wider uppercase">
                    {member.role}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-[#123C32] tracking-tight">
                    {member.name}
                  </h2>
                  <p className="text-sm font-semibold text-[#2F6F5E] mt-1">
                    {member.specialty}
                  </p>
                  <p className="mt-4 text-sm text-[#68736E] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Contact Icons */}
              <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="rounded-full bg-[#F7F6F1] p-3 text-[#123C32] hover:bg-[#123C32] hover:text-white transition-colors"
                  title={`Email ${member.name}`}
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#F7F6F1] p-3 text-[#123C32] hover:bg-[#123C32] hover:text-white transition-colors"
                  title={`LinkedIn profile`}
                >
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
