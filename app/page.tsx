import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Proceso from "@/components/sections/Proceso";
import CasosExito from "@/components/sections/CasosExito";
import Garantias from "@/components/sections/Garantias";
import Stack from "@/components/sections/Stack";
import Testimonios from "@/components/sections/Testimonios";
import Planes from "@/components/sections/Planes";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Proceso />
      <CasosExito />
      <Garantias />
      <Stack />
      <Testimonios />
      <Planes />
      <FAQ />
    </>
  );
}
