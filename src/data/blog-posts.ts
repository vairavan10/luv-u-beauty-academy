export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-bridal-makeup-trends-2024",
    title: "Best Bridal Makeup Trends in 2024 for South Indian Brides",
    excerpt:
      "Discover the most stunning bridal makeup trends for South Indian weddings in 2024. From glowing skin to bold eyes, here's what's trending for brides in Tanjore and Tamil Nadu.",
    content: "",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    category: "Bridal Makeup",
    author: "Luv U Beauty Academy",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["bridal makeup", "trends 2024", "South Indian bridal", "Tanjore"],
  },
  {
    id: "2",
    slug: "beauty-career-opportunities-india",
    title: "Top Beauty Career Opportunities in India After Your Beautician Course",
    excerpt:
      "The beauty industry in India is booming. Here are the top career paths available to you after completing your beautician course in Tanjore — from salon professional to celebrity makeup artist.",
    content: "",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    category: "Career",
    author: "Luv U Beauty Academy",
    date: "2024-02-20",
    readTime: "7 min read",
    tags: ["beauty career", "beautician job", "makeup artist career", "Tanjore"],
  },
];

