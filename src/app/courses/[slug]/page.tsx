import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ChevronRight,
  Check,
  ArrowRight,
  BarChart2,
  Award,
  Briefcase,
  Users,
  CalendarDays,
  Phone,
  Star,
  BookOpen,
} from "lucide-react";
import { courses } from "@/data/courses";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} in Tanjore | ${course.duration} Program | Luv U Beauty Academy`,
    description: `${course.description} Duration: ${course.duration}. Level: ${course.level}. Govt. recognized certificate + placement assistance. Enroll now at Luv U Beauty Academy, Tanjore.`,
    alternates: {
      canonical: `https://luvubeautyacademy.com/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://luvubeautyacademy.com" },
    { name: "Courses", url: "https://luvubeautyacademy.com/courses" },
    { name: course.title, url: `https://luvubeautyacademy.com/courses/${course.slug}` },
  ];

  const courseFaqs = [
    {
      question: `How long is the ${course.title}?`,
      answer: `The ${course.title} at Luv U Beauty Academy is ${course.duration} long. Classes are conducted Monday to Saturday with both morning and evening batch options.`,
    },
    {
      question: `Do I get a certificate after completing the ${course.title}?`,
      answer: `Yes! You receive our ${course.certification} which is government recognized and accepted by top salons and studios across India.`,
    },
    {
      question: "Is placement provided after this course?",
      answer:
        "Yes, we provide 100% placement assistance. Our dedicated team connects you with hiring partners across Tamil Nadu and beyond.",
    },
    {
      question: "What are the fees?",
      answer:
        "Please contact us via WhatsApp or call us for the current fee structure. We offer flexible installment options to make education accessible to all.",
    },
  ];

  // Hero badge items use Lucide icons
  const heroBadges = [
    { label: course.duration, Icon: Clock },
    { label: course.level, Icon: BarChart2 },
    { label: "Govt. Certificate", Icon: Award },
    { label: "Placement Support", Icon: Briefcase },
  ];

  // Sidebar detail rows use Lucide icons
  const sidebarDetails = [
    { Icon: Clock, label: "Duration", value: course.duration },
    { Icon: BarChart2, label: "Level", value: course.level },
    { Icon: Award, label: "Certificate", value: "Govt. Recognized" },
    { Icon: Briefcase, label: "Placement", value: "100% Support" },
    { Icon: Users, label: "Batch Size", value: "5-10 Students" },
    { Icon: CalendarDays, label: "Batches", value: "Morning & Evening" },
  ];

  return (
    <main style={{ paddingTop: 80 }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(courseFaqs)) }}
      />

      {/* ── Hero ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FDF6F0, #F9E8E8)" }}
      >
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm font-body text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-rose-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/courses" className="hover:text-rose-gold transition-colors">Courses</Link>
            <ChevronRight size={14} />
            <span className="text-rose-gold font-medium">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div>
              {/* Icon + Popular badge */}
              <div className="flex items-center gap-3 mb-5">
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "rgba(233,30,140,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26,
                }}>
                  {course.icon}
                </div>
                {course.featured && (
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "5px 13px", borderRadius: 999,
                    background: "#fff",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(233,30,140,0.18)",
                    fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700,
                    color: "#E91E8C",
                  }}>
                    <Star size={12} fill="#E91E8C" color="#E91E8C" />
                    Most Popular
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-charcoal mb-4">
                {course.title}
              </h1>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-7">
                {course.description}
              </p>

              {/* Badge pills with Lucide icons */}
              <div className="flex flex-wrap gap-3 mb-8">
                {heroBadges.map(({ label, Icon }) => (
                  <span
                    key={label}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "7px 14px", borderRadius: 999,
                      background: "#fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      border: "1px solid #F0F0F0",
                      fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
                      color: "#374151",
                    }}
                  >
                    <Icon size={14} color="#E91E8C" strokeWidth={2} />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919487992728?text=Hi! I want to enroll in the ${course.title} at Luv U Beauty Academy, Tanjore.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Enroll Now
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://wa.me/919487992728?text=Hi! I'd like to book a free demo class at Luv U Beauty Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Book Free Demo
                </a>
              </div>
            </div>

            {/* Right column: Image */}
            <div className="rounded-3xl overflow-hidden shadow-strong">
              <Image
                src={course.image}
                alt={`${course.title} at Luv U Beauty Academy Tanjore`}
                width={800}
                height={600}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Details ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Curriculum */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(233,30,140,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <BookOpen size={18} color="#E91E8C" />
                  </div>
                  <h2 className="font-display font-bold text-charcoal text-2xl" style={{ margin: 0 }}>
                    Course Curriculum
                  </h2>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: 12,
                  }}
                >
                  {course.curriculum.map((item, i) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "13px 16px",
                        borderRadius: 14,
                        background: "#FDF6F0",
                        border: "1px solid #F7E7CE",
                      }}
                    >
                      <span
                        style={{
                          minWidth: 28, height: 28, borderRadius: "50%",
                          background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "Inter, sans-serif",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#2D2D2D", lineHeight: 1.4 }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(233,30,140,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Briefcase size={18} color="#E91E8C" />
                  </div>
                  <h2 className="font-display font-bold text-charcoal text-2xl" style={{ margin: 0 }}>
                    Career Opportunities
                  </h2>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 12,
                  }}
                >
                  {course.careerOpportunities.map((career) => (
                    <div
                      key={career}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "13px 16px",
                        borderRadius: 14,
                        background: "#fff",
                        border: "1px solid #F3F4F6",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      <span
                        style={{
                          width: 24, height: 24, borderRadius: "50%",
                          background: "rgba(233,30,140,0.08)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={13} color="#E91E8C" strokeWidth={2.5} />
                      </span>
                      <span
                        style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#2D2D2D", fontWeight: 500 }}
                      >
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display font-bold text-charcoal text-2xl mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {courseFaqs.map((faq, i) => (
                    <details key={i} className="group bg-cream rounded-2xl border border-champagne">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-body font-semibold text-charcoal list-none">
                        {faq.question}
                        <ChevronRight size={18} className="text-rose-gold group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 font-body text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: 24,
                  border: "1px solid #F3F4F6",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                  position: "sticky",
                  top: 96,
                }}
              >
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 800, fontSize: 20,
                    color: "#2D2D2D", margin: "0 0 6px",
                  }}
                >
                  Enquire About This Course
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif", fontSize: 13,
                    color: "#9CA3AF", margin: "0 0 20px", lineHeight: 1.6,
                  }}
                >
                  Get complete details, fees &amp; batch schedule directly to your WhatsApp.
                </p>

                {/* CTA buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  <a
                    href={`https://wa.me/919487992728?text=Hi! I'm interested in the ${course.title} at Luv U Beauty Academy Tanjore. Please share fees and batch details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ justifyContent: "center" }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp Enquiry
                  </a>
                  <a
                    href="tel:+919487992728"
                    className="btn-secondary"
                    style={{ justifyContent: "center" }}
                  >
                    <Phone size={15} />
                    Call Us
                  </a>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 18 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {sidebarDetails.map(({ Icon, label, value }) => (
                      <div
                        key={label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            display: "flex", alignItems: "center", gap: 8,
                            fontFamily: "Inter, sans-serif", fontSize: 13,
                            color: "#9CA3AF", minWidth: 0,
                          }}
                        >
                          <span
                            style={{
                              width: 26, height: 26, borderRadius: 7,
                              background: "rgba(233,30,140,0.07)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={13} color="#E91E8C" strokeWidth={2} />
                          </span>
                          {label}
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif", fontSize: 13,
                            fontWeight: 700, color: "#2D2D2D",
                            textAlign: "right", flexShrink: 0,
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Courses ── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #FDF6F0, #FEFEFE)" }}>
        <div className="container-custom">
          <h2 className="font-display font-bold text-charcoal text-2xl mb-8 text-center">
            Other Courses You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter((c) => c.slug !== course.slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/courses/${related.slug}`}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "16px 18px",
                    background: "#fff", borderRadius: 18,
                    border: "1.5px solid #F3F4F6",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  className="group hover:border-rose-gold hover:shadow-soft"
                >
                  <span
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "#FDF6F0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, flexShrink: 0,
                    }}
                  >
                    {related.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      className="font-body font-semibold text-charcoal text-sm group-hover:text-rose-gold transition-colors"
                      style={{ margin: 0, lineHeight: 1.4 }}
                    >
                      {related.title}
                    </p>
                    <p
                      style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", margin: "2px 0 0" }}
                    >
                      {related.duration}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-rose-gold transition-colors flex-shrink-0" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
