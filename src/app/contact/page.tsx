import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Luv U Beauty Academy | Enquire About Courses in Tanjore",
  description:
    "Contact Luv U Beauty Academy in Tanjore (Thanjavur), Tamil Nadu. Call, WhatsApp, or visit us for course enquiries, admission details, and free demo class booking.",
  alternates: { canonical: "https://luvubeautyacademy.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
