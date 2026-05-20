import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "13+", label: "Years experience" },
  { value: "15+", label: "Awards" },
  { value: "350+", label: "Clients" },
];

const badges = [
  { title: "Motion Specialist", sub: "Certified studio" },
  { title: "AI Content Expert", sub: "End-to-end pipeline" },
];

export const Stats = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal">
          <div className="eyebrow text-foreground/60 mb-5">( About the studio )</div>
          <h2 className="font-display uppercase text-display-lg font-sans max-w-4xl">
            Numbers that <span className="font-serif-italic normal-case text-primary">speak</span> loudly.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-6 border-y border-foreground/15 py-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-7xl md:text-8xl text-primary">{s.value}</div>
              <div className="mt-3 eyebrow text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="rounded-2xl border border-foreground/15 p-6 hover:bg-foreground hover:text-background transition-colors">
              <div className="h-10 w-10 rounded-full bg-accent mb-4" />
              <div className="font-display uppercase text-2xl">{b.title}</div>
              <div className="mt-1 text-sm opacity-70">{b.sub}</div>
            </div>
          ))}
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-between">
            <div className="eyebrow opacity-80">( Headquarters )</div>
            <div className="font-display uppercase text-2xl mt-6">
              Based in Africa — available worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
