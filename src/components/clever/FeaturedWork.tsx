import { useReveal } from "@/hooks/useReveal";

type Project = {
  title: string;
  tags: string[];
  image: string;
  span: "lg" | "md" | "sm";
};

const projects: Project[] = [
  {
    title: "Sahara Bloom",
    tags: ["Brand Identity", "Art Direction"],
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1600&q=80",
    span: "lg",
  },
  {
    title: "Lagos Pulse",
    tags: ["Motion Design", "3D Rendering"],
    image: "https://images.unsplash.com/photo-1605548109048-39b6e2424d8c?auto=format&fit=crop&w=1200&q=80",
    span: "md",
  },
  {
    title: "Kente Kinetics",
    tags: ["Brand Activation", "Video"],
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    span: "md",
  },
  {
    title: "Nairobi Node",
    tags: ["Digital Marketing", "Web"],
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    span: "lg",
  },
  {
    title: "Atlas Reverie",
    tags: ["AI Imagery", "Compositing"],
    image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=80",
    span: "sm",
  },
  {
    title: "Marrakech Loop",
    tags: ["Storytelling", "Realisation"],
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
    span: "sm",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useReveal<HTMLAnchorElement>();
  const colSpan =
    project.span === "lg" ? "md:col-span-7" : project.span === "md" ? "md:col-span-5" : "md:col-span-6";
  const aspect = project.span === "lg" ? "aspect-[16/10]" : "aspect-[4/3]";
  return (
    <a
      ref={ref}
      href="#work"
      className={`reveal group block ${colSpan}`}
    >
      <div className={`relative ${aspect} overflow-hidden rounded-2xl bg-muted`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display uppercase text-3xl md:text-4xl">{project.title}</h3>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <span className="shrink-0 mt-2 h-10 w-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:rotate-45 transition-all">
          ↗
        </span>
      </div>
    </a>
  );
};

export const FeaturedWork = () => {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={heading} className="reveal flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="eyebrow text-foreground/60 mb-4">( Selected Work )</div>
            <h2 className="font-display uppercase text-display-lg">Featured projects</h2>
          </div>
          <a
            href="#work"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-1 hover:border-foreground"
          >
            All Work →
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-x-6 gap-y-16">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
