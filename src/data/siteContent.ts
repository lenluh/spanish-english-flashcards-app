export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

export type Project = {
  name: string;
  category: string;
  image: string;
  alt: string;
  tall?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    eyebrow: "Brand Direction",
    title: "Design systems with an editorial point of view.",
    description:
      "We shape visual identities that feel timeless yet current—crafted with thoughtful typography, tactile color palettes, and cinematic composition.",
    cta: "Explore branding",
    href: "#contact",
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1400&q=80",
    alt: "Softly lit interior with curated decor and warm tones",
  },
  {
    eyebrow: "Campaign Production",
    title: "Image-led stories for product, hospitality, and culture.",
    description:
      "From concept to delivery, we direct and produce still and motion campaigns that prioritize atmosphere, detail, and emotional clarity.",
    cta: "View productions",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80",
    alt: "Studio space with mood boards and creative materials",
  },
  {
    eyebrow: "Digital Presence",
    title: "Web experiences that feel composed, quiet, and confident.",
    description:
      "We build premium websites for creative teams and boutique brands—focused on fluid rhythm, subtle motion, and strong visual narrative.",
    cta: "See capabilities",
    href: "#services",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    alt: "Design workstation showing a modern website layout",
  },
];

export const projects: Project[] = [
  {
    name: "Sable Residence",
    category: "Interior Direction",
    image:
      "https://images.unsplash.com/photo-1616594039964-3c0b6d4d7f6b?auto=format&fit=crop&w=900&q=80",
    alt: "Minimal living room with textured materials",
    tall: true,
  },
  {
    name: "Aster Hotel",
    category: "Brand Campaign",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury hotel details with layered fabrics",
  },
  {
    name: "Mira Ceramics",
    category: "Art Direction",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
    alt: "Handmade ceramics on neutral stone surface",
  },
  {
    name: "Noma Editorial",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    alt: "Editorial table setting with modern styling",
    tall: true,
  },
  {
    name: "North House",
    category: "Spatial Story",
    image:
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=900&q=80",
    alt: "Architectural exterior with muted concrete tones",
  },
  {
    name: "Atelier One",
    category: "Visual Identity",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of designed printed materials",
  },
];

export const testimonials = [
  {
    quote:
      "Dexter Studio translated our brand into a visual world that feels both elevated and deeply human.",
    name: "Elena Ruiz",
    role: "Founder, Sable Hospitality",
  },
  {
    quote:
      "Their pacing, restraint, and attention to detail gave our launch a confidence we had been missing.",
    name: "Mikael Hart",
    role: "Creative Director, North House",
  },
  {
    quote:
      "A rare mix of strategic clarity and poetic execution. Every touchpoint now feels intentionally composed.",
    name: "Jordan Lee",
    role: "Marketing Lead, Mira Ceramics",
  },
];

export const clients = [
  "Aster Hotels",
  "Mira Ceramics",
  "North House",
  "Sable Collective",
  "Atelier One",
  "Kinfolk Retail",
];
