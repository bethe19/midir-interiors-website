import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig, BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | Interior Design & Construction in Addis Ababa`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  applicationName: siteConfig.shortName,
  appleWebApp: {
    title: siteConfig.shortName,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Interior Design & Construction in Addis Ababa`,
    description: siteConfig.description,
    images: [
      {
        url: `${SITE_URL}/og-img.png`,
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Interior Design & Construction in Addis Ababa`,
    description: siteConfig.description,
    images: [`${SITE_URL}/og-img.png`],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "4KxgAjy-S1ikDUIhDCQuyMJWrq5C8YGSBhy2FihmN0s",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
    },
  },
  other: {
    "geo.region": "ET-AA",
    "geo.placename": "Addis Ababa",
    "geo.position": "9.0108;38.7613",
    ICBM: "9.0108, 38.7613",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

