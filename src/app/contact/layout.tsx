import { Metadata } from "next";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Interior Designers in Addis Ababa",
  description:
    "Speak with Abren Interiors and Construction about interior design, custom furniture, or renovation projects in Addis Ababa, Ethiopia.",
  openGraph: {
    title: "Contact Interior Designers in Addis Ababa",
    description:
      "Speak with Abren Interiors and Construction about interior design, custom furniture, or renovation projects in Addis Ababa, Ethiopia.",
    url: `${SITE_URL}/contact`,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `${BRAND_NAME} Contact`,
  url: `${SITE_URL}/contact`,
  description:
    "Contact Abren Interiors and Construction to schedule an interior design consultation in Addis Ababa.",
  mainEntity: {
    "@type": "ProfessionalService",
    name: BRAND_NAME,
    telephone: "+251911123456",
    email: "hello@abreninteriors.com",
    areaServed: "Addis Ababa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Africa Avenue, Bole",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactSchema, breadcrumbSchema]),
        }}
      />
      {children}
    </>
  );
}

