import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import NextTopLoader from "nextjs-toploader";
import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rafaqatbabar.com"),
  title: {
    default: "Rafaqat Babar & Co. | Chartered Accountants",
    template: "%s | Rafaqat Babar & Co."
  },
  description:
    "Rafaqat Babar & Co. is a premier ICAP-registered Chartered Accountancy firm established in 1986, offering audit, taxation, advisory, and accounting services from offices in Peshawar, Islamabad, and Kabul.",
  keywords: [
    "chartered accountants Pakistan",
    "audit firm Peshawar",
    "tax advisory Pakistan",
    "ICAP registered firm",
    "Rafaqat Babar",
    "accounting firm Islamabad",
    "financial advisory Pakistan",
    "corporate tax planning",
    "corporate campaign advisory"
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Rafaqat Babar & Co.",
    title: "Rafaqat Babar & Co. | Chartered Accountants",
    description:
      "Trusted audit, taxation, advisory and accounting services. ICAP-registered. Serving Pakistan and the region since 1986.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://rafaqatbabar.com/#organization",
      "name": "Rafaqat Babar & Co.",
      "alternateName": "Rafaqat Babar and Co. Chartered Accountants",
      "url": "https://rafaqatbabar.com",
      "logo": "https://rafaqatbabar.com/icons/logo.png",
      "foundingDate": "1986",
      "description": "ICAP-registered Chartered Accountancy firm providing audit, taxation, advisory and accounting services.",
      "telephone": "+92-91-5703151",
      "email": "info@rafaqatbabar.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Aman Center, Near Custom House, Main University Road",
        "addressLocality": "Peshawar",
        "addressRegion": "KPK",
        "addressCountry": "PK"
      },
      "areaServed": ["PK", "AF"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audit & Assurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Taxation & Compliance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Advisory Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounting & Business Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Campaign" } }
        ]
      },
      "sameAs": ["https://linkedin.com"]
    },
    {
      "@type": "LocalBusiness",
      "name": "Rafaqat Babar & Co. — Peshawar",
      "telephone": "+92-91-5703151",
      "email": "info@rafaqatbabar.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Aman Center, Near Custom House, Main University Road",
        "addressLocality": "Peshawar",
        "addressRegion": "KPK",
        "addressCountry": "PK"
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:30" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
      ]
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextTopLoader color="#C5A059" height={3} showSpinner={false} />
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
