"use client";

import Link from "next/link";
import Image from "next/image";
import { stats } from "@/data/stats";

const PHONE = "9487992728";
const WA = `https://wa.me/91${PHONE}?text=Hi! I'd like to enquire about courses at Luv U Beauty Academy.`;
const MAPS = "https://maps.app.goo.gl/P5NReP1tEzQtqsZV9";
const EMAIL = "luvubeautyacademy@gmail.com";
const ADDRESS = "No.26, Philomina Nagar, Near Don Bosco School, Yagappa Nagar, Thanjavur – 613006";

const font = "var(--font-body)";
const serif = "var(--font-display)";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Courses", href: "/courses" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const courseLinks = [
  { label: "Professional Beautician", href: "/courses/professional-beautician-course" },
  { label: "Bridal Makeup", href: "/courses/bridal-makeup-course" },
  { label: "Hair Styling", href: "/courses/hair-styling-course" },
  { label: "Nail Art", href: "/courses/nail-art-course" },
  { label: "Skin Care Training", href: "/courses/skin-care-training" },
  { label: "Salon Management", href: "/courses/salon-management-course" },
  { label: "Advanced Makeup", href: "/courses/advanced-makeup-course" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/luvubeautyacademy",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/luvubeautyacademy",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@luvubeautyacademy",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
];

/* ─── small icon wrapper ─── */
function InfoIcon({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      width: 34, height: 34, borderRadius: 10, flexShrink: 0,
      background: "rgba(233,30,140,0.14)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>{children}</span>
  );
}

/* ─── section heading ─── */
function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: font, fontWeight: 700, fontSize: 11,
      letterSpacing: "0.16em", textTransform: "uppercase",
      color: "#E91E8C", marginBottom: 22,
    }}>{children}</p>
  );
}

export default function Footer() {
  return (
    <footer style={{ fontFamily: font }}>

      {/* ══ STATS BAND ══ */}
      <div style={{ background: "linear-gradient(135deg, #C2185B 0%, #E91E8C 50%, #AD1457 100%)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/*
            No inline gridTemplateColumns here: an inline style beats Tailwind's
            responsive classes, which pinned this to four ~71px columns on
            phones and overflowed the container. The classes below own the
            column count.
          */}
          <div style={{ gap: 24 }} className="grid grid-cols-2 md:grid-cols-4">
            {[
              { v: stats.studentsTrained, l: "Students Trained" },
              { v: stats.yearsActive, l: "Years of Excellence" },
              { v: stats.placement, l: stats.placementLabel },
              { v: `${stats.googleRating}★`, l: "Google Rating" },
            ].map(s => (
              <div key={s.l} style={{ textAlign: "center", padding: "8px 0" }}>
                <p style={{
                  fontFamily: serif,
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",            /* ← explicit white, no class conflict */
                  margin: "0 0 8px 0",
                  textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}>{s.v}</p>
                <p style={{
                  fontFamily: font, fontWeight: 500,
                  fontSize: 13, color: "rgba(255,255,255,0.82)",
                  margin: 0, letterSpacing: "0.02em",
                }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ MAIN BODY ══ */}
      <div style={{ background: "#0F0F0F", padding: "72px 24px 52px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gap: 48 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12"
          >

            {/* ── BRAND COLUMN ── */}
            <div className="lg:col-span-4" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* Logo */}
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: 20 }}>
                <div style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "8px 16px",
                  display: "inline-flex",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                }}>
                  <Image
                    src="/logo.jpg"
                    alt="Luv U Beauty Academy"
                    width={140}
                    height={56}
                    style={{ objectFit: "contain", display: "block" }}
                    priority
                  />
                </div>
              </Link>

              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#9CA3AF", maxWidth: 310, margin: "0 0 24px" }}>
                Thanjavur&apos;s most trusted beauty training institute — empowering women with professional skills, govt. certification &amp; placement support since 2018.
              </p>

              {/* Socials */}
              <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: "rgba(255,255,255,0.06)", color: "#9CA3AF",
                      border: "1px solid rgba(255,255,255,0.09)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s ease", textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(233,30,140,0.2)";
                      el.style.borderColor = "rgba(233,30,140,0.4)";
                      el.style.color = "#F06292";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.06)";
                      el.style.borderColor = "rgba(255,255,255,0.09)";
                      el.style.color = "#9CA3AF";
                      el.style.transform = "";
                    }}
                  >{s.icon}</a>
                ))}
              </div>

              {/* WhatsApp card */}
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 18px", borderRadius: 16,
                  background: "rgba(233,30,140,0.08)",
                  border: "1px solid rgba(233,30,140,0.2)",
                  textDecoration: "none", transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(233,30,140,0.14)"; el.style.borderColor = "rgba(233,30,140,0.35)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(233,30,140,0.08)"; el.style.borderColor = "rgba(233,30,140,0.2)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: "#FFFFFF", margin: "0 0 2px" }}>Chat on WhatsApp</p>
                    <p style={{ fontFamily: font, fontSize: 12, color: "#6B7280", margin: 0 }}>Instant reply · Mon–Sun</p>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>

            {/* ── QUICK LINKS ── */}
            <div className="lg:col-span-2">
              <ColHead>Quick Links</ColHead>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {quickLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      fontFamily: font, fontSize: 14.5, color: "#9CA3AF",
                      textDecoration: "none", transition: "color 0.15s ease",
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F9A8D4"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9CA3AF"}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E91E8C", opacity: 0.6, flexShrink: 0 }} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COURSES ── */}
            <div className="lg:col-span-3">
              <ColHead>Our Courses</ColHead>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {courseLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      fontFamily: font, fontSize: 14.5, color: "#9CA3AF",
                      textDecoration: "none", transition: "color 0.15s ease",
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F9A8D4"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9CA3AF"}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(201,169,110,0.7)", flexShrink: 0 }} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── CONTACT ── */}
            <div className="lg:col-span-3">
              <ColHead>Get in Touch</ColHead>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Address */}
                <a href={MAPS} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", gap: 14, textDecoration: "none" }}
                  onMouseEnter={e => { const p = (e.currentTarget as HTMLElement).querySelector("span.t") as HTMLElement; if (p) p.style.color = "#F9A8D4"; }}
                  onMouseLeave={e => { const p = (e.currentTarget as HTMLElement).querySelector("span.t") as HTMLElement; if (p) p.style.color = "#9CA3AF"; }}
                >
                  <InfoIcon>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </InfoIcon>
                  <span className="t" style={{ fontFamily: font, fontSize: 14, color: "#9CA3AF", lineHeight: 1.65, transition: "color 0.15s ease" }}>
                    {ADDRESS}
                  </span>
                </a>

                {/* Phone */}
                <a href={`tel:+91${PHONE}`}
                  style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
                  onMouseEnter={e => { const s = (e.currentTarget as HTMLElement).querySelector("span.t") as HTMLElement; if (s) s.style.color = "#F9A8D4"; }}
                  onMouseLeave={e => { const s = (e.currentTarget as HTMLElement).querySelector("span.t") as HTMLElement; if (s) s.style.color = "#9CA3AF"; }}
                >
                  <InfoIcon>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.63 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </InfoIcon>
                  <span className="t" style={{ fontFamily: font, fontSize: 15, fontWeight: 500, color: "#9CA3AF", transition: "color 0.15s ease" }}>
                    +91 {PHONE}
                  </span>
                </a>

                {/* Email */}
                <a href={`mailto:${EMAIL}`}
                  style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
                  onMouseEnter={e => { const s = (e.currentTarget as HTMLElement).querySelector("span.t") as HTMLElement; if (s) s.style.color = "#F9A8D4"; }}
                  onMouseLeave={e => { const s = (e.currentTarget as HTMLElement).querySelector("span.t") as HTMLElement; if (s) s.style.color = "#9CA3AF"; }}
                >
                  <InfoIcon>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </InfoIcon>
                  <span className="t" style={{ fontFamily: font, fontSize: 13.5, color: "#9CA3AF", wordBreak: "break-all", transition: "color 0.15s ease" }}>
                    {EMAIL}
                  </span>
                </a>

                {/* Hours */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <InfoIcon>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </InfoIcon>
                  <div>
                    <p style={{ fontFamily: font, fontSize: 14, color: "#9CA3AF", margin: "0 0 4px" }}>Mon – Sat · 9:00 AM – 6:00 PM</p>
                    <p style={{ fontFamily: font, fontSize: 12, color: "#4B5563", margin: 0 }}>Sunday: Closed</p>
                  </div>
                </div>

                {/* Directions button */}
                <a href={MAPS} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "12px 18px", borderRadius: 12,
                    border: "1px solid rgba(233,30,140,0.25)",
                    background: "rgba(233,30,140,0.07)",
                    color: "#F9A8D4",
                    fontFamily: font, fontSize: 13.5, fontWeight: 600,
                    textDecoration: "none", transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(233,30,140,0.14)"; el.style.borderColor = "rgba(233,30,140,0.4)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(233,30,140,0.07)"; el.style.borderColor = "rgba(233,30,140,0.25)"; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontFamily: font, fontSize: 13, color: "#4B5563", margin: 0 }}>
            © {new Date().getFullYear()} <span style={{ color: "#E91E8C", fontWeight: 600 }}>Luv U Beauty Academy</span>, Thanjavur. All rights reserved.
          </p>
          <p style={{ fontFamily: font, fontSize: 12, color: "#374151", margin: 0 }}>
            Made with 💗 in Thanjavur, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
