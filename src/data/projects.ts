export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  location?: string;
  summary: string;
  problem?: string;
  role?: string;
  outcome?: string;
  stack: string[];
  url: string;
  featured?: boolean;
  accent: string;
  /** Optional preview image shown in the case study card. Falls back to a UI mock if omitted. */
  image?: string;
};

/**
 * Add a live URL when ready. Empty url = case study only (still professional, no "coming soon").
 * `problem` / `role` / `outcome` are optional — when present, the Work page renders a full
 * case study; when absent, it renders a compact project tile instead.
 */
export const projects: Project[] = [
  {
    id: "dental-ai-agent",
    number: "01",
    title: "Dental AI Agent",
    category: "AI Automation",
    location: "Pakistan",
    summary:
      "An AI assistant built for dental clinics to handle patient questions and guide appointment intent — with a calm, production-ready chat experience.",
    problem:
      "Clinics lose time answering the same questions while staff juggle phones, forms, and follow-ups.",
    role: "Product thinking, conversation design, full-stack implementation, and deployment readiness.",
    outcome:
      "A focused agent experience that feels trustworthy for healthcare contexts and easy for staff to adopt.",
    stack: ["Next.js", "TypeScript", "AI / LLMs", "API integration"],
    url: "",
    featured: true,
    accent: "#0f6e78",
    image: "/dental-ai-card.png",
  },
  {
    id: "ogdcl-contractor",
    number: "02",
    title: "OGDCL Official Contractor",
    category: "Web Application",
    location: "Pakistan",
    summary:
      "A structured web application built for an official OGDCL contractor to manage operations and present the business professionally online.",
    stack: ["Web App", "Business Systems"],
    url: "https://majestic-rugelach-879199.netlify.app",
    accent: "#2f6f9e",
  },
  {
    id: "wholesale-pharmacy",
    number: "03",
    title: "Wholesale Pharmacy Application",
    category: "Web Application",
    location: "Pakistan",
    summary:
      "An ordering and inventory-focused platform built for a wholesale pharmacy business to streamline day-to-day operations.",
    stack: ["Web App", "Inventory & Orders"],
    url: "",
    accent: "#3a8a6e",
  },
  {
    id: "sanitary-web-app",
    number: "04",
    title: "Mohsin Sanitary",
    category: "Web Application",
    location: "Pakistan",
    summary:
      "A product catalog and storefront for a sanitary goods business, built for clarity and easy management.",
    stack: ["Web App", "Catalog"],
    url: "https://mohsinsanitary.store/",
    accent: "#4a7fb5",
  },
  {
    id: "stonevalleyco",
    number: "05",
    title: "Stone Valley Countertops",
    category: "Business Website",
    location: "USA",
    summary:
      "A lead-generating business website for a countertop fabrication company — service pages, gallery, and a quote-request flow built to convert visitors.",
    stack: ["Business Website"],
    url: "https://stonevalleyco.com/",
    accent: "#8a6d3b",
  },
  {
    id: "realestate-3d-germany",
    number: "06",
    title: "NORDHAUS Immobilien",
    category: "3D Real Estate",
    location: "Germany",
    summary:
      "An interactive 3D real estate showcase for a Hamburg-based property business, giving buyers an immersive way to explore listings.",
    stack: ["3D Visualization", "Web App"],
    url: "https://code955.github.io/nordhaus-immobilien-live/",
    accent: "#6a5acd",
  },
  {
    id: "realestate-3d-uk",
    number: "07",
    title: "Villa Aurora 3D Experience",
    category: "3D Real Estate",
    location: "UK",
    summary:
      "A UK-focused 3D real estate experience built to help agencies present properties with more depth than static photos.",
    stack: ["3D Visualization", "Web App"],
    url: "https://code955.github.io/villa-aurora-live/",
    accent: "#5c7cd6",
  },
  {
    id: "islah-corporation",
    number: "08",
    title: "The Islah Corporation",
    category: "Nonprofit Website",
    location: "USA",
    summary:
      "A donation-driven nonprofit website for a US-based charity — causes, impact stats, and a donation flow built to earn trust.",
    stack: ["Nonprofit Website"],
    url: "https://islahcorp.com/",
    accent: "#0f6e78",
  },
];
