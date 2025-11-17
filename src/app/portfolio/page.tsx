import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Interior Design Portfolio",
  description:
    "Browse Abren Interiors and Construction portfolio featuring residential and commercial projects completed across Addis Ababa.",
  openGraph: {
    title: "Interior Design Portfolio",
    description:
      "Browse Abren Interiors and Construction portfolio featuring residential and commercial projects completed across Addis Ababa.",
    url: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  const projects = [
    {
      id: "modern-minimalist",
      image: project1,
      title: "Modern Minimalist Residence",
      description:
        "A 2,000 sq ft space redesigned with clean lines, geometric Abrens, and natural light. Completed in 2024.",
      location: "Downtown District",
      category: "Residential",
    },
    {
      id: "contemporary-office",
      image: project2,
      title: "Contemporary Office Design",
      description:
        "Sophisticated corporate workspace blending functionality with warm, inviting aesthetics.",
      location: "Business Park",
      category: "Commercial",
    },
    {
      id: "luxury-bedroom",
      image: project3,
      title: "Luxury Bedroom Suite",
      description:
        "Elegant master bedroom featuring custom furnishings, rich textures, and subtle Abren work.",
      location: "Private Residence",
      category: "Residential",
    },
  ];

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Abren Interiors Portfolio",
    description:
      "Case studies and completed projects from Abren Interiors and Construction.",
    url: `${SITE_URL}/portfolio`,
    about: projects.map((project) => ({
      "@type": "Project",
      name: project.title,
      description: project.description,
      locationCreated: project.location,
      genre: project.category,
      creator: BRAND_NAME,
      url: `${SITE_URL}/portfolio/${project.id}`,
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
        name: "Portfolio",
        item: `${SITE_URL}/portfolio`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([portfolioSchema, breadcrumbSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Our Portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Inspiring designs that showcase our commitment to excellence and
                innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <Link href={`/portfolio/${project.id}`} key={index}>
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
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {project.category}
                        </span>
                        <span className="text-muted-foreground">
                          {project.location}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

