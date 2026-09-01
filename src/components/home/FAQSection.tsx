"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "@/data/faqs";
import { faqSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "919487992728";
const WA = `https://wa.me/${PHONE}?text=Hi! I have some questions about Luv U Beauty Academy courses.`;

/* ─── Category colour map ─── */
const catColor: Record<string, string> = {
  General: "#E91E8C",
  Certification: "#8B5CF6",
  Placement: "#10B981",
  Fees: "#F59E0B",
  Training: "#3B82F6",
  Career: "#EC4899",
  Support: "#06B6D4",
};

/* ─── Single FAQ row — GSAP-animated expand ─── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef  = useRef<HTMLDivElement>(null);
  const lineRef  = useRef<HTMLDivElement>(null);
  const isFirst  = useRef(true);

  /* GSAP expand/collapse */
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    if (isFirst.current) {
      /* set initial state without animation */
      gsap.set(body, { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 });
      isFirst.current = false;
      return;
    }

    if (isOpen) {
      gsap.fromTo(body,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.52, ease: "power4.out" }
      );
    } else {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.38, ease: "power3.in" });
    }
  }, [isOpen]);

  /* Hover: accent line slides in */
  const accent = catColor[faq.category] ?? "#E91E8C";

  return (
    <div
      className="faq-item"
      style={{ opacity: 0, borderBottom: "1px solid #F0F0F0" }}
      onMouseEnter={() => {
        if (lineRef.current)
          gsap.to(lineRef.current, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      }}
      onMouseLeave={() => {
        if (lineRef.current)
          gsap.to(lineRef.current, { scaleY: 0, duration: 0.2, ease: "power2.in" });
      }}
    >
      <div style={{ position: "relative", display: "flex" }}>
        {/* Animated left accent bar */}
        <div
          ref={lineRef}
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: 3, borderRadius: 2,
            background: accent,
            transform: "scaleY(0)",
            transformOrigin: "top center",
          }}
        />

        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          id={`faq-q-${faq.id}`}
          aria-controls={`faq-a-${faq.id}`}
          style={{
            width: "100%",
            display: "flex", alignItems: "flex-start",
            justifyContent: "space-between", gap: 20,
            padding: "24px 20px 24px 28px",
            background: "none", border: "none", cursor: "pointer",
            textAlign: "left",
          }}
        >
          {/* Number + question */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flex: 1, minWidth: 0 }}>
            {/* Index */}
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900, fontSize: 13,
              color: isOpen ? accent : "#D1D5DB",
              lineHeight: 1, paddingTop: 3, flexShrink: 0,
              transition: "color 0.25s",
              userSelect: "none",
              minWidth: 20,
            }}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Category pill */}
              <span style={{
                display: "inline-block",
                fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: accent, marginBottom: 8,
                opacity: 0.8,
              }}>
                {faq.category}
              </span>

              {/* Question text */}
              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: isOpen ? 600 : 500,
                fontSize: "clamp(15px, 2vw, 17px)",
                color: isOpen ? "#0D0D0D" : "#374151",
                margin: 0, lineHeight: 1.5,
                transition: "color 0.25s, font-weight 0.2s",
              }}>
                {faq.question}
              </p>
            </div>
          </div>

          {/* Plus / minus icon */}
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0, marginTop: 2,
            border: `1.5px solid ${isOpen ? accent : "#E5E7EB"}`,
            background: isOpen ? accent : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.25s ease",
          }}>
            <svg
              width="14" height="14" viewBox="0 0 14 14"
              fill="none" stroke={isOpen ? "#fff" : "#9CA3AF"}
              strokeWidth="2" strokeLinecap="round"
              style={{ transition: "transform 0.3s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              <line x1="7" y1="1" x2="7" y2="13" />
              <line x1="1" y1="7" x2="13" y2="7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Answer body */}
      <div
        ref={bodyRef}
        id={`faq-a-${faq.id}`}
        role="region"
        aria-labelledby={`faq-q-${faq.id}`}
        style={{ overflow: "hidden" }}
      >
        <div style={{ padding: "0 20px 28px 68px" }}>
          {/* Accent line separator */}
          <div style={{
            width: 40, height: 2, borderRadius: 2,
            background: accent, marginBottom: 16, opacity: 0.6,
          }} />
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 15, lineHeight: 1.78,
            color: "#4B5563", margin: 0,
          }}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function FAQSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const titleRef    = useRef<HTMLDivElement>(null);
  const svgLineRef  = useRef<SVGLineElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 1 — Header title 3-D reveal (showcase-style) */
      gsap.fromTo(".faq-title-line",
        { yPercent: 105, rotateX: 20, opacity: 0 },
        {
          yPercent: 0, rotateX: 0, opacity: 1,
          duration: 0.9, stagger: 0.13, ease: "power4.out",
          scrollTrigger: { trigger: ".faq-title-wrap", start: "top 80%" },
        }
      );

      /* 2 — Sub and tag fade */
      gsap.fromTo(".faq-sub",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".faq-sub", start: "top 82%" },
        }
      );

      /* 3 — FAQ rows stagger up */
      gsap.fromTo(".faq-item",
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ".faq-item", start: "top 85%" },
        }
      );

      /* 4 — Decorative SVG line draws itself (DrawSVG-inspired, using strokeDashoffset) */
      if (svgLineRef.current) {
        const len = 600;
        gsap.set(svgLineRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(svgLineRef.current, {
          strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      }

      /* 5 — CTA block slide up */
      gsap.fromTo(".faq-cta",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".faq-cta", start: "top 88%" },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "100px 0 80px", background: "#FAFAFA", position: "relative", overflow: "hidden" }}
      aria-labelledby="faq-heading"
    >
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))
          ),
        }}
      />

      {/* ── Decorative SVG path (draws on scroll, like GSAP DrawSVG demos) ── */}
      <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 440, height: 440, pointerEvents: "none", opacity: 0.04 }}>
        <svg width="440" height="440" viewBox="0 0 440 440" fill="none">
          <line
            ref={svgLineRef}
            x1="440" y1="0" x2="0" y2="440"
            stroke="#E91E8C" strokeWidth="1.5"
          />
        </svg>
      </div>

      <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, width: 320, height: 320, pointerEvents: "none", opacity: 0.04 }}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="158" stroke="#E91E8C" strokeWidth="1.5" strokeDasharray="6 10" />
        </svg>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 64 }}>
          {/* Eyebrow */}
          <span className="faq-sub" style={{
            display: "inline-block", opacity: 0,
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#E91E8C", marginBottom: 22,
          }}>Frequently Asked Questions</span>

          {/* 3-D clip title */}
          <div
            className="faq-title-wrap"
            style={{ perspective: "900px", perspectiveOrigin: "50% 100%", marginBottom: 20 }}
          >
            <h2
              id="faq-heading"
              style={{ margin: 0, lineHeight: 1.1 }}
              aria-label="Everything you need to know"
            >
              {["Everything you", "need to know"].map((line, li) => (
                <div key={li} style={{ overflow: "hidden", display: "block", perspective: "700px" }}>
                  <span
                    className="faq-title-line"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-display)",
                      fontWeight: li === 0 ? 700 : 900,
                      fontSize: "clamp(2.2rem, 5vw, 4rem)",
                      color: li === 0 ? "#0D0D0D" : "transparent",
                      backgroundImage: li === 1
                        ? "linear-gradient(90deg, #E91E8C 0%, #C9A96E 100%)"
                        : "none",
                      WebkitBackgroundClip: li === 1 ? "text" : undefined,
                      backgroundClip: li === 1 ? "text" : undefined,
                      WebkitTextFillColor: li === 1 ? "transparent" : undefined,
                      letterSpacing: "-0.03em",
                      transformOrigin: "50% 100%",
                      opacity: 0,
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </h2>
          </div>

          <p className="faq-sub" style={{
            opacity: 0,
            fontFamily: "var(--font-body)", color: "#6B7280",
            fontSize: 16, lineHeight: 1.75, margin: 0,
            maxWidth: 520,
          }}>
            Everything you need to know about our courses, fees, and admissions at Luv U Beauty Academy.
          </p>
        </div>

        {/* ── Two-column layout: questions + sidebar ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: 48,
          alignItems: "start",
        }} className="faq-layout">

          {/* ── FAQ accordion list ── */}
          <div style={{
            background: "#fff",
            borderRadius: 20,
            border: "1px solid #F0F0F0",
            overflow: "hidden",
          }}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* ── Sticky sidebar ── */}
          <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Quick links by category */}
            <div style={{
              background: "#fff", borderRadius: 16,
              border: "1px solid #F0F0F0", padding: "24px 20px",
            }}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#9CA3AF", margin: "0 0 14px",
              }}>Browse by topic</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from(new Set(faqs.map(f => f.category))).map(cat => {
                  const idx = faqs.findIndex(f => f.category === cat);
                  const c = catColor[cat] ?? "#E91E8C";
                  return (
                    <button
                      key={cat}
                      onClick={() => setOpenIndex(idx)}
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "9px 12px", borderRadius: 8, border: "none",
                        background: openIndex === idx ? `${c}0D` : "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={e => { if (openIndex !== idx) (e.currentTarget as HTMLElement).style.background = "#F9FAFB"; }}
                      onMouseLeave={e => { if (openIndex !== idx) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: c, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13, fontWeight: 500,
                        color: openIndex === idx ? c : "#4B5563",
                        transition: "color 0.2s",
                      }}>{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="faq-cta"
              style={{
                opacity: 0,
                background: "#0D0D0D",
                borderRadius: 16, padding: "24px 20px",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Subtle pink glow */}
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 120, height: 120, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(233,30,140,0.25), transparent)",
                pointerEvents: "none",
              }} />

              <p style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700, fontSize: 18, color: "#fff",
                margin: "0 0 8px", lineHeight: 1.3, position: "relative",
              }}>Still have questions?</p>

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 13, color: "rgba(255,255,255,0.45)",
                margin: "0 0 20px", lineHeight: 1.6, position: "relative",
              }}>
                Our team is available Mon–Sun, 9AM–9PM to answer everything.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
                <a
                  href={WA}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "12px 16px", borderRadius: 10,
                    background: "#E91E8C", color: "#fff",
                    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5,
                    textDecoration: "none",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = ""; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Ask on WhatsApp
                </a>

                <a
                  href={`tel:+${PHONE}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "11px 16px", borderRadius: 10,
                    border: "1.5px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5,
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.3)"; el.style.color = "#fff"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.color = "rgba(255,255,255,0.7)"; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive collapse sidebar on mobile ── */}
      <style>{`
        @media (max-width: 768px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
          }
          .faq-layout > div:last-child {
            position: static !important;
          }
        }
        @media (max-width: 480px) {
          .faq-item button {
            padding-left: 16px !important;
          }
          .faq-item > div > div:last-child {
            padding-left: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
