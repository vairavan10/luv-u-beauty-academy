/**
 * Single source of truth for the site's public origin.
 *
 * The domain appears in canonical tags, the sitemap, robots.txt, Open Graph
 * URLs and the LocalBusiness structured data. It used to be hardcoded in 14
 * places, which meant a domain change was an 11-file edit — and a canonical
 * pointing at a domain that does not resolve tells Google the real version of
 * every page lives at a dead URL.
 *
 * Set NEXT_PUBLIC_SITE_URL in the host's environment to the live origin, with
 * no trailing slash:
 *
 *   NEXT_PUBLIC_SITE_URL=https://luvubeautyacademy.com
 *
 * It is read at build time (NEXT_PUBLIC_* values are inlined), so changing it
 * requires a rebuild, not just a restart. The fallback keeps local development
 * and any un-configured build working.
 */

const FALLBACK = "https://luvubeautyacademy.com";

/** The site origin, guaranteed to have no trailing slash. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || FALLBACK).replace(
  /\/+$/,
  ""
);

/**
 * Build an absolute URL for a path.
 * Accepts "/about" or "about" and never produces a double slash.
 */
export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}/${path.replace(/^\/+/, "")}`;
}
