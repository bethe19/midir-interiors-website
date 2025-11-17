import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Our Interior Design Studio",
  description:
    "Learn about Abren Interiors and Construction—our mission, design philosophy, and leadership team delivering refined interiors across Addis Ababa.",
  openGraph: {
    title: "About Our Interior Design Studio",
    description:
      "Learn about Abren Interiors and Construction—our mission, design philosophy, and leadership team delivering refined interiors across Addis Ababa.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const stats = [
    { value: "95%", label: "Complete customer satisfaction" },
    { value: "10+", label: "Innovation and creative insight" },
    { value: "$10m", label: "Highly efficient financial strategies" },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "15 years of experience in residential design with a passion for sustainable materials and geometric Abrens.",
      email: "sarah.mitchell@abreninteriors.com",
      linkedin: "https://linkedin.com/in/sarahmitchell",
    },
    {
      name: "James Chen",
      role: "Senior Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Award-winning architect specializing in commercial spaces and innovative structural design solutions.",
      email: "james.chen@abreninteriors.com",
      linkedin: "https://linkedin.com/in/jameschen",
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Stylist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Expert in custom furnishings and Abren integration with a keen eye for color and texture combinations.",
      email: "emily.rodriguez@abreninteriors.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
    },
    {
      name: "Michael Thompson",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Ensures seamless project execution with 12 years of experience managing high-profile interior projects.",
      email: "michael.thompson@abreninteriors.com",
      linkedin: "https://linkedin.com/in/michaelthompson",
    },
  ];

  const expertise = [
    "Measurable proven results",
    "Innovative real solutions",
    "Customized business strategies",
    "Reliable expert guidance",
    "Multi-industry expertise",
    "Support for long-term",
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${BRAND_NAME}`,
    description:
      "Discover Abren Interiors and Construction's award-winning team of designers, architects, and project managers transforming residential and commercial spaces across Ethiopia.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "ProfessionalService",
      name: BRAND_NAME,
      foundingDate: "2015",
      areaServed: "Addis Ababa",
      employee: team.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
      })),
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
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([aboutSchema, breadcrumbSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-muted text-foreground px-4 py-1.5 rounded-full text-sm font-medium border">
                  ABOUT US
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl font-bold text-foreground mb-6">
                    About our firm
                  </h1>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    At our firm, we pride ourselves on delivering tailored
                    solutions that empower businesses to thrive. With years of
                    experience across various industries, our dedicated team is
                    committed to driving growth and operational excellence.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="rounded-full">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full"
                      >
                        View Services
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                      alt="Professional team member"
                      width={600}
                      height={700}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-5xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="bg-muted/30 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=700&fit=crop"
                        alt="Team expertise"
                        width={600}
                        height={700}
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-medium border">
                        ABOUT US
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                      Unlock our expertise to drive success across industries.
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Leveraging our deep industry knowledge and innovative
                      strategies to accelerate your business growth. Our tailored
                      solutions ensure success across diverse sectors by
                      addressing your unique challenges and opportunities.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {expertise.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-muted text-foreground px-4 py-1.5 rounded-full text-sm font-medium border">
                  MILESTONES
                </span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Our journey: key milestones and achievements
              </h2>

              <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 2015, Abren Interiors was born from a love of design
                  and the transformative power of Abrens. Our founder started with
                  a vision to infuse everyday spaces with artistic flair and
                  functionality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we&apos;re a team of dedicated designers, architects, and
                  artisans committed to excellence. We&apos;ve grown from local
                  projects to award-winning designs across the region, always
                  prioritizing sustainability and client satisfaction.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-primary-foreground/90">
                    To create harmonious interiors that enhance lives through
                    innovative Abrens and thoughtful design.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-8 border shadow-sm">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Our Values
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Creativity:</strong> Pushing boundaries
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Sustainability:</strong> Eco-friendly materials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Client-Centric:</strong> Your vision matters
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-muted/30 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-medium border">
                      OUR TEAM
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    Meet the talented team
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Our diverse team of experts brings creativity, precision, and
                    passion to every project
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member, index) => (
                    <div key={index} className="group">
                      <div className="bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300">
                        <div className="relative overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={400}
                            height={400}
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary font-medium mb-3">
                            {member.role}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {member.bio}
                          </p>

                          {/* Contact Information */}
                          <div className="space-y-2 pt-4 border-t border-border/50">
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                            >
                              <Mail className="h-4 w-4" />
                              <span className="truncate group-hover/link:underline">
                                {member.email}
                              </span>
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                            >
                              <Linkedin className="h-4 w-4" />
                              <span className="group-hover/link:underline">
                                LinkedIn Profile
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to transform your space?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let&apos;s create something extraordinary together. Contact us today
                for a free consultation.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

