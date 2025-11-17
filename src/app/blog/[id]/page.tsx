import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_NAME, SITE_URL } from "@/lib/siteConfig";

const posts: Record<string, any> = {
  "incorporating-Abrens": {
    title: "Incorporating Abrens in Minimalist Design",
    date: "November 2025",
    published: "2025-11-01T00:00:00+03:00",
    updated: "2025-11-05T00:00:00+03:00",
    author: "Sarah Johnson",
    category: "Design Tips",
    image: "/placeholder.svg",
    content: [
      "Minimalist design doesn't have to be stark or boring. By thoughtfully incorporating subtle Abrens, you can add depth, texture, and visual interest to a space while maintaining the clean, uncluttered aesthetic that defines minimalism.",
      "The key is to use Abrens sparingly and strategically. Choose one or two Abren elements in a room - perhaps a textured rug or Abrened throw pillows - and let them serve as focal points against otherwise simple surfaces.",
      "Geometric Abrens work particularly well in minimalist spaces. Simple lines, circles, or triangles in neutral tones can create visual interest without overwhelming the space. Consider Abrens in natural materials like wood grain, stone veining, or woven textiles.",
      "Color palette is crucial when adding Abrens to minimalist design. Stick to a limited color scheme - typically no more than three colors - and ensure your Abrens incorporate these same hues. This creates cohesion and prevents the space from feeling chaotic.",
      "Scale matters too. In a minimalist space, large-scale Abrens can make a bold statement without cluttering the visual field. Think oversized geometric wallpaper on a single accent wall or a large-format Abrened tile in the bathroom.",
      "Remember that negative space is just as important as Abrened elements. The clean, empty areas in your design allow the Abrens to breathe and become appreciated focal points rather than visual noise.",
    ],
  },
  "kitchen-Abrens": {
    title: "5 Ways to Use Abrens in Your Kitchen",
    date: "October 2025",
    published: "2025-10-15T00:00:00+03:00",
    updated: "2025-10-20T00:00:00+03:00",
    author: "Michael Chen",
    category: "Kitchen Design",
    image: "/placeholder.svg",
    content: [
      "The kitchen is the heart of the home, and incorporating Abrens can transform it from functional to fabulous. Here are five creative ways to bring Abren into your kitchen design.",
      "1. Abrened Backsplash: A geometric or Moroccan-inspired tile backsplash can become the showstopper of your kitchen. Whether you go bold with contrasting colors or subtle with tone-on-tone Abrens, the backsplash is the perfect place to make a statement.",
      "2. Flooring Abrens: Abrened floor tiles, especially in classic black and white or colorful encaustic designs, add character and can define different zones in an open-plan kitchen. They're also practical for hiding minor spills and wear.",
      "3. Cabinet Details: Consider Abrened cabinet fronts or decorative glass with geometric or frosted Abrens. This works especially well on upper cabinets or a kitchen island, adding visual interest at eye level.",
      "4. Textiles and Soft Furnishings: Don't underestimate the power of Abrened kitchen towels, seat cushions, and window treatments. These are easy to change seasonally and can introduce Abren without permanent commitment.",
      "5. Wallpaper or Wall Treatments: If you have a dining area in your kitchen, consider a Abrened wallpaper on one wall. Modern, wipeable wallpapers are practical for kitchen environments and can dramatically transform the space.",
    ],
  },
  "color-psychology": {
    title: "The Psychology of Color in Interior Spaces",
    date: "September 2025",
    published: "2025-09-10T00:00:00+03:00",
    updated: "2025-09-12T00:00:00+03:00",
    author: "Emma Rodriguez",
    category: "Color Theory",
    image: "/placeholder.svg",
    content: [
      "Color has a profound psychological impact on how we feel in a space. Understanding color psychology is essential for creating interiors that not only look beautiful but also support the intended function and mood of each room.",
      "Warm colors like red, orange, and yellow are energizing and can make spaces feel more intimate and cozy. Red stimulates appetite and conversation, making it ideal for dining rooms, while yellow promotes happiness and creativity, perfect for kitchens or creative studios.",
      "Cool colors such as blue, green, and purple have a calming effect. Blue reduces stress and can lower heart rate, making it excellent for bedrooms. Green, associated with nature, promotes balance and is versatile enough for almost any room.",
      "Neutral colors - whites, grays, beiges, and browns - provide a backdrop that allows other elements to shine. They create a sense of spaciousness and can make a room feel larger and more open. However, all-neutral spaces can feel cold without proper layering of textures and tones.",
      "The intensity and saturation of color also matters. Bright, saturated colors are stimulating and best used as accents, while muted, desaturated tones are more restful and can be used more liberally throughout a space.",
      "Consider the natural light in a room when choosing colors. North-facing rooms with cooler light benefit from warm colors, while south-facing rooms with abundant warm light can handle cooler tones. The same color will look different in various lighting conditions.",
      "Remember that color trends come and go, but your emotional response to color is personal and timeless. Choose colors that resonate with you and support how you want to feel in each space.",
    ],
  },
  "sustainable-materials": {
    title: "Sustainable Materials for Modern Interiors",
    date: "August 2025",
    published: "2025-08-05T00:00:00+03:00",
    updated: "2025-08-08T00:00:00+03:00",
    author: "David Thompson",
    category: "Sustainability",
    image: "/placeholder.svg",
    content: [
      "Sustainability in interior design isn&apos;t just a trend - it&apos;s a responsibility. Modern sustainable materials prove that eco-consciousness and style can coexist beautifully in today&apos;s interiors.",
      "Reclaimed wood is a fantastic sustainable choice that brings character and history to a space. Whether used for flooring, furniture, or accent walls, reclaimed wood reduces demand for new lumber and often has a unique patina that new wood can&apos;t match.",
      "Bamboo grows incredibly fast - up to 3 feet per day - making it one of the most renewable materials available. It's durable, versatile, and can be used for flooring, furniture, and even textiles. Modern bamboo products have come a long way from the dated designs of the past.",
      "Cork is another rapidly renewable resource harvested from cork oak bark without harming the tree. It's naturally antimicrobial, provides excellent insulation, and works beautifully for flooring and wall coverings. Plus, it has a unique aesthetic that adds warmth to modern spaces.",
      "Recycled glass tiles and countertops are stunning and sustainable. Made from post-consumer glass, these materials divert waste from landfills while creating beautiful, colorful surfaces for kitchens and bathrooms.",
      "Natural linens, organic cotton, and wool are excellent choices for textiles. They&apos;re biodegradable, often produced with fewer chemicals than synthetic alternatives, and have a luxurious quality that synthetic fabrics can&apos;t replicate.",
      "Low-VOC and zero-VOC paints and finishes are essential for healthy indoor air quality. These products release fewer volatile organic compounds, which can cause health issues and environmental damage. Many major paint brands now offer extensive color selections in low-VOC formulations.",
      "When selecting sustainable materials, look for certifications like FSC (Forest Stewardship Council) for wood, GOTS (Global Organic Textile Standard) for fabrics, and Cradle to Cradle for various products. These certifications ensure materials meet rigorous environmental and social standards.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = posts[params.id];

  if (!post) {
    return {
      title: "Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description: post.content[0],
    openGraph: {
      title: post.title,
      description: post.content[0],
      url: `${SITE_URL}/blog/${params.id}`,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id];

  if (!post) {
    notFound();
  }

  const canonicalPath = `/blog/${params.id}`;
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-img.png`,
      },
    },
    description: post.content[0],
    image: `${SITE_URL}${post.image}`,
    mainEntityOfPage: `${SITE_URL}${canonicalPath}`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}${canonicalPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([postSchema, breadcrumbSchema]),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <article className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                  {post.category}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-8 border-t border-border">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

