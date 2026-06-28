import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MoveToTop from "@/components/ui/MoveToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { localBusinessSchema } from "@/lib/schema";

const siteUrl = "https://luvubeautyacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luv U Beauty Academy | Best Beautician Academy in Tanjore | Makeup Courses Thanjavur",
    template: "%s | Luv U Beauty Academy Tanjore",
  },
  description:
    "Luv U Beauty Academy – Premier beautician training institute in Tanjore (Thanjavur), Tamil Nadu. Offering professional beautician courses, bridal makeup training, hair styling, skin care & nail art with placement assistance. Enroll today!",
  keywords: [
    "best beautician academy in Tanjore",
    "beauty parlour academy Thanjavur",
    "makeup academy in Tanjore",
    "beautician course in Tanjore",
    "bridal makeup training Thanjavur",
    "hair styling course Tanjore",
    "beauty academy near me",
    "professional beautician training institute",
    "government approved beautician course",
    "beauty parlour classes Tanjore",
    "bridal makeup certification course",
    "salon training institute Tanjore",
    "beautician training with placement",
    "advanced makeup course Tanjore",
    "Luv U Beauty Academy",
  ],
  authors: [{ name: "Luv U Beauty Academy", url: siteUrl }],
  creator: "Luv U Beauty Academy",
  publisher: "Luv U Beauty Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Luv U Beauty Academy",
    title: "Luv U Beauty Academy | Best Beautician Academy in Tanjore",
    description:
      "Join the best beauty academy in Tanjore. Professional beautician courses, bridal makeup, hair styling & more with placement assistance.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Luv U Beauty Academy – Best Beautician Academy in Tanjore, Thanjavur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luv U Beauty Academy | Best Beautician Academy in Tanjore",
    description:
      "Join the best beauty academy in Tanjore. Professional beautician courses with placement assistance.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Education",
};

export const viewport: Viewport = {
  themeColor: "#E91E8C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <MoveToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
