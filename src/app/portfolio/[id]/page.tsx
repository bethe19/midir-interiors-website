import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

const projects: Record<string, any> = {
  "yada": {
    id: "yada",
    images: [
      "/yada/yada-01.jpg",
      "/yada/yada-02.jpg",
      "/yada/yada-03.jpg",
      "/yada/yada-04.jpg",
      "/yada/yada-05.jpg",
      "/yada/yada-06.jpg",
    ],
    title: "Yada Human Hair Shop",
    description:
      "A Creative and stylish human hair shop with a unique design that reflects the brand's values and personality.",
    location: "Addis Ababa",
    category: "Commercial",
    year: "2024",
    size: "20 sq meter",
    duration: "3 weeks",
    client: "Private Client",
    challenge:
      "Transform a traditional space into a modern, functional home that balances aesthetic appeal with practical living needs.",
    solution:
      "We incorporated contemporary design elements with traditional Ethiopian touches, creating open-plan living spaces with natural light flow and modern finishes.",
    results:
      "A stunning transformation that combines modern luxury with cultural authenticity, creating a warm and inviting family home.",
    features: [
      "Open-plan living and dining areas",
      "Natural stone and wood accents",
      "Floor-to-ceiling windows",
      "Custom-built furniture and cabinetry",
    ],
  },
  "maraki": {
    id: "maraki",
    images: [
      "/maraki/maraki-01.jpg",
      "/maraki/maraki-02.jpg",
      "/maraki/maraki-03.jpg",
      "/maraki/maraki-04.jpg",
    ],
    title: "Maraki Cosmotics Shop",
    description:
      "A modern and stylish cosmetics shop with a unique design that reflects the brand's values and personality.",
    location: "Addis Ababa",
    category: "Commercial",
    year: "2024",
    size: "20 sq meter",
    duration: "3 weeks",
    client: "Private Client",
    challenge:
      "Design a luxurious yet welcoming residence that maximizes space efficiency while maintaining an elegant aesthetic.",
    solution:
      "Strategic use of neutral tones, premium materials, and smart space planning created flowing, sophisticated interiors with distinct zones for living, dining, and relaxation.",
    results:
      "A refined living space that perfectly balances luxury and comfort, becoming a showcase of contemporary Ethiopian residential design.",
    features: [
      "Premium flooring and finishes",
      "Integrated lighting design",
      "Custom millwork and built-ins",
      "High-end fixtures and fittings",
    ],
  },
  "lina": {
    id: "lina",
    images: [
      "/lina/lina 1.png",
      "/lina/lina 2.png",
      "/lina/lina 3.png",
      "/lina/lina 4.png",
      "/lina/lina 5.png",
    ],
    title: "Lina Shop",
    description:
      "Contemporary design met with luxurious comfort and style, creating an inviting atmosphere.",
    location: "Addis Ababa",
    category: "Commercial",
    year: "2024",
    size: "30 sq meter",
    duration: "1 month",
    client: "Private Client",
    challenge:
      "Create modern, efficient apartment units that appeal to young professionals while maximizing ROI for the developer.",
    solution:
      "Efficient layouts with premium finishes, smart storage solutions, and contemporary design elements that maximize perceived space and natural light.",
    results:
      "A highly successful development with 95% pre-sale rate, demonstrating strong market demand for quality urban living spaces.",
    features: [
      "Optimized unit layouts",
      "Modern kitchen and bathroom designs",
      "Balconies with city views",
      "Energy-efficient systems",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects[params.id];

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.description,
      url: `${SITE_URL}/portfolio/${project.id}`,
      type: "article",
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects[params.id];

  if (!project) {
    notFound();
  }

  const canonicalPath = `/portfolio/${project.id}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.title,
    description: project.description,
    category: project.category,
    locationCreated: project.location,
    dateCreated: project.year,
    url: `${SITE_URL}${canonicalPath}`,
    creator: BRAND_NAME,
    audience: {
      "@type": "Audience",
      audienceType: project.category,
    },
    material: project.features,
    image: `${SITE_URL}/og-img.png`,
    workPerformed: project.solution,
    result: project.results,
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
        name: "Portfolio",
        item: `${SITE_URL}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}${canonicalPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectSchema, breadcrumbSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio">
              <Button
                variant="ghost"
                className="mb-8 -ml-4 hover:bg-foreground/5"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>

            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Left Column - Project Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Year</div>
                        <div className="font-semibold text-foreground">
                          {project.year}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Area</div>
                        <div className="font-semibold text-foreground">
                          {project.size}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Project Details Card */}
                  <div className="bg-card rounded-2xl p-6 border shadow-sm">
                    <h3 className="font-semibold text-foreground mb-4">
                      Project Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image Carousel */}
                <div className="lg:order-first">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {project.images.map((image: any, index: number) => (
                        <CarouselItem key={index}>
                          <div className="rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                              src={image}
                              alt={`${project.title} - View ${index + 1}`}
                              width={1200}
                              height={800}
                              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-6">
                      <CarouselPrevious className="relative static translate-y-0" />
                      <CarouselNext className="relative static translate-y-0" />
                    </div>
                  </Carousel>
                </div>
              </div>

              {/* Project Story */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Our Solution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 md:p-12 border border-border mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Results
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.results}
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let&apos;s collaborate to create something extraordinary for your
                  next project
                </p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

