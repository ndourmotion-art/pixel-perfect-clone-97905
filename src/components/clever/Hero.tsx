import { useReveal } from "@/hooks/useReveal";
import heroAsset from "@/assets/ads2-preview.jpg.asset.json";

const heroImage = heroAsset.url;

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted">
          <img
            src={heroImage}
            alt="Clever Africa hero"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14">
            <div className="eyebrow text-background/90 mb-4 md:mb-6">
              For brands, organizations, and startups of all sizes.
            </div>

            <h1 className="font-display uppercase tracking-tight font-bold leading-[0.9]">
              <span className="block font-sans font-black text-background text-[clamp(2.2rem,7vw,6rem)]">
                Making
              </span>
              <span className="block font-sans font-black text-background text-[clamp(2.2rem,7vw,6rem)]">
                Things
              </span>
              <span className="block font-sans font-black text-primary text-[clamp(2.2rem,7vw,6rem)]">
                Move
              </span>
              <span className="block font-sans font-black text-primary text-[clamp(2.2rem,7vw,6rem)]">
                Forward
              </span>
            </h1>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-base font-medium hover:bg-primary transition-colors"
              >
                Voir les projets
                <span className="h-9 w-9 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                  ↗
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>


        <div className="mt-20 md:mt-28 flex items-end justify-end gap-6 border-t border-foreground/10 pt-6">
          <div className="eyebrow text-foreground/60 flex items-center gap-2">
            Défiler pour plus <span aria-hidden>↓</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)" }}
      />
    </section>
  );
};
