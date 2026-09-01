"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const PHONE = "919487992728";
const WA = `https://wa.me/${PHONE}?text=Hi! I'm interested in joining Luv U Beauty Academy in Tanjore. Please share more details.`;

/* ─── Headline split into reveal lines ─── */
const headlineLines = [
  { text: "Become a", plain: true },
  { text: "Professional", plain: false },
  { text: "Beautician", plain: false },
];

/* ─── Marquee courses ─── */
const marqueeItems = [
  "Professional Beautician", "Bridal Makeup", "Hair Styling",
  "Nail Art", "Skin Care", "Salon Management", "Advanced Makeup",
  "100% Placement", "Govt. Certified"
];

/* ─── Magnetic button hook ─── */
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [strength]);
  return ref;
}

export default function HeroSection() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const cursorGlow   = useRef<HTMLDivElement>(null);
  const enrollRef    = useMagnetic(0.3) as React.RefObject<HTMLAnchorElement>;
  const waRef        = useMagnetic(0.3) as React.RefObject<HTMLAnchorElement>;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      /* 1 ── 3-D word reveal: each line clips upward with rotateX */
      tl.fromTo(".reveal-inner",
        { yPercent: 110, rotateX: 25, opacity: 0 },
        {
          yPercent: 0, rotateX: 0, opacity: 1,
          duration: 0.95, stagger: 0.14,
          ease: "power4.out",
        }, 0.1
      );

      /* 2 ── Pink accent bar scales in */
      tl.fromTo(".hero-accent-bar",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.7, ease: "power3.inOut" }, 0.7
      );

      /* 3 ── Subheadline fade */
      tl.fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }, 0.9
      );

      /* 4 ── CTA buttons pop */
      tl.fromTo(".hero-btn",
        { opacity: 0, y: 16, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1 }, 1.05
      );

      /* 5 ── Trust badges slide up */
      tl.fromTo(".hero-trust",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, 1.2
      );

      /* 6 ── Scroll indicator fade */
      tl.fromTo(".hero-scroll-ind",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }, 1.45
      );

      /* Floating parallax cards */
      gsap.to(".fp-card-1", { y: -22, duration: 4.2, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(".fp-card-2", { y: -16, duration: 5.1, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.8 });
      gsap.to(".fp-card-3", { y: -18, duration: 3.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.6 });

      /* Rotating ring */
      gsap.to(".deco-ring", { rotation: 360, duration: 28, ease: "none", repeat: -1 });

      /* Dot grid subtle pulse */
      gsap.to(".dot-grid-item", { opacity: 0.35, duration: 1.5, stagger: { amount: 3, from: "random" }, repeat: -1, yoyo: true, ease: "sine.inOut" });

    }, sectionRef);

    /* Cursor glow follows mouse */
    const onMouseMove = (e: MouseEvent) => {
      if (!cursorGlow.current) return;
      gsap.to(cursorGlow.current, {
        x: e.clientX - 250, y: e.clientY - 250,
        duration: 0.55, ease: "power2.out",
      });
    };

    /* Mouse parallax on floating cards */
    const onParallax = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const rx = (e.clientX / innerWidth  - 0.5) * 2;
      const ry = (e.clientY / innerHeight - 0.5) * 2;
      gsap.to(".fp-card-1", { x: rx * 18, y: ry * 12, duration: 0.8, ease: "power2.out" });
      gsap.to(".fp-card-2", { x: rx * -14, y: ry * -10, duration: 0.9, ease: "power2.out" });
      gsap.to(".fp-card-3", { x: rx * 10, y: ry * 16, duration: 1.0, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousemove", onParallax);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", onParallax);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#FDFBF9",
      }}
      aria-label="Hero section"
    >
      {/* ── Cursor glow ── */}
      <div
        ref={cursorGlow}
        aria-hidden
        style={{
          position: "fixed", pointerEvents: "none", zIndex: 0,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,30,140,0.07) 0%, transparent 65%)",
          transform: "translate(-9999px,-9999px)",
        }}
      />

      {/* ── Background layer ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>

        {/* Soft gradient blobs */}
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,30,140,0.05) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-5%", left: "-8%",
          width: "50vw", height: "50vw", maxWidth: 600, maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }} />

        {/* Rotating dashed ring */}
        <div className="deco-ring" style={{
          position: "absolute", top: "-15%", right: "-8%",
          width: "min(680px, 70vw)", height: "min(680px, 70vw)",
          borderRadius: "50%",
          border: "1.5px dashed rgba(233,30,140,0.15)",
        }} />

        {/* Dot grid — top left */}
        <div style={{ position: "absolute", top: "15%", left: "3%", display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 14 }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="dot-grid-item" style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(233,30,140,0.25)", opacity: 0.15 }} />
          ))}
        </div>

        {/* Dot grid — bottom right */}
        <div style={{ position: "absolute", bottom: "18%", right: "4%", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="dot-grid-item" style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(201,169,110,0.35)", opacity: 0.2 }} />
          ))}
        </div>

        {/* Hairline accent lines */}
        <div style={{ position: "absolute", top: "38%", left: 0, width: "22%", height: 1, background: "linear-gradient(to right, transparent, rgba(233,30,140,0.15))" }} />
        <div style={{ position: "absolute", top: "62%", right: 0, width: "22%", height: 1, background: "linear-gradient(to left, transparent, rgba(233,30,140,0.15))" }} />
      </div>

      {/* ── Floating info cards ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
        {/* Card 1 — rating */}
        <div className="fp-card-1 hidden lg:block" style={{
          position: "absolute", top: "22%", right: "6%",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: 16, padding: "14px 18px",
          border: "1px solid rgba(233,30,140,0.1)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          minWidth: 160,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "linear-gradient(135deg,#E91E8C,#C2185B)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, flexShrink: 0,
            }}>⭐</div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "#0D0D0D", margin: 0 }}>4.9 / 5.0</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9CA3AF", margin: 0 }}>Google Rating</p>
            </div>
          </div>
        </div>

        {/* Card 2 — students */}
        <div className="fp-card-2 hidden lg:block" style={{
          position: "absolute", top: "28%", left: "4%",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: 16, padding: "14px 18px",
          border: "1px solid rgba(233,30,140,0.1)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          minWidth: 170,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#F0FDF4",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, flexShrink: 0,
            }}>🎓</div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "#0D0D0D", margin: 0 }}>100+ Students</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9CA3AF", margin: 0 }}>Trained &amp; Placed</p>
            </div>
          </div>
        </div>

        {/* Card 3 — cert */}
        <div className="fp-card-3 hidden lg:block" style={{
          position: "absolute", bottom: "22%", right: "8%",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: 16, padding: "14px 18px",
          border: "1px solid rgba(201,169,110,0.15)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          minWidth: 160,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#FFFBEB",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, flexShrink: 0,
            }}>🏆</div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13.5, color: "#0D0D0D", margin: 0 }}>Govt. Certified</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9CA3AF", margin: 0 }}>Recognized courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN HERO CONTENT ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingTop: "clamp(108px, 14vh, 140px)",
          paddingBottom: "clamp(80px, 10vh, 100px)",
          position: "relative", zIndex: 10,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", textAlign: "center" }}>

          {/* Label badge */}
          <div style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 18px", borderRadius: 999,
              background: "rgba(233,30,140,0.06)",
              border: "1px solid rgba(233,30,140,0.18)",
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
              color: "#C2185B", letterSpacing: "0.06em",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#E91E8C",
                animation: "heroPulse 2s infinite",
                flexShrink: 0,
              }} />
              Tanjore&apos;s #1 Beauty Academy
            </span>
          </div>

          {/* ── 3-D Headline reveal ── */}
          <h1
            style={{
              margin: "0 0 24px",
              perspective: "900px",
              perspectiveOrigin: "center center",
            }}
            aria-label="Become a Professional Beautician with Expert Training in Tanjore"
          >
            {headlineLines.map((line, li) => (
              <div
                key={li}
                style={{
                  overflow: "hidden",
                  display: "block",
                  perspective: "800px",
                  perspectiveOrigin: "50% 100%",
                  lineHeight: li === 0 ? 1.15 : 1.1,
                  marginBottom: li < headlineLines.length - 1 ? "0.04em" : 0,
                }}
              >
                <span
                  className="reveal-inner"
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-display)",
                    fontWeight: li === 0 ? 700 : 900,
                    fontSize: li === 0
                      ? "clamp(2rem, 5vw, 3.5rem)"
                      : "clamp(2.8rem, 7vw, 5.5rem)",
                    color: line.plain ? "#0D0D0D" : "transparent",
                    backgroundImage: line.plain
                      ? "none"
                      : "linear-gradient(135deg, #E91E8C 0%, #C2185B 60%, #E91E8C 100%)",
                    WebkitBackgroundClip: line.plain ? undefined : "text",
                    backgroundClip: line.plain ? undefined : "text",
                    WebkitTextFillColor: line.plain ? undefined : "transparent",
                    letterSpacing: "-0.03em",
                    transformOrigin: "50% 100%",
                    willChange: "transform, opacity",
                    opacity: 0,
                  }}
                >
                  {line.text}
                </span>
              </div>
            ))}

            {/* "with Expert Training in Tanjore" — smaller line */}
            <div style={{ overflow: "hidden", display: "block", perspective: "800px", perspectiveOrigin: "50% 100%", marginTop: "0.1em" }}>
              <span
                className="reveal-inner"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
                  color: "#6B7280",
                  letterSpacing: "-0.01em",
                  transformOrigin: "50% 100%",
                  willChange: "transform, opacity",
                  opacity: 0,
                }}
              >
                with Expert Training in Tanjore
              </span>
            </div>
          </h1>

          {/* Accent bar */}
          <div
            className="hero-accent-bar"
            style={{
              width: 72, height: 4, borderRadius: 4,
              background: "linear-gradient(90deg, #E91E8C, #C9A96E)",
              margin: "0 auto 28px",
              transformOrigin: "left center",
            }}
          />

          {/* Subheadline */}
          <p
            className="hero-sub"
            style={{
              fontFamily: "var(--font-body)",
              color: "#6B7280", fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75, maxWidth: 500, margin: "0 auto 40px",
              opacity: 0,
            }}
          >
            Hands-on training, government certification, and career placement support — everything you need to launch your beauty career.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 44 }}>
            <Link
              href="/contact"
              id="hero-enroll-btn"
              ref={enrollRef}
              className="hero-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 34px", borderRadius: 14,
                background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                color: "#fff",
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15.5,
                textDecoration: "none",
                boxShadow: "0 6px 28px rgba(233,30,140,0.3)",
                transition: "box-shadow 0.25s ease",
                whiteSpace: "nowrap",
                opacity: 0,
                willChange: "transform",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(233,30,140,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(233,30,140,0.3)"; }}
            >
              Enroll Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>

            <a
              href={WA}
              target="_blank" rel="noopener noreferrer"
              id="hero-wa-btn"
              ref={waRef}
              className="hero-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 34px", borderRadius: 14,
                background: "#fff",
                color: "#0D0D0D",
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15.5,
                textDecoration: "none",
                border: "1.5px solid #E5E7EB",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                whiteSpace: "nowrap",
                opacity: 0,
                willChange: "transform",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E91E8C"; el.style.boxShadow = "0 6px 24px rgba(233,30,140,0.12)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E5E7EB"; el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 28px" }}>
            {[
              "No Prior Experience Needed",
              "100% Placement Support",
              "Govt. Certified",
            ].map((t) => (
              <div
                key={t}
                className="hero-trust"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-body)", fontSize: 13.5,
                  fontWeight: 500, color: "#6B7280",
                  opacity: 0,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            className="hero-scroll-ind"
            style={{
              marginTop: 44, display: "flex", flexDirection: "column",
              alignItems: "center", gap: 8, opacity: 0,
              animation: "heroScrollBounce 2.4s ease-in-out infinite",
            }}
          >
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "#D1D5DB",
            }}>Scroll</span>
            <div style={{
              width: 24, height: 40, borderRadius: 12,
              border: "1.5px solid rgba(233,30,140,0.3)",
              display: "flex", alignItems: "flex-start",
              justifyContent: "center", padding: "5px 0",
            }}>
              <div style={{
                width: 3.5, height: 8, borderRadius: 4, background: "#E91E8C",
                animation: "heroScrollDot 1.6s ease-in-out infinite",
              }} />
            </div>
          </div>

        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div style={{
        position: "relative",
        height: 52,
        background: "#0D0D0D",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        zIndex: 10,
        flexShrink: 0,
      }}>
        {/* Edge fades */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to right, #0D0D0D, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to left, #0D0D0D, transparent)", pointerEvents: "none" }} />

        <div className="animate-marquee" style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap", willChange: "transform" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex", alignItems: "center", gap: 0,
                padding: "0 24px",
                fontFamily: "var(--font-body)", fontSize: 12.5,
                fontWeight: 500, color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.04em", flexShrink: 0,
              }}
            >
              {item}
              <span style={{
                width: 3, height: 3, borderRadius: "50%",
                background: "#E91E8C", opacity: 0.6,
                display: "inline-block", marginLeft: 24, flexShrink: 0,
              }} />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes heroScrollDot {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(14px); opacity: 0; }
          76% { transform: translateY(0); opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        /* Floating cards hidden on mobile */
        @media (max-width: 1024px) {
          .fp-card-1, .fp-card-2, .fp-card-3 { display: none !important; }
        }
      `}</style>
    </section>
  );
}
