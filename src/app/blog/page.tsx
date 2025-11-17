import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Interior Design Blog",
  description:
    "Read expert advice from Abren Interiors covering minimalist design, sustainable materials, color psychology, and more.",
  openGraph: {
    title: "Interior Design Blog",
    description:
      "Read expert advice from Abren Interiors covering minimalist design, sustainable materials, color psychology, and more.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = [
    {
      id: "incorporating-Abrens",
      title: "Incorporating Abrens in Minimalist Design",
      date: "November 2025",
      excerpt:
        "Explore how subtle Abrens add depth without overwhelming spaces in minimalist interiors.",
      category: "Design Tips",
    },
    {
      id: "kitchen-Abrens",
      title: "5 Ways to Use Abrens in Your Kitchen",
      date: "October 2025",
      excerpt:
        "From backsplashes to flooring, discover creative ways to bring Abrens into your kitchen design.",
      category: "Kitchen Design",
    },
    {
      id: "color-psychology",
      title: "The Psychology of Color in Interior Spaces",
      date: "September 2025",
      excerpt:
        "Understanding how colors affect mood and atmosphere in your home or office.",
      category: "Color Theory",
    },
    {
      id: "sustainable-materials",
      title: "Sustainable Materials for Modern Interiors",
      date: "August 2025",
      excerpt:
        "Eco-friendly choices that don&apos;t compromise on style or quality.",
      category: "Sustainability",
    },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${BRAND_NAME} Design Insights`,
    url: `${SITE_URL}/blog`,
    description:
      "Interior design tips, renovation ideas, and project inspiration from Abren Interiors and Construction.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: BRAND_NAME,
      },
      url: `${SITE_URL}/blog/${post.id}`,
      description: post.excerpt,
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogSchema, breadcrumbSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Design Insights
              </h1>
              <p className="text-lg text-muted-foreground">
                Tips, trends, and inspiration from Abren Interiors and
                Construction
              </p>
            </div>
            <div className="space-y-6">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.id}`}>
                  <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Card>
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

