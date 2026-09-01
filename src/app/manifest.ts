import type { MetadataRoute } from "next";

/**
 * Web app manifest. Next emits <link rel="manifest"> automatically and this
 * route is statically generated at build time.
 *
 * theme_color is kept in sync with the `themeColor` in layout.tsx's viewport
 * export, and background_color matches the white the icons are drawn on so
 * there is no flash of a different colour on launch.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luv U Beauty Academy — Tanjore",
    // Home-screen labels get truncated past ~12 characters on Android.
    short_name: "Luv U Beauty",
    description:
      "Professional beautician courses in Tanjore (Thanjavur) — bridal makeup, hair styling, skin care and nail art, with placement support.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FFFFFF",
    theme_color: "#E91E8C",
    lang: "en-IN",
    dir: "ltr",
    categories: ["education", "beauty", "lifestyle"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        // Extra padding so the logo survives Android's circle/squircle crop.
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
