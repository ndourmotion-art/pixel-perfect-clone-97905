import { useReveal } from "@/hooks/useReveal";

export const ContactCTA = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-28 md:py-40 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <div className="eyebrow text-surface-dark-foreground/60 mb-6">( Let's build )</div>
        <h2 className="font-display uppercase text-display-xl leading-[0.85]">
          Contact <br />
          <span className="text-primary">us</span>
          <span className="font-serif-italic normal-case text-surface-dark-foreground/80 text-[0.5em] align-top ml-2">
            today
          </span>
        </h2>
        <a
          href="mailto:hello@cleverafrica.com"
          className="mt-12 inline-flex items-center gap-4 text-2xl md:text-4xl font-serif-italic underline-offset-8 hover:underline"
        >
          hello@cleverafrica.com
          <span className="h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
};
