"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { courses } from "@/data/courses";

const PHONE = "919487992728";

const filters = ["All", "Beginner", "Intermediate", "Advanced"];
const durationFilters = ["Any Duration", "1 Month", "2 Months", "3 Months", "6 Months"];

function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function CoursesClient() {
  const [activeLevel, setActiveLevel] = useState("All");
  const [activeDuration, setActiveDuration] = useState("Any Duration");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchLevel =
        activeLevel === "All" || c.level.toLowerCase().includes(activeLevel.toLowerCase());
      const matchDuration =
        activeDuration === "Any Duration" || c.duration === activeDuration;
      const matchSearch =
        search.trim() === "" ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      return matchLevel && matchDuration && matchSearch;
    });
  }, [activeLevel, activeDuration, search]);

  return (
    <section style={{ padding: "64px 0 80px", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Search + Filters ── */}
        <div style={{ marginBottom: 40 }}>

          {/* Search bar */}
          <div style={{
            position: "relative", maxWidth: 520, margin: "0 auto 28px",
          }}>
            <div style={{
              position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
              pointerEvents: "none",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", height: 50, paddingLeft: 46, paddingRight: 16,
                borderRadius: 14, border: "1.5px solid #E5E7EB",
                background: "#fff", fontFamily: "Inter,sans-serif",
                fontSize: 14, color: "#0D0D0D", outline: "none",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#E91E8C"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{
                  position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer", padding: 4,
                  color: "#9CA3AF", fontSize: 16, lineHeight: 1,
                }}
              >✕</button>
            )}
          </div>

          {/* Level filter chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 12 }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveLevel(f)}
                style={{
                  padding: "8px 22px", borderRadius: 999,
                  border: "1.5px solid",
                  borderColor: activeLevel === f ? "#E91E8C" : "#E5E7EB",
                  background: activeLevel === f
                    ? "linear-gradient(135deg, #E91E8C, #C2185B)"
                    : "#fff",
                  color: activeLevel === f ? "#fff" : "#6B7280",
                  fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: activeLevel === f ? "0 4px 16px rgba(233,30,140,0.25)" : "none",
                }}
              >{f}</button>
            ))}
          </div>

          {/* Duration filter chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {durationFilters.map(d => (
              <button
                key={d}
                onClick={() => setActiveDuration(d)}
                style={{
                  padding: "6px 16px", borderRadius: 999,
                  border: "1.5px solid",
                  borderColor: activeDuration === d ? "#C9A96E" : "#E5E7EB",
                  background: activeDuration === d ? "rgba(201,169,110,0.1)" : "#fff",
                  color: activeDuration === d ? "#B8860B" : "#9CA3AF",
                  fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 12,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >{d}</button>
            ))}
          </div>
        </div>

        {/* ── Results count ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 24,
        }}>
          <p style={{
            fontFamily: "Inter,sans-serif", fontSize: 14, color: "#6B7280",
          }}>
            Showing <strong style={{ color: "#0D0D0D" }}>{filtered.length}</strong> of {courses.length} courses
          </p>
          {(activeLevel !== "All" || activeDuration !== "Any Duration" || search) && (
            <button
              onClick={() => { setActiveLevel("All"); setActiveDuration("Any Duration"); setSearch(""); }}
              style={{
                fontFamily: "Inter,sans-serif", fontSize: 13, color: "#E91E8C",
                background: "none", border: "none", cursor: "pointer", fontWeight: 600,
                textDecoration: "underline", padding: 0,
              }}
            >Clear filters</button>
          )}
        </div>

        {/* ── Course Grid ── */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "80px 24px",
            background: "#fff", borderRadius: 24, border: "1px dashed #E5E7EB",
          }}>
            <p style={{ fontSize: 40, marginBottom: 12 }}>🔍</p>
            <p style={{ fontFamily: "Playfair Display,serif", fontWeight: 700, fontSize: 22, color: "#0D0D0D", marginBottom: 8 }}>No courses found</p>
            <p style={{ fontFamily: "Inter,sans-serif", color: "#6B7280", fontSize: 14 }}>Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 28,
          }}>
            {filtered.map((course) => (
              <article
                key={course.id}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: hoveredId === course.id ? "1.5px solid rgba(233,30,140,0.25)" : "1.5px solid #F3F4F6",
                  boxShadow: hoveredId === course.id
                    ? "0 20px 56px rgba(233,30,140,0.12)"
                    : "0 4px 24px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  transform: hoveredId === course.id ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={() => setHoveredId(course.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 220, overflow: "hidden", flexShrink: 0 }}>
                  <Image
                    src={course.image}
                    alt={`${course.title} – Luv U Beauty Academy Tanjore`}
                    fill
                    className="object-cover"
                    style={{
                      transform: hoveredId === course.id ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.6s ease",
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 55%)" }} />

                  {/* Featured badge */}
                  {course.featured && (
                    <div style={{
                      position: "absolute", top: 12, right: 12,
                      padding: "4px 12px", borderRadius: 999,
                      background: "rgba(255,255,255,0.95)",
                      fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
                      color: "#E91E8C", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}>⭐ Popular</div>
                  )}

                  {/* Icon */}
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}>{course.icon}</div>

                  {/* Duration bottom-left */}
                  <div style={{
                    position: "absolute", bottom: 12, left: 12,
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "4px 12px", borderRadius: 999,
                    background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span style={{ fontFamily: "Inter,sans-serif", color: "#fff", fontSize: 12, fontWeight: 500 }}>{course.duration}</span>
                  </div>

                  {/* Level bottom-right */}
                  <div style={{
                    position: "absolute", bottom: 12, right: 12,
                    padding: "4px 12px", borderRadius: 999,
                    background: "rgba(233,30,140,0.8)", backdropFilter: "blur(8px)",
                  }}>
                    <span style={{ fontFamily: "Inter,sans-serif", color: "#fff", fontSize: 11, fontWeight: 600 }}>{course.level}</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "22px 22px 0", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{
                    fontFamily: "Playfair Display,serif", fontWeight: 800,
                    fontSize: 19, color: "#111", letterSpacing: "-0.01em",
                    lineHeight: 1.25, margin: "0 0 8px",
                  }}>{course.title}</h2>

                  <p style={{
                    fontFamily: "Inter,sans-serif", color: "#6B7280",
                    fontSize: 13.5, lineHeight: 1.65, margin: "0 0 16px",
                  }}>{course.description}</p>

                  {/* Curriculum preview */}
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", margin: "0 0 8px" }}>
                      What you&apos;ll learn
                    </p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {course.curriculum.slice(0, 3).map(item => (
                        <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E91E8C", flexShrink: 0 }} />
                          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: "#374151" }}>{item}</span>
                        </li>
                      ))}
                      {course.curriculum.length > 3 && (
                        <li style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: "#E91E8C", fontWeight: 600, paddingLeft: 13 }}>
                          +{course.curriculum.length - 3} more modules
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Certification strip */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "9px 13px", borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(233,30,140,0.04), rgba(201,169,110,0.06))",
                    border: "1px solid rgba(233,30,140,0.08)",
                    marginBottom: 0,
                  }}>
                    <span style={{ fontSize: 14 }}>🏆</span>
                    <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: "#6B7280" }}>{course.certification}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ padding: "16px 22px 22px", display: "flex", gap: 10 }}>
                  <Link
                    href={`/courses/${course.slug}`}
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                      height: 44, borderRadius: 12,
                      border: "1.5px solid rgba(233,30,140,0.3)", color: "#E91E8C",
                      fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 13.5,
                      textDecoration: "none", background: "transparent",
                      transition: "all 0.2s ease", whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#E91E8C";
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "transparent";
                      el.style.color = "#E91E8C";
                    }}
                  >
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/${PHONE}?text=Hi! I want to enroll in the ${course.title} at Luv U Beauty Academy.`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      height: 44, borderRadius: 12,
                      background: "linear-gradient(135deg, #E91E8C, #C2185B)", color: "#fff",
                      fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 13.5,
                      textDecoration: "none", boxShadow: "0 4px 14px rgba(233,30,140,0.3)",
                      transition: "all 0.2s ease", whiteSpace: "nowrap",
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
                    <WaIcon /> Enroll Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
