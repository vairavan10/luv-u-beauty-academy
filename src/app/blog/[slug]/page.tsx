import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Tag, ChevronRight, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Luv U Beauty Academy Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `https://luvubeautyacademy.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.title }],
      type: "article",
    },
  };
}

// Blog post content generator
function getBlogContent(slug: string): string {
  const contentMap: Record<string, string> = {
    "best-bridal-makeup-trends-2024": `
South Indian weddings are a celebration of colour, culture, and timeless beauty. In 2024, bridal makeup trends in Tamil Nadu — especially in cities like Tanjore and Thanjavur — are blending tradition with modern elegance beautifully.

## 1. The Dewy Glow Skin Base

Gone are the days of heavy, cakey foundations. Today's brides want skin that glows from within. The trend is towards lightweight, buildable coverage that enhances natural skin texture rather than masking it. Skincare prep has become just as important as makeup application.

**Key Products:** Hydrating primers, skin tints, luminous setting sprays.

## 2. Bold, Defined Eyes

Eyes are the statement piece in 2024. Whether it's a dramatic cut crease in gold and brown tones, or a classic kajal-rimmed look with long lashes, eyes are commanding attention. Smoky eyes in copper, burgundy, and bronze tones are particularly popular for South Indian brides.

## 3. South Indian Traditional Looks

The classic South Indian bridal look remains eternally beautiful. Jasmine flowers, Kundan jewellery, silk sarees — and the makeup to match. Gold eyeshadow, red lips, and prominent bindi are timeless choices that never go out of style.

## 4. Airbrush Makeup for Photography

With every bride wanting to look stunning in wedding photographs, airbrush makeup has become a must-know skill. It creates a flawless, natural finish that photographs beautifully without looking overdone.

## Learn Bridal Makeup at Luv U Beauty Academy

Want to master these trends professionally? Our **Bridal Makeup Course** in Tanjore covers all traditional and modern bridal techniques, including airbrush makeup, with hands-on practice on real clients.
    `,
    "beauty-career-opportunities-india": `
The beauty industry in India is experiencing unprecedented growth. With a market size expected to reach ₹1,80,000 crore by 2025, there has never been a better time to build a career in beauty.

## Top Career Paths After a Beautician Course

### 1. Salon Professional
Working in established salons offers stable income, career growth, and the opportunity to build a loyal clientele. Starting salaries range from ₹15,000–₹25,000, with experienced professionals earning ₹40,000+ monthly.

### 2. Bridal Makeup Artist
Bridal makeup is one of the most lucrative niches in Indian beauty. A single bridal assignment pays ₹5,000–₹25,000, and during wedding season, artists can complete 8–10 bookings per month.

### 3. Freelance Beautician
Freelancing offers complete freedom and flexibility. Home visits, event makeup, corporate clients — the options are endless. Top freelancers in Tamil Nadu earn ₹40,000–₹80,000+ per month.

### 4. Beauty Educator
Experienced professionals can become trainers themselves, teaching the next generation of beauticians. This is one of the most respected and well-paying roles in the industry.

### 5. International Beauty Industry
Indian beauticians are in high demand in Gulf countries, Singapore, and Malaysia. Certified professionals with strong portfolio can earn ₹50,000–₹2,00,000 per month internationally.

## Start Your Career at Luv U Beauty Academy

Ready to enter this booming industry? Enroll in our professional beautician courses at Luv U Beauty Academy in Tanjore and get the skills, certification, and placement support you need.
    `,
  };

  return contentMap[slug] || `
This comprehensive guide covers everything you need to know about this important topic in the beauty industry. Our expert trainers at Luv U Beauty Academy have compiled years of experience and knowledge to bring you actionable insights.

## Introduction

The beauty industry is constantly evolving. Staying updated with the latest techniques, trends, and knowledge is essential for any professional beautician. This guide will give you a solid foundation.

## Key Insights

Our expert trainers share their top insights and practical tips that you can apply immediately in your beauty career.

## Practical Tips

Apply these practical techniques learned from years of experience working with clients across Tanjore and Tamil Nadu.

## Conclusion

The beauty industry rewards those who continuously learn and improve their skills. Start your professional beauty education journey at Luv U Beauty Academy in Tanjore today.

*Want to learn these techniques professionally? [Enroll at Luv U Beauty Academy](/courses) for hands-on training with expert guidance.*
  `;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const content = getBlogContent(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Organization", name: "Luv U Beauty Academy" },
    publisher: {
      "@type": "Organization",
      name: "Luv U Beauty Academy",
      logo: { "@type": "ImageObject", url: "https://luvubeautyacademy.com/logo.jpg" },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://luvubeautyacademy.com/blog/${slug}` },
  };

  return (
    <main className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="py-12 border-b border-gray-100">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-body text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-rose-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-rose-gold transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-rose-gold truncate">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blush text-rose-gold text-xs font-body font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 font-body text-xs text-gray-400">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="font-body text-xs text-gray-400">
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>

          <h1 className="font-display font-bold text-charcoal mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="font-body text-gray-500 text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-200 font-body text-xs text-gray-500">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Article Body */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none font-body text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {content.split("\n\n").map((para, i) => {
                  if (para.startsWith("## ")) {
                    return (
                      <h2 key={i} className="font-display font-bold text-charcoal text-2xl mt-8 mb-4">
                        {para.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (para.startsWith("### ")) {
                    return (
                      <h3 key={i} className="font-display font-semibold text-charcoal text-xl mt-6 mb-3">
                        {para.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (para.startsWith("**")) {
                    return (
                      <p key={i} className="font-body font-semibold text-charcoal mb-3">
                        {para.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (para.trim() === "") return null;
                  return (
                    <p key={i} className="font-body text-gray-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* CTA Box */}
              <div
                className="mt-10 p-7 rounded-3xl text-center"
                style={{ background: "linear-gradient(135deg, #B76E79, #9B5E68)" }}
              >
                <h3 className="font-display font-bold text-white text-2xl mb-3">
                  Ready to Start Your Beauty Career?
                </h3>
                <p className="font-body text-white/80 mb-5">
                  Join Luv U Beauty Academy in Tanjore and get professional training with placement support.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/919487992728?text=Hi! I read your blog and want to enroll at Luv U Beauty Academy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-rose-gold font-body font-bold text-sm hover:bg-cream transition-colors"
                  >
                    Enroll Now
                  </a>
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/50 text-white font-body font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    View Courses <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* About */}
              <div className="bg-cream rounded-3xl p-6 border border-champagne">
                <h3 className="font-display font-bold text-charcoal text-lg mb-3">
                  About Luv U Beauty Academy
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">
                  Tanjore&apos;s premier beauty training institute with 7+ years of excellence and 2500+ successful graduates.
                </p>
                <a
                  href="https://wa.me/919487992728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full justify-center"
                >
                  Enquire Now
                </a>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="font-display font-bold text-charcoal text-lg mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.slug}`}
                      className="group flex gap-3 p-3 rounded-2xl hover:bg-cream transition-colors"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-charcoal group-hover:text-rose-gold transition-colors line-clamp-2">
                          {related.title}
                        </p>
                        <p className="font-body text-xs text-gray-400 mt-1">{related.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
