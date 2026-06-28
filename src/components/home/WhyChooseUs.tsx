"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  HandMetal,
  Award,
  Briefcase,
  Wrench,
  Building2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "919487992728";
const WA_DEMO = `https://wa.me/${PHONE}?text=Hi! I'd like to book a free demo class at Luv U Beauty Academy in Tanjore.`;

const features = [
  {
    Icon: GraduationCap,
    title: "Expert Trainers",
    description: "Learn from industry-certified beauticians with 10+ years of professional salon experience in Tanjore and Tamil Nadu.",
    points: ["10+ years experience", "Industry certified", "Active professionals"],
  },
  {
    Icon: HandMetal,
    title: "Hands-on from Day One",
    description: "Practice on real clients in our fully-equipped salon from your very first session. No theory-only classes.",
    points: ["Real client practice", "Fully equipped studio", "Live sessions"],
  },
  {
    Icon: Award,
    title: "Govt. Recognized Certification",
    description: "Receive certificates accepted by top salons, spas and beauty studios across India and internationally.",
    points: ["Govt. recognized", "Nationally valid", "Internationally accepted"],
  },
  {
    Icon: Briefcase,
    title: "100% Placement Support",
    description: "Our dedicated placement team connects you with top salons and studios. We stay with you until you have an offer.",
    points: ["Dedicated team", "Salon connects", "Career guidance"],
  },
  {
    Icon: Wrench,
    title: "Modern Equipment",
    description: "Train with the latest professional beauty tools and products used by top salons worldwide, updated each year.",
    points: ["Professional tools", "Premium products", "Updated curriculum"],
  },
  {
    Icon: Building2,
    title: "Real Salon Environment",
    description: "Our training facility is a fully functional salon — practice haircuts, facials, makeup and nail art with real clients.",
    points: ["Live salon setup", "Real clients", "Professional atmosphere"],
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".wc-header",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".wc-header", start: "top 82%" } }
      );
      gsap.fromTo(".wc-card",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".wc-card", start: "top 85%" } }
      );
      gsap.fromTo(".wc-cta",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".wc-cta", start: "top 88%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "96px 0 80px", background: "#FAFAFA" }}
      aria-labelledby="why-choose-heading"
    >
      {/* Hairline top border */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)", marginBottom: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header — editorial left-aligned ── */}
        <div className="wc-header" style={{ marginBottom: 64, opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
            {/* Left */}
            <div style={{ maxWidth: 520 }}>
              <span style={{
                fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase", color: "#E91E8C",
                display: "block", marginBottom: 16,
              }}>Why Choose Us</span>

              <h2 id="why-choose-heading" style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#0D0D0D", letterSpacing: "-0.03em", lineHeight: 1.15,
                margin: "0 0 20px",
              }}>
                Why Luv U Is Tanjore&apos;s<br />
                <span style={{
                  backgroundImage: "linear-gradient(90deg, #E91E8C, #C2185B)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>#1 Beauty Academy</span>
              </h2>

              <p style={{
                fontFamily: "Inter, sans-serif", color: "#6B7280",
                fontSize: 16, lineHeight: 1.75, margin: 0,
              }}>
                We don&apos;t just teach — we transform. Six reasons why our students choose Luv U over every other academy in Thanjavur.
              </p>
            </div>

            {/* Right — quick trust stat */}
            <div style={{
              borderLeft: "3px solid #E91E8C",
              paddingLeft: 24, alignSelf: "center",
            }}>
              <p style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 900, fontSize: "3rem",
                color: "#0D0D0D", margin: "0 0 4px", lineHeight: 1, letterSpacing: "-0.04em",
              }}>10+</p>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13, fontWeight: 500, color: "#9CA3AF", margin: 0,
              }}>Years of excellence<br />in Tanjore</p>
            </div>
          </div>
        </div>

        {/* ── Feature Grid — tiled, same-style cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 1,
          border: "1px solid #E5E7EB",
          borderRadius: 20,
          overflow: "hidden",
          background: "#E5E7EB",
          marginBottom: 56,
        }}>
          {features.map(({ Icon, title, description, points }) => (
            <div
              key={title}
              className="wc-card"
              style={{
                opacity: 0,
                background: "#fff",
                padding: "32px 28px",
                transition: "background 0.2s ease",
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
                fontFamily: "Inter, sans-serif",
                fontWeight: 600, fontSize: 17, color: "#0D0D0D",
                margin: "0 0 10px", lineHeight: 1.35,
              }}>{title}</h3>

              {/* Description */}
              <p style={{
                fontFamily: "Inter, sans-serif", color: "#6B7280",
                fontSize: 14, lineHeight: 1.7, margin: "0 0 20px",
              }}>{description}</p>

              {/* Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {points.map(pt => (
                  <div key={pt} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13, color: "#4B5563", fontWeight: 500,
                    }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Demo CTA Bar ── */}
        <div
          className="wc-cta"
          style={{
            opacity: 0,
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: 24, padding: "32px 40px",
            borderRadius: 16,
            border: "1px solid #F0F0F0",
            background: "#fff",
          }}
        >
          <div>
            <p style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700, fontSize: "clamp(1.2rem,2.5vw,1.6rem)",
              color: "#0D0D0D", margin: "0 0 6px", lineHeight: 1.3,
            }}>Book a Free Demo Class</p>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14, color: "#6B7280", margin: 0,
            }}>Experience our training quality firsthand. No commitment required.</p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={WA_DEMO}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", borderRadius: 10,
                background: "#E91E8C", color: "#fff",
                fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = ""; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book via WhatsApp
            </a>
            <a
              href={`tel:+${PHONE}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", borderRadius: 10,
                border: "1.5px solid #E5E7EB",
                color: "#374151", background: "#fff",
                fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E91E8C"; el.style.color = "#E91E8C"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E5E7EB"; el.style.color = "#374151"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .wc-cta {
            padding: 24px 20px !important;
          }
          .wc-cta div:last-child {
            width: 100%;
          }
          .wc-cta div:last-child a {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
