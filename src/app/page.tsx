import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Sofa,
  Sparkles,
  Trophy,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CarouselWithAutoplay,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/CarouselWithAutoplay";
import heroImage from "@/assets/hero-interior.jpg";
// Projects now use public images
import { BRAND_NAME, SITE_URL, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Interior Design & Construction in Addis Ababa",
  description:
    "MIDIR Interior Design & Construction delivers modern interior design, custom furniture, and high-quality construction services in Addis Ababa, Ethiopia.",
  keywords: [
    "interior design Ethiopia",
    "Addis Ababa construction company",
    "custom furniture Ethiopia",
    "MIDIR",
    "luxury interior design",
  ],
  openGraph: {
    title: "Interior Design & Construction in Addis Ababa",
    description:
      "MIDIR Interior Design & Construction delivers modern interior design, custom furniture, and high-quality construction services in Addis Ababa, Ethiopia.",
    url: SITE_URL,
  },
};

export default function HomePage() {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Design",
      description:
        "Tailored homes that perfectly reflect your unique style and personality.",
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description:
        "Functional and stylish offices, retail, and hospitality environments.",
    },
    {
      icon: Sofa,
      title: "Custom Furnishings",
      description:
        "Bespoke pieces featuring intricate patterns and exceptional craftsmanship.",
    },
    {
      icon: Sparkles,
      title: "Design Consultation",
      description:
        "Expert guidance to transform your vision into stunning reality.",
    },
  ];

  const projects = [
    {
      id: "yada",
      image: "/yada/yada-02.jpg",
      title: "Yada Project",
      description: "A harmonious blend of modern aesthetics and functional living spaces.",
    },
    {
      id: "maraki",
      image: "/maraki/maraki-01.jpg",
      title: "Maraki Residence",
      description: "Contemporary design met with luxurious comfort and style.",
    },
    {
      id: "lina",
      image: "/lina/lina 1.png",
      title: "Lina Apartments",
      description: "Innovative architectural solutions for urban living.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior design and construction",
    provider: {
      "@type": "ProfessionalService",
      name: "MIDIR Interior Design & Construction",
    },
    areaServed: {
      "@type": "City",
      name: "Addis Ababa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior design services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    image: `${SITE_URL}/og-img.png`,
    url: SITE_URL,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, serviceSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold border border-primary/20 animate-scale-in flex items-center gap-2">
                    <Trophy className="h-4 w-4" /> Award-Winning Design Studio
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Crafting the ground 
                  <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    you Live on
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  <span className="block mt-3 font-medium text-foreground">
                    MIDIR Interior Design & Construction transforms your vision into
                    reality with exceptional craftsmanship and innovative
                    design.
                  </span>
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group shadow-lg hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/services">
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    asChild
                  >
                    <Link href="/portfolio">View Portfolio</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Done
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">3+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <Image
                    src={heroImage}
                    alt="Luxurious modern interior design featuring warm earth tones and elegant furniture"
                    width={1200}
                    height={600}
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Card */}
                  <div
                    className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/50 z-20 animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Starting Your Project
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          Free Consultation Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to completion, we offer comprehensive interior
                design solutions tailored to your needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview - Swipeable Carousel */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our latest creations where innovation meets timeless
                design.
              </p>
            </div>
            <CarouselWithAutoplay className="w-full max-w-7xl mx-auto">
              <CarouselContent className="-ml-4">
                {projects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Link href={`/portfolio/${project.id}`}>
                      <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden shadow-lg mb-4 group-hover:shadow-2xl transition-all duration-300">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </CarouselWithAutoplay>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link href="/portfolio">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Section
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Trusted Partners
              </h2>
              <p className="text-muted-foreground">
                Working with industry-leading brands to deliver excellence
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll gap-12 items-center">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-32 h-16 bg-card rounded-lg flex items-center justify-center border border-border"
                  >
                    <span className="text-muted-foreground font-semibold">
                      Brand {(i % 6) + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s bring your vision to life with our expert design
              services. Contact us today for a free consultation.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

