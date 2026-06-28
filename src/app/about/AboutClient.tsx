"use client";

import Link from "next/link";
import Image from "next/image";

const values = [
  {
    icon: "🌸",
    titleTamil: "தரம்",
    title: "Quality First",
    desc: "Govt-certified courses with international curriculum, ensuring every student leaves job-ready and confident.",
  },
  {
    icon: "💪",
    titleTamil: "சக்தி",
    title: "Women Empowerment",
    desc: "We believe every woman deserves financial independence and a career that celebrates her passion.",
  },
  {
    icon: "🎨",
    titleTamil: "படைப்பாற்றல்",
    title: "Creativity",
    desc: "From bridal artistry to advanced skincare — we nurture every student's unique creative expression.",
  },
  {
    icon: "🏆",
    titleTamil: "சாதனை",
    title: "Excellence",
    desc: "Our trainers bring real-world salon and studio experience to every class, every day.",
  },
];

const milestones = [
  { year: "2016", label: "Mrs. Ramayee begins her professional beauty journey", tamil: "தொடக்கம்" },
  { year: "2018", label: "Luv U Beauty Academy founded in Thanjavur", tamil: "அகாடமி தொடங்கியது" },
  { year: "2019", label: "International Makeup Certification in Malaysia", tamil: "சர்வதேச பயிற்சி" },
  { year: "2022", label: "Expanded to advanced courses — Skin, Nails & Bridal", tamil: "விரிவாக்கம்" },
  { year: "2024", label: "100+ graduates placed across Tamil Nadu & beyond", tamil: "பட்டதாரிகள்" },
];

const achievements = [
  { number: "100+", label: "Students Trained", labelTamil: "மாணவர்கள்", color: "#E91E8C" },
  { number: "8+", label: "Years of Excellence", labelTamil: "ஆண்டுகள்", color: "#C9A96E" },
  { number: "100%", label: "Placement Support", labelTamil: "வேலைவாய்ப்பு", color: "#B76E79" },
  { number: "1st", label: "In Thanjavur", labelTamil: "தஞ்சாவூரில்", color: "#25D366" },
];

const courseBadges = [
  "Professional Beautician",
  "Bridal Makeup",
  "Hair Styling",
  "Skin Care",
  "Nail Art",
  "Salon Management",
];

export default function AboutClient() {
  return (
    <main style={{ paddingTop: 80, fontFamily: "Inter, sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #1a0614 60%, #2d0a1e 100%)",
        padding: "80px 24px 100px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Grid texture */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px", pointerEvents: "none",
        }} />
        {/* Glow blobs */}
        <div aria-hidden style={{
          position: "absolute", top: -80, left: "10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,30,140,0.15), transparent 70%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: -60, right: "5%",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.12), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-block",
            padding: "6px 18px", borderRadius: 999,
            background: "rgba(233,30,140,0.15)",
            border: "1px solid rgba(233,30,140,0.3)",
            fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#ff77c0", marginBottom: 28,
          }}>
            ✦ எங்கள் கதை — Our Story
          </span>

          <h1 style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 900,
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}>
            <span style={{ color: "#fff" }}>அழகும் </span>
            <span style={{
              backgroundImage: "linear-gradient(90deg, #E91E8C, #C9A96E)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              தன்னம்பிக்கையும்
            </span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.62em", fontWeight: 700 }}>
              Beauty &amp; Confidence, Redefined
            </span>
          </h1>

          <p style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 18, lineHeight: 1.8,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 580, margin: "0 auto 36px",
          }}>
            Tanjore&apos;s most trusted beauty training institute — empowering women with professional skills,
            confidence, and career success since 2018.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/courses" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 12,
              background: "linear-gradient(135deg, #E91E8C, #C2185B)",
              color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 14,
              textDecoration: "none", boxShadow: "0 4px 20px rgba(233,30,140,0.35)",
            }}>
              பாடநெறிகளை காண்க →
            </Link>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)", background: "transparent",
              fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14,
              textDecoration: "none",
            }}>
              தொடர்பு கொள்ளுங்கள்
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }} className="about-stats-grid">
            {achievements.map((a, i) => (
              <div key={a.label} style={{
                padding: "36px 24px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #F0F0F0" : "none",
              }}>
                <p style={{
                  fontFamily: "Playfair Display,serif",
                  fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)",
                  color: a.color, margin: "0 0 4px",
                  lineHeight: 1,
                }}>{a.number}</p>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontWeight: 600,
                  fontSize: 13, color: "#0D0D0D",
                  margin: "0 0 2px",
                }}>{a.label}</p>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontSize: 11,
                  color: "#9CA3AF", margin: 0,
                }}>{a.labelTamil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ── */}
      <section style={{ background: "#FAFAFA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{
              display: "inline-block",
              padding: "6px 18px", borderRadius: 999,
              background: "rgba(233,30,140,0.06)",
              border: "1px solid rgba(233,30,140,0.15)",
              fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#E91E8C", marginBottom: 16,
            }}>
              ✦ நிறுவனர் — Our Founder
            </span>
            <h2 style={{
              fontFamily: "Playfair Display,serif", fontWeight: 800,
              fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0D0D0D",
              margin: 0, letterSpacing: "-0.025em",
            }}>Meet the Heart Behind the Academy</h2>
          </div>

          {/* Founder card */}
          <div style={{
            background: "#fff",
            borderRadius: 28,
            border: "1px solid #F0F0F0",
            boxShadow: "0 8px 48px rgba(0,0,0,0.06)",
            overflow: "hidden",
          }} className="founder-card">

            {/* Top accent */}
            <div style={{
              height: 4,
              background: "linear-gradient(90deg, #E91E8C, #C9A96E, #E91E8C)",
            }} />

            <div style={{ display: "grid", gridTemplateColumns: "360px 1fr" }} className="founder-inner">

              {/* Left panel */}
              <div style={{
                background: "linear-gradient(160deg, #1a0614 0%, #2d0a1e 50%, #0D0D0D 100%)",
                padding: "52px 36px",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "flex-start",
                position: "relative", overflow: "hidden",
                textAlign: "center",
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: -40, right: -40,
                  width: 200, height: 200, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(233,30,140,0.25), transparent)",
                  pointerEvents: "none",
                }} />
                <div aria-hidden style={{
                  position: "absolute", bottom: -30, left: -30,
                  width: 160, height: 160, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201,169,110,0.2), transparent)",
                  pointerEvents: "none",
                }} />

                {/* Owner photo */}
                <div style={{
                  position: "relative",
                  width: 160, height: 160,
                  marginBottom: 24, zIndex: 1,
                }}>
                  {/* Outer glow ring */}
                  <div style={{
                    position: "absolute", inset: -8,
                    borderRadius: "50%",
                    background: "conic-gradient(#E91E8C, #C9A96E, #E91E8C)",
                    animation: "ownerRingSpin 6s linear infinite",
                  }} />
                  {/* White gap */}
                  <div style={{
                    position: "absolute", inset: -3,
                    borderRadius: "50%",
                    background: "linear-gradient(160deg, #1a0614, #0D0D0D)",
                  }} />
                  {/* Photo */}
                  <div style={{
                    position: "relative",
                    width: 160, height: 160,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}>
                    <Image
                      src="/owner.jpg"
                      alt="Mrs. Ramayee - Cosmetologist & Founder of Luv U Beauty Academy, Thanjavur"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      sizes="160px"
                      priority
                    />
                  </div>
                  {/* Online dot badge */}
                  <div style={{
                    position: "absolute", bottom: 6, right: 6,
                    width: 22, height: 22, borderRadius: "50%",
                    background: "#25D366",
                    border: "3px solid #1a0614",
                    zIndex: 2,
                    boxShadow: "0 0 0 3px rgba(37,211,102,0.25)",
                  }} />
                </div>

                <h3 style={{
                  fontFamily: "Playfair Display,serif",
                  fontWeight: 800, fontSize: 22, color: "#fff",
                  margin: "0 0 6px", position: "relative", zIndex: 1,
                }}>Mrs. Ramayee</h3>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontWeight: 600,
                  fontSize: 12, color: "#E91E8C",
                  letterSpacing: "0.05em", margin: "0 0 20px",
                  position: "relative", zIndex: 1,
                }}>COSMETOLOGIST &amp; FOUNDER</p>

                <div style={{
                  width: 40, height: 2,
                  background: "linear-gradient(90deg, #E91E8C, #C9A96E)",
                  borderRadius: 999, margin: "0 auto 20px",
                }} />

                <p style={{
                  fontFamily: "Playfair Display,serif",
                  fontStyle: "italic", fontSize: 13.5,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75, margin: "0 0 8px",
                  position: "relative", zIndex: 1,
                }}>
                  &ldquo;அழகை உணர்வோடு, படைப்பாற்றலோடு,<br />தன்னம்பிக்கையோடு வெளிப்படுத்துங்கள்.&rdquo;
                </p>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontSize: 11.5,
                  color: "rgba(255,255,255,0.35)", margin: "0 0 28px",
                  position: "relative", zIndex: 1, lineHeight: 1.6,
                }}>
                  &ldquo;Transforming beauty with passion,<br />creativity, and confidence.&rdquo;
                </p>

                {/* Credential badges */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", position: "relative", zIndex: 1 }}>
                  {[
                    { label: "VLCC Certified, Bangalore", icon: "🎓" },
                    { label: "International MUA, Malaysia", icon: "🌏" },
                    { label: "9+ Years Experience", icon: "⭐" },
                    { label: "Govt. Recognized Trainer", icon: "🏛️" },
                  ].map(b => (
                    <div key={b.label} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10, padding: "9px 14px",
                      textAlign: "left",
                    }}>
                      <span style={{ fontSize: 13, flexShrink: 0 }}>{b.icon}</span>
                      <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: "rgba(255,255,255,0.72)", fontWeight: 500, lineHeight: 1.4 }}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel — bio */}
              <div style={{ padding: "52px 48px" }}>
                <span style={{
                  display: "inline-block",
                  padding: "4px 14px", borderRadius: 999,
                  background: "rgba(233,30,140,0.06)",
                  border: "1px solid rgba(233,30,140,0.15)",
                  fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#E91E8C", marginBottom: 20,
                }}>
                  ✦ நமது தலைவர் — Academy Head
                </span>

                <h3 style={{
                  fontFamily: "Playfair Display,serif", fontWeight: 800,
                  fontSize: "clamp(1.5rem,2.5vw,2.2rem)", color: "#0D0D0D",
                  letterSpacing: "-0.025em", margin: "0 0 6px", lineHeight: 1.2,
                }}>Mrs. Ramayee</h3>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontWeight: 600,
                  fontSize: 13, color: "#E91E8C", margin: "0 0 28px",
                  letterSpacing: "0.02em",
                }}>Cosmetologist · Head of Luv U Beauty Academy</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                  <p style={{
                    fontFamily: "Inter,sans-serif", fontSize: 15,
                    color: "#374151", lineHeight: 1.8, margin: 0,
                  }}>
                    Mrs. Ramayee is a skilled and passionate cosmetologist with years of experience in the beauty
                    and wellness industry. She began her professional journey in{" "}
                    <strong style={{ color: "#0D0D0D", fontWeight: 700 }}>2016</strong> with a vision to help
                    women feel confident, beautiful, and empowered through expert beauty care and personalized services.
                  </p>
                  <p style={{
                    fontFamily: "Inter,sans-serif", fontSize: 15,
                    color: "#374151", lineHeight: 1.8, margin: 0,
                  }}>
                    She completed her cosmetology training at{" "}
                    <strong style={{ color: "#0D0D0D" }}>VLCC, Bangalore</strong>, gaining professional expertise
                    in skincare, beauty treatments, and advanced cosmetology techniques. To further enhance her
                    knowledge and international exposure, she completed an{" "}
                    <strong style={{ color: "#0D0D0D" }}>International Makeup Course in Malaysia</strong> under
                    renowned makeup artist{" "}
                    <strong style={{ color: "#E91E8C" }}>Kannan Rajamanikam</strong>.
                  </p>
                  <p style={{
                    fontFamily: "Inter,sans-serif", fontSize: 15,
                    color: "#374151", lineHeight: 1.8, margin: 0,
                  }}>
                    As the founder of <strong style={{ color: "#0D0D0D" }}>Luv U The Women World</strong>, she
                    continues to create a welcoming and professional beauty space where clients receive expert care
                    with comfort, hygiene, and personal attention.
                  </p>
                  <p style={{
                    fontFamily: "Inter,sans-serif", fontSize: 15,
                    color: "#374151", lineHeight: 1.8, margin: 0,
                    padding: "16px 20px",
                    background: "rgba(233,30,140,0.04)",
                    borderLeft: "3px solid #E91E8C",
                    borderRadius: "0 10px 10px 0",
                  }}>
                    <em>ஒவ்வொரு பெண்ணும் அழகாக இருக்க தகுதியானவள், தன்னம்பிக்கையுடன் உணர தகுதியானவள்.</em>
                    <br />
                    <span style={{ fontSize: 13, color: "#9CA3AF" }}>
                      — &ldquo;Every woman deserves to look beautiful, feel confident, and express her individuality through self-care.&rdquo;
                    </span>
                  </p>
                </div>

                {/* Expertise tags */}
                <div style={{ marginBottom: 28 }}>
                  <p style={{
                    fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "#9CA3AF", margin: "0 0 10px",
                  }}>நிபுணத்துவம் · Expertise</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Skin Care", "Bridal Makeup", "Advanced Cosmetology", "Hair Styling", "Nail Art", "Salon Management"].map(tag => (
                      <span key={tag} style={{
                        padding: "5px 14px", borderRadius: 999,
                        background: "rgba(233,30,140,0.06)",
                        border: "1px solid rgba(233,30,140,0.15)",
                        fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 600,
                        color: "#E91E8C",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* CTA row */}
                <div style={{
                  display: "flex", gap: 12, flexWrap: "wrap",
                  paddingTop: 24, borderTop: "1px solid #F0F0F0",
                }}>
                  <a
                    href="https://wa.me/919487992728?text=Hi Mrs. Ramayee! I want to know more about courses at Luv U Beauty Academy."
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "12px 22px", borderRadius: 12,
                      background: "linear-gradient(135deg, #25D366, #128C7E)",
                      color: "#fff", fontFamily: "Inter,sans-serif",
                      fontWeight: 700, fontSize: 13, textDecoration: "none",
                      boxShadow: "0 4px 16px rgba(37,211,102,0.28)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp Mrs. Ramayee
                  </a>
                  <Link href="/courses" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "12px 22px", borderRadius: 12,
                    border: "1.5px solid #E5E7EB", background: "#fff",
                    color: "#374151", fontFamily: "Inter,sans-serif",
                    fontWeight: 600, fontSize: 13, textDecoration: "none",
                  }}>
                    View Courses →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY / JOURNEY ── */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="story-grid">

            {/* Left */}
            <div>
              <span style={{
                display: "inline-block",
                padding: "6px 18px", borderRadius: 999,
                background: "rgba(233,30,140,0.06)",
                border: "1px solid rgba(233,30,140,0.15)",
                fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#E91E8C", marginBottom: 20,
              }}>
                ✦ எங்கள் பயணம் — Our Journey
              </span>
              <h2 style={{
                fontFamily: "Playfair Display,serif", fontWeight: 800,
                fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#0D0D0D",
                letterSpacing: "-0.025em", margin: "0 0 20px", lineHeight: 1.2,
              }}>
                Born from a Passion for{" "}
                <span style={{
                  backgroundImage: "linear-gradient(90deg, #E91E8C, #C9A96E)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Beauty &amp; Empowerment</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Luv U Beauty Academy was founded in 2018 with a simple yet powerful mission: to give every woman in Tanjore access to world-class beauty education that could transform not just her skills, but her entire life.",
                  "What started as a small training centre has grown into Tanjore's most recognized beauty academy, with over 100+ graduates working across Tamil Nadu, India, and beyond.",
                  "நாம் நம்புகிறோம் — We believe that beauty education is not just about techniques. It's about building confidence, financial independence, and a fulfilling career that you truly love.",
                ].map((para, i) => (
                  <p key={i} style={{
                    fontFamily: "Inter,sans-serif", fontSize: 15.5,
                    color: "#374151", lineHeight: 1.8, margin: 0,
                  }}>{para}</p>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Link href="/courses" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 24px", borderRadius: 12,
                  background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                  color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 14,
                  textDecoration: "none", boxShadow: "0 4px 20px rgba(233,30,140,0.3)",
                }}>Explore Courses</Link>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 24px", borderRadius: 12,
                  border: "1.5px solid #E5E7EB", background: "#fff",
                  color: "#374151", fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14,
                  textDecoration: "none",
                }}>Contact Us</Link>
              </div>
            </div>

            {/* Right — Timeline */}
            <div style={{ position: "relative", paddingLeft: 28 }}>
              <div style={{
                position: "absolute", left: 0, top: 8, bottom: 8,
                width: 2,
                background: "linear-gradient(to bottom, #E91E8C, #C9A96E)",
                borderRadius: 999,
              }} />

              <div style={{ display: "flex", flexDirection: "column" }}>
                {milestones.map((m, i) => (
                  <div key={m.year} style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    paddingBottom: i < milestones.length - 1 ? 28 : 0,
                    position: "relative",
                  }}>
                    <div style={{
                      position: "absolute", left: -35,
                      width: 14, height: 14, borderRadius: "50%",
                      background: i === milestones.length - 1 ? "#E91E8C" : "#fff",
                      border: "2.5px solid #E91E8C",
                      boxShadow: i === milestones.length - 1 ? "0 0 0 5px rgba(233,30,140,0.12)" : "none",
                      top: 4, flexShrink: 0,
                    }} />
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span style={{
                          fontFamily: "Playfair Display,serif", fontWeight: 800,
                          fontSize: 18, color: "#E91E8C",
                        }}>{m.year}</span>
                        <span style={{
                          padding: "2px 10px", borderRadius: 999,
                          background: "rgba(233,30,140,0.06)",
                          fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 600,
                          color: "#E91E8C",
                        }}>{m.tamil}</span>
                      </div>
                      <p style={{
                        fontFamily: "Inter,sans-serif", fontSize: 14,
                        color: "#374151", margin: 0, lineHeight: 1.6,
                      }}>{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ background: "linear-gradient(135deg, #FDF6F0, #F9E8E8)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{
              display: "inline-block",
              padding: "6px 18px", borderRadius: 999,
              background: "rgba(183,110,121,0.08)",
              border: "1px solid rgba(183,110,121,0.2)",
              fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#B76E79", marginBottom: 16,
            }}>
              ✦ நோக்கம் — Our Purpose
            </span>
            <h2 style={{
              fontFamily: "Playfair Display,serif", fontWeight: 800,
              fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0D0D0D",
              margin: 0, letterSpacing: "-0.025em",
            }}>Our Mission &amp; Vision</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="mv-grid">
            {[
              {
                icon: "🎯",
                titleTamil: "எங்கள் நோக்கம்",
                title: "Our Mission",
                desc: "To provide affordable, world-class beauty education to every woman in Tanjore and Tamil Nadu — creating skilled professionals who are confident, certified, and career-ready. அனைத்து பெண்களுக்கும் சிறந்த அழகு பயிற்சி வழங்குவதே எங்கள் குறிக்கோள்.",
                color: "#B76E79",
                bg: "rgba(183,110,121,0.06)",
                border: "rgba(183,110,121,0.15)",
              },
              {
                icon: "💫",
                titleTamil: "எங்கள் பார்வை",
                title: "Our Vision",
                desc: "To become South India's most respected beauty training institution, known for producing the highest quality beauty professionals who go on to lead the industry. தென்னிந்தியாவின் சிறந்த அழகு நிறுவனமாக மாற வேண்டும்.",
                color: "#C9A96E",
                bg: "rgba(201,169,110,0.06)",
                border: "rgba(201,169,110,0.2)",
              },
            ].map(item => (
              <div key={item.title} style={{
                background: "#fff",
                borderRadius: 24, padding: "40px",
                border: `1px solid ${item.border}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: 58, height: 58, borderRadius: 16,
                  background: item.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, marginBottom: 20,
                }}>{item.icon}</div>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: item.color, margin: "0 0 6px",
                }}>{item.titleTamil}</p>
                <h3 style={{
                  fontFamily: "Playfair Display,serif", fontWeight: 800,
                  fontSize: 22, color: "#0D0D0D", margin: "0 0 16px",
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontSize: 15,
                  color: "#374151", lineHeight: 1.8, margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{
              display: "inline-block",
              padding: "6px 18px", borderRadius: 999,
              background: "rgba(233,30,140,0.06)",
              border: "1px solid rgba(233,30,140,0.15)",
              fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#E91E8C", marginBottom: 16,
            }}>
              ✦ எங்கள் மதிப்புகள் — Our Values
            </span>
            <h2 style={{
              fontFamily: "Playfair Display,serif", fontWeight: 800,
              fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0D0D0D",
              margin: 0, letterSpacing: "-0.025em",
            }}>What We Stand For</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="values-grid">
            {values.map(v => (
              <div key={v.title} style={{
                background: "#FAFAFA",
                borderRadius: 20, padding: "32px 24px",
                border: "1px solid #F0F0F0",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "#E91E8C", margin: "0 0 6px",
                }}>{v.titleTamil}</p>
                <h3 style={{
                  fontFamily: "Playfair Display,serif", fontWeight: 700,
                  fontSize: 17, color: "#0D0D0D", margin: "0 0 12px",
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: "Inter,sans-serif", fontSize: 13.5,
                  color: "#6B7280", lineHeight: 1.7, margin: 0,
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section style={{ background: "#FAFAFA", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            padding: "6px 18px", borderRadius: 999,
            background: "rgba(233,30,140,0.06)",
            border: "1px solid rgba(233,30,140,0.15)",
            fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#E91E8C", marginBottom: 16,
          }}>
            ✦ பாடநெறிகள் — Courses
          </span>
          <h2 style={{
            fontFamily: "Playfair Display,serif", fontWeight: 800,
            fontSize: "clamp(1.6rem,3.5vw,2.6rem)", color: "#0D0D0D",
            margin: "0 0 12px", letterSpacing: "-0.025em",
          }}>What We Teach</h2>
          <p style={{
            fontFamily: "Inter,sans-serif", fontSize: 15,
            color: "#6B7280", margin: "0 auto 40px",
            maxWidth: 500, lineHeight: 1.7,
          }}>
            All courses are government-certified and designed to make you job-ready from day one.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {courseBadges.map(c => (
              <span key={c} style={{
                padding: "10px 22px", borderRadius: 999,
                background: "#fff",
                border: "1.5px solid rgba(233,30,140,0.15)",
                fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600,
                color: "#0D0D0D",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>{c}</span>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/courses" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 12,
              background: "linear-gradient(135deg, #E91E8C, #C2185B)",
              color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 15,
              textDecoration: "none", boxShadow: "0 6px 24px rgba(233,30,140,0.3)",
            }}>
              அனைத்து பாடநெறிகளும் காண்க — View All Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #0D0D0D, #1a0614)",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: -60, left: "20%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,30,140,0.15), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-block",
            padding: "6px 18px", borderRadius: 999,
            background: "rgba(233,30,140,0.15)",
            border: "1px solid rgba(233,30,140,0.3)",
            fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#ff77c0", marginBottom: 24,
          }}>
            ✦ சேர்வீர்களா? — Join Us
          </span>
          <h2 style={{
            fontFamily: "Playfair Display,serif", fontWeight: 800,
            fontSize: "clamp(1.8rem,4vw,3rem)", color: "#fff",
            margin: "0 0 16px", letterSpacing: "-0.025em",
          }}>
            Ready to Join Our Family?
          </h2>
          <p style={{
            fontFamily: "Inter,sans-serif", fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            margin: "0 auto 36px", lineHeight: 1.7,
          }}>
            Be part of Tanjore&apos;s most successful beauty academy community.<br />
            உங்கள் கனவை நனவாக்குங்கள்.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919487992728?text=Hi! I'd like to enroll at Luv U Beauty Academy in Tanjore."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 15,
                textDecoration: "none", boxShadow: "0 6px 24px rgba(233,30,140,0.4)",
              }}
            >
              Enroll Now — சேர்வோம்!
            </a>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)", background: "transparent",
              fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 15,
              textDecoration: "none",
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Responsive ── */}
      <style>{`
        .founder-card .founder-inner { grid-template-columns: 360px 1fr; display: grid; }
        @keyframes ownerRingSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .founder-card .founder-inner { grid-template-columns: 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .mv-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
