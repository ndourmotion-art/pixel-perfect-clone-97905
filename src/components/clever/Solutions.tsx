import { useReveal } from "@/hooks/useReveal";
import { Check, X } from "lucide-react";

const formulas = ["Starter", "Growth", "Professionnel", "Corporate"];

type Cell = string | boolean;

const rows: { label: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { label: "Objectif", values: ["Faire connaître votre entreprise", "Générer plus de prospects", "Accélérer votre croissance", "Dominer votre marché"] },
  { label: "Audit & stratégie", values: [true, true, true, true] },
  { label: "Durée de campagne", values: ["2 mois", "2 mois", "3 mois", "Sur mesure"] },
  { label: "Conception graphique", values: ["2 visuels", "4 visuels", "6 visuels", "Illimité"] },
  { label: "Production vidéo", values: ["1 vidéo", "2 vidéos", "3 vidéos", "Sur mesure"] },
  { label: "Motion Design / IA", values: [false, "1 animation", "2 animations", "Sur mesure"] },
  { label: "Conception & Rédaction", values: [true, true, true, true] },
  { label: "Social Ads (Facebook, Instagram Ads)", values: ["Mise en place", "Gestion", "Gestion", "Gestion + créatifs"] },
  { label: "Google Ads", values: [false, "Optionel", true, true] },
  { label: "Diffusion Média (TV, Radio...)", values: ["Optionel", "Optionel", true, true] },
  { label: "Rapport de campagne", values: [true, true, true, true] },
  { label: "Révisions", values: ["2", "4", "6", "Illimité"] },
];

const CellContent = ({ value }: { value: Cell }) => {
  if (value === true) return <Check className="w-4 h-4 text-primary" />;
  if (value === false) return <X className="w-4 h-4 text-foreground/40" />;
  return <span>{value}</span>;
};

export const Solutions = () => {
  const head = useReveal<HTMLDivElement>();
  const table = useReveal<HTMLDivElement>();

  return (
    <section id="solutions" className="bg-background text-foreground py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-foreground/60 mb-5">( Packs sur mesure )</div>
          <h2 className="font-display uppercase text-display-lg text-5xl md:text-6xl font-sans font-medium">
            Solutions sur mesure
          </h2>
        </div>

        <div ref={table} className="reveal overflow-x-auto">
          <div className="min-w-[900px] border border-foreground/10">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
              <div className="p-4 md:p-5 border-r border-foreground/10" />
              {formulas.map((f) => (
                <div
                  key={f}
                  className="p-4 md:p-5 border-r border-foreground/10 last:border-r-0 font-display uppercase text-base md:text-lg leading-tight bg-accent text-accent-foreground"
                >
                  {f}
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] hover:bg-foreground/5 transition-colors"
              >
                <div className="p-4 md:p-5 border-r border-foreground/10 text-sm md:text-base font-medium">
                  {row.label}
                </div>
                {row.values.map((value, i) => (
                  <div
                    key={i}
                    className="p-4 md:p-5 border-r border-foreground/10 last:border-r-0 text-sm md:text-base text-foreground/80 flex items-start bg-accent/10"
                  >
                    <CellContent value={value} />
                  </div>
                ))}
              </div>
            ))}

            {/* CTA */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
              <div className="p-4 md:p-5 border-r border-foreground/10" />
              {formulas.map((f) => (
                <div key={f} className="p-4 md:p-5 border-r border-foreground/10 last:border-r-0 bg-accent/10">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-foreground text-background py-3 text-sm md:text-base font-medium hover:bg-primary transition-colors"
                  >
                    {f === "Corporate" ? "Demandez un devis" : "Choisir"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
