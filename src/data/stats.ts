// Single source of truth for the headline numbers shown across the site.
//
// These figures appear in the Footer stats band, the About page achievements,
// and the Testimonials page. Keeping them here stops the same claim being
// stated three different ways on three different pages.
//
// Only put figures here that the academy can substantiate if asked — under
// India's ASCI / CCPA advertising rules, unverifiable claims on a commercial
// site are actionable.

export const stats = {
  /** Students trained to date. Confirmed by the academy. */
  studentsTrained: "100+",
  /** Academy founded in Thanjavur in 2018 — see the About page timeline. */
  yearsActive: "8+",
  /**
   * Deliberately "support", not "rate". We assist every graduate with
   * placement; we do not claim every graduate is placed.
   */
  placement: "100%",
  placementLabel: "Placement Support",
  /** Public Google Business rating. */
  googleRating: "4.9",
} as const;
