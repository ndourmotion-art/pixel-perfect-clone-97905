import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/data/projects";

const layout = [
  { area: "one", cardClass: "aspect-[4/3] md:aspect-[2/1]" },
  { area: "two", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "three", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "four", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "five", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "six", cardClass: "aspect-[4/3] md:aspect-[3/1]" },
  { area: "seven", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "eight", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "nine", cardClass: "aspect-[4/3] md:aspect-square" },
];

const ProjectCard = ({
  project,
  area,
  cardClass,
}: {
  project: Project;
  area: string;
  cardClass: string;
}) => {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      className="reveal group block"
      style={{ gridArea: area }}
    >
      <div className={`relative ${cardClass} overflow-hidden rounded-2xl bg-muted`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/95 transition-colors duration-200" />
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

        <div className="portfolio-bento">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              area={layout[i]?.area ?? `area-${i}`}
              cardClass={layout[i]?.cardClass ?? "aspect-[4/3]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
