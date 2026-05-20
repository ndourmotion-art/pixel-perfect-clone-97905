import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    no: "01",
    title: "Brand Activation",
    items: ["Stratégie marketing", "Positionnement de marque", "Digital marketing"],
  },
  {
    no: "02",
    title: "Brand Identity",
    items: ["Art direction", "Interactive design", "Brand guidelines"],
  },
  {
    no: "03",
    title: "Vidéographie",
    items: ["Storytelling", "Scénario", "Réalisation", "Conception rédaction"],
  },
  {
    no: "04",
    title: "Dynamic Content",
    items: ["3D design & rendering", "Motion design", "AI generated video", "AI imagery & compositing"],
  },
];

const Row = ({ s, i }: { s: typeof services[number]; i: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group border-t border-foreground/15 py-10 md:py-14 grid md:grid-cols-12 gap-6 items-start hover:bg-foreground/[0.03] transition-colors px-2 -mx-2 rounded-lg"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <div className="md:col-span-2 eyebrow text-foreground/50">{s.no}</div>
      <h3 className="md:col-span-6 font-display uppercase text-5xl md:text-7xl leading-[0.9] group-hover:text-primary transition-colors">
        {s.title}
      </h3>
      <ul className="md:col-span-4 space-y-2 text-base md:text-lg text-foreground/75">
        {s.items.map((it) => (
          <li key={it} className="flex items-start gap-3">
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
          <h2 className="font-display uppercase text-display-lg font-sans text-7xl">
            A digital design <span className="font-serif-italic normal-case text-surface-dark-foreground/80">powerhouse.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl">
            From strategy to screen — we shape brands across every surface they live on.
            Four practices, one studio, built for momentum.
          </p>
        </div>

        <div className="border-b border-surface-dark-foreground/15">
          {services.map((s, i) => (
            <Row key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
