import logo from "@/assets/cleverafrica-logo.png";

const cols = [
  {
    title: "Index",
    links: ["Accueil", "Réalisations", "Expertises", "À propos", "Contact"],
  },
  {
    title: "Services",
    links: [
      "Activation de marque",
      "Branding de marque",
      "Production & Réalisation",
      "Design dynamique",
      "Design statique",
      "Conception & Rédaction",
    ],
  },
  {
    title: "Réseaux",
    links: ["Instagram", "LinkedIn", "Behance", "Vimeo"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-foreground/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img src={logo} alt="Cleverafrica" className="h-8 w-auto mb-6" />
            <p className="text-foreground/70 max-w-sm leading-relaxed">
              For brands, organizations, and startups of all sizes.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="eyebrow text-foreground/50 mb-4">{c.title}</div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1 md:text-right">
            <div className="eyebrow text-foreground/50 mb-4">Mail</div>
            <a href="mailto:hello@cleverafrica.com" className="text-foreground/80 hover:text-primary">
              hello@cleverafrica.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-foreground/60">
          <div>© {new Date().getFullYear()} Cleverafrica. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
};
