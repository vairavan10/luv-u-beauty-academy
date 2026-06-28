"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { courses } from "@/data/courses";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "919487992728";

/* ─── reusable pill badge ─── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 12px", borderRadius: 999,
      background: "rgba(233,30,140,0.08)",
      color: "#C2185B",
      fontFamily: "Inter, sans-serif", fontSize: 11.5, fontWeight: 600,
      letterSpacing: "0.02em",
    }}>{children}</span>
  );
}

export default function CoursesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".courses-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".courses-header", start: "top 80%" } }
      );
      gsap.fromTo(".course-card",
        { opacity: 0, y: 60, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: ".course-card", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "96px 0", background: "linear-gradient(180deg, #FDF6F0 0%, #FEFEFE 100%)" }}
      aria-labelledby="courses-heading"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div className="courses-header" style={{ textAlign: "center", marginBottom: 56, opacity: 0 }}>
          <span style={{
            display: "inline-block", padding: "6px 18px", borderRadius: 999,
            background: "rgba(233,30,140,0.08)", color: "#E91E8C",
            fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
          }}>✦ Our Programs</span>
          <h2 id="courses-heading" style={{
            fontFamily: "Playfair Display, serif", fontWeight: 800,
            fontSize: "clamp(2rem,4vw,3rem)", color: "#111",
            letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 16px",
          }}>
            Premium Beauty{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #E91E8C, #C2185B)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Courses</span>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: 17,
            maxWidth: 520, margin: "0 auto", lineHeight: 1.65,
          }}>
            From beginner to professional — comprehensive courses designed for real beauty career success.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{
                opacity: 0,
                background: "#fff",
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid #F3F4F6",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 16px 48px rgba(233,30,140,0.14)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
                <Image
                  src={course.image}
                  alt={`${course.title} at Luv U Beauty Academy Tanjore`}
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.6s ease" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onMouseEnter={e => ((e.target as HTMLElement).style.transform = "scale(1.08)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.transform = "scale(1)")}
                />
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)" }} />

                {/* Icon */}
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  width: 38, height: 38, borderRadius: 12,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                }}>
                  {course.icon}
                </div>

                {/* Popular badge */}
                {course.featured && (
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    padding: "4px 10px", borderRadius: 999,
                    background: "rgba(255,255,255,0.95)",
                    fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700,
                    color: "#E91E8C",
                  }}>⭐ Most Popular</div>
                )}

                {/* Duration */}
                <div style={{
                  position: "absolute", bottom: 12, left: 12,
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "5px 12px", borderRadius: 999,
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                }}>
                  <Clock size={11} color="white" />
                  <span style={{ fontFamily: "Inter, sans-serif", color: "#fff", fontSize: 12, fontWeight: 500 }}>
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "22px 22px 0", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700, fontSize: 20, color: "#111",
                  letterSpacing: "-0.01em", lineHeight: 1.25,
                  margin: "0 0 8px",
                }}>{course.title}</h3>

                <p style={{
                  fontFamily: "Inter, sans-serif", color: "#6B7280",
                  fontSize: 13.5, lineHeight: 1.65, margin: "0 0 14px",
                }}>{course.shortDescription}</p>

                <Badge>{course.level}</Badge>

                {/* Curriculum preview */}
                <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                  {course.curriculum.slice(0, 3).map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E91E8C", flexShrink: 0 }} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer buttons — always at bottom */}
              <div style={{ padding: "20px 22px 22px", display: "flex", gap: 10, marginTop: "auto" }}>
                {/* View Course */}
                <Link
                  href={`/courses/${course.slug}`}
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    height: 44, borderRadius: 12,
                    border: "1.5px solid rgba(233,30,140,0.3)",
                    color: "#E91E8C",
                    fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13.5,
                    textDecoration: "none",
                    background: "transparent",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#E91E8C";
                    el.style.color = "#fff";
                    el.style.borderColor = "#E91E8C";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.color = "#E91E8C";
                    el.style.borderColor = "rgba(233,30,140,0.3)";
                  }}
                >
                  View Course
                </Link>

                {/* Enquire */}
                <a
                  href={`https://wa.me/${PHONE}?text=Hi! I'm interested in the ${course.title} at Luv U Beauty Academy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    height: 44, borderRadius: 12,
                    background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13.5,
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(233,30,140,0.3)",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-1px)";
                    el.style.boxShadow = "0 6px 20px rgba(233,30,140,0.45)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "";
                    el.style.boxShadow = "0 4px 14px rgba(233,30,140,0.3)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <Link
            href="/courses"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 14,
              border: "2px solid rgba(233,30,140,0.3)",
              color: "#E91E8C",
              fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#E91E8C";
              el.style.color = "#fff";
              el.style.borderColor = "#E91E8C";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#E91E8C";
              el.style.borderColor = "rgba(233,30,140,0.3)";
              el.style.transform = "";
            }}
          >
            View All Courses
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
