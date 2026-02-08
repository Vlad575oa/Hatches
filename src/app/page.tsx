import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Usage } from "@/components/sections/Usage";
import { Gallery } from "@/components/sections/Gallery";
import { ProductTypes } from "@/components/sections/ProductTypes";
import { Technologies } from "@/components/sections/Technologies";
import { Process } from "@/components/sections/Process";
import { B2B } from "@/components/sections/B2B";
import { Reviews } from "@/components/sections/Reviews";
import { Calculator } from "@/components/sections/Calculator";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Usage />
      <Gallery />
      <ProductTypes />
      <Technologies />
      <Process />
      <B2B />
      <Reviews />
      <Calculator />
      <About />
    </>
  );
}
