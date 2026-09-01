"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Check } from "lucide-react";

const WHATSAPP_NUMBER = "919487992728";

const courseOptions = [
  "Professional Beautician Course",
  "Bridal Makeup Course",
  "Hair Styling Course",
  "Nail Art Course",
  "Skin Care Training",
  "Salon Management Course",
  "Advanced Makeup Course",
  "Other / Not Sure",
];

interface FormData { name: string; phone: string; email: string; course: string; message: string; }

/* ─── Animated input field ─── */
function Field({
  id, label, required, error, children,
}: {
  id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} style={{
        display: "block", fontFamily: "var(--font-body)",
        fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
        color: "#6B7280", marginBottom: 7, textTransform: "uppercase",
      }}>
        {label}{required && <span style={{ color: "#E91E8C", marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {error && (
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          color: "#EF4444", marginTop: 5,
          display: "flex", alignItems: "center", gap: 5,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12" y2="16.5" /></svg>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = (hasError: boolean, focused: boolean): React.CSSProperties => ({
  width: "100%", padding: "13px 16px",
  borderRadius: 12,
  border: `1.5px solid ${hasError ? "#EF4444" : focused ? "#E91E8C" : "#E5E7EB"}`,
  background: focused ? "#FFF5F8" : "#FAFAFA",
  // 16px minimum: iOS Safari auto-zooms the whole page when a focused input
  // has a font-size below 16px, which throws off the layout mid-enquiry.
  fontFamily: "var(--font-body)", fontSize: 16, color: "#0D0D0D",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
  boxShadow: focused ? "0 0 0 3px rgba(233,30,140,0.08)" : "none",
  boxSizing: "border-box",
});

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", course: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  /**
   * Set when the browser blocked our WhatsApp tab. We must never show the
   * success screen in that case — the enquiry did not actually go anywhere,
   * so we surface a real link for the user to tap instead.
   */
  const [blockedUrl, setBlockedUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  /* ─── Field-level float animation on focus ─── */
  const onFocus = (name: string) => setFocused(name);
  const onBlur  = () => setFocused(null);

  /* ─── Submit button press animation ─── */
  const btnRef = useRef<HTMLButtonElement>(null);
  const onBtnDown = () => gsap.to(btnRef.current, { scale: 0.96, duration: 0.12 });
  const onBtnUp   = () => gsap.to(btnRef.current, { scale: 1, duration: 0.25, ease: "back.out(2)" });

  /* ─── Success state animation ─── */
  useEffect(() => {
    if (submitted && successRef.current) {
      gsap.fromTo(successRef.current,
        { opacity: 0, scale: 0.88, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: "back.out(1.4)" }
      );
    }
  }, [submitted]);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.course) e.course = "Please select a course";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      /* Shake invalid fields */
      Object.keys(errs).forEach(k => {
        const el = document.getElementById(k);
        if (el) gsap.fromTo(el, { x: -8 }, { x: 0, duration: 0.4, ease: "elastic.out(1,0.3)" });
      });
      return;
    }

    const msg = encodeURIComponent(
      `Hi! I'm enquiring from the Luv U Beauty Academy website.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "N/A"}\nCourse: ${form.course}\nMessage: ${form.message || "N/A"}`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

    /*
     * Open WhatsApp SYNCHRONOUSLY, before any await.
     * Browsers only honour window.open() while the user activation from the
     * click is still live. Awaiting anything first (we used to await an
     * artificial 800ms delay here) drops that activation, and Safari, iOS and
     * every popup blocker silently refuse the call — the visitor saw a
     * "thank you" screen while nothing had been sent.
     */
    const win = window.open(waUrl, "_blank", "noopener,noreferrer");

    /*
     * Record the lead server-side too, so an abandoned or blocked WhatsApp
     * handoff doesn't lose it. Deliberately fire-and-forget: it must never
     * block or fail the WhatsApp flow, which is the primary path.
     */
    void fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      keepalive: true,
    }).catch(() => {});

    if (!win || win.closed) {
      /* Popup blocked — tell the truth and give them something to tap. */
      setBlockedUrl(waUrl);
      return;
    }

    setSubmitted(true);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  /* ─── Popup-blocked screen: the enquiry has NOT been handed off yet ─── */
  if (blockedUrl) {
    return (
      <div style={{ textAlign: "center", padding: "32px 16px" }}>
        <div style={{
          width: 60, height: 60, margin: "0 auto 22px", borderRadius: "50%",
          background: "rgba(233,30,140,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12" y2="16.01" />
          </svg>
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 22, color: "#0D0D0D", margin: "0 0 10px",
        }}>One more tap, {form.name}</h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#6B7280", margin: "0 0 24px", lineHeight: 1.6 }}>
          Your browser blocked the WhatsApp window. Tap below to send your
          enquiry — your details are already filled in.
        </p>
        <a
          href={blockedUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(() => { setBlockedUrl(null); setSubmitted(true); }, 400)}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
            padding: "15px 32px", borderRadius: 14,
            background: "linear-gradient(135deg, #E91E8C, #C2185B)",
            color: "#fff", textDecoration: "none",
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16,
            boxShadow: "0 6px 24px rgba(233,30,140,0.3)",
          }}
        >
          Open WhatsApp
        </a>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#9CA3AF", marginTop: 18, lineHeight: 1.6 }}>
          Or call us directly on{" "}
          <a href={`tel:+${WHATSAPP_NUMBER}`} style={{ color: "#E91E8C", fontWeight: 600 }}>
            +91 94879 92728
          </a>
        </p>
      </div>
    );
  }

  /* ─── Success screen ─── */
  if (submitted) {
    return (
      <div ref={successRef} style={{ textAlign: "center", padding: "32px 16px", opacity: 0 }}>
        <div style={{
          position: "relative",
          width: 80, height: 80,
          margin: "0 auto 24px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Outer glowing pulsing circle */}
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(233,30,140,0.1)",
            animation: "success-pulse 2s infinite",
          }} />
          {/* Inner circle */}
          <div style={{
            position: "relative",
            width: 60, height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #E91E8C, #C2185B)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff",
            boxShadow: "0 8px 20px rgba(233,30,140,0.3)",
            animation: "success-scale 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
          }}>
            <Check size={32} strokeWidth={3} style={{ animation: "success-check 0.4s 0.2s ease forwards" }} />
          </div>
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 24, color: "#0D0D0D", margin: "0 0 10px",
        }}>Thank you, {form.name}! 🎉</h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#6B7280", margin: "0 0 28px", lineHeight: 1.6 }}>
          Your enquiry is on its way to WhatsApp. We reply within minutes!
        </p>
        <button
          onClick={() => { setSubmitted(false); setBlockedUrl(null); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }}
          style={{
            padding: "11px 28px", borderRadius: 10,
            border: "1.5px solid #E5E7EB", background: "#fff",
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
            color: "#374151", cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#E91E8C"; el.style.color = "#E91E8C"; }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "#E5E7EB"; el.style.color = "#374151"; }}
        >Send Another Enquiry</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Name + Phone row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
        <Field id="name" label="Full Name" required error={errors.name}>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={change}
            onFocus={() => onFocus("name")} onBlur={onBlur}
            placeholder="Your name"
            autoComplete="name"
            style={inputStyle(!!errors.name, focused === "name")}
          />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" required error={errors.phone}>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={change}
            onFocus={() => onFocus("phone")} onBlur={onBlur}
            placeholder="10-digit number"
            autoComplete="tel"
            style={inputStyle(!!errors.phone, focused === "phone")}
          />
        </Field>
      </div>

      {/* Email */}
      <Field id="email" label="Email (Optional)" error={errors.email}>
        <input
          id="email" name="email" type="email"
          value={form.email} onChange={change}
          onFocus={() => onFocus("email")} onBlur={onBlur}
          placeholder="your@email.com"
          autoComplete="email"
          style={inputStyle(!!errors.email, focused === "email")}
        />
      </Field>

      {/* Course */}
      <Field id="course" label="Course of Interest" required error={errors.course}>
        <div style={{ position: "relative" }}>
          <select
            id="course" name="course"
            value={form.course} onChange={change}
            onFocus={() => onFocus("course")} onBlur={onBlur}
            style={{ ...inputStyle(!!errors.course, focused === "course"), appearance: "none", paddingRight: 40, cursor: "pointer" }}
          >
            <option value="">Select a course…</option>
            {courseOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <svg style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </Field>

      {/* Message */}
      <Field id="message" label="Message (Optional)">
        <textarea
          id="message" name="message"
          value={form.message} onChange={change}
          onFocus={() => onFocus("message")} onBlur={onBlur}
          rows={4} placeholder="Any questions or special requirements…"
          style={{ ...inputStyle(false, focused === "message"), resize: "none" }}
        />
      </Field>

      {/* Submit */}
      <div>
        <button
          ref={btnRef}
          type="submit"
          onMouseDown={onBtnDown}
          onMouseUp={onBtnUp}
          onMouseLeave={onBtnUp}
          style={{
            width: "100%", padding: "15px 24px", borderRadius: 14,
            background: "linear-gradient(135deg, #E91E8C, #C2185B)",
            color: "#fff",
            border: "none", cursor: "pointer",
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: "0 6px 24px rgba(233,30,140,0.3)",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
        >
          {/* No async gate before the click opens WhatsApp — see handleSubmit. */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
          Send Enquiry via WhatsApp
        </button>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          color: "#9CA3AF", textAlign: "center", marginTop: 10,
        }}>
          Opens WhatsApp · We reply within minutes
        </p>
      </div>

      <style>{`
        @keyframes success-pulse {
          0% { transform: scale(0.95); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes success-scale {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        @keyframes success-check {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
