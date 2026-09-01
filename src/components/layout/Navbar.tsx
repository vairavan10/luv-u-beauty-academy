"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const PHONE = "9487992728";
const WA = `https://wa.me/91${PHONE}?text=Hi! I'm interested in enrolling at Luv U Beauty Academy.`;

const courses = [
  { label: "Professional Beautician", href: "/courses/professional-beautician-course", emoji: "💄" },
  { label: "Bridal Makeup", href: "/courses/bridal-makeup-course", emoji: "👰" },
  { label: "Hair Styling", href: "/courses/hair-styling-course", emoji: "✂️" },
  { label: "Nail Art", href: "/courses/nail-art-course", emoji: "💅" },
  { label: "Skin Care", href: "/courses/skin-care-training", emoji: "🌿" },
  { label: "Salon Management", href: "/courses/salon-management-course", emoji: "🏪" },
  { label: "Advanced Makeup", href: "/courses/advanced-makeup-course", emoji: "🎨" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses", dropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showDrop, setShowDrop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCourses, setMobileCourses] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /*
   * Close every menu when the route changes.
   * Done by adjusting state during render rather than in an effect — calling
   * setState synchronously inside an effect triggers a second render pass on
   * every navigation, and trips the react-hooks/set-state-in-effect rule which
   * fails CI. See https://react.dev/learn/you-might-not-need-an-effect
   */
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setShowDrop(false);
    setMobileCourses(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const onEnter = () => { if (timer.current) clearTimeout(timer.current); setShowDrop(true); };
  const onLeave = () => { timer.current = setTimeout(() => setShowDrop(false), 120); };

  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9999,
        background: `linear-gradient(90deg, #E91E8C ${progress}%, transparent ${progress}%)`,
        boxShadow: progress > 0 ? "0 0 10px rgba(233,30,140,0.5)" : "none",
        transition: "background 0.1s linear",
      }} aria-hidden />

      {/* Announcement bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 48,
        height: 36,
        background: "linear-gradient(90deg, #C2185B, #E91E8C)",
        display: "flex", alignItems: "center",
        transform: scrolled ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", width: "100%",
          padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span
            className="anno-promo"
            style={{
              color: "rgba(255,255,255,0.9)", fontSize: 12, fontFamily: "var(--font-body)",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}
          >
            {/* Short copy on phones — the full sentence cannot fit in 36px there. */}
            <span className="anno-long">🌸 Tanjore&apos;s #1 Beauty Academy — Free Demo Class Available!</span>
            <span className="anno-short">🌸 Free Demo Class Available!</span>
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
            <a href={`tel:+91${PHONE}`} style={{
              color: "rgba(255,255,255,0.92)", fontSize: 12,
              fontFamily: "var(--font-body)", fontWeight: 600,
              display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
              // Fills the bar's full height. 44px is impossible here — the bar
              // is a fixed 36px and the header is offset by exactly that much.
              // 116x36 still clears the 24x24 WCAG 2.5.8 minimum comfortably.
              height: 36, padding: "0 4px",
            }}>
              <Phone size={11} color="white" /> +91 {PHONE}
            </a>
            <span className="anno-hours" style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>|</span>
            <span className="anno-hours" style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}>
              Mon–Sun · 9AM–9PM
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header style={{
        position: "fixed", left: 0, right: 0, zIndex: 50,
        top: scrolled ? 0 : 36,
        transition: "top 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease, background 0.3s ease",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 0 0 1px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.07)"
          : "0 1px 0 rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            height: scrolled ? 64 : 72,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            transition: "height 0.3s ease",
            gap: 8,
          }}>

            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
              <Image
                src="/logo.jpg"
                alt="Luv U Beauty Academy"
                width={130}
                height={52}
                style={{ objectFit: "contain", display: "block" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav style={{ alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }} className="hidden lg:flex">
              {links.map((l) => {
                const isAct = active(l.href);
                if (l.dropdown) {
                  return (
                    <div key={l.href} style={{ position: "relative" }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                      <button style={{
                        display: "flex", alignItems: "center", gap: 5,
                        padding: "8px 14px", borderRadius: 10, border: "none", cursor: "pointer",
                        background: isAct ? "rgba(233,30,140,0.07)" : "transparent",
                        color: isAct ? "#E91E8C" : "#374151",
                        fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14,
                        transition: "all 0.15s ease",
                      }}
                        onMouseEnter={e => { Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(233,30,140,0.07)", color: "#E91E8C" }); }}
                        onMouseLeave={e => { Object.assign((e.currentTarget as HTMLElement).style, { background: isAct ? "rgba(233,30,140,0.07)" : "transparent", color: isAct ? "#E91E8C" : "#374151" }); }}
                      >
                        {l.label}
                        <ChevronDown size={13} color="#E91E8C" style={{ transform: showDrop ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                      </button>

                      {showDrop && (
                        <div style={{
                          position: "absolute", top: "calc(100% + 10px)",
                          left: "50%", transform: "translateX(-50%)",
                          width: 270, background: "#fff",
                          borderRadius: 16, padding: 8,
                          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(233,30,140,0.08)",
                          border: "1px solid rgba(233,30,140,0.1)", zIndex: 100,
                        }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                          <p style={{
                            fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                            textTransform: "uppercase", color: "#E91E8C",
                            padding: "8px 12px 6px", fontFamily: "var(--font-body)",
                          }}>Our Courses</p>
                          {courses.map(c => (
                            <Link key={c.href} href={c.href} style={{
                              display: "flex", alignItems: "center", gap: 10,
                              padding: "9px 12px", borderRadius: 10,
                              color: pathname === c.href ? "#E91E8C" : "#4B5563",
                              background: pathname === c.href ? "rgba(233,30,140,0.06)" : "transparent",
                              fontFamily: "var(--font-body)", fontSize: 13.5,
                              fontWeight: pathname === c.href ? 600 : 400,
                              textDecoration: "none", transition: "all 0.12s ease",
                            }}
                              onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(233,30,140,0.06)", color: "#E91E8C" })}
                              onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, { background: pathname === c.href ? "rgba(233,30,140,0.06)" : "transparent", color: pathname === c.href ? "#E91E8C" : "#4B5563" })}
                            >
                              <span style={{ fontSize: 16 }}>{c.emoji}</span>
                              {c.label}
                            </Link>
                          ))}
                          <div style={{ borderTop: "1px solid rgba(233,30,140,0.08)", marginTop: 4, padding: "8px 12px 4px" }}>
                            <Link href="/courses" style={{
                              fontSize: 12, fontWeight: 600, color: "#E91E8C",
                              fontFamily: "var(--font-body)", textDecoration: "none",
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                            }}>
                              <span>View all courses</span><span>→</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link key={l.href} href={l.href} style={{
                    padding: "8px 14px", borderRadius: 10,
                    fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14,
                    color: isAct ? "#E91E8C" : "#374151",
                    background: isAct ? "rgba(233,30,140,0.07)" : "transparent",
                    textDecoration: "none", transition: "all 0.15s ease",
                  }}
                    onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(233,30,140,0.07)", color: "#E91E8C" })}
                    onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, { background: isAct ? "rgba(233,30,140,0.07)" : "transparent", color: isAct ? "#E91E8C" : "#374151" })}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA */}
            <div style={{ alignItems: "center", gap: 12, flexShrink: 0 }} className="hidden lg:flex">
              <a href={`tel:+91${PHONE}`} style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
                color: "#555", textDecoration: "none",
              }}>
                <span style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: "rgba(233,30,140,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Phone size={13} color="#E91E8C" />
                </span>
                {PHONE}
              </a>
              <div style={{ width: 1, height: 22, background: "#E5E7EB" }} />
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 12,
                background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                color: "white", fontFamily: "var(--font-body)",
                fontWeight: 600, fontSize: 13.5, textDecoration: "none",
                boxShadow: "0 4px 16px rgba(233,30,140,0.3)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Enroll Free
              </a>
            </div>

            {/* Mobile hamburger */}
            {/*
              Display lives in the className, not the inline style: an inline
              `display: "flex"` overrides `lg:hidden`, which left the hamburger
              visible on desktop next to the full nav.
            */}
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{
              width: 44, height: 44, borderRadius: 12, border: "1px solid",
              borderColor: mobileOpen ? "rgba(233,30,140,0.3)" : "rgba(0,0,0,0.1)",
              background: mobileOpen ? "rgba(233,30,140,0.06)" : "transparent",
              cursor: "pointer", transition: "all 0.2s ease",
            }} className="lg:hidden flex items-center justify-center" aria-label="Menu">
              {mobileOpen ? <X size={20} color="#E91E8C" /> : <Menu size={20} color="#374151" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div onClick={() => setMobileOpen(false)} style={{
        position: "fixed", inset: 0, zIndex: 40,
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }} />

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 51,
        width: "min(340px, 88vw)",
        background: "#fff",
        boxShadow: "-4px 0 40px rgba(0,0,0,0.15)",
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
        overflowY: "auto",
      }}>
        {/* Drawer header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 20px 16px",
          borderBottom: "1px solid #F3F4F6",
        }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.jpg"
              alt="Luv U Beauty Academy"
              width={110}
              height={44}
              style={{ objectFit: "contain", display: "block" }}
              priority
            />
          </Link>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{
            width: 44, height: 44, borderRadius: 10,
            background: "rgba(233,30,140,0.06)", border: "1px solid rgba(233,30,140,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <X size={18} color="#E91E8C" />
          </button>
        </div>

        {/* Phone strip */}
        <div style={{
          margin: "12px 16px", padding: "12px 16px", borderRadius: 12,
          background: "rgba(233,30,140,0.04)", border: "1px solid rgba(233,30,140,0.12)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#6B7280" }}>📞 Call us anytime</span>
          <a href={`tel:+91${PHONE}`} style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "#E91E8C", textDecoration: "none", display: "flex", alignItems: "center", minHeight: 44, paddingLeft: 12 }}>{PHONE}</a>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "8px 12px", flex: 1 }}>
          {links.map((l) => {
            const isAct = active(l.href);
            if (l.dropdown) {
              return (
                <div key={l.href}>
                  <button onClick={() => setMobileCourses(!mobileCourses)} style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "13px 14px", borderRadius: 12, marginBottom: 2,
                    fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
                    color: isAct ? "#E91E8C" : "#1F2937",
                    background: isAct ? "rgba(233,30,140,0.06)" : "transparent",
                    border: "none", cursor: "pointer",
                  }}>
                    <span>{l.label}</span>
                    <ChevronDown size={16} color="#E91E8C" style={{ transform: mobileCourses ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  <div style={{ maxHeight: mobileCourses ? 360 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
                    <div style={{ margin: "0 0 8px 0", padding: 8, background: "#FFF5F9", borderRadius: 12 }}>
                      {courses.map(c => (
                        <Link key={c.href} href={c.href} style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 12px", borderRadius: 10,
                          fontFamily: "var(--font-body)", fontSize: 14,
                          color: pathname === c.href ? "#E91E8C" : "#4B5563",
                          fontWeight: pathname === c.href ? 600 : 400,
                          textDecoration: "none",
                          background: pathname === c.href ? "rgba(233,30,140,0.08)" : "transparent",
                        }}>
                          <span style={{ fontSize: 16 }}>{c.emoji}</span>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={l.href} href={l.href} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "13px 14px", borderRadius: 12, marginBottom: 2,
                fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
                color: isAct ? "#E91E8C" : "#1F2937",
                background: isAct ? "rgba(233,30,140,0.06)" : "transparent",
                textDecoration: "none",
              }}>
                {isAct && <span style={{ width: 3, height: 18, borderRadius: 4, background: "#E91E8C", flexShrink: 0 }} />}
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTAs */}
        <div style={{ padding: "16px", borderTop: "1px solid #F3F4F6", display: "flex", flexDirection: "column", gap: 10 }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            padding: "15px", borderRadius: 14,
            background: "linear-gradient(135deg, #E91E8C, #C2185B)",
            color: "white", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
            textDecoration: "none", boxShadow: "0 4px 16px rgba(233,30,140,0.3)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Enquiry
          </a>
          <a href={`tel:+91${PHONE}`} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "13px", borderRadius: 12,
            border: "1.5px solid rgba(233,30,140,0.25)",
            color: "#E91E8C", background: "rgba(233,30,140,0.03)",
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none",
          }}>
            <Phone size={15} color="#E91E8C" />
            Call {PHONE}
          </a>
        </div>
      </div>

      {/*
        The announcement bar is a fixed 36px tall (the header offsets itself by
        exactly that). On narrow screens the full promo sentence plus the phone
        number and opening hours needed 55px, so the bar clipped its own text.
        Drop the hours and shorten the promo instead of growing the bar.
      */}
      <style>{`
        .anno-short { display: none; }
        @media (max-width: 640px) {
          .anno-long  { display: none; }
          .anno-short { display: inline; }
          .anno-hours { display: none !important; }
        }
      `}</style>
    </>
  );
}
