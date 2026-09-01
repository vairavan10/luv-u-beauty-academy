"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scissors,
  Sparkles,
  Home,
  TrendingUp,
  Camera,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "919487992728";
const WA = `https://wa.me/${PHONE}?text=Hi! I want to learn more about career opportunities after completing a course at Luv U Beauty Academy.`;

const careers = [
  {
    Icon: Scissors,
    title: "Salon Professional",
    description: "Work at premium salons across Tanjore, Thanjavur & Chennai. Build a stable, well-paying career as a certified beauty professional.",
    salary: "₹15K – ₹40K / month",
  },
  {
    Icon: Sparkles,
    title: "Bridal Makeup Artist",
    description: "Build a premium bridal portfolio. Top artists in Tamil Nadu earn per-booking rates that rival a full-time salary.",
    salary: "₹5K – ₹25K / booking",
  },
  {
    Icon: Home,
    title: "Freelance Beautician",
    description: "Set your own hours. Home visits, events and private clients give you independence with excellent earning potential.",
    salary: "₹20K – ₹60K / month",
  },
  {
    Icon: TrendingUp,
    title: "Beauty Studio Owner",
    description: "Our salon management module teaches operations, accounts and hiring — everything to run a profitable business.",
    salary: "Unlimited potential",
  },
  {
    Icon: Camera,
    title: "Film & Fashion Makeup",
    description: "Work with Tamil film productions, fashion shows and photo studios. Advanced makeup opens doors to glamorous, high-paying roles.",
    salary: "₹30K – ₹1L+ / month",
  },
  {
    Icon: Globe,
    title: "International Opportunities",
    description: "Our graduates are placed in Dubai, Singapore & Gulf countries where certified Indian beauticians are in constant demand.",
    salary: "₹50K – ₹2L / month",
  },
];

const stats = [
  { number: "100%", label: "Placement Assistance" },
  { number: "50+",  label: "Hiring Partners" },
  { number: "90",   label: "Days Avg. Time to Hire" },
];

export default function PlacementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pl-header",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".pl-header", start: "top 82%" } }
      );
      gsap.fromTo(".career-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".career-card", start: "top 85%" } }
      );
      gsap.fromTo(".pl-stat",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".pl-stat", start: "top 88%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "96px 0 80px", background: "#fff" }}
      aria-labelledby="placement-heading"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div className="pl-header" style={{ maxWidth: 600, marginBottom: 64, opacity: 0 }}>
          <span style={{
            display: "inline-block",
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: "#E91E8C",
            marginBottom: 16,
          }}>Career Opportunities</span>

          <h2 id="placement-heading" style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#0D0D0D", letterSpacing: "-0.03em", lineHeight: 1.15,
            margin: "0 0 20px",
          }}>
            Your Beauty Career<br />
            <span style={{
              backgroundImage: "linear-gradient(90deg, #E91E8C 0%, #C2185B 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Awaits You</span>
          </h2>

          <p style={{
            fontFamily: "var(--font-body)", color: "#6B7280",
            fontSize: 16, lineHeight: 1.75, margin: 0,
          }}>
            A certificate from Luv U opens doors to incredible opportunities — from local salons to international stages.
          </p>
        </div>

        {/* ── Career Cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 1,
          border: "1px solid #F0F0F0",
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: 56,
          background: "#F0F0F0",
        }}>
          {careers.map(({ Icon, title, description, salary }) => (
            <div
              key={title}
              className="career-card"
              style={{
                opacity: 0,
                background: "#fff",
                padding: "32px 28px",
                transition: "background 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FFF5F8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
            >
              {/* Icon */}
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                border: "1.5px solid rgba(233,30,140,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, color: "#E91E8C",
                background: "rgba(233,30,140,0.04)",
              }}>
                <Icon size={20} strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600, fontSize: 17, color: "#0D0D0D",
                margin: "0 0 10px", lineHeight: 1.35,
              }}>{title}</h3>

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-body)", color: "#6B7280",
                fontSize: 14, lineHeight: 1.7, margin: "0 0 20px",
              }}>{description}</p>

              {/* Salary */}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E91E8C", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13, fontWeight: 600, color: "#E91E8C",
                }}>{salary}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats + CTA ── */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: 32,
          padding: "40px 48px",
          borderRadius: 20,
          background: "#0D0D0D",
        }} className="pl-bottom">

          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
            {stats.map((s, i) => (
              <div key={s.label} className="pl-stat" style={{ opacity: 0 }}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "#fff", margin: "0 0 4px", letterSpacing: "-0.03em", lineHeight: 1,
                }}>{s.number}{i === 2 ? " days" : ""}</p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.45)",
                  margin: 0, letterSpacing: "0.01em",
                }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WA}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 28px", borderRadius: 12,
              background: "#E91E8C", color: "#fff",
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
              textDecoration: "none", whiteSpace: "nowrap",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = ""; }}
          >
            Enquire About Placements
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .pl-bottom {
            padding: 28px 24px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .pl-bottom a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
