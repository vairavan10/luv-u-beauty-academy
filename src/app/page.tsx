import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialSection from "@/components/home/TestimonialSection";
import GallerySection from "@/components/home/GallerySection";
import PlacementSection from "@/components/home/PlacementSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Luv U Beauty Academy | Best Beautician Academy in Tanjore | Makeup & Hair Courses Thanjavur",
  description:
    "Join Luv U Beauty Academy – Tanjore's premier beauty training institute. Professional beautician courses, bridal makeup, hair styling, nail art & skin care with govt. certification and 100% placement support. Enroll today!",
  alternates: {
    canonical: siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CoursesSection />
      <WhyChooseUs />
      <TestimonialSection />
      <GallerySection />
      <PlacementSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
