import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/clever/Nav";
import { Footer } from "@/components/clever/Footer";
import { useReveal } from "@/hooks/useReveal";
import { getProject, projects } from "@/data/projects";

const ProjectPage = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const heading = useReveal<HTMLDivElement>();

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Nav />
        <section className="pt-40 pb-24 mx-auto max-w-[1000px] px-6 lg:px-10 text-center">
          <h1 className="font-display uppercase text-5xl md:text-6xl">Project not found</h1>
          <Link to="/" className="inline-block mt-8 underline">← Back home</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <article>
        <header ref={heading} className="reveal pt-36 md:pt-44 pb-12 md:pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link to="/#work" className="text-sm text-foreground/60 hover:text-foreground">← All work</Link>
          <div className="eyebrow text-foreground/60 mt-6 mb-4">( Case study )</div>
          <h1 className="font-display uppercase text-display-lg text-6xl md:text-8xl font-medium leading-[0.95]">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </header>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-8">
            <div>
              <div className="eyebrow text-foreground/50 mb-2">Client</div>
              <div className="text-lg">{project.client}</div>
            </div>
            <div>
              <div className="eyebrow text-foreground/50 mb-2">Year</div>
              <div className="text-lg">{project.year}</div>
            </div>
            <div>
              <div className="eyebrow text-foreground/50 mb-2">Role</div>
              <div className="text-lg">{project.role}</div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="eyebrow text-foreground/50 mb-4">About</div>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">{project.description}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24 md:pb-36 grid md:grid-cols-2 gap-6">
          {project.gallery.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl bg-muted ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
              <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          ))}
        </section>

        <section className="border-t border-foreground/10">
          <Link to={`/work/${next.slug}`} className="group block mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20">
            <div className="eyebrow text-foreground/60 mb-3">( Next project )</div>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display uppercase text-4xl md:text-6xl group-hover:text-primary transition-colors">
                {next.title}
              </h2>
              <span className="h-12 w-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:rotate-45 transition-all">
                ↗
              </span>
            </div>
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default ProjectPage;
