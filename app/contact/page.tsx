import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rafaqat Babar & Co. Chartered Accountants. Reach our Peshawar, Islamabad, or Kabul offices for audit, tax, and advisory inquiries.",
};

const officeInfo = [
  {
    city: "Peshawar (Head Office)",
    address: "First Floor, Aman Center, Near Custom House, Main University Road, Peshawar, KPK",
    phone: "+92 91 5703151",
    email: "peshawar@rafaqatbabar.com",
  },
  {
    city: "Islamabad",
    address: "House # 24-A, Street # 38, Sector F-8/1, Islamabad",
    phone: "+92 51 2856605",
    email: "islamabad@rafaqatbabar.com",
  },
  {
    city: "Kabul",
    address: "House # 02, Sherpur Masjid Street, District 10, Shahr-e Naw, Kabul",
    phone: "+93 700 081878",
    email: "kabul@rafaqatbabar.com",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">

      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#0E2238] text-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8EA4BA] mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Let&apos;s Start a Conversation.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            Whether you need audit support, tax planning, strategic advisory, or simply want to understand how we can help your organisation — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container-site py-20 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start">

        {/* Left — Form */}
        <div className="bg-white border border-black/5 rounded-[2rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0E2238] tracking-tight mb-2">
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
            <h2 className="text-lg font-bold text-[#0E2238] tracking-tight mb-6">Our Offices</h2>
            <div className="space-y-6">
              {officeInfo.map((office, i) => (
                <div key={office.city} className={i > 0 ? "pt-6 border-t border-black/5" : ""}>
                  <p className="text-xs font-bold text-[#C5A059] tracking-wider uppercase mb-3">
                    {office.city}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 text-sm text-[#64748B]">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#8EA4BA]" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <Phone className="h-4 w-4 shrink-0 text-[#8EA4BA]" />
                      <a href={`tel:${office.phone.replace(/[\s-]/g, "")}`} className="hover:text-[#0E2238] transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <Mail className="h-4 w-4 shrink-0 text-[#8EA4BA]" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#0E2238] transition-colors break-all">
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
              <Clock className="h-5 w-5 text-[#C5A059]" />
              <h3 className="text-base font-bold text-[#0E2238]">Business Hours</h3>
            </div>
            <div className="space-y-2 text-sm text-[#64748B]">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-medium text-[#0F172A]">9:00 AM – 5:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-[#0F172A]">9:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-[#64748B]">Closed</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/92915703151?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#25D366] text-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-base">Chat on WhatsApp</p>
              <p className="text-sm text-white/80 mt-0.5">Quick response during business hours</p>
            </div>
          </a>

        </div>
      </section>
    </div>
  );
}
