"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-item",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Close lightbox on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="gallery-header text-center mb-12 opacity-0">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blush text-rose-gold text-xs font-body font-semibold tracking-wider uppercase mb-4">
            ✦ Inside The Academy
          </span>
          <h2 id="gallery-heading" className="font-display font-bold text-charcoal mb-4">
            Our{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #B76E79, #C9A96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Classrooms
            </span>{" "}
            & Students
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            Real photos from our training sessions, our academy in Thanjavur, and our certification days.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item masonry-item opacity-0 group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setLightboxImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="font-body text-white text-sm font-medium">{image.category}</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>

              {/* Category Tag */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass text-xs font-body font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            View Full Gallery
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src.replace("w=600", "w=1200")}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl object-cover max-h-[75vh]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <p className="font-body text-white/70 text-center mt-4 text-sm">{lightboxImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
