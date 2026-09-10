import type { Office } from "@/types";

/**
 * Centralized office / location data.
 *
 * IMPORTANT: All addresses, phone numbers, and emails must be
 * approved by Rafaqat Babar & Co. before publication.
 */
export const offices: Office[] = [
  {
    slug: "peshawar",
    name: "Peshawar (Head Office)",
    city: "Peshawar",
    tag: "Head Office",
    address:
      "First Floor, Aman Center, Near Custom House, Main University Road, Peshawar, KPK",
    phone: "+92 91 5703151",
    email: "peshawar@rafaqatbabar.com",
    mapUrl: "",
    hours: [
      { days: "Monday – Friday", time: "9:00 AM – 5:30 PM" },
      { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    ],
  },
  {
    slug: "islamabad",
    name: "Islamabad Office",
    city: "Islamabad",
    tag: "Capital Office",
    address: "House # 24-A, Street # 38, Sector F-8/1, Islamabad, Pakistan",
    phone: "+92 51 2856605",
    email: "islamabad@rafaqatbabar.com",
    mapUrl: "",
    hours: [
      { days: "Monday – Friday", time: "9:00 AM – 5:30 PM" },
      { days: "Saturday", time: "By appointment only" },
    ],
  },
  {
    slug: "kabul",
    name: "Kabul Office",
    city: "Kabul",
    tag: "International Office",
    address:
      "House # 02, Sherpur Masjid Street, District 10, Shahr-e Naw, Kabul, Afghanistan",
    phone: "+93 700 081878",
    email: "kabul@rafaqatbabar.com",
    mapUrl: "",
    hours: [
      { days: "Saturday – Wednesday", time: "9:00 AM – 5:00 PM" },
      { days: "Thursday", time: "9:00 AM – 1:00 PM" },
    ],
  },
];

/** Get a single office by slug */
export function getOfficeBySlug(slug: string) {
  return offices.find((o) => o.slug === slug);
}
