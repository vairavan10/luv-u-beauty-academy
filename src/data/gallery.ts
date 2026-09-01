// Single source of truth for gallery imagery.
// Used by both the homepage gallery section and the full /gallery page so the
// two can never drift apart. Captions describe what is actually in each photo.

export interface GalleryImage {
  src: string;
  /** Descriptive alt text — must match what the photo genuinely shows. */
  alt: string;
  title: string;
  category: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/image-1.jpeg",
    alt: "Students and trainer practising eyebrow shaping on a model during a live class at Luv U Beauty Academy, Thanjavur",
    title: "Live Practical Class",
    category: "Practical Training",
    description:
      "Students learning eyebrow shaping and threading on a live model, guided step by step by our trainer.",
  },
  {
    src: "/gallery/image-2.jpeg",
    alt: "Close-up of a trainer demonstrating threading technique on a model at Luv U Beauty Academy",
    title: "Hands-On Demonstration",
    category: "Hands-On Session",
    description:
      "Our trainer demonstrating precision threading technique while students observe up close.",
  },
  {
    src: "/gallery/image-3.jpeg",
    alt: "Trainer teaching a seated class using a practice mannequin head at Luv U Beauty Academy",
    title: "Inside The Classroom",
    category: "Classroom",
    description:
      "A small-batch classroom session using practice mannequin heads, so every student gets individual attention.",
  },
  {
    src: "/gallery/image-4.webp",
    alt: "Reception desk and interior of Luv U — The Women World in Thanjavur",
    title: "Our Reception",
    category: "Our Academy",
    description:
      "The reception and front desk at Luv U — The Women World, where our academy is based.",
  },
  {
    src: "/gallery/image-5.webp",
    alt: "Exterior storefront of Luv U The Women World on Yagappa Nagar, Thanjavur",
    title: "Find Us In Thanjavur",
    category: "Our Location",
    description:
      "Our premises on Yagappa Nagar, Thanjavur — walk in any day for a free consultation.",
  },
  {
    src: "/gallery/image-6.jpeg",
    alt: "Graduates receiving their course certificates on certification day at Luv U Beauty Academy",
    title: "Certification Day",
    category: "Certification Day",
    description:
      "Our July batch graduates receiving their course certificates — a new set of qualified beauticians.",
  },
];
