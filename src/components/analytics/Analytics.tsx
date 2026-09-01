import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

/**
 * Site analytics.
 *
 * Both tags are opt-in via environment variables and render nothing when
 * unset, so the site never ships a placeholder measurement ID and local
 * development is not counted in the reports.
 *
 *   NEXT_PUBLIC_GA_ID   Google Analytics 4, e.g. "G-XXXXXXXXXX"
 *   NEXT_PUBLIC_GTM_ID  Google Tag Manager, e.g. "GTM-XXXXXXX"
 *
 * Set them in your host's environment (Vercel: Project → Settings →
 * Environment Variables), not in a committed file — .env* is gitignored.
 *
 * If you use Tag Manager, configure GA4 inside GTM rather than setting both
 * here, or you will record every pageview twice.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}
