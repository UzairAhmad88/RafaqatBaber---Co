import type { Metadata } from "next";
import InsightsClient from "@/components/insights/InsightsClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read the latest financial insights, tax updates, accounting guidance, and regulatory advisories from Rafaqat Babar & Co. Chartered Accountants.",
};

export default function InsightsPage() {
  return (
    <div className="bg-[#F7F6F1] min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-black/5 bg-[#123C32] text-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A8BDAF] mb-4">
            Insights &amp; Perspectives
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Financial Perspective.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            Expert commentary, tax updates, regulatory alerts, and accounting guidance from our team of chartered professionals.
          </p>
        </div>
      </section>

      {/* Interactive Client Section */}
      <InsightsClient />
    </div>
  );
}
