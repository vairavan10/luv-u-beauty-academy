import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "எங்களைப் பற்றி | Luv U Beauty Academy – Tanjore's #1 Beauty Institute",
  description:
    "Meet Mrs. Ramayee, founder and cosmetologist of Luv U Beauty Academy, Thanjavur. VLCC-certified, international makeup training in Malaysia. Empowering women through beauty since 2016.",
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  return <AboutClient />;
}
