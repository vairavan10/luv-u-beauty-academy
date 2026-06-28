import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Beauty Blog | Tips, Trends & Career Advice | Luv U Beauty Academy Tanjore",
  description:
    "Read beauty tips, bridal makeup trends, career guides, and skin care advice from the experts at Luv U Beauty Academy in Tanjore, Tamil Nadu.",
  alternates: { canonical: "https://luvubeautyacademy.com/blog" },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
