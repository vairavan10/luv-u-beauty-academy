"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "919487992728";
const WA = `https://wa.me/${PHONE}?text=Hi! I want to enquire about courses at Luv U Beauty Academy in Tanjore.`;

const contactCards = [
  {
    id: "address",
    label: "Visit Us",
    value: "No.26, Philomina Nagar, Near Don Bosco School, Yagappa Nagar, Thanjavur – 613006",
    link: "https://maps.app.goo.gl/P5NReP1tEzQtqsZV9",
    linkLabel: "Open in Maps →",
  },
  {
    id: "phone",
    label: "Call / WhatsApp",
    value: "+91 9487 992 728",
    link: `tel:+${PHONE}`,
    linkLabel: "Call Now →",
  },
  {
    id: "hours",
    label: "Working Hours",
    value: "Monday – Saturday\n9:00 AM – 6:00 PM",
    link: null,
    linkLabel: null,
  },
];

export default function ContactClient() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero title 3D reveal */
      gsap.fromTo(".ct-line",
        { yPercent: 110, rotateX: 22, opacity: 0 },
        { yPercent: 0, rotateX: 0, opacity: 1, duration: 0.9, stagger: 0.13, ease: "power4.out", delay: 0.1 }
      );
      gsap.fromTo(".ct-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.5 }
      );

      /* Cards stagger */
      gsap.fromTo(".ct-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-card", start: "top 85%" } }
      );

      /* Form block */
      gsap.fromTo(".ct-form",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-form", start: "top 82%" } }
      );

      /* Map slide up */
      gsap.fromTo(".ct-map",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-map", start: "top 88%" } }
      );

    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} style={{ paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section style={{
        padding: "72px 24px 60px",
        background: "#0D0D0D",
        position: "relative", overflow: "hidden",
      }}>
        {/* Grid texture */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px", pointerEvents: "none",
        }} />
        {/* Pink glow */}
        <div aria-hidden style={{
          position: "absolute", bottom: -60, right: "10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,30,140,0.12), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Eyebrow */}
          <span className="ct-sub" style={{
            display: "inline-block", opacity: 0,
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#E91E8C", marginBottom: 24,
          }}>Get in Touch</span>

          {/* 3D headline */}
          <h1 style={{ margin: "0 0 24px", perspective: "900px" }} aria-label="Let's start your beauty journey">
            {["Let's start your", "beauty journey"].map((line, li) => (
              <div key={li} style={{ overflow: "hidden", display: "block", perspective: "700px", lineHeight: 1.1 }}>
                <span
                  className="ct-line"
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-display)",
                    fontWeight: li === 0 ? 700 : 900,
                    fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                    color: li === 0 ? "#fff" : "transparent",
                    backgroundImage: li === 1 ? "linear-gradient(90deg, #E91E8C 0%, #C9A96E 100%)" : "none",
                    WebkitBackgroundClip: li === 1 ? "text" : undefined,
                    backgroundClip: li === 1 ? "text" : undefined,
                    WebkitTextFillColor: li === 1 ? "transparent" : undefined,
                    letterSpacing: "-0.03em",
                    transformOrigin: "50% 100%",
                    opacity: 0,
                  }}
                >{line}</span>
              </div>
            ))}
          </h1>

          <p className="ct-sub" style={{
            opacity: 0,
            fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)",
            fontSize: 17, lineHeight: 1.75,
            maxWidth: 520, margin: "0 0 36px",
          }}>
            Ready to transform your career? Reach out and we&apos;ll respond via WhatsApp within minutes.
          </p>

          {/* Quick CTA buttons */}
          <div className="ct-sub" style={{ display: "flex", flexWrap: "wrap", gap: 12, opacity: 0 }}>
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", borderRadius: 12,
                background: "#E91E8C", color: "#fff",
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14,
                textDecoration: "none", whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(233,30,140,0.35)",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity="0.88"; el.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity="1"; el.style.transform=""; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
            <a
              href={`tel:+${PHONE}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", borderRadius: 12,
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)", background: "transparent",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,0.35)"; el.style.color="#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,0.15)"; el.style.color="rgba(255,255,255,0.7)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS with React Icons ── */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="ct-cards-grid">
            {contactCards.map(card => (
              <div
                key={card.id}
                className="ct-card"
                style={{
                  opacity: 0,
                  background: "#FAFAFA", borderRadius: 20,
                  border: "1px solid #F0F0F0", padding: "32px 24px",
                  transition: "background 0.2s, border-color 0.2s, transform 0.25s, box-shadow 0.25s",
                  cursor: card.link ? "pointer" : "default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#FFF5F8";
                  el.style.borderColor = "rgba(233,30,140,0.2)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 40px rgba(233,30,140,0.08)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#FAFAFA";
                  el.style.borderColor = "#F0F0F0";
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
              >
                {/* Beautiful custom icon container */}
                <div 
                  className="card-icon-wrapper"
                  style={{ 
                    width: 54, height: 54, borderRadius: 14,
                    background: "rgba(233,30,140,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#E91E8C", marginBottom: 24,
                    transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
                  }}
                >
                  {card.id === "address" && <MapPin size={24} strokeWidth={2} />}
                  {card.id === "phone" && <Phone size={24} strokeWidth={2} />}
                  {card.id === "hours" && <Clock size={24} strokeWidth={2} />}
                </div>

                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#E91E8C", margin: "0 0 10px",
                }}>{card.label}</p>

                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15,
                  color: "#0D0D0D", fontWeight: 500,
                  lineHeight: 1.65, margin: "0 0 16px",
                  whiteSpace: "pre-line",
                }}>{card.value}</p>

                {card.link && (
                  <a href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                      color: "#E91E8C", textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: 4,
                      // Was 22px tall — under the 24px WCAG 2.5.8 floor.
                      minHeight: 44, paddingTop: 8, paddingBottom: 8,
                    }}
                    onClick={e => e.stopPropagation()}
                  >{card.linkLabel}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN FORM + SIDE INFO ── */}
      <section style={{ padding: "0 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, alignItems: "start" }} className="ct-main-grid">

            {/* Form */}
            <div
              className="ct-form"
              style={{
                opacity: 0,
                background: "#fff",
                borderRadius: 24, padding: "40px",
                border: "1px solid #F0F0F0",
                boxShadow: "0 4px 32px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ marginBottom: 28 }}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)",
                  color: "#0D0D0D", letterSpacing: "-0.025em",
                  margin: "0 0 10px", lineHeight: 1.2,
                }}>Send an Enquiry</h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: "#6B7280", margin: 0, lineHeight: 1.6,
                }}>
                  Fill in the form and we&apos;ll respond via WhatsApp within minutes.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: 100 }} className="ct-form">
              {/* Academy info */}
              <div style={{
                background: "#0D0D0D", borderRadius: 20, padding: "32px 28px",
                marginBottom: 16, position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: -30, right: -30,
                  width: 150, height: 150, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(233,30,140,0.2), transparent)",
                  pointerEvents: "none",
                }} />
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 20, color: "#fff", margin: "0 0 6px", lineHeight: 1.3,
                }}>Luv U Beauty Academy</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "0 0 24px" }}>
                  Tanjore&apos;s #1 Beauty Training Institute
                </p>

                {[
                  { icon: "📍", text: "No.26, Philomina Nagar, Yagappa Nagar, Thanjavur – 613006" },
                  { icon: "📞", text: "+91 9487 992 728" },
                  { icon: "⏰", text: "Mon–Sun · 9 AM – 9 PM" },
                  { icon: "✉️", text: "luvubeautyacademy@gmail.com" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>{text}</span>
                  </div>
                ))}

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginTop: 8, display: "flex", gap: 12 }}>
                  {[
                    { href: "https://instagram.com/luvubeautyacademy", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                    { href: "https://facebook.com/luvubeautyacademy", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                    { href: "https://youtube.com/@luvubeautyacademy", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                  ].map(({ href, icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      style={{
                        width: 38, height: 38, borderRadius: 10,
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "rgba(255,255,255,0.5)",
                        transition: "border-color 0.2s, color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="#E91E8C"; el.style.color="#E91E8C"; el.style.background="rgba(233,30,140,0.08)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,0.1)"; el.style.color="rgba(255,255,255,0.5)"; el.style.background="transparent"; }}
                    >{icon}</a>
                  ))}
                </div>
              </div>

              {/* Free demo card */}
              <div style={{
                borderRadius: 20, padding: "24px",
                border: "1.5px solid rgba(233,30,140,0.2)",
                background: "rgba(233,30,140,0.03)",
              }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#0D0D0D", margin: "0 0 8px" }}>
                  Book a Free Demo Class
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "#6B7280", margin: "0 0 18px", lineHeight: 1.6 }}>
                  Experience our training firsthand. No commitment, no fees.
                </p>
                <a
                  href={`https://wa.me/${PHONE}?text=Hi! I'd like to book a free demo class at Luv U Beauty Academy.`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "12px 20px", borderRadius: 12,
                    background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                    color: "#fff", fontFamily: "var(--font-body)",
                    fontWeight: 700, fontSize: 14, textDecoration: "none",
                    boxShadow: "0 4px 18px rgba(233,30,140,0.3)",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity="0.88"; el.style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity="1"; el.style.transform=""; }}
                >
                  Book Free Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ padding: "0 24px 80px", background: "#fff" }}>
        <div className="ct-map" style={{ maxWidth: 1100, margin: "0 auto", opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
            <div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#E91E8C" }}>Find Us</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.4rem,3vw,2rem)", color: "#0D0D0D", margin: "6px 0 0", letterSpacing: "-0.025em" }}>
                Visit Us in Thanjavur
              </h2>
            </div>
            <a
              href="https://maps.app.goo.gl/P5NReP1tEzQtqsZV9"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "10px 20px", borderRadius: 10,
                border: "1.5px solid #E5E7EB", background: "#fff",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
                color: "#374151", textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="#E91E8C"; el.style.color="#E91E8C"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="#E5E7EB"; el.style.color="#374151"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Open in Google Maps
            </a>
          </div>

          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #F0F0F0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", height: 420 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0!2d79.1378!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI2LjAiTiA3OcKwMDgnMTYuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luv U Beauty Academy – Philomina Nagar, Yagappa Nagar, Thanjavur"
            />
          </div>
        </div>
      </section>

      {/* ── Responsive & Dynamic Animations ── */}
      <style>{`
        .ct-card:hover .card-icon-wrapper {
          background: #E91E8C !important;
          color: #fff !important;
          transform: scale(1.1) rotate(6deg);
        }
        @media (max-width: 900px) {
          .ct-main-grid { grid-template-columns: 1fr !important; }
          .ct-main-grid > div:last-child { position: static !important; }
        }
        @media (max-width: 700px) {
          .ct-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .ct-form { padding: 24px 20px !important; }
        }
      `}</style>
    </main>
  );
}
