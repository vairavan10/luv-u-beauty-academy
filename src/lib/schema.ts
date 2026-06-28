// JSON-LD Structured Data for Luv U Beauty Academy

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "Luv U Beauty Academy",
  alternateName: "Luv U Beauty Academy Tanjore",
  description:
    "Premier beauty academy in Tanjore offering professional beautician courses, bridal makeup training, hair styling, skin care, and nail art with placement assistance.",
  url: "https://luvubeautyacademy.com",
  telephone: "+91-9487992728",
  email: "luvubeautyacademy@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.26, Philomina Nagar, Near Don Bosco School, Yagappa Nagar",
    addressLocality: "Thanjavur",
    addressRegion: "Tamil Nadu",
    postalCode: "613006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.7905",
    longitude: "79.1378",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/luvubeautyacademy",
    "https://www.facebook.com/luvubeautyacademy",
    "https://www.youtube.com/@luvubeautyacademy",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beauty Courses",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Professional Beautician Course",
          description: "6-month comprehensive beautician training program",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Bridal Makeup Course",
          description: "3-month bridal makeup specialist training",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
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
});

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
