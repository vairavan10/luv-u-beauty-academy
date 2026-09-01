import type { Metadata } from "next";
import { stats } from "@/data/stats";
import Link from "next/link";
import { Star, Quote, BadgeCheck, ArrowRight, Infinity } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Testimonials | Reviews of Luv U Beauty Academy Tanjore",
  description:
    "Read real reviews from students who trained at Luv U Beauty Academy in Tanjore. See how our beautician, bridal makeup and hair styling courses changed their lives.",
  alternates: { canonical: absoluteUrl("/testimonials") },
};

const pageStats = [
  { number: stats.studentsTrained, label: "மாணவர்கள்", sublabel: "Trained students" },
  { number: stats.googleRating, label: "Google Rating", sublabel: "On Google Business" },
  { number: stats.placement, label: "Placement", sublabel: "Job support" },
  { number: stats.yearsActive, label: "ஆண்டுகள்", sublabel: "Years in Tanjore" },
];

// Pick two letters from a name for the avatar
function initials(name: string) {
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
}

// Cycle through a set of soft background colours for avatars
const avatarColors = [
  { bg: "rgba(233,30,140,0.12)", color: "#C2185B" },
  { bg: "rgba(139,92,246,0.12)", color: "#7C3AED" },
  { bg: "rgba(16,185,129,0.12)", color: "#047857" },
  { bg: "rgba(245,158,11,0.12)", color: "#B45309" },
  { bg: "rgba(59,130,246,0.12)", color: "#1D4ED8" },
  { bg: "rgba(236,72,153,0.12)", color: "#BE185D" },
  { bg: "rgba(6,182,212,0.12)", color: "#0E7490" },
  { bg: "rgba(249,115,22,0.12)", color: "#C2410C" },
];

export default function TestimonialsPage() {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #1a0614 60%, #2d0a1e 100%)",
        padding: "72px 24px 80px",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px", pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(233,30,140,0.18), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-block", padding: "5px 18px", borderRadius: 999,
            background: "rgba(233,30,140,0.15)", border: "1px solid rgba(233,30,140,0.35)",
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase" as const,
            color: "#ff77c0", marginBottom: 24,
          }}>
            ✦ மாணவர்களின் கதைகள்
          </span>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1,
            letterSpacing: "-0.03em", margin: "0 0 20px", color: "#fff",
          }}>
            What Our{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #E91E8C, #C9A96E)",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Students Say
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 2vw, 1.05rem)",
            lineHeight: 1.75, color: "rgba(255,255,255,0.6)",
            maxWidth: 540, margin: "0 auto 36px",
          }}>
            Real words from real students across Tanjore, Thanjavur &amp; beyond.
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>இவர்கள் வார்த்தைகளே எங்கள் மிகப்பெரிய விருது.</span>
          </p>

          {/* Rating pill */}
          <div className="tm-rating-pill" style={{
            display: "inline-flex", alignItems: "center", gap: 20,
            padding: "16px 28px", borderRadius: 18,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 38, color: "#fff", margin: 0, lineHeight: 1 }}>4.9</p>
              <div style={{ display: "flex", gap: 3, justifyContent: "center", marginTop: 5 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#C9A96E" color="#C9A96E" />)}
              </div>
            </div>
            <div className="tm-pill-divider" style={{ width: 1, height: 40, background: "rgba(255,255,255,0.15)" }} />
            <div style={{ textAlign: "left" }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "#fff", margin: "0 0 2px" }}>Google Rating</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>On Google Business</p>
            </div>
            <div className="tm-pill-divider" style={{ width: 1, height: 40, background: "rgba(255,255,255,0.15)" }} />
            <div style={{ textAlign: "left" }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "#fff", margin: "0 0 2px" }}>100% Placement Support</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>For every graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #F3F4F6" }}>
        <div
          className="tm-stats-grid"
          style={{
            maxWidth: 1280, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {pageStats.map((s, i) => (
            <div key={s.label} className="tm-stat-cell" style={{
              textAlign: "center", padding: "26px 16px",
              borderRight: i < 3 ? "1px solid #F3F4F6" : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#E91E8C",
                margin: "0 0 3px", letterSpacing: "-0.03em", lineHeight: 1,
              }}>{s.number}</p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "#2D2D2D", margin: "0 0 2px" }}>{s.label}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#9CA3AF", margin: 0 }}>{s.sublabel}</p>
            </div>
          ))}
        </div>
        {/*
          Four `1fr` columns cannot shrink below their content's min-width, so
          on a 375px screen this strip measured 428px wide and the fourth stat
          sat off-screen — unreachable, because body has overflow-x: hidden.
          Collapse to 2 columns on phones. !important is required to beat the
          inline grid-template-columns above.
        */}
        <style>{`
          @media (max-width: 768px) {
            .tm-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .tm-stat-cell:nth-child(even) { border-right: none !important; }
            .tm-stat-cell:nth-child(-n+2) { border-bottom: 1px solid #F3F4F6; }
          }
          /*
            The hero pill packs three labelled blocks in a row. Below ~560px
            they squeeze to ~90px each and every label wraps onto three lines,
            so stack them and swap the vertical rules for horizontal ones.
          */
          @media (max-width: 560px) {
            .tm-rating-pill {
              display: flex !important;
              flex-direction: column;
              gap: 14px !important;
              width: 100%;
              padding: 20px !important;
            }
            .tm-rating-pill > div { text-align: center !important; }
            .tm-pill-divider {
              width: 100% !important;
              height: 1px !important;
            }
          }
        `}</style>
      </section>

      {/* ── Lifetime Service Banner ── */}
      <section style={{
        background: "linear-gradient(135deg, #0D0D0D, #1a0614)",
        padding: "32px 24px",
        borderBottom: "1px solid rgba(233,30,140,0.2)",
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
          justifyContent: "center", textAlign: "center",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
            background: "rgba(233,30,140,0.15)",
            border: "1px solid rgba(233,30,140,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Infinity size={22} color="#E91E8C" />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "#fff", margin: "0 0 3px" }}>
              Lifetime Teaching Support — Free for All Students
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0 }}>
              Even after completing your course, come back anytime to practise, gain experience, or clarify doubts. Our relationship doesn&apos;t end at graduation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials Masonry Grid ── */}
      <section style={{ background: "#F9FAFB", padding: "72px 0 88px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase" as const,
              color: "#E91E8C", marginBottom: 10,
            }}>மாணவர்களின் அனுபவங்கள்</p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#0D0D0D",
              letterSpacing: "-0.025em", margin: 0,
            }}>Real Stories, Real Transformations</h2>
          </div>

          {/* CSS-columns masonry */}
          <div style={{ columns: "3 300px", columnGap: 20 }}>
            {testimonials.map((t, index) => {
              const av = avatarColors[index % avatarColors.length];
              return (
                <article
                  key={t.id}
                  style={{
                    breakInside: "avoid", marginBottom: 20,
                    background: "#fff", borderRadius: 22, padding: "22px",
                    border: "1.5px solid #F3F4F6",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                    display: "flex", flexDirection: "column", gap: 14,
                    position: "relative", overflow: "hidden",
                  }}
                >
                  {/* Subtle corner glow */}
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    width: 60, height: 60,
                    background: "radial-gradient(circle at top right, rgba(233,30,140,0.05), transparent)",
                    borderRadius: "0 22px 0 0", pointerEvents: "none",
                  }} />

                  {/* Stars + quote icon */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 3 }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#C9A96E" color="#C9A96E" />
                      ))}
                    </div>
                    <Quote size={18} color="rgba(233,30,140,0.12)" fill="rgba(233,30,140,0.07)" />
                  </div>

                  {/* Review text */}
                  <blockquote style={{
                    fontFamily: "var(--font-body)", color: "#4B5563",
                    fontSize: 14, lineHeight: 1.75, margin: 0,
                  }}>
                    &ldquo;{t.review}&rdquo;
                  </blockquote>

                  {/* Tags: course + batch */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    <span style={{
                      display: "inline-block", padding: "3px 11px", borderRadius: 999,
                      background: "rgba(233,30,140,0.07)",
                      fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#E91E8C",
                    }}>{t.course}</span>
                    <span style={{
                      display: "inline-block", padding: "3px 11px", borderRadius: 999,
                      background: "#F3F4F6",
                      fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#6B7280",
                    }}>Batch: {t.batch}</span>
                  </div>

                  {/* Author — initials avatar + name only */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 11,
                    paddingTop: 14, borderTop: "1px solid #F3F4F6",
                  }}>
                    {/* Avatar circle with initials */}
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                      background: av.bg, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      border: `1.5px solid ${av.color}30`,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-display)", fontWeight: 800,
                        fontSize: 15, color: av.color, lineHeight: 1,
                        userSelect: "none",
                      }}>
                        {initials(t.name)}
                      </span>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, color: "#0D0D0D", margin: 0 }}>
                          {t.name}
                        </p>
                        <BadgeCheck size={13} color="#E91E8C" fill="rgba(233,30,140,0.12)" />
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9CA3AF", margin: "1px 0 3px" }}>
                        {t.tamilName}
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#E91E8C", margin: "0 0 1px" }}>
                        {t.outcome}
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9CA3AF", margin: 0 }}>
                        📍 {t.location}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Google Reviews strip ── */}
      <section style={{
        background: "#fff", padding: "44px 24px",
        borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 5, marginBottom: 10 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#C9A96E" color="#C9A96E" />)}
          </div>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: "#0D0D0D", margin: "0 0 8px",
          }}>
            Rated 4.9 / 5 on Google Reviews
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#6B7280", margin: "0 0 22px", lineHeight: 1.7 }}>
            Trusted by students across Tanjore, Thanjavur, Kumbakonam &amp; beyond<br />
            <span style={{ color: "#E91E8C", fontWeight: 600 }}>உண்மையான மாணவர்களின் உண்மையான வார்த்தைகள்.</span>
          </p>
          <a
            href="https://wa.me/919487992728?text=Hi! I read the reviews and I want to know more about the courses at Luv U Beauty Academy."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 26px", borderRadius: 14,
              background: "linear-gradient(135deg, #E91E8C, #C2185B)",
              color: "#fff", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14,
              textDecoration: "none", boxShadow: "0 6px 20px rgba(233,30,140,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat With Us
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #E91E8C, #C2185B)",
        padding: "64px 24px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: -40, right: "10%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 580, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            color: "#fff", margin: "0 0 8px", letterSpacing: "-0.025em",
          }}>
            Be Our Next Success Story
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", margin: "0 0 6px" }}>
            நீங்களும் ஒரு success story ஆகலாம்!
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "0 auto 28px", lineHeight: 1.7 }}>
            Join Luv U Beauty Academy and start your journey today.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a
              href="https://wa.me/919487992728?text=Hi! I want to enroll at Luv U Beauty Academy in Tanjore."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 13,
                background: "#fff", color: "#E91E8C",
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14,
                textDecoration: "none", boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
              }}
            >
              Enroll Now <ArrowRight size={15} />
            </a>
            <Link
              href="/courses"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 13,
                background: "rgba(255,255,255,0.12)", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.35)",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
                textDecoration: "none",
              }}
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
