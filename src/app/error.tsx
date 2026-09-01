"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

const PHONE = "9487992728";

/**
 * Route-level error boundary. Catches runtime errors thrown anywhere below the
 * root layout, so a failure in one page shows this instead of a blank screen
 * with the default Next.js error overlay.
 *
 * The Navbar, Footer and WhatsApp button still render around this, so a
 * visitor who hits an error can keep navigating — or just call us.
 */
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Surfaces in the host's runtime logs. `digest` is the only identifier
    // available for errors thrown in Server Components, since their messages
    // are withheld from the client in production.
    console.error("[app error]", error.digest ?? "(no digest)", error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 24px 64px",
        background: "linear-gradient(135deg, #FDF6F0, #F9E8E8)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ fontSize: 56, marginBottom: 18 }}>🌸</div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
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
          Sorry — this page didn&apos;t load properly. Please try again, or
          reach us on WhatsApp and we&apos;ll help you straight away.
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
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 15,
              boxShadow: "0 6px 24px rgba(233,30,140,0.3)",
            }}
          >
            Try again
          </button>

          <Link
            href="/"
            style={{
              padding: "13px 30px",
              borderRadius: 12,
              border: "1.5px solid #E5E7EB",
              background: "#fff",
              color: "#374151",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Go home
          </Link>
        </div>

        <p style={{ fontSize: 13.5, color: "#9CA3AF", marginTop: 22 }}>
          Or call us on{" "}
          <a href={`tel:+91${PHONE}`} style={{ color: "#E91E8C", fontWeight: 600 }}>
            +91 {PHONE}
          </a>
        </p>

        {error.digest ? (
          <p style={{ fontSize: 11.5, color: "#C4C4C4", marginTop: 20 }}>
            Reference: {error.digest}
          </p>
        ) : null}
      </div>
    </main>
  );
}
