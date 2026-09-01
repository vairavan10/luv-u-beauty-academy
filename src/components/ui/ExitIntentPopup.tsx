"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [visible, setVisible] = useState(false);

  /* ── Trigger logic ── */
  useEffect(() => {
    if (sessionStorage.getItem("exitPopupDismissed")) return;

    let timer: ReturnType<typeof setTimeout>;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        timer = setTimeout(() => setShow(true), 200);
      }
    };

    const inactivityTimer = setTimeout(() => {
      if (!dismissed && !sessionStorage.getItem("exitPopupDismissed")) {
        setShow(true);
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
      clearTimeout(inactivityTimer);
    };
  }, [dismissed]);

  /* ── Animate in after show=true ── */
  useEffect(() => {
    if (show) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [show]);

  /* ── Countdown timer ── */
  useEffect(() => {
    if (!show) return;
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(id); return 0; }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [show]);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
      sessionStorage.setItem("exitPopupDismissed", "1");
    }, 350);
  };

  if (!show) return null;

  return (
    <>
      {/* ── Styles ── */}
      <style>{`
        @keyframes eip-blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.08); }
        }
        @keyframes eip-blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-18px, 12px) scale(1.06); }
        }
        @keyframes eip-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes eip-pulse-ring {
          0% { transform: scale(0.95); opacity: 0.7; }
          70% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes eip-badge-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .eip-shimmer-text {
          background: linear-gradient(90deg, #E91E8C 0%, #ff6ec4 40%, #E91E8C 60%, #C2185B 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: eip-shimmer 2.8s linear infinite;
        }
        .eip-btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 15px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff;
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(37,211,102,0.32);
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .eip-btn-wa:hover {
          box-shadow: 0 10px 36px rgba(37,211,102,0.45);
          transform: translateY(-1px);
        }
        .eip-btn-enroll {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #E91E8C, #C2185B);
          color: #fff;
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(233,30,140,0.28);
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .eip-btn-enroll:hover {
          box-shadow: 0 10px 32px rgba(233,30,140,0.42);
          transform: translateY(-1px);
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        onClick={handleDismiss}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10001,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          background: "rgba(10,10,20,0.72)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          transition: "opacity 0.35s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* ── Card ── */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 440,
            borderRadius: 28,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(233,30,140,0.08)",
            transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
          }}
        >
          {/* ── Top gradient banner with logo ── */}
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #1a0a12 0%, #2d0a1e 50%, #1a0614 100%)",
            padding: "32px 28px 40px",
            overflow: "hidden",
            textAlign: "center",
          }}>
            {/* Blobs */}
            <div style={{
              position: "absolute", top: -30, left: -30,
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(233,30,140,0.22) 0%, transparent 70%)",
              animation: "eip-blob-1 6s ease-in-out infinite",
            }} />
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              width: 160, height: 160, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)",
              animation: "eip-blob-2 5s ease-in-out infinite",
            }} />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Close popup"
              style={{
                position: "absolute", top: 14, right: 14,
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                zIndex: 2,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <X size={15} />
            </button>

            {/* Floating badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 14px", borderRadius: 999,
              background: "rgba(233,30,140,0.2)",
              border: "1px solid rgba(233,30,140,0.4)",
              fontFamily: "var(--font-body)", fontSize: 10.5, fontWeight: 700,
              color: "#ff77c0", letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 18,
              animation: "eip-badge-float 2.8s ease-in-out infinite",
              position: "relative", zIndex: 1,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E91E8C", display: "inline-block" }} />
              Exclusive Offer — Don&apos;t Miss It!
            </div>

            {/* Logo */}
            <div style={{
              position: "relative",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              marginBottom: 16, zIndex: 1,
            }}>
              {/* Pulse ring behind logo */}
              <div style={{
                position: "absolute",
                inset: -8,
                borderRadius: 20,
                border: "1.5px solid rgba(233,30,140,0.4)",
                animation: "eip-pulse-ring 2.2s ease-out infinite",
              }} />
              <div style={{
                background: "#fff",
                borderRadius: 16,
                padding: "10px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}>
                <Image
                  src="/logo.jpg"
                  alt="Luv U Beauty Academy"
                  width={130}
                  height={52}
                  style={{ objectFit: "contain", display: "block" }}
                  priority
                />
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 5vw, 1.8rem)",
              color: "#fff",
              margin: "0 0 6px",
              letterSpacing: "-0.02em",
              position: "relative", zIndex: 1,
            }}>
              Wait — One Last Thing! 🎁
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              position: "relative", zIndex: 1,
            }}>
              Before you go, grab your <strong style={{ color: "rgba(255,255,255,0.85)" }}>FREE demo class</strong>
            </p>
          </div>

          {/* ── Connecting overlap card ── */}
          <div style={{
            background: "#fff",
            padding: "0 28px 28px",
            marginTop: -16,
            borderRadius: "20px 20px 0 0",
            position: "relative", zIndex: 1,
          }}>

            {/* Offer highlight pill */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "linear-gradient(135deg, rgba(233,30,140,0.06), rgba(201,169,110,0.06))",
              border: "1px solid rgba(233,30,140,0.12)",
              borderRadius: 16,
              padding: "14px 20px",
              marginBottom: 20,
              marginTop: 16,
            }}>
              <span style={{ fontSize: 28 }}>✨</span>
              <div>
                <p className="eip-shimmer-text" style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 800,
                  fontSize: 16,
                  margin: 0,
                }}>
                  Free Demo Class — 100% Free!
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "#9CA3AF",
                  margin: "2px 0 0",
                }}>
                  No commitment. Experience our training quality first.
                </p>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 13.5,
              color: "#6B7280",
              lineHeight: 1.65,
              margin: "0 0 20px",
              textAlign: "center",
            }}>
              Join <strong style={{ color: "#0D0D0D" }}>best students </strong> trained at Luv U Beauty Academy — Tanjore&apos;s #1 govt‑certified beauty school. Your dream career is one step away.
            </p>

            {/* Countdown */}
            {countdown > 0 && (
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginBottom: 18,
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "#E91E8C",
                fontWeight: 600,
              }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 26, height: 26, borderRadius: "50%",
                  background: "rgba(233,30,140,0.08)",
                  fontWeight: 800, fontSize: 13,
                }}>
                  {countdown}
                </span>
                Offer refreshes in {countdown}s — book now!
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="https://wa.me/919487992728?text=Hi! I want to book a free demo class at Luv U Beauty Academy in Tanjore."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDismiss}
                className="eip-btn-wa"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book Free Demo on WhatsApp
              </a>

              <a
                href="/contact"
                onClick={handleDismiss}
                className="eip-btn-enroll"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Enroll Now — View All Courses
              </a>
            </div>

            {/* Trust row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px 20px",
              flexWrap: "wrap",
              marginTop: 18,
              paddingTop: 16,
              borderTop: "1px solid #F3F4F6",
            }}>
              {["No obligation", "100% Free", "Govt. Certified", "Reply in minutes"].map((t) => (
                <span key={t} style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "var(--font-body)", fontSize: 11,
                  color: "#9CA3AF", fontWeight: 500,
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* Dismiss link */}
            <div style={{ textAlign: "center", marginTop: 14 }}>
              <button
                onClick={handleDismiss}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-body)", fontSize: 11.5,
                  color: "#C4C4C4",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#C4C4C4")}
              >
                No thanks, I&apos;ll decide later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
