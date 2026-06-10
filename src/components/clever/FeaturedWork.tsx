import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/data/projects";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-12",
];

const aspects = [
  "aspect-[16/10]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[16/10]",
  "aspect-[5/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[21/9]",
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      className={`reveal group block ${spans[index] ?? "md:col-span-6"}`}
    >
      <div className={`relative ${aspects[index] ?? "aspect-[4/3]"} overflow-hidden rounded-2xl bg-muted`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity shadow rounded-none opacity-85" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display uppercase text-3xl md:text-4xl font-sans">{project.title}</h3>
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
    </Link>
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
            <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">Featured projects</h2>
          </div>
          <a
            href="#work"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-1 hover:border-foreground"
          >
            All Work →
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-x-6 gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
