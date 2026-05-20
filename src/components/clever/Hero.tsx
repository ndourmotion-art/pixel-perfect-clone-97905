import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const slides = [
  "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1605548109048-39b6e2424d8c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1800&q=80",
];

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal flex items-center gap-3 mb-10 md:mb-14">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="eyebrow text-foreground/70 text-2xl bg-slate-50 text-stone-950">We are Clever africa</span>
        </div>

        <h1 className="font-display uppercase text-display-xl tracking-tight">
          <span className="block font-sans font-bold text-center text-8xl">Moving brands</span>
          <span className="block font-sans font-bold text-center text-8xl">
            <span className="text-primary font-sans font-bold text-center text-8xl">forward</span>
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed text-center px-0 py-0 mx-0 my-0">
            A creative studio building bold brand systems, motion, video and
            AI-powered content for ambitious teams shaping the next decade.
          </p>

          <div className="md:col-span-6 flex-wrap items-center md:justify-center flex flex-row gap-[50px] font-normal text-base">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 md:text-base font-medium hover:bg-primary transition-colors text-base"
            >
              View Projects
              <span className="h-9 w-9 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                ↗
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm md:text-base font-medium hover:bg-foreground hover:text-background transition-colors"
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

      {/* Soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)" }}
      />
    </section>
  );
};
