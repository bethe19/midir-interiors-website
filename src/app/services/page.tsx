import { Metadata } from "next";
import { Check, Home, Building2, Sparkles, Hammer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Interior Design & Construction Services",
  description:
    "Explore MIDIR Interior Design & Construction services: residential and commercial design, bespoke furnishings, and turnkey renovations for Addis Ababa clients.",
  openGraph: {
    title: "Interior Design & Construction Services",
    description:
      "Explore MIDIR Interior Design & Construction services: residential and commercial design, bespoke furnishings, and turnkey renovations for Addis Ababa clients.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      description:
        "Transform your home into a personalized sanctuary. We specialize in creating harmonious living spaces that reflect your unique style and lifestyle needs.",
      features: [
        "Comprehensive space planning",
        "Custom color schemes & pattern integration",
        "Furniture selection & sourcing",
        "Lighting design & installation",
        "Material & finish consultation",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Interior Design",
      description:
        "Elevate your business environment with designs that blend functionality and aesthetics. Perfect for offices, retail spaces, and hospitality venues.",
      features: [
        "Brand identity integration",
        "Ergonomic workspace design",
        "3D renderings & visualizations",
        "Full project management",
        "Sustainable material selection",
      ],
    },
    {
      icon: Sparkles,
      title: "Custom Furnishings",
      description:
        "Discover bespoke furniture and decor pieces crafted exclusively for your space. From custom rugs to unique upholstery with intricate patterns.",
      features: [
        "Bespoke rug design",
        "Custom wallpaper creation",
        "Unique upholstery solutions",
        "Global material sourcing",
        "Artisan craftsmanship",
      ],
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description:
        "Breathe new life into existing spaces with our comprehensive renovation services. We manage full-scale updates with minimal disruption.",
      features: [
        "Kitchen & bathroom remodeling",
        "Whole home transformations",
        "Structural modifications",
        "Project coordination & timeline management",
        "Quality assurance",
      ],
    },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior design and construction services",
    provider: {
      "@type": "ProfessionalService",
      name: BRAND_NAME,
      url: `${SITE_URL}/services`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: services.map((service, index) => ({
        "@type": "OfferCatalog",
        position: index + 1,
        itemListElement: service.features.map((feature) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
            description: service.description,
          },
        })),
        name: service.title,
        description: service.description,
      })),
    },
  };

  const faqs = [
    {
      question: "Do you work with clients outside Addis Ababa?",
      answer:
        "Yes. Our team handles projects across Ethiopia and consults remotely for select international clients, coordinating site visits as needed.",
    },
    {
      question: "Can you collaborate with my architect or contractor?",
      answer:
        "Absolutely. We regularly partner with architects, builders, and procurement teams to ensure a seamless experience from concept to completion.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([servicesSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive interior solutions tailored to bring your vision to
                life with exceptional attention to detail
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ScrollAnimation
                  key={index}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 hover:scale-125">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                          </div>
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <section className="mt-20">
              <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8">
                <div className="text-center mb-10">
                  <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                    FAQs
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                    Answers to common project questions
                  </h2>
                  <p className="text-muted-foreground mt-4">
                    Transparent communication is at the core of every engagement.
                  </p>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-${index}`}
                      className="border border-border rounded-2xl px-4"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

