import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Beautician Courses in Tanjore | Professional Beauty Training Programs | Luv U Beauty Academy",
  description:
    "Explore all beauty courses at Luv U Beauty Academy Tanjore. Professional beautician course, bridal makeup, hair styling, nail art, skin care & salon management with govt. certification and placement support.",
  alternates: { canonical: absoluteUrl("/courses") },
};

export default function CoursesPage() {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #1a0614 60%, #2d0a1e 100%)",
        padding: "72px 24px 80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Grid texture */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px", pointerEvents: "none",
        }} />
        {/* Glow blob */}
        <div aria-hidden style={{
          position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(233,30,140,0.18), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-block",
            padding: "5px 18px", borderRadius: 999,
            background: "rgba(233,30,140,0.15)",
            border: "1px solid rgba(233,30,140,0.35)",
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#ff77c0", marginBottom: 24,
          }}>
            ✦ All Programs
          </span>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 20px",
            color: "#fff",
          }}>
            Beauty Courses in{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #E91E8C, #C9A96E)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Tanjore
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 580, margin: "0 auto 32px",
          }}>
            From beginner to advanced — our govt-certified courses are designed to take you
            from passionate beginner to confident professional with hands-on practical training.
          </p>

          {/* Quick stat badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              { icon: "📚", text: "7 Courses" },
              { icon: "🏆", text: "Govt. Certified" },
              { icon: "💼", text: "100% Placement" },
              { icon: "⏱️", text: "1–6 Month Programs" },
            ].map(b => (
              <span key={b.text} style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "7px 16px", borderRadius: 999,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
              }}>
                <span>{b.icon}</span> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Courses Grid ── */}
      <CoursesClient />

      {/* ── CTA Banner ── */}
      <section style={{
        background: "linear-gradient(135deg, #E91E8C, #C2185B)",
        padding: "64px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: -40, right: "10%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 620, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            color: "#fff", margin: "0 0 14px", letterSpacing: "-0.025em",
          }}>
            Not Sure Which Course to Choose?
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            color: "rgba(255,255,255,0.8)", margin: "0 auto 28px",
            lineHeight: 1.7,
          }}>
            Book a free counselling session with our experts. We&apos;ll help you pick the perfect
            course based on your goals and background.
          </p>
          <a
            href="https://wa.me/919487992728?text=Hi! I need help choosing the right beauty course at Luv U Beauty Academy in Tanjore."
            target="_blank"
            rel="noopener noreferrer"
            className="courses-cta-btn"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 32px", borderRadius: 14,
              background: "#fff", color: "#E91E8C",
              fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Get Free Course Counselling
          </a>
        </div>
      </section>
    </main>
  );
}
