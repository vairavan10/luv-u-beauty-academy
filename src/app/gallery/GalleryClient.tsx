"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800", alt: "Professional bridal makeup transformation", category: "Bridal", span: "tall" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800", alt: "Students in makeup training class", category: "Training", span: "normal" },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800", alt: "South Indian bridal look", category: "Bridal", span: "normal" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800", alt: "Hair styling practice session", category: "Hair", span: "tall" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800", alt: "Nail art designs by students", category: "Nail Art", span: "normal" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800", alt: "Skin care facial treatment", category: "Skin Care", span: "normal" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800", alt: "Makeup artist at work", category: "Makeup", span: "wide" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800", alt: "Modern salon training facility", category: "Academy", span: "normal" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", alt: "Student makeup practice session", category: "Makeup", span: "tall" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", alt: "Hair transformation result", category: "Hair", span: "normal" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", alt: "Beauty student portfolio work", category: "Training", span: "normal" },
  { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800", alt: "Professional makeup look", category: "Makeup", span: "wide" },
];

const categories = ["All", "Bridal", "Makeup", "Hair", "Nail Art", "Skin Care", "Training", "Academy"];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Staggered reveal on mount / filter change
  useEffect(() => {
    setVisible(new Array(galleryImages.length).fill(false));
    filtered.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 60);
    });
  }, [activeCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard nav for lightbox
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((p) => (p! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightboxIndex((p) => (p! - 1 + filtered.length) % filtered.length);
    },
    [lightboxIndex, filtered.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const catCount = (cat: string) =>
    cat === "All" ? galleryImages.length : galleryImages.filter((g) => g.category === cat).length;

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .gallery-item {
          animation: fadeUp 0.45s ease both;
        }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lightbox-img {
          animation: lightboxIn 0.25s ease both;
        }
      `}</style>

      {/* ── Category Filter ── */}
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        gap: 8, marginBottom: 40,
      }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "8px 18px", borderRadius: 999,
                fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s ease",
                border: "1.5px solid",
                borderColor: isActive ? "#E91E8C" : "#E5E7EB",
                background: isActive
                  ? "linear-gradient(135deg, #E91E8C, #C2185B)"
                  : "#fff",
                color: isActive ? "#fff" : "#6B7280",
                boxShadow: isActive ? "0 4px 14px rgba(233,30,140,0.3)" : "none",
              }}
            >
              {cat}
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 20, height: 20, borderRadius: "50%",
                background: isActive ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
                fontSize: 10, fontWeight: 700,
                color: isActive ? "#fff" : "#9CA3AF",
              }}>
                {catCount(cat)}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Masonry Grid (CSS columns) ── */}
      <div style={{
        columns: "3 280px",
        columnGap: 16,
        margin: "0 auto",
      }}>
        {filtered.map((image, index) => (
          <div
            key={`${activeCategory}-${image.src}`}
            className="gallery-item"
            style={{
              breakInside: "avoid",
              marginBottom: 16,
              borderRadius: 18,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              animationDelay: `${index * 60}ms`,
              boxShadow: hoveredIdx === index
                ? "0 16px 48px rgba(0,0,0,0.18)"
                : "0 2px 14px rgba(0,0,0,0.08)",
              transform: hoveredIdx === index ? "scale(1.015)" : "scale(1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={() => setLightboxIndex(index)}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={image.span === "tall" ? 800 : image.span === "wide" ? 500 : 640}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transform: hoveredIdx === index ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Hover overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)",
              opacity: hoveredIdx === index ? 1 : 0,
              transition: "opacity 0.3s ease",
              display: "flex", flexDirection: "column",
              justifyContent: "flex-end", alignItems: "flex-start",
              padding: "16px 14px",
            }}>
              {/* Category chip */}
              <span style={{
                display: "inline-block",
                padding: "3px 10px", borderRadius: 999,
                background: "rgba(233,30,140,0.85)",
                fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700,
                color: "#fff", marginBottom: 6, letterSpacing: "0.05em",
              }}>
                {image.category}
              </span>
              <span style={{
                fontFamily: "Inter, sans-serif", fontSize: 12,
                color: "rgba(255,255,255,0.75)", lineHeight: 1.4,
              }}>
                {image.alt}
              </span>
            </div>

            {/* Zoom icon centre */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: hoveredIdx === index
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0.7)",
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: hoveredIdx === index ? 1 : 0,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              <ZoomIn size={20} color="#fff" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(16px)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            style={{
              position: "absolute", top: 20, right: 20,
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length); }}
            aria-label="Previous"
            style={{
              position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,30,140,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="lightbox-img"
            style={{ maxWidth: "88vw", maxHeight: "82vh", display: "flex", flexDirection: "column", alignItems: "center" }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              key={lightboxIndex}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={900}
              style={{
                width: "auto", height: "auto",
                maxWidth: "88vw", maxHeight: "74vh",
                borderRadius: 20,
                objectFit: "contain",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
              sizes="88vw"
            />
            <div style={{
              marginTop: 16, textAlign: "center",
            }}>
              <span style={{
                display: "inline-block",
                padding: "4px 14px", borderRadius: 999,
                background: "rgba(233,30,140,0.75)",
                fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700,
                color: "#fff", marginBottom: 6,
              }}>
                {filtered[lightboxIndex].category}
              </span>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: 13,
                color: "rgba(255,255,255,0.55)", margin: "4px 0 0",
              }}>
                {filtered[lightboxIndex].alt}
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: 12,
                color: "rgba(255,255,255,0.3)", margin: "4px 0 0",
              }}>
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % filtered.length); }}
            aria-label="Next"
            style={{
              position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,30,140,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
