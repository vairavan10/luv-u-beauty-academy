"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function MoveToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .scroll-top-icon {
          animation: arrowBounce 1.8s ease-in-out infinite;
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .scroll-top-ripple {
          animation: ripple 1.8s ease-out infinite;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: 90,
          right: 24,
          zIndex: 998,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          pointerEvents: isVisible ? "auto" : "none",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Tooltip */}
        <span
          style={{
            background: "rgba(15,15,15,0.82)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0) scale(1)" : "translateY(4px) scale(0.92)",
            transition: "all 0.2s ease",
            pointerEvents: "none",
            letterSpacing: "0.04em",
          }}
        >
          Back to top
        </span>

        {/* Button wrapper with ripple */}
        <div style={{ position: "relative", width: 48, height: 48 }}>
          {/* Ripple ring */}
          {isHovered && (
            <span
              className="scroll-top-ripple"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid rgba(233,30,140,0.5)",
                pointerEvents: "none",
              }}
            />
          )}

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Scroll to top"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: isHovered
                ? "linear-gradient(135deg, #ff4db5, #E91E8C)"
                : "linear-gradient(135deg, #E91E8C, #C2185B)",
              color: "white",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isHovered
                ? "0 8px 28px rgba(233,30,140,0.65)"
                : "0 4px 16px rgba(233,30,140,0.4)",
              transform: isHovered ? "scale(1.1) translateY(-3px)" : "scale(1) translateY(0)",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <span className="scroll-top-icon">
              <ArrowUp size={22} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
