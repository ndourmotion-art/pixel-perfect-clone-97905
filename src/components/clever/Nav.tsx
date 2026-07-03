import { useEffect, useState } from "react";
import logo from "@/assets/cleverafrica-logo.png";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Anima index", href: "#anima" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-md bg-background/75 py-[18px] border border-slate-300" : "py-6 bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center gap-6">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="Cleverafrica home">
          <img src={logo} alt="Cleverafrica" className="h-5 md:h-6 w-auto" />
        </a>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-1 rounded-full border-foreground/10 bg-background/50 backdrop-blur px-2 py-1.5 border-2 opacity-85 bg-[#344256]/0">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-green-600 text-white px-5 py-2 text-sm font-semibold hover:bg-green-700 transition-colors shrink-0"
        >
          PRESTATION
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn("h-0.5 bg-foreground transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 bg-foreground transition-opacity", open && "opacity-0")} />
            <span className={cn("h-0.5 bg-foreground transition-transform", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 rounded-2xl bg-background border border-foreground/10 p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium hover:bg-foreground/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-between rounded-xl bg-foreground text-background px-4 py-3 text-base font-medium"
          >
            Get a quote <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
};
