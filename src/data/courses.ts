// Course data for Luv U Beauty Academy
export interface Course {
  id: string;
  slug: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  price: string;
  curriculum: string[];
  careerOpportunities: string[];
  certification: string;
  featured: boolean;
  color: string;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "professional-beautician-course",
    title: "Professional Beautician Course",
    duration: "6 Months",
    level: "Beginner to Advanced",
    description:
      "A comprehensive program covering all aspects of beauty therapy. Learn skincare, makeup, hair styling, nail care, and salon management with hands-on practical sessions.",
    shortDescription:
      "Master all beauty therapy skills with our flagship 6-month program.",
    image: "/courses/professional-beautician-course.webp",
    icon: "✨",
    price: "Contact for Fees",
    curriculum: [
      "Skin Analysis & Care",
      "Facial Treatments",
      "Makeup Techniques",
      "Hair Cutting & Styling",
      "Nail Art & Extensions",
      "Waxing & Threading",
      "Salon Management",
      "Client Consultation",
    ],
    careerOpportunities: [
      "Salon Professional",
      "Freelance Beautician",
      "Makeup Artist",
      "Beauty Educator",
    ],
    certification: "Government Recognized Certificate",
    featured: true,
    color: "from-rose-100 to-pink-50",
  },
  {
    id: "2",
    slug: "bridal-makeup-course",
    title: "Bridal Makeup Course",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Specialize in bridal beauty with this intensive course covering traditional South Indian bridal looks, modern airbrush makeup, and complete bridal packages.",
    shortDescription:
      "Become a sought-after bridal makeup artist in Tanjore and beyond.",
    image: "/courses/bridal-makeup-course.webp",
    icon: "💍",
    price: "Contact for Fees",
    curriculum: [
      "South Indian Bridal Makeup",
      "North Indian Bridal Looks",
      "Airbrush Makeup",
      "Bridal Saree Draping",
      "Hair Styling for Brides",
      "Mehndi Knowledge",
      "Photography-ready Looks",
      "Bridal Package Pricing",
    ],
    careerOpportunities: [
      "Bridal Makeup Artist",
      "Wedding Planner Collaborator",
      "Freelance Artist",
      "Beauty Studio Owner",
    ],
    certification: "Bridal Makeup Specialist Certificate",
    featured: true,
    color: "from-amber-50 to-yellow-50",
  },
  {
    id: "3",
    slug: "hair-styling-course",
    title: "Hair Styling Course",
    duration: "2 Months",
    level: "Beginner to Advanced",
    description:
      "Learn cutting-edge hair styling techniques from basic cuts to advanced coloring, keratin treatments, and modern updos for every occasion.",
    shortDescription:
      "Master professional hair cutting, coloring, and styling techniques.",
    image: "/courses/hair-styling-course.webp",
    icon: "💇",
    price: "Contact for Fees",
    curriculum: [
      "Hair Anatomy & Care",
      "Basic & Advanced Cutting",
      "Hair Coloring Techniques",
      "Keratin & Smoothening",
      "Braiding & Updos",
      "Hair Extension Application",
      "Scalp Treatments",
      "Product Knowledge",
    ],
    careerOpportunities: [
      "Hair Stylist",
      "Salon Specialist",
      "Film & TV Stylist",
      "Freelance Hair Artist",
    ],
    certification: "Professional Hair Stylist Certificate",
    featured: false,
    color: "from-purple-50 to-pink-50",
  },
  {
    id: "4",
    slug: "nail-art-course",
    title: "Nail Art Course",
    duration: "1 Month",
    level: "Beginner",
    description:
      "Explore the creative world of nail art with gel extensions, acrylic nails, intricate nail designs, and nail care techniques loved by clients everywhere.",
    shortDescription:
      "Create stunning nail designs with our creative nail art program.",
    image: "/courses/nail-art-course.webp",
    icon: "💅",
    price: "Contact for Fees",
    curriculum: [
      "Natural Nail Care",
      "Gel Polish Application",
      "Acrylic Extensions",
      "Nail Art Designs",
      "Ombre & Gradient Nails",
      "3D Nail Art",
      "Nail Repair Techniques",
      "Product & Tool Knowledge",
    ],
    careerOpportunities: [
      "Nail Technician",
      "Salon Specialist",
      "Home-based Nail Artist",
      "Studio Owner",
    ],
    certification: "Nail Art Technician Certificate",
    featured: false,
    color: "from-pink-50 to-rose-50",
  },
  {
    id: "5",
    slug: "skin-care-training",
    title: "Skin Care Training",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    description:
      "Deep dive into professional skincare with facial treatments, chemical peels, microdermabrasion, and modern skin analysis techniques.",
    shortDescription:
      "Professional skincare treatments and facial therapy mastery.",
    image: "/courses/skin-care-training.webp",
    icon: "🌸",
    price: "Contact for Fees",
    curriculum: [
      "Skin Types & Analysis",
      "Cleansing Techniques",
      "Exfoliation Methods",
      "Facial Massage",
      "Mask Therapies",
      "Anti-aging Treatments",
      "Acne Management",
      "Home Care Guidance",
    ],
    careerOpportunities: [
      "Skin Care Therapist",
      "Spa Professional",
      "Dermatology Clinic Assistant",
      "Beauty Consultant",
    ],
    certification: "Skin Care Specialist Certificate",
    featured: false,
    color: "from-green-50 to-emerald-50",
  },
  {
    id: "6",
    slug: "salon-management-course",
    title: "Salon Management Course",
    duration: "1 Month",
    level: "Intermediate",
    description:
      "Learn to run a profitable salon with business skills, client management, staff training, inventory control, and digital marketing for beauty businesses.",
    shortDescription:
      "Build and manage your own successful salon business confidently.",
    image: "/courses/salon-management-course.webp",
    icon: "🏆",
    price: "Contact for Fees",
    curriculum: [
      "Salon Business Planning",
      "Client Management",
      "Staff Hiring & Training",
      "Inventory & Retail",
      "Salon Pricing Strategy",
      "Digital Marketing Basics",
      "Social Media for Salons",
      "Financial Management",
    ],
    careerOpportunities: [
      "Salon Owner",
      "Salon Manager",
      "Beauty Business Consultant",
      "Franchise Operator",
    ],
    certification: "Salon Management Certificate",
    featured: false,
    color: "from-blue-50 to-indigo-50",
  },
  {
    id: "7",
    slug: "advanced-makeup-course",
    title: "Advanced Makeup Course",
    duration: "3 Months",
    level: "Advanced",
    description:
      "Take your makeup skills to a professional level with editorial, HD, airbrush, special effects, and film makeup techniques used by industry professionals.",
    shortDescription:
      "Professional-level makeup artistry for editorial, film, and events.",
    image: "/courses/advanced-makeup-course.webp",
    icon: "🎨",
    price: "Contact for Fees",
    curriculum: [
      "HD & Airbrush Makeup",
      "Editorial Looks",
      "Fantasy & SFX Makeup",
      "Film & TV Makeup",
      "Fashion Show Preparation",
      "Color Theory Advanced",
      "Portfolio Building",
      "Industry Networking",
    ],
    careerOpportunities: [
      "Film Makeup Artist",
      "Fashion Editorial Artist",
      "Brand Makeup Educator",
      "Celebrity Makeup Artist",
    ],
    certification: "Advanced Makeup Artist Certificate",
    featured: true,
    color: "from-rose-50 to-amber-50",
  },
];
