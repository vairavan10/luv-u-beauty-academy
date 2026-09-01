import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Luv U Beauty Academy | Enquire About Courses in Tanjore",
  description:
    "Contact Luv U Beauty Academy in Tanjore (Thanjavur), Tamil Nadu. Call, WhatsApp, or visit us for course enquiries, admission details, and free demo class booking.",
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  return <ContactClient />;
}
