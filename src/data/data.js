import {
  Search,
  Target,
  Share2,
  ShoppingBag,
  PenTool,
  Code2,
} from "lucide-react";

/* =========================================================
   SERVICES
   ========================================================= */

export const services = [
  {
    id: "seo",
    
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description:
      "Build stronger organic visibility with technical SEO, content strategy and continuous performance optimization.",
    icon: Search,
  },
  {
    id: "paid-ads",
    
    title: "Paid Advertising",
    shortTitle: "Paid Ads",
    description:
      "Reach high-intent customers through focused Google and paid social campaigns built around measurable outcomes.",
    icon: Target,
  },
  {
    id: "social",
  
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "Create a stronger social presence with content and campaigns designed to attract, engage and retain your audience.",
    icon: Share2,
  },
  {
    id: "ecommerce",
    
    title: "E-Commerce Marketing",
    shortTitle: "E-Commerce",
    description:
      "Improve product visibility and conversions with digital strategies built specifically for online commerce.",
    icon: ShoppingBag,
  },
  {
    id: "content",
    
    title: "Content Marketing",
    shortTitle: "Content",
    description:
      "Turn useful ideas into content that builds authority, earns attention and supports long-term growth.",
    icon: PenTool,
  },
  {
    id: "web",
   
    title: "Website Development",
    shortTitle: "Web Development",
    description:
      "Build fast, responsive digital experiences that look credible, communicate clearly and convert visitors.",
    icon: Code2,
  },
];

/* =========================================================
   COMPANY STATS
   ========================================================= */

export const stats = [
  {
    value: 250,
    suffix: "%",
    label: "Organic Traffic Growth",
  },
  {
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
];

/* =========================================================
   ABOUT — FOUR CORE PILLARS
   ========================================================= */

export const pillars = [
  {
    number: "01",
    title: "Creative Ideas",
    description:
      "Ideas that make your brand easier to notice, remember and connect with.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "Clear strategies built around your audience, business goals and market position.",
  },
  {
    number: "03",
    title: "Data-Driven Decisions",
    description:
      "Performance data helps us understand what is working and where to improve.",
  },
  {
    number: "04",
    title: "Measurable Results",
    description:
      "We focus on outcomes that can be tracked, understood and improved over time.",
  },
];

/* =========================================================
   WHY XNTROVA
   ========================================================= */

export const benefits = [
  {
    number: "01",
    title: "Strategy Before Execution",
    description:
      "We start by understanding the business problem before deciding which digital channel to use.",
  },
  {
    number: "02",
    title: "Built Around Your Business",
    description:
      "Instead of one-size-fits-all campaigns, we shape the approach around your goals and audience.",
  },
  {
    number: "03",
    title: "Transparent Performance",
    description:
      "Clear communication and measurable performance keep every campaign accountable.",
  },
  {
    number: "04",
    title: "Marketing Meets Technology",
    description:
      "Digital marketing, creative thinking and technology work together to create stronger experiences.",
  },
];

/* =========================================================
   PROCESS
   ========================================================= */

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, audience, competition and growth objectives.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Create a focused roadmap based on research, priorities and measurable goals.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Turn the strategy into campaigns, content and digital experiences.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "Track performance and identify what is creating the strongest impact.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Optimize what works and scale the opportunities that can drive sustainable growth.",
  },
];

/* =========================================================
   CASE STUDIES
   ========================================================= */

/*
  These are presentation-ready placeholders for the assessment UI.
  Replace the project names, images and metrics with verified
  Xntrova case-study information if the company provides it.
*/

export const caseStudies = [
  {
    id: 1,
    category: "E-Commerce",
    title: "Building a stronger digital sales journey",
    description:
      "A conversion-focused digital approach combining visibility, content and performance marketing.",
    metrics: [
      {
        value: "+184%",
        label: "Organic Traffic",
      },
      {
        value: "+62%",
        label: "Conversion Rate",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    category: "Digital Marketing",
    title: "Turning visibility into qualified demand",
    description:
      "A focused growth strategy designed to improve discoverability and generate stronger customer intent.",
    metrics: [
      {
        value: "+137%",
        label: "Organic Visibility",
      },
      {
        value: "3.2x",
        label: "Lead Growth",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "Web & Technology",
    title: "Creating a digital experience built to convert",
    description:
      "A cleaner digital experience designed around clarity, credibility and the customer journey.",
    metrics: [
      {
        value: "+48%",
        label: "Engagement",
      },
      {
        value: "-31%",
        label: "Bounce Rate",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

export const testimonials = [
  {
    quote:
      "Xntrova helped us bring more structure to our digital growth and gave us a clearer direction.",
    name: "Amit Verma",
    role: "Business Owner",
  },
  {
    quote:
      "The team understood what we were trying to achieve and translated it into a much stronger digital presence.",
    name: "Neha Kapoor",
    role: "Founder",
  },
  {
    quote:
      "What stood out was the focus on measurable performance rather than simply running campaigns.",
    name: "Rahul Sharma",
    role: "Business Head",
  },
];

/* =========================================================
   CONTACT DETAILS
   ========================================================= */

export const contactInfo = {
  phone: "+91 868-382-8646",
  email: "info@xntrova.com",
  address: "A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077",
};

/* =========================================================
   NAVIGATION
   ========================================================= */

export const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];