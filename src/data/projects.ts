export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  client: string;
  year: string;
  role: string;
  description: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "project-a",
    title: "Project A",
    tags: ["Brand Identity", "Art Direction"],
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1600&q=80",
    client: "Confidential",
    year: "2025",
    role: "Identity, Art Direction",
    description:
      "A complete brand system built around bold typography and a living color palette. From logo to motion guidelines, every detail is engineered to scale across digital and physical touchpoints.",
    gallery: [
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-b",
    title: "Project B",
    tags: ["Motion Design", "3D Rendering"],
    image: "https://images.unsplash.com/photo-1605548109048-39b6e2424d8c?auto=format&fit=crop&w=1200&q=80",
    client: "Confidential",
    year: "2025",
    role: "Motion, 3D",
    description:
      "A kinetic identity exploring rhythm, light and material. The system pairs procedural 3D with hand-tuned motion to give the brand a distinct sonic-visual signature.",
    gallery: [
      "https://images.unsplash.com/photo-1605548109048-39b6e2424d8c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-c",
    title: "Project C",
    tags: ["Brand Activation", "Video"],
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    client: "Confidential",
    year: "2024",
    role: "Direction, Production",
    description:
      "An on-the-ground brand activation captured through a documentary lens. We crafted the concept, directed the shoot and edited a series of short-form films for launch.",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-d",
    title: "Project D",
    tags: ["Digital Marketing", "Web"],
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    client: "Confidential",
    year: "2024",
    role: "Strategy, Web Design",
    description:
      "A digital platform built to convert. Strategy, design and engineering came together to ship a fast, accessible site that lifted core funnel metrics by double digits.",
    gallery: [
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-e",
    title: "Project E",
    tags: ["AI Imagery", "Compositing"],
    image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=80",
    client: "Confidential",
    year: "2025",
    role: "AI Direction, Compositing",
    description:
      "A campaign of impossible images. We combined custom-trained models with traditional compositing to deliver a surreal yet on-brand visual world.",
    gallery: [
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-f",
    title: "Project F",
    tags: ["Storytelling", "Realisation"],
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
    client: "Confidential",
    year: "2024",
    role: "Story, Direction",
    description:
      "A short film exploring craft and place. A tight crew, natural light and a patient edit produced a piece that has travelled the festival circuit.",
    gallery: [
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-g",
    title: "Project G",
    tags: ["Editorial", "Print"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    client: "Confidential",
    year: "2024",
    role: "Editorial Design",
    description:
      "A print-first editorial system that translates seamlessly to screen. Typography-led, image-rich, built to be read.",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-h",
    title: "Project H",
    tags: ["Campaign", "Film"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80",
    client: "Confidential",
    year: "2025",
    role: "Direction, Production",
    description:
      "A flagship campaign blending film, motion and AI imagery into a single coherent world. Shipped across broadcast, social and OOH.",
    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "project-i",
    title: "Project I",
    tags: ["Brand Identity", "Motion"],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1600&q=80",
    client: "Confidential",
    year: "2025",
    role: "Identity, Motion",
    description:
      "Une identité vibrante déployée sur tous les supports, du print au motion, pensée pour durer.",
    gallery: [
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
