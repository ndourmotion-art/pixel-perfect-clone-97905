const clients = [
  "MTN", "Orange", "Dangote", "Safaricom", "Jumia", "Flutterwave",
  "Andela", "Kuda", "Glovo", "Canal+", "AFD", "UNESCO",
];

export const LogoMarquee = () => {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-foreground/10 py-8 overflow-hidden">
      <div className="flex items-center gap-16 whitespace-nowrap animate-marquee will-change-transform">
        {row.map((name, i) => (
          <span
            key={i}
            className="font-display uppercase text-3xl md:text-4xl font-sans text-foreground/55 hover:text-foreground transition-colors"
          >
            {name}
            <span className="mx-8 text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
