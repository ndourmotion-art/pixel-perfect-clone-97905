import { useReveal } from "@/hooks/useReveal";

const services = [
  { no: "01", title: "ACTIVATION DE MARQUE" },
  { no: "02", title: "BRANDING DE MARQUE" },
  { no: "03", title: "PRODUCTION & RÉALISATION" },
  { no: "04", title: "DESIGN DYNAMIQUE" },
  { no: "05", title: "DESIGN STATIQUE" },
  { no: "06", title: "CONCEPTION & RÉDACTION" },
];

const Card = ({ s, i }: { s: typeof services[number]; i: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group aspect-square flex flex-col justify-between p-5 md:p-6 border border-surface-dark-foreground/15 rounded-2xl hover:bg-foreground/[0.04] transition-colors"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="eyebrow text-surface-dark-foreground/50">{s.no}</div>
      </div>

      <div>
        <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] group-hover:text-primary transition-colors">
          {s.title}
        </h3>
        <p className="mt-3 text-xs md:text-sm text-surface-dark-foreground/70 leading-relaxed">
          {s.description}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-y-1 text-xs text-surface-dark-foreground/75">
        {s.items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Services = () => {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="bg-surface-dark text-surface-dark-foreground py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-surface-dark-foreground/60 mb-5">( Services & Expertise )</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            A digital design <span className="font-serif-italic normal-case text-surface-dark-foreground/80">powerhouse.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl">
            From strategy to screen — we shape brands across every surface they live on.
            Four practices, one studio, built for momentum.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
