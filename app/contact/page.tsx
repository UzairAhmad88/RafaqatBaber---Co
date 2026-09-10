import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { offices } from "@/lib/data/offices";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rafaqat Babar & Co. Chartered Accountants. Reach our Peshawar, Islamabad, or Kabul offices for audit, tax, and advisory inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#00335B] text-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00A7CE] mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl">
            Let&apos;s Start a Conversation.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Whether you need audit support, tax planning, strategic advisory, or simply want to understand how we can help your organisation — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container-site py-20 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start">
        {/* Left — Form */}
        <div className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-[#00335B] tracking-tight mb-2">
            Send an Inquiry
          </h2>
          <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
            Fill out the form below and a member of our team will respond within one business day.
          </p>
          <ContactForm />
        </div>

        {/* Right — Contact Info */}
        <div className="space-y-6">
          {/* Office Addresses */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm">
            <h2 className="text-lg font-display font-bold text-[#00335B] tracking-tight mb-6">
              Our Offices
            </h2>
            <div className="space-y-6">
              {offices.map((office, i) => (
                <div key={office.slug} className={i > 0 ? "pt-6 border-t border-black/5" : ""}>
                  <p className="text-xs font-bold text-[#00A7CE] tracking-wider uppercase mb-3">
                    {office.name}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 text-sm text-[#64748B]">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#00A7CE]" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <Phone className="h-4 w-4 shrink-0 text-[#00A7CE]" />
                      <a
                        href={`tel:${office.phone.replace(/[\s-]/g, "")}`}
                        className="hover:text-[#00335B] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <Mail className="h-4 w-4 shrink-0 text-[#00A7CE]" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#00335B] transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white border border-black/5 rounded-[2rem] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="h-5 w-5 text-[#00A7CE]" />
              <h3 className="text-base font-display font-bold text-[#00335B]">
                Business Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm text-[#64748B]">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-medium text-[#00335B]">9:00 AM – 5:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-[#00335B]">9:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-[#64748B]">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
