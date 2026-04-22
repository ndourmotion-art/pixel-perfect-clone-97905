import { Nav } from "@/components/clever/Nav";
import { Hero } from "@/components/clever/Hero";
import { LogoMarquee } from "@/components/clever/LogoMarquee";
import { FeaturedWork } from "@/components/clever/FeaturedWork";
import { Services } from "@/components/clever/Services";
import { Stats } from "@/components/clever/Stats";
import { Founder } from "@/components/clever/Founder";
import { Toolbox } from "@/components/clever/Toolbox";
import { ContactCTA } from "@/components/clever/ContactCTA";
import { Footer } from "@/components/clever/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LogoMarquee />
      <FeaturedWork />
      <Services />
      <Stats />
      <Founder />
      <Toolbox />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
