import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MoveToTop from "@/components/ui/MoveToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { localBusinessSchema } from "@/lib/schema";
import Analytics from "@/components/analytics/Analytics";

const siteUrl = "https://luvubeautyacademy.com";

/*
 * Fonts are self-hosted and served from our own origin by next/font. This
 * removes the render-blocking round trip to fonts.googleapis.com (which used
 * to happen twice — once via a CSS @import, once via a <link> here) and
 * eliminates the layout shift that came with it.
 *
 * Both are variable fonts, so there is no weight list to keep in sync.
 * Playfair also loads italic, which the hero and testimonial pull-quotes use.
 *
 * They are exposed as CSS variables rather than classNames because the family
 * is referenced from inline styles all over the app; globals.css maps
 * --font-display / --font-body onto these.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    // og:image tags come from src/app/opengraph-image.tsx (generated at build
    // time). Do not add an `images` array here — it would override the
    // file-convention image and reintroduce the risk of pointing at a file
    // that does not exist.
  },
  twitter: {
    card: "summary_large_image",
    title: "Luv U Beauty Academy | Best Beautician Academy in Tanjore",
    description:
      "Join the best beauty academy in Tanjore. Professional beautician courses with placement assistance.",
    // twitter:image comes from src/app/twitter-image.tsx.
  },
  alternates: {
    canonical: siteUrl,
  },
  // Google Search Console site verification. Set NEXT_PUBLIC_GSC_VERIFICATION
  // to the content value from the "HTML tag" method; omitted entirely when
  // unset so no empty meta tag is emitted.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
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
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
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
      {/* Renders nothing unless NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GTM_ID are set. */}
      <Analytics />
    </html>
  );
}
