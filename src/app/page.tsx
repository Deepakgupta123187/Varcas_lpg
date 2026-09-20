import { BoxContents } from "@/components/home/BoxContents";
import { Contact } from "@/components/home/Contact";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Features } from "@/components/home/Features";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";
import { StatsMarquee } from "@/components/home/StatsMarquee";
import { Technology } from "@/components/home/Technology";
import { Tutorials } from "@/components/home/Tutorials";
import { UniformHeat } from "@/components/home/UniformHeat";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-background text-white">
      <Hero />
      <StatsMarquee />
      <UniformHeat />
      <Technology />
      <Products />
      <Features />
      <Tutorials />
      <Gallery />
      <BoxContents />
      <CtaBanner />
      <Contact />
    </main>
  );
}
