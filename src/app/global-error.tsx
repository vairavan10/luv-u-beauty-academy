"use client"; // Error boundaries must be Client Components

/**
 * Last-resort boundary: catches errors thrown by the root layout itself,
 * which `error.tsx` cannot handle because it renders *inside* that layout.
 *
 * When active this file REPLACES the root layout, so it must supply its own
 * <html> and <body>. It deliberately pulls in nothing else — no globals.css,
 * no next/font, no Navbar — because whatever those set up is exactly what may
 * have just failed. Fonts are plain system stacks and every style is inline
 * for that reason. `metadata` is unavailable in a Client Component, so the
 * tab title uses React's <title>.
 */
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <title>Something went wrong | Luv U Beauty Academy</title>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "linear-gradient(135deg, #FDF6F0, #F9E8E8)",
            fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
            boxSizing: "border-box",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 520 }}>
            <div style={{ fontSize: 56, marginBottom: 18 }}>🌸</div>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                color: "#0D0D0D",
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}
            >
              Something went wrong
            </h1>

            <p style={{ fontSize: 15.5, color: "#6B7280", lineHeight: 1.7, margin: "0 0 28px" }}>
              Sorry — the site hit an unexpected problem. Please try again, or
              contact Luv U Beauty Academy on WhatsApp and we&apos;ll help you
              straight away.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <button
                onClick={() => unstable_retry()}
                style={{
                  padding: "13px 30px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  fontFamily: "inherit",
                  boxShadow: "0 6px 24px rgba(233,30,140,0.3)",
                }}
              >
                Try again
              </button>

              <a
                href="https://wa.me/919487992728?text=Hi! The website showed an error. Please help me with course details."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "13px 30px",
                  borderRadius: 12,
                  border: "1.5px solid #E5E7EB",
                  background: "#fff",
                  color: "#374151",
                  fontWeight: 600,
                  fontSize: 15,
                  fontFamily: "inherit",
                  textDecoration: "none",
                }}
              >
                Message us on WhatsApp
              </a>
            </div>

            <p style={{ fontSize: 13.5, color: "#9CA3AF", marginTop: 22 }}>
              Or call{" "}
              <a href="tel:+919487992728" style={{ color: "#E91E8C", fontWeight: 600 }}>
                +91 9487992728
              </a>
            </p>

            {error.digest ? (
              <p style={{ fontSize: 11.5, color: "#C4C4C4", marginTop: 20 }}>
                Reference: {error.digest}
              </p>
            ) : null}
          </div>
        </div>
      </body>
    </html>
  );
}
