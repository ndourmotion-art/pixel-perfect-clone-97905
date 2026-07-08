import { useReveal } from "@/hooks/useReveal";
import activationMarque from "@/assets/activation-marque.jpg.asset.json";
import productionRealisation from "@/assets/production-realisation.jpg.asset.json";
import conceptionRedaction from "@/assets/conception-redaction.jpg.asset.json";
import brandingDeMarque from "@/assets/branding-de-marque.jpg.asset.json";
import designDynamique from "@/assets/design-dynamique.jpg.asset.json";
import designStatique from "@/assets/design-statique.jpg.asset.json";

const services = [
  { title: "ACTIVATION DE MARQUE", image: activationMarque.url },
  { title: "BRANDING DE MARQUE", image: brandingDeMarque.url },
  { title: "PRODUCTION & RÉALISATION", image: productionRealisation.url },
  { title: "DESIGN DYNAMIQUE", image: designDynamique.url },
  { title: "DESIGN STATIQUE", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80" },
  { title: "CONCEPTION & RÉDACTION", image: conceptionRedaction.url },
];

const Card = ({ s, i }: { s: typeof services[number]; i: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative aspect-square flex items-center justify-center p-5 md:p-6 overflow-hidden transition-colors border border-white/20"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `url(${s.image})` }}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h3 className="relative z-10 text-center font-display uppercase text-2xl md:text-3xl leading-[0.95] group-hover:text-white transition-colors">
        {s.title}
      </h3>
    </div>
  );
};


export const Services = () => {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="bg-surface-dark text-surface-dark-foreground py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-surface-dark-foreground/60 mb-5">( Services & Expertises )</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            Expertises
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
