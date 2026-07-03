import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      className="reveal group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-40"
        />
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-display uppercase text-2xl md:text-3xl font-sans text-white">{project.title}</h3>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-white/80">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
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
            <div className="eyebrow text-foreground/60 mb-4">( Sélection )</div>
            <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">Nos réalisations</h2>
          </div>
          <a
            href="#work"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-1 hover:border-foreground"
          >
            Tous les projets →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
