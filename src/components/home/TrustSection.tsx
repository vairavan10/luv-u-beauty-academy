"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 100, suffix: "+", label: "Students Trained", sub: "Across Tanjore & Tamil Nadu" },
  { number: 8, suffix: "+", label: "Years of Excellence", sub: "Premium beauty education" },
  { number: 100, suffix: "+", label: "Certificates Issued", sub: "Govt. recognized credentials" },
  { number: 100, suffix: "%", label: "Placement Support", sub: "Career assistance & guidance" },
];

const cities = [
  "Tanjore", "Thanjavur", "Kumbakonam", "Papanasam", "Pattukkottai",
  "Peravurani", "Orathanadu", "Thiruvaiyaru", "Budalur", "Mannargudi",
  "Tanjore","Thanjavur","Kumbakonam","Papanasam","Pattukkottai",
  "Peravurani","Orathanadu","Thiruvaiyaru","Budalur","Mannargudi",
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const el  = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const t0 = performance.now();
      const dur = 1800;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (el.current) obs.observe(el.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={el}>{val.toLocaleString()}{suffix}</span>;
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ts-header",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".ts-header", start: "top 80%" } }
      );
      gsap.fromTo(".ts-stat",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".ts-stat", start: "top 82%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#fff", padding: "96px 0 0", position: "relative", overflow: "hidden" }}
      aria-labelledby="trust-heading"
    >
      {/* Hairline top separator */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div className="ts-header" style={{ textAlign: "center", marginBottom: 72, opacity: 0 }}>
          <span style={{
            fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#E91E8C", display: "block", marginBottom: 16,
          }}>Our Track Record</span>

          <h2 id="trust-heading" style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#0D0D0D", letterSpacing: "-0.03em", lineHeight: 1.15,
            margin: "0 0 18px",
          }}>
            Numbers That Speak{" "}
            <span style={{
              backgroundImage: "linear-gradient(90deg, #E91E8C, #C9A96E)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>for Themselves</span>
          </h2>

          <p style={{
            fontFamily: "Inter, sans-serif", color: "#6B7280",
            fontSize: 16, lineHeight: 1.75,
            maxWidth: 460, margin: "0 auto", textAlign: "center",
          }}>
            Trusted by thousands of students across Tanjore and Tamil Nadu for premium beauty education.
          </p>
        </div>

        {/* ── Stat Grid — clean, no rainbow ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          border: "1px solid #F0F0F0",
          borderRadius: 20,
          overflow: "hidden",
          background: "#F0F0F0",
          marginBottom: 0,
        }} className="ts-grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="ts-stat"
              style={{
                opacity: 0,
                background: "#fff",
                padding: "44px 28px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #F0F0F0" : "none",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FFF5F8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
            >
              {/* Number */}
              <p style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 4vw, 4rem)",
                margin: "0 0 8px",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                backgroundImage: "linear-gradient(135deg, #E91E8C, #C2185B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                <Counter target={s.number} suffix={s.suffix} />
              </p>

              {/* Label */}
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600, fontSize: 15, color: "#0D0D0D",
                margin: "0 0 6px",
              }}>{s.label}</p>

              {/* Sub */}
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12.5, color: "#9CA3AF", margin: 0,
              }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── City marquee ── */}
        <div style={{ padding: "56px 0 64px", overflow: "hidden" }}>
          <p style={{
            textAlign: "center",
            fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#D1D5DB", marginBottom: 20,
          }}>Trusted by students across</p>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />

            <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
              {cities.map((city, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", padding: "0 20px", fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 500, color: "#6B7280" }}>
                  {city}
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#E91E8C", opacity: 0.4, display: "inline-block", marginLeft: 20, flexShrink: 0 }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stack stat grid */}
      <style>{`
        @media (max-width: 768px) {
          .ts-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .ts-grid > div:nth-child(odd) {
            border-right: 1px solid #F0F0F0 !important;
          }
          .ts-grid > div:nth-child(1),
          .ts-grid > div:nth-child(2) {
            border-bottom: 1px solid #F0F0F0 !important;
          }
        }
        @media (max-width: 480px) {
          .ts-grid {
            grid-template-columns: 1fr !important;
          }
          .ts-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #F0F0F0 !important;
          }
        }
      `}</style>
    </section>
  );
}
