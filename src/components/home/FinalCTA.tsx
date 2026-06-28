"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "919487992728";
const WA = `https://wa.me/${PHONE}?text=Hi! I'd like to enroll at Luv U Beauty Academy in Tanjore.`;
const WA_DEMO = `https://wa.me/${PHONE}?text=Hi! I'd like to book a free demo class at Luv U Beauty Academy.`;

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fcta-tag",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".fcta-tag", start: "top 85%" } }
      );
      gsap.fromTo(".fcta-heading",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out",
          scrollTrigger: { trigger: ".fcta-heading", start: "top 85%" } }
      );
      gsap.fromTo(".fcta-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".fcta-sub", start: "top 88%" } }
      );
      gsap.fromTo(".fcta-btn",
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".fcta-btn", start: "top 90%" } }
      );
      gsap.fromTo(".fcta-trust",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.08,
          scrollTrigger: { trigger: ".fcta-trust", start: "top 92%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "112px 0 96px", background: "#0D0D0D", position: "relative", overflow: "hidden" }}
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle pink glow — no garish orbs */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw", height: "60vw", maxWidth: 700, maxHeight: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Very subtle grid pattern */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 10 }}>

        {/* Tag */}
        <span className="fcta-tag" style={{
          display: "inline-block", opacity: 0,
          fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#E91E8C", marginBottom: 20,
        }}>Limited Seats Available</span>

        {/* Heading */}
        <h2
          id="final-cta-heading"
          className="fcta-heading"
          style={{
            opacity: 0,
            fontFamily: "Playfair Display, serif",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1,
            margin: "0 0 24px",
          }}
        >
          Start Your Beauty<br />
          <span style={{
            backgroundImage: "linear-gradient(90deg, #E91E8C, #C9A96E)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Career Today</span>
        </h2>

        {/* Sub */}
        <p className="fcta-sub" style={{
          opacity: 0,
          fontFamily: "Inter, sans-serif",
          color: "rgba(255,255,255,0.5)",
          fontSize: 16, lineHeight: 1.75,
          maxWidth: 460, margin: "0 auto 44px", textAlign: "center",
        }}>
          Join thousands of successful graduates from Tanjore and Tamil Nadu. Your transformation starts with a single step.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 36 }}>
          <a
            href={WA_DEMO}
            target="_blank" rel="noopener noreferrer"
            id="final-cta-demo-btn"
            className="fcta-btn"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 32px", borderRadius: 12,
              background: "#E91E8C", color: "#fff",
              fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 15,
              textDecoration: "none", whiteSpace: "nowrap",
              opacity: 0, transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = ""; }}
          >
            Book Free Demo Class
          </a>

          <a
            href={WA}
            target="_blank" rel="noopener noreferrer"
            id="final-cta-whatsapp-btn"
            className="fcta-btn"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 32px", borderRadius: 12,
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.15)",
              color: "#fff",
              fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 15,
              textDecoration: "none", whiteSpace: "nowrap",
              opacity: 0, transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.35)"; el.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.background = "transparent"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Now
          </a>

          <a
            href={`tel:+${PHONE}`}
            id="final-cta-call-btn"
            className="fcta-btn"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 28px", borderRadius: 12,
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 15,
              textDecoration: "none", whiteSpace: "nowrap",
              opacity: 0, transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.3)"; el.style.color = "#fff"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.color = "rgba(255,255,255,0.7)"; }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Us
          </a>
        </div>

        {/* Trust indicators */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 28px" }}>
          {["Free Demo Available","No Hidden Fees","Flexible Batches","EMI Available"].map(t => (
            <span
              key={t}
              className="fcta-trust"
              style={{
                fontFamily: "Inter,sans-serif", fontSize: 12.5,
                color: "rgba(255,255,255,0.35)", opacity: 0,
                display: "flex", alignItems: "center", gap: 7,
              }}
            >
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#E91E8C", opacity: 0.6, display: "inline-block" }} />
              {t}
            </span>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 480px) {
          #final-cta-demo-btn,
          #final-cta-whatsapp-btn,
          #final-cta-call-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
