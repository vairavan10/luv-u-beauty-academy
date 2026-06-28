"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

/* ─── Category colours ─── */
const CAT_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  "Bridal Makeup": { bg: "#FFF0F6", color: "#C2185B", border: "rgba(194,24,91,0.2)" },
  "Career":        { bg: "#F0F4FF", color: "#3730A3", border: "rgba(55,48,163,0.2)" },
  "Makeup Tips":   { bg: "#FFFBEB", color: "#92400E", border: "rgba(146,64,14,0.2)" },
  "Skin Care":     { bg: "#F0FDF4", color: "#065F46", border: "rgba(6,95,70,0.2)"   },
};
const getColor = (cat: string) =>
  CAT_COLORS[cat] ?? { bg: "#F9FAFB", color: "#374151", border: "rgba(55,65,81,0.15)" };

/* ─── Scroll reveal ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, from = "bottom" }: {
  children: React.ReactNode; delay?: number; from?: "bottom" | "left" | "right";
}) {
  const { ref, visible } = useReveal();
  const tx = from === "left" ? "-24px" : from === "right" ? "24px" : "0";
  const ty = from === "bottom" ? "28px" : "0";
  return (
    <div ref={ref} style={{
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0,0)" : `translate(${tx},${ty})`,
    }}>
      {children}
    </div>
  );
}

export default function BlogPageClient() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 60); return () => clearTimeout(t); }, []);

  const [post1, post2] = blogPosts;

  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <style>{`
        @keyframes bl-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes bl-ring { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes bl-blob1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(24px,-16px) scale(1.06)} }
        @keyframes bl-blob2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,14px) scale(1.05)} }
        @keyframes bl-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.75)} }
        @keyframes bl-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes bl-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .bl-shimmer {
          background: linear-gradient(90deg,#E91E8C 0%,#ff79c6 45%,#C2185B 75%,#E91E8C 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bl-shimmer 3s linear infinite;
        }
        .bl-post-card {
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
          transition: box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
          display: flex;
          flex-direction: column;
        }
        .bl-post-card:hover {
          box-shadow: 0 20px 56px rgba(233,30,140,0.13), 0 6px 20px rgba(0,0,0,0.07);
          transform: translateY(-6px);
        }
        .bl-img-wrap img {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .bl-post-card:hover .bl-img-wrap img {
          transform: scale(1.07) !important;
        }
        .bl-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 999px;
          font-family: Inter, sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          color: #E91E8C;
          background: rgba(233,30,140,0.07);
          border: 1.5px solid rgba(233,30,140,0.2);
          transition: all 0.22s ease;
        }
        .bl-read-btn:hover {
          background: rgba(233,30,140,0.13);
          gap: 12px;
        }
        .bl-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 14px;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #25D366, #128C7E);
          box-shadow: 0 6px 24px rgba(37,211,102,0.28);
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .bl-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(37,211,102,0.4); }
        .bl-enroll-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 14px;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          color: #fff;
          background: rgba(255,255,255,0.09);
          border: 1.5px solid rgba(255,255,255,0.22);
          transition: background 0.22s ease;
        }
        .bl-enroll-btn:hover { background: rgba(255,255,255,0.16); }

        /* ── Responsive: stack cards on mobile ── */
        @media (max-width: 767px) {
          .bl-post-card { flex-direction: column !important; }
          .bl-img-half { width: 100% !important; min-height: 240px !important; }
          .bl-content-half { padding: 28px 24px !important; }
        }

      `}</style>

      <main style={{ background: "#FDFBF9" }}>

        {/* ══════════════ HERO ══════════════ */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "clamp(108px,14vh,136px)", paddingBottom: 60 }}>

          {/* BG layer */}
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
            <div style={{ position:"absolute", top:"-12%", right:"-6%", width:"min(560px,58vw)", height:"min(560px,58vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 68%)", animation:"bl-blob1 7s ease-in-out infinite" }} />
            <div style={{ position:"absolute", bottom:"-6%", left:"-4%", width:"min(460px,48vw)", height:"min(460px,48vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(201,169,110,0.06) 0%,transparent 68%)", animation:"bl-blob2 6s ease-in-out infinite" }} />
            <div style={{ position:"absolute", top:"6%", right:"-5%", width:"min(420px,50vw)", height:"min(420px,50vw)", borderRadius:"50%", border:"1.5px dashed rgba(233,30,140,0.11)", animation:"bl-ring 32s linear infinite" }} />
            {/* dot grid */}
            <div style={{ position:"absolute", top:"22%", left:"3%", display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:14 }}>
              {Array.from({length:24}).map((_,i)=>(
                <div key={i} style={{ width:3, height:3, borderRadius:"50%", background:"rgba(233,30,140,0.22)", opacity:0.15+(i%3)*0.1 }} />
              ))}
            </div>
          </div>

          <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1, textAlign:"center" }}>

            {/* Badge */}
            <div style={{ marginBottom:22, transition:"all 0.6s ease", opacity:heroVisible?1:0, transform:heroVisible?"none":"translateY(18px)" }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"7px 22px", borderRadius:999, background:"rgba(233,30,140,0.06)", border:"1px solid rgba(233,30,140,0.18)", fontFamily:"Inter,sans-serif", fontSize:11.5, fontWeight:700, color:"#C2185B", letterSpacing:"0.08em", textTransform:"uppercase" }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#E91E8C", animation:"bl-pulse 2s infinite" }} />
                Luv U Beauty Academy · கட்டுரைகள்
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily:"Playfair Display,serif", fontWeight:900,
              fontSize:"clamp(2rem,5.5vw,4rem)", lineHeight:1.12,
              letterSpacing:"-0.03em", color:"#0D0D0D",
              margin:"0 0 18px",
              transition:"all 0.7s ease 0.1s", opacity:heroVisible?1:0,
              transform:heroVisible?"none":"translateY(24px)",
            }}>
              அழகு குறிப்புகள் &amp;{" "}
              <span className="bl-shimmer">Career Guide</span>
            </h1>

            {/* Sub */}
            <p style={{
              fontFamily:"Inter,sans-serif",
              fontSize:"clamp(0.95rem,1.8vw,1.1rem)",
              color:"#6B7280", lineHeight:1.8, maxWidth:520, margin:"0 auto",
              transition:"all 0.7s ease 0.2s", opacity:heroVisible?1:0,
              transform:heroVisible?"none":"translateY(16px)",
            }}>
              Tanjore &amp; Tamil Nadu பெண்களுக்காக — Expert beauty tips, bridal trends &amp; career guidance from our trainers.
            </p>
          </div>
        </section>

        {/* ══════════════ MARQUEE ══════════════ */}
        <div style={{ background:"#0D0D0D", height:42, overflow:"hidden", display:"flex", alignItems:"center", position:"relative" }}>
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:56, background:"linear-gradient(to right,#0D0D0D,transparent)", zIndex:2 }} />
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:56, background:"linear-gradient(to left,#0D0D0D,transparent)", zIndex:2 }} />
          <div style={{ display:"flex", whiteSpace:"nowrap", animation:"bl-marquee 20s linear infinite", willChange:"transform" }}>
            {[...Array(2)].flatMap((_,r) =>
              ["அழகு கலை", "Bridal Makeup Tips", "Career Guide", "Tamil Nadu Beauty", "Skin Care Secrets", "Hair Styling", "Salon Success"].map((t,i)=>(
                <span key={`${r}-${i}`} style={{ display:"inline-flex", alignItems:"center", padding:"0 20px", fontFamily:"Inter,sans-serif", fontSize:11.5, fontWeight:500, color:"rgba(255,255,255,0.48)", letterSpacing:"0.05em", flexShrink:0 }}>
                  {t}
                  <span style={{ width:3, height:3, borderRadius:"50%", background:"#E91E8C", opacity:0.7, display:"inline-block", marginLeft:20 }} />
                </span>
              ))
            )}
          </div>
        </div>

        {/* ══════════════ TWO-POST LAYOUT ══════════════ */}
        <section style={{ maxWidth:1100, margin:"0 auto", padding:"72px 24px 96px" }}>

          {/* Section label */}
          <Reveal>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:48 }}>
              <div style={{ width:3, height:28, borderRadius:4, background:"linear-gradient(to bottom,#E91E8C,#C9A96E)", flexShrink:0 }} />
              <div>
                <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#E91E8C", margin:"0 0 2px" }}>
                  சிறந்த கட்டுரைகள் · Featured Articles
                </p>
                <p style={{ fontFamily:"Inter,sans-serif", fontSize:13.5, color:"#9CA3AF", margin:0 }}>
                  2 expert articles curated for Tamil Nadu beauty professionals
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── CARD 1 — Large horizontal featured ── */}
          <Reveal delay={60}>
            <Link href={`/blog/${post1.slug}`} style={{ textDecoration:"none", display:"block", marginBottom:28 }}>
              <div
                className="bl-post-card"
                onMouseEnter={()=>setHoveredId(post1.id)}
                onMouseLeave={()=>setHoveredId(null)}
                style={{ flexDirection:"row" }}
              >
                {/* Image — left half */}
                <div className="bl-img-wrap bl-img-half" style={{ position:"relative", width:"46%", flexShrink:0, minHeight:360, overflow:"hidden" }}>
                  <Image
                    src={post1.image}
                    alt={post1.title}
                    fill
                    sizes="(max-width:768px) 100vw, 46vw"
                    priority
                    style={{ objectFit:"cover" }}
                  />
                  {/* overlay */}
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, transparent 65%, rgba(255,255,255,0.08))" }} />
                  {/* badges */}
                  <div style={{ position:"absolute", top:20, left:20, display:"flex", flexDirection:"column", gap:8 }}>
                    <span style={{ padding:"5px 14px", borderRadius:999, background:"linear-gradient(135deg,#E91E8C,#C2185B)", color:"#fff", fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.06em", display:"inline-block", boxShadow:"0 4px 14px rgba(233,30,140,0.38)" }}>
                      ⭐ சிறந்த கட்டுரை
                    </span>
                    <span style={{ padding:"4px 12px", borderRadius:999, background:"rgba(255,255,255,0.9)", backdropFilter:"blur(8px)", color:getColor(post1.category).color, fontFamily:"Inter,sans-serif", fontSize:10.5, fontWeight:700, display:"inline-block" }}>
                      {post1.category}
                    </span>
                  </div>
                  {/* read time bottom */}
                  <div style={{ position:"absolute", bottom:16, left:20 }}>
                    <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 12px", borderRadius:999, background:"rgba(0,0,0,0.52)", backdropFilter:"blur(4px)", fontFamily:"Inter,sans-serif", fontSize:11, color:"rgba(255,255,255,0.85)", fontWeight:500 }}>
                      <Clock size={10}/> {post1.readTime}
                    </span>
                  </div>
                </div>

                {/* Content — right half */}
                <div className="bl-content-half" style={{ flex:1, padding:"44px 48px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  {/* meta */}
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18, flexWrap:"wrap" }}>
                    <span style={{ display:"inline-flex", alignItems:"center", gap:5, fontFamily:"Inter,sans-serif", fontSize:12, color:"#9CA3AF", fontWeight:500 }}>
                      <Calendar size={11}/> {fmtDate(post1.date)}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily:"Playfair Display,serif", fontWeight:900,
                    fontSize:"clamp(1.4rem,2.5vw,2rem)", lineHeight:1.22,
                    color: hoveredId===post1.id ? "#E91E8C" : "#0D0D0D",
                    margin:"0 0 16px", letterSpacing:"-0.02em",
                    transition:"color 0.22s",
                  }}>
                    {post1.title}
                  </h2>

                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:14.5, color:"#6B7280", lineHeight:1.78, margin:"0 0 24px" }}>
                    {post1.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:28 }}>
                    {post1.tags.map(t=>(
                      <span key={t} style={{ padding:"3px 11px", borderRadius:999, background:getColor(post1.category).bg, border:`1px solid ${getColor(post1.category).border}`, color:getColor(post1.category).color, fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600 }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="bl-read-btn">
                      படிக்க தொடரவும் &nbsp;·&nbsp; Read Article <ArrowRight size={14}/>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* ── CARD 2 — Horizontal reversed ── */}
          <Reveal delay={140}>
            <Link href={`/blog/${post2.slug}`} style={{ textDecoration:"none", display:"block" }}>
              <div
                className="bl-post-card"
                onMouseEnter={()=>setHoveredId(post2.id)}
                onMouseLeave={()=>setHoveredId(null)}
                style={{ flexDirection:"row-reverse" }}
              >
                {/* Image — right half */}
                <div className="bl-img-wrap bl-img-half" style={{ position:"relative", width:"46%", flexShrink:0, minHeight:360, overflow:"hidden" }}>
                  <Image
                    src={post2.image}
                    alt={post2.title}
                    fill
                    sizes="(max-width:768px) 100vw, 46vw"
                    priority
                    style={{ objectFit:"cover" }}
                  />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to left, transparent 65%, rgba(255,255,255,0.08))" }} />
                  <div style={{ position:"absolute", top:20, right:20, display:"flex", flexDirection:"column", gap:8, alignItems:"flex-end" }}>
                    <span style={{ padding:"4px 12px", borderRadius:999, background:"rgba(255,255,255,0.9)", backdropFilter:"blur(8px)", color:getColor(post2.category).color, fontFamily:"Inter,sans-serif", fontSize:10.5, fontWeight:700, display:"inline-block" }}>
                      {post2.category}
                    </span>
                  </div>
                  <div style={{ position:"absolute", bottom:16, right:20 }}>
                    <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 12px", borderRadius:999, background:"rgba(0,0,0,0.52)", backdropFilter:"blur(4px)", fontFamily:"Inter,sans-serif", fontSize:11, color:"rgba(255,255,255,0.85)", fontWeight:500 }}>
                      <Clock size={10}/> {post2.readTime}
                    </span>
                  </div>
                </div>

                {/* Content — left half */}
                <div className="bl-content-half" style={{ flex:1, padding:"44px 48px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18, flexWrap:"wrap" }}>
                    <span style={{ display:"inline-flex", alignItems:"center", gap:5, fontFamily:"Inter,sans-serif", fontSize:12, color:"#9CA3AF", fontWeight:500 }}>
                      <Calendar size={11}/> {fmtDate(post2.date)}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily:"Playfair Display,serif", fontWeight:900,
                    fontSize:"clamp(1.4rem,2.5vw,2rem)", lineHeight:1.22,
                    color: hoveredId===post2.id ? getColor(post2.category).color : "#0D0D0D",
                    margin:"0 0 16px", letterSpacing:"-0.02em",
                    transition:"color 0.22s",
                  }}>
                    {post2.title}
                  </h2>

                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:14.5, color:"#6B7280", lineHeight:1.78, margin:"0 0 24px" }}>
                    {post2.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:28 }}>
                    {post2.tags.map(t=>(
                      <span key={t} style={{ padding:"3px 11px", borderRadius:999, background:getColor(post2.category).bg, border:`1px solid ${getColor(post2.category).border}`, color:getColor(post2.category).color, fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600 }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="bl-read-btn" style={{ color: getColor(post2.category).color, background:`${getColor(post2.category).bg}`, borderColor:getColor(post2.category).border }}>
                      மேலும் படிக்க &nbsp;·&nbsp; Read Article <ArrowRight size={14}/>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

        </section>

        {/* ══════════════ CTA BAND ══════════════ */}
        <Reveal>
          <section style={{ background:"linear-gradient(135deg,#1a0a12 0%,#2e0c20 55%,#160610 100%)", padding:"80px 24px", position:"relative", overflow:"hidden" }}>
            <div aria-hidden style={{ position:"absolute", top:-70, left:-70, width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle,rgba(233,30,140,0.18) 0%,transparent 68%)", animation:"bl-blob1 6s ease-in-out infinite" }} />
            <div aria-hidden style={{ position:"absolute", bottom:-50, right:-50, width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(201,169,110,0.14) 0%,transparent 68%)", animation:"bl-blob2 5s ease-in-out infinite" }} />

            <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
              <div style={{ fontSize:48, marginBottom:18, animation:"bl-float 3.2s ease-in-out infinite" }}>🎓</div>

              <h2 style={{ fontFamily:"Playfair Display,serif", fontWeight:900, fontSize:"clamp(1.75rem,4vw,2.7rem)", lineHeight:1.18, color:"#fff", margin:"0 0 14px", letterSpacing:"-0.02em" }}>
                உங்கள் அழகு வாழ்க்கையை{" "}
                <span className="bl-shimmer">இன்றே தொடங்குங்கள்!</span>
              </h2>

              <p style={{ fontFamily:"Inter,sans-serif", fontSize:15, color:"rgba(255,255,255,0.55)", lineHeight:1.8, margin:"0 0 36px" }}>
                Join Luv U Beauty Academy — Tanjore&apos;s #1 govt-certified beauty school.{" "}
                <strong style={{ color:"rgba(255,255,255,0.8)" }}>Free demo class available!</strong>
              </p>

              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:28 }}>
                <a
                  href="https://wa.me/919487992728?text=Hi! I read your blog and want to book a free demo class at Luv U Beauty Academy."
                  target="_blank" rel="noopener noreferrer"
                  className="bl-wa-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp — Book Free Demo
                </a>
                <Link href="/courses" className="bl-enroll-btn">
                  View All Courses <ArrowRight size={14}/>
                </Link>
              </div>

              {/* Trust */}
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"5px 20px" }}>
                {["கட்டணமில்லாத demo","Govt. Certified","2500+ Students","Tanjore #1 Academy"].map(t=>(
                  <span key={t} style={{ display:"inline-flex", alignItems:"center", gap:5, fontFamily:"Inter,sans-serif", fontSize:12, color:"rgba(255,255,255,0.38)", fontWeight:500 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

      </main>
    </>
  );
}
