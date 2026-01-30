export const siteConfig = {
  name: "MIDIR Interior Design & Construction",
  shortName: "MIDIR",
  description:
    "MIDIR Interior Design & Construction delivers modern interior design, custom furniture, and high-quality construction services in Addis Ababa, Ethiopia.",
  url: "https://midirinteriors.et",
  locale: "en_US",
  language: "en",
  keywords: [
    "interior design Ethiopia",
    "Addis Ababa construction company",
    "custom furniture Ethiopia",
    "luxury interior design",
    "MIDIR",
  ],
  contact: {
    email: "Midirinteriorset@gmail.com",
    phone: "+251977389710",
  },
  address: {
    street: "Africa Avenue, Bole",
    city: "Addis Ababa",
    region: "Addis Ababa",
    postalCode: "1000",
    country: "ET",
  },
  coordinates: {
    latitude: 9.0108,
    longitude: 38.7613,
  },
  social: {
    instagram: "https://www.instagram.com/midirinteriorset",
    linkedin: "https://www.linkedin.com/company/midir",
    twitter: "@midir",
    tiktok: "https://www.tiktok.com/@midirinteriors.et",
  },
};

export const SITE_URL = siteConfig.url;
export const BRAND_NAME = siteConfig.name;
export const DEFAULT_IMAGE = `${SITE_URL}/og-img.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-img.png`,
  image: `${SITE_URL}/og-img.png`,
  description: siteConfig.description,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
  ].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND_NAME,
  url: SITE_URL,
  inLanguage: siteConfig.language,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

