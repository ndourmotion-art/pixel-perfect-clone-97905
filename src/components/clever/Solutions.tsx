import { useReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";

const packs = [
  {
    name: "Formule Essentiel",
    tagline: "Soyez présent et visible dans le marché",
    features: [
      "Conception graphique",
      "Production vidéo Animatic 3D / IA / Motion design",
      "Diffusion Hors média",
      "Production audio (Voice Over)",
      "Bilan de campagne",
    ],
    duration: "Durée de campagne 2 mois",
    revisions: "Nombre de révision : 3 révisions",
  },
  {
    name: "Formule Croissance",
    tagline: "Développez votre visibilité et attirez de nouveaux clients",
    features: [
      "Conception graphique",
      "Animation 3D / Vidéo IA / Motion design",
      "Production vidéo",
      "Production audio (Voice Over)",
      "Diffusion Hors média",
      "Diffusion Média (Optionnel)",
      "Bilan de campagne",
    ],
    duration: "Durée de campagne 2 mois",
    revisions: "Nombre de révision : 5 révisions",
  },
  {
    name: "Formule Sans\nlimite",
    tagline: "Renforcer votre présence et accélérer votre croissance",
    features: [
      "Conception graphique",
      "Animation 3D / IA / Motion design",
      "Production vidéo",
      "Production audio (Voice Over)",
      "Social ads",
      "Marketing de contenu",
      "Diffusion Média (Optionnel)",
      "Bilan de campagne",
    ],
    duration: "Durée de campagne 2 mois",
    revisions: "Nombre de révision : 5 révisions",
  },
];

const PackCard = ({ pack, i }: { pack: typeof packs[number]; i: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative flex flex-col p-6 md:p-8 border border-white/20 bg-surface-dark hover:bg-white/5 transition-colors"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <div className="mb-6">
        <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95]">
          {pack.name}
        </h3>
        <p className="mt-3 text-surface-dark-foreground/70 text-sm md:text-base leading-relaxed">
          « {pack.tagline} »
        </p>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {pack.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm md:text-base text-surface-dark-foreground/80">
            <Check className="w-4 h-4 mt-1 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/10 space-y-2">
        <p className="text-sm text-surface-dark-foreground/70">{pack.duration}</p>
        <p className="text-sm text-surface-dark-foreground/70">{pack.revisions}</p>
      </div>
    </div>
  );
};

export const Solutions = () => {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="solutions" className="bg-surface-dark text-surface-dark-foreground py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-surface-dark-foreground/60 mb-5">( Packs sur mesure )</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            Solutions sur mesure
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {packs.map((pack, i) => (
            <PackCard key={pack.name} pack={pack} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
