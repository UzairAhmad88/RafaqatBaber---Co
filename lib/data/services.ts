import type { ServiceCategory } from "@/types";
import {
  ShieldCheck,
  Calculator,
  TrendingUp,
  BookOpen,
  Building2,
} from "lucide-react";

/**
 * Centralized service data used by the services page,
 * home preview, footer, and navigation.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    title: "Audit & Assurance",
    slug: "audit-assurance",
    href: "/services/audit-assurance",
    description:
      "Robust auditing and verification processes to deliver trust and satisfy compliance requirements.",
    subservices: [
      "Financial statement audit",
      "Assurance engagements",
      "Financial reporting compliance",
      "Internal controls auditing",
      "Review engagements",
    ],
  },
  {
    title: "Taxation & Compliance",
    slug: "taxation-compliance",
    href: "/services/taxation-compliance",
    description:
      "Proactive strategic tax planning and comprehensive compliance filings to navigate local laws.",
    subservices: [
      "Personal income tax preparation",
      "Corporate income tax management",
      "Capital gains tax strategy",
      "Excise tax advisory",
      "Regulatory compliance & filings",
      "Ultimate Beneficial Ownership (UBO) declaration",
      "Economic Substance Regulations (ESR) compliance",
    ],
  },
  {
    title: "Advisory",
    slug: "advisory",
    href: "/services/advisory",
    description:
      "Management consulting and tactical financial analysis to shape successful corporate choices.",
    subservices: [
      "Business advisory & growth plans",
      "Financial advisory & capital consulting",
      "Strategic corporate planning",
      "Financial analysis & modeling",
      "Risk assessment & mitigation",
      "Feasibility studies & project reports",
      "Due diligence reviews",
    ],
  },
  {
    title: "Accounting & Business Support",
    slug: "accounting-business-support",
    href: "/services/accounting-business-support",
    description:
      "Day-to-day back office financial management, bookkeeping, and payroll operational support.",
    subservices: [
      "General ledger accounting",
      "Day-to-day bookkeeping support",
      "Financial reporting preparation",
      "Accounts outsourcing (AP/AR)",
      "Bank & account reconciliation",
      "Payroll & business support",
    ],
  },
  {
    title: "Corporate Compliance",
    slug: "corporate-compliance",
    href: "/services/corporate-compliance",
    description:
      "Comprehensive corporate compliance, SECP statutory filings, board secretarial services, and governance advisory to ensure full regulatory adherence.",
    subservices: [
      "Company incorporation & registration",
      "SECP statutory filings & compliance",
      "Corporate governance advisory",
      "Board & shareholder secretarial support",
      "Regulatory licensing & compliance alignment",
      "Corporate restructuring & capital alteration",
    ],
  },
];

/**
 * Icon mapping for service cards.
 * Components import this alongside serviceCategories.
 */
export const serviceIcons = {
  "audit-assurance": ShieldCheck,
  "taxation-compliance": Calculator,
  advisory: TrendingUp,
  "accounting-business-support": BookOpen,
  "corporate-compliance": Building2,
} as const;
