import adsPreview from "@/assets/ads-preview.jpg.asset.json";
import jet7xPreview from "@/assets/jet7x.jpg.asset.json";
import championsPreview from "@/assets/les-champions.jpg.asset.json";
import noelMadarPreview from "@/assets/noel-madar.jpg.asset.json";
import sinoMaliPreview from "@/assets/sino-africaine-mali.jpg.asset.json";
import muna1 from "@/assets/muna1.jpg.asset.json";
import muna2 from "@/assets/muna2.jpg.asset.json";
import muna3 from "@/assets/muna3.jpg.asset.json";
import muna4 from "@/assets/muna4.jpg.asset.json";
import ads3 from "@/assets/ads3.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  link?: string;
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
    image: adsPreview.url,
    client: "Confidential",
    year: "2025",
    role: "Identity, Art Direction",
    description:
      "A complete brand system built around bold typography and a living color palette. From logo to motion guidelines, every detail is engineered to scale across digital and physical touchpoints.",
    gallery: [
      adsPreview.url,
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "jet7x-doundeul",
    title: "Jet7x — Doundeul s a katan",
    tags: ["Publicité", "Motion"],
    image: jet7xPreview.url,
    link: "https://vimeo.com/1130287469?fl=pl&fe=sh",
    client: "Jet7x",
    year: "2025",
    role: "Direction, Production",
    description:
      "Campagne publicitaire pour Jet7x, mise en scène énergique autour de la boisson iconique.",
    gallery: [jet7xPreview.url],
  },
  {
    slug: "champions-proprete",
    title: "Les champions de la propreté",
    tags: ["Animation 3D", "Publicité"],
    image: championsPreview.url,
    link: "https://vimeo.com/779602628?fl=pl&fe=sh",
    client: "Confidentiel",
    year: "2024",
    role: "Direction, Animation 3D",
    description:
      "Une animation 3D vibrante célébrant l'esprit d'équipe et la performance sur le terrain.",
    gallery: [championsPreview.url],
  },
  {
    slug: "noel-chez-madar",
    title: "Noël chez Madar",
    tags: ["Publicité", "3D"],
    image: noelMadarPreview.url,
    link: "https://vimeo.com/1066685587?fl=pl&fe=sh",
    client: "Madar",
    year: "2024",
    role: "Direction, Production",
    description:
      "Une campagne festive pour Madar mêlant lumière, éclat et magie de Noël.",
    gallery: [noelMadarPreview.url],
  },
  {
    slug: "cooperation-sino-africaine-mali",
    title: "La coopération Sino-Africaine au Mali",
    tags: ["Documentaire", "Motion Design"],
    image: sinoMaliPreview.url,
    link: "https://vimeo.com/924594743?fl=pl&fe=sh",
    client: "Confidentiel",
    year: "2024",
    role: "Direction, Motion",
    description:
      "Un film documentaire retraçant la coopération économique Sino-Africaine au Mali.",
    gallery: [sinoMaliPreview.url],
  },
  {
    slug: "le-jardin-muna",
    title: "Le Jardin Muna",
    tags: ["Publicité", "Direction Artistique"],
    image: muna4.url,
    client: "Le Jardin Muna",
    year: "2025",
    role: "Direction Artistique, Production",
    description:
      "Une campagne visuelle vibrante pour Le Jardin Muna, célébrant les jus 100% naturels à travers des visuels colorés et immersifs.",
    gallery: [muna1.url, muna2.url, muna3.url, muna4.url],
  },
  {
    slug: "ads-centre-appel",
    title: "ADS Centre d'Appel",
    tags: ["Publicité", "Film"],
    image: ads3.url,
    link: "https://vimeo.com/1206991529?fl=pl&fe=sh",
    client: "ADS",
    year: "2025",
    role: "Direction, Production",
    description:
      "Un film publicitaire pour ADS mettant en lumière le service du centre d'appel et l'engagement des équipes sur le terrain.",
    gallery: [ads3.url],
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
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
