import { useReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";

const packs = [
  {
    name: "Formule Essentiel",
    tagline: "Faire connaître votre entreprise",
    features: [
      "Audit & stratégie",
      "Conception graphique : 2 visuels",
      "Production vidéo : 1 vidéo",
      "Conception & Rédaction",
      "Social Ads (Facebook, Instagram Ads) : mise en place",
      "Diffusion Média (TV, Radio…) : optionnel",
      "Rapport de campagne",
    ],
    duration: "Durée de campagne 2 mois",
    revisions: "Nombre de révision : 2 révisions",
  },
  {
    name: "Formule Croissance",
    tagline: "Générer plus de prospects",
    features: [
      "Audit & stratégie",
      "Conception graphique : 4 visuels",
      "Production vidéo : 2 vidéos",
      "Motion Design / IA : 1 animation",
      "Conception & Rédaction",
      "Social Ads (Facebook, Instagram Ads) : gestion",
      "Google Ads : optionnel",
      "Diffusion Média (TV, Radio…) : optionnel",
      "Rapport de campagne",
    ],
    duration: "Durée de campagne 2 mois",
    revisions: "Nombre de révision : 4 révisions",
  },
  {
    name: "Formule Sans\nlimite",
    tagline: "Accélérer votre croissance",
    features: [
      "Audit & stratégie",
      "Conception graphique : 6 visuels",
      "Production vidéo : 3 vidéos",
      "Motion Design / IA : 2 animations",
      "Conception & Rédaction",
      "Social Ads (Facebook, Instagram Ads) : gestion",
      "Google Ads",
      "Diffusion Média (TV, Radio…)",
      "Rapport de campagne",
    ],
    duration: "Durée de campagne 3 mois",
    revisions: "Nombre de révision : 6 révisions",
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
        <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] whitespace-pre-line">
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
        <a
          href="#contact"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-foreground text-background py-3 text-sm md:text-base font-medium hover:bg-primary transition-colors"
        >
          Choisir
        </a>
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
