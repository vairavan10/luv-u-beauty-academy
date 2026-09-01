"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data/testimonials";

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

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
}

gsap.registerPlugin(ScrollTrigger);

/* ─── Star Row ─── */
function Stars({ n = 5 }: { n?: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Quote SVG ─── */
function QuoteIcon({ color = "rgba(233,30,140,0.12)" }: { color?: string }) {
  return (
    <svg width="48" height="36" viewBox="0 0 48 36" fill={color}>
      <path d="M0 36V22.8C0 15.6 2.4 9.6 7.2 4.8S18 0 25.2 0v7.2c-4 0-7.2 1.4-9.6 4.2-2.4 2.6-3.6 5.8-3.6 9.6H20V36H0zm28 0V22.8C28 15.6 30.4 9.6 35.2 4.8S46 0 53.2 0v7.2c-4 0-7.2 1.4-9.6 4.2-2.4 2.6-3.6 5.8-3.6 9.6H48V36H28z" />
    </svg>
  );
}

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ─── Smooth fade transition ─── */
  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setOpacity(0);
    setTimeout(() => {
      setActive(idx);
      setOpacity(1);
      setTimeout(() => setTransitioning(false), 350);
    }, 280);
  }, [transitioning]);

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);

  /* ─── Auto-advance ─── */
  useEffect(() => {
    intervalRef.current = setInterval(next, 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  /* ─── Pause on hover ─── */
  const pauseAuto = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resumeAuto = () => { intervalRef.current = setInterval(next, 5500); };

  /* ─── Scroll animations ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".t-header", { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".t-header", start: "top 80%" } }
      );
      gsap.fromTo(".t-card-mini", { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".t-card-mini", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "96px 0 80px",
        background: "linear-gradient(160deg, #FDF2F8 0%, #FFF7ED 50%, #FDF6F0 100%)",
        position: "relative", overflow: "hidden",
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
        <div style={{ position: "absolute", top: -80, left: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(233,30,140,0.06), transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.07), transparent 70%)" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", fontSize: 160, opacity: 0.025, fontFamily: "serif", lineHeight: 1, userSelect: "none", color: "#E91E8C" }}>&ldquo;</div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 10 }}>

        {/* ── Header ── */}
        <div className="t-header" style={{ textAlign: "center", marginBottom: 60, opacity: 0 }}>
          <span style={{
            display: "inline-block", padding: "6px 18px", borderRadius: 999,
            background: "rgba(255,255,255,0.9)", border: "1px solid rgba(233,30,140,0.2)",
            color: "#E91E8C", fontFamily: "var(--font-body)",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: 20, boxShadow: "0 2px 12px rgba(233,30,140,0.1)",
          }}>✦ Student Stories</span>

          <h2 id="testimonials-heading" style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)",
            color: "#111", letterSpacing: "-0.025em", lineHeight: 1.2,
            margin: "0 0 18px",
          }}>
            What Our Students{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #E91E8C, #C9A96E)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Say About Us</span>
          </h2>

          <p style={{
            fontFamily: "var(--font-body)", color: "#6B7280",
            fontSize: 17, lineHeight: 1.65,
            maxWidth: 500, margin: "0 auto", textAlign: "center",
          }}>
            Real stories from real students who transformed their lives at Luv U Beauty Academy.
          </p>
        </div>

        {/* ── Two-column layout: big featured + mini cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 28,
        }} className="testimonial-layout">

          {/* Featured card */}
          <div
            onMouseEnter={pauseAuto}
            onMouseLeave={resumeAuto}
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: "clamp(28px, 5vw, 48px)",
              boxShadow: "0 8px 48px rgba(233,30,140,0.1), 0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid rgba(233,30,140,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle corner gradient */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(circle at top right, rgba(233,30,140,0.06), transparent 70%)", pointerEvents: "none" }} />

            <div style={{
              transition: "opacity 0.28s ease",
              opacity,
            }}>
              {/* Quote icon + stars row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                <QuoteIcon />
                <Stars n={t.rating} />
              </div>

              {/* Review text */}
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
                lineHeight: 1.75, color: "#1F2937",
                margin: "0 0 32px",
                fontStyle: "italic",
              }}>
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
                  background: avatarColors[active % avatarColors.length].bg,
                  border: `2px solid ${avatarColors[active % avatarColors.length].color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 18, color: avatarColors[active % avatarColors.length].color,
                    lineHeight: 1, userSelect: "none",
                  }}>{getInitials(t.name)}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#111", margin: "0 0 3px" }}>{t.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#E91E8C", fontWeight: 600, margin: "0 0 2px" }}>{t.course}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#9CA3AF", margin: 0 }}>
                    📍 {t.location} · {t.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginTop: 32, paddingTop: 24,
              borderTop: "1px solid rgba(233,30,140,0.08)",
            }}>
              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    /*
                     * The dot itself stays 8px tall, but the button around it is
                     * a transparent 44px-tall hit area — the visible dot was
                     * only 8x8, far too small to hit reliably on a phone.
                     * Width stays narrow because eight 44px-wide buttons would
                     * not fit across a 375px screen.
                     */
                    style={{
                      height: 44,
                      // 24px is the WCAG 2.5.8 (AA) floor. Eight 44px-wide
                      // buttons would not fit across a 375px screen, so width
                      // sits at the minimum rather than the 44px AAA ideal.
                      width: i === active ? 44 : 24,
                      border: "none", cursor: "pointer",
                      background: "transparent",
                      padding: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "width 0.3s ease",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        display: "block",
                        height: 8, borderRadius: 4,
                        background: i === active ? "#E91E8C" : "rgba(233,30,140,0.2)",
                        width: i === active ? 28 : 8,
                        transition: "all 0.3s ease",
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Arrow buttons */}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={prev}
                  aria-label="Previous"
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    border: "1.5px solid rgba(233,30,140,0.2)",
                    background: "transparent", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#E91E8C", transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#E91E8C"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#E91E8C"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                    border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff",
                    boxShadow: "0 4px 14px rgba(233,30,140,0.35)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(233,30,140,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(233,30,140,0.35)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mini cards grid — 3 columns on desktop, 1 on mobile */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }} className="mini-grid">
            {testimonials.map((t2, i) => (
              <div
                key={t2.id}
                className="t-card-mini"
                onClick={() => goTo(i)}
                style={{
                  opacity: 0,
                  background: i === active
                    ? "linear-gradient(135deg, rgba(233,30,140,0.06), rgba(233,30,140,0.02))"
                    : "#fff",
                  border: `1px solid ${i === active ? "rgba(233,30,140,0.25)" : "#F3F4F6"}`,
                  borderRadius: 20,
                  padding: "18px 16px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: i === active ? "0 4px 20px rgba(233,30,140,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={e => {
                  if (i !== active) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(233,30,140,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(233,30,140,0.1)";
                  }
                }}
                onMouseLeave={e => {
                  if (i !== active) {
                    (e.currentTarget as HTMLElement).style.borderColor = "#F3F4F6";
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                  }
                }}
              >
                <Stars n={t2.rating} />
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.6,
                  color: "#4B5563", margin: "10px 0 14px",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  &ldquo;{t2.review}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                    background: avatarColors[i % avatarColors.length].bg,
                    border: `1.5px solid ${avatarColors[i % avatarColors.length].color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 12, color: avatarColors[i % avatarColors.length].color,
                      lineHeight: 1, userSelect: "none",
                    }}>{getInitials(t2.name)}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700, color: "#111", margin: 0 }}>{t2.name}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9CA3AF", margin: 0 }}>{t2.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Google Rating Banner ── */}
        <div style={{
          marginTop: 48,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          padding: "24px 32px",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          border: "1px solid rgba(233,30,140,0.08)",
          maxWidth: 640, margin: "48px auto 0",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#F8F9FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#6B7280", margin: "0 0 4px" }}>Google Reviews</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 26, color: "#111", lineHeight: 1 }}>4.9</span>
                <Stars n={5} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#9CA3AF" }}>(500+ reviews)</span>
              </div>
            </div>
          </div>
          <div style={{ width: 1, height: 40, background: "#F3F4F6" }} className="google-divider" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#6B7280", textAlign: "center", margin: 0, lineHeight: 1.55 }}>
            Voted <strong style={{ color: "#E91E8C" }}>#1 Beauty Academy in Tanjore</strong><br />
            by our students on Google
          </p>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .mini-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .mini-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .google-divider {
            display: none !important;
          }
        }
        @media (max-width: 400px) {
          .mini-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
