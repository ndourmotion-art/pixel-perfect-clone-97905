import { useReveal } from "@/hooks/useReveal";

const heroImage =
  "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=2400&q=80";

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal mb-8 md:mb-10" />

        <h1 className="font-display uppercase tracking-tight">
          <span className="block font-sans font-bold whitespace-nowrap leading-[0.95] text-[10vw] md:text-[8vw]">
            Moving brands <span className="text-primary">forward</span>
          </span>
        </h1>

        <div className="mt-8 md:mt-12 relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-muted">
          <img
            src={heroImage}
            alt="Clever Africa hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-6 md:bottom-8 flex items-center justify-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-base font-medium hover:bg-primary transition-colors"
            >
              View Projects
              <span className="h-9 w-9 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                ↗
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur border border-foreground/10 px-6 py-3 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Get a quote
            </a>
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex items-end justify-between gap-6 border-t border-foreground/10 pt-6">
          <div className="eyebrow text-foreground/60">Est. 2019</div>
          <div className="eyebrow text-foreground/60 flex items-center gap-2">
            Scroll for more <span aria-hidden>↓</span>
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
