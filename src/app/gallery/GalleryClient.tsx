"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { galleryImages } from "@/data/gallery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Gallery data lives in @/data/gallery so this page and the homepage stay in sync.

export default function GalleryClient() {
  const gridRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Entrance Stagger Animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-card",
        {
          opacity: 0,
          y: 70,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  // Track body overflow when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Touch/Mouse Parallax Hover Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalizing coordinates (-0.5 to 0.5)
    const xc = x / rect.width - 0.5;
    const yc = y / rect.height - 0.5;

    // Subtle 3D shift for the image
    const img = card.querySelector(".gallery-img-inner");
    if (img) {
      gsap.to(img, {
        x: xc * 24,
        y: yc * 24,
        scale: 1.08,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index: number, card: HTMLDivElement) => {
    setHoveredIndex(null);
    const img = card.querySelector(".gallery-img-inner");
    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1.02,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  // Animated Close Lightbox
  const closeLightbox = () => {
    if (lightboxRef.current) {
      const img = lightboxRef.current.querySelector(".lightbox-img-el");
      const overlay = lightboxRef.current;

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setLightboxIndex(null);
        },
      });

      if (img) {
        gsap.to(img, {
          scale: 0.9,
          y: 20,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    } else {
      setLightboxIndex(null);
    }
  };

  // Navigating Lightbox with sliding transitions
  const navigateLightbox = (direction: "next" | "prev", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;

    const nextIndex =
      direction === "next"
        ? (lightboxIndex + 1) % galleryImages.length
        : (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;

    const img = lightboxRef.current?.querySelector(".lightbox-img-el");
    const text = lightboxRef.current?.querySelector(".lightbox-text-el");

    if (img && text) {
      gsap.to([img, text], {
        opacity: 0,
        x: direction === "next" ? -40 : 40,
        scale: 0.96,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setLightboxIndex(nextIndex);
          // Animate the next image in
          gsap.fromTo(
            [img, text],
            {
              opacity: 0,
              x: direction === "next" ? 40 : -40,
              scale: 0.96,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            }
          );
        },
      });
    } else {
      setLightboxIndex(nextIndex);
    }
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    },
    [lightboxIndex] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 290px;
          gap: 24px;
          width: 100%;
        }

        .gallery-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(183, 110, 121, 0.12);
          box-shadow: 0 10px 30px rgba(183, 110, 121, 0.04);
          cursor: pointer;
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                      filter 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                      transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(183, 110, 121, 0.16);
          border-color: rgba(183, 110, 121, 0.35);
        }

        /* Desktop Asymmetric Layout (3 Columns) */
        .card-idx-0 {
          grid-column: span 2;
          grid-row: span 2;
        }
        .card-idx-1 { grid-column: span 1; grid-row: span 1; }
        .card-idx-2 { grid-column: span 1; grid-row: span 1; }
        .card-idx-3 { grid-column: span 1; grid-row: span 1; }
        .card-idx-4 { grid-column: span 1; grid-row: span 1; }
        .card-idx-5 { grid-column: span 1; grid-row: span 1; }

        .gallery-card:hover .zoom-icon-wrapper {
          opacity: 1;
          transform: scale(1);
        }

        /* Tablet Responsive (2 Columns) */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 270px;
            gap: 20px;
          }
          .card-idx-0 {
            grid-column: span 2;
            grid-row: span 1;
          }
          .card-idx-1 { grid-column: span 1; }
          .card-idx-2 { grid-column: span 1; }
          .card-idx-3 { grid-column: span 1; }
          .card-idx-4 { grid-column: span 1; }
          .card-idx-5 { grid-column: span 2; } /* bottom span full */
        }

        /* Mobile Responsive (1 Column) */
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 340px;
            gap: 16px;
          }
          .card-idx-0, .card-idx-1, .card-idx-2, .card-idx-3, .card-idx-4, .card-idx-5 {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>

      {/* ── Asymmetric Layout Grid ── */}
      <div ref={gridRef} className="gallery-grid">
        {galleryImages.map((image, index) => {
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
          return (
            <div
              key={image.src}
              className={`gallery-card card-idx-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={(e) => handleMouseLeave(index, e.currentTarget)}
              onClick={() => setLightboxIndex(index)}
              style={{
                opacity: isDimmed ? 0.35 : 1,
                filter: isDimmed ? "blur(1.5px) grayscale(15%)" : "none",
                transform: isDimmed ? "scale(0.97)" : undefined,
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                {/* Image Wrapper */}
                <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={index === 0 ? 1200 : 800}
                    height={index === 0 ? 800 : 600}
                    className="gallery-img-inner"
                    style={{
                      width: "120%",
                      height: "120%",
                      objectFit: "cover",
                      position: "absolute",
                      top: "-10%",
                      left: "-10%",
                      willChange: "transform",
                      transform: "scale(1.02)",
                    }}
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                    priority={index === 0}
                  />
                </div>


                {/* Floating Zoom Action */}
                <div
                  className="zoom-icon-wrapper"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transform: "scale(0.7)",
                    transition: "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
                    zIndex: 2,
                  }}
                >
                  <ZoomIn size={18} color="#fff" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Fully Animated Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10, 5, 8, 0.94)",
            backdropFilter: "blur(18px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0, // Animated on mount
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              transition: "all 0.2s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(183, 110, 121, 0.35)";
              e.currentTarget.style.borderColor = "rgba(183, 110, 121, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <X size={20} />
          </button>

          {/* Navigation - Prev */}
          <button
            onClick={(e) => navigateLightbox("prev", e)}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              transition: "all 0.2s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(183, 110, 121, 0.35)";
              e.currentTarget.style.borderColor = "rgba(183, 110, 121, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Core Image Showcase & Caption */}
          <div
            className="lightbox-img-el"
            style={{
              maxWidth: "85vw",
              maxHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: "scale(0.9)", // Animated on mount
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={900}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "85vw",
                maxHeight: "70vh",
                borderRadius: "24px",
                objectFit: "contain",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              sizes="85vw"
              priority
            />

            {/* Description Area */}
            <div
              className="lightbox-text-el"
              style={{
                marginTop: "20px",
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 999,
                  background: "rgba(183, 110, 121, 0.8)",
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "8px",
                  letterSpacing: "0.06em",
                }}
              >
                {galleryImages[lightboxIndex].category}
              </span>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 6px",
                }}
              >
                {galleryImages[lightboxIndex].title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.5,
                  margin: "4px 0 0",
                }}
              >
                {galleryImages[lightboxIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation - Next */}
          <button
            onClick={(e) => navigateLightbox("next", e)}
            aria-label="Next"
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              transition: "all 0.2s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(183, 110, 121, 0.35)";
              e.currentTarget.style.borderColor = "rgba(183, 110, 121, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
