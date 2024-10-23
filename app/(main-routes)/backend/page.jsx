import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

import JavaScriptSection from "@/sections/JavaScriptSection";
import NodeSection from "@/sections/NodeSection";
import PythonSection from "@/sections/PythonSection";
import DjangoSection from "@/sections/DjangoSection";
import JavaSection from "@/sections/JavaSection";
import PhpSection from "@/sections/PhpSection";
import SqlSection from "@/sections/SqlSection";
import MongoSection from "@/sections/MongoSection";
import NavigationLinks from "@/components/navigationLinks/NavigationLinks";

export const metadata = {
  title: "Ruta Backend",
};

export default function BackendPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <JavaScriptSection />
        <NodeSection />
        <PythonSection />
        <DjangoSection />
        <JavaSection />
        <PhpSection />
        <SqlSection />
        <MongoSection />

        <NavigationLinks
          prevHref={"/frontend"}
          prevText={"Frontend"}
          prevAriaLabel={"Ver cursos de Frontend"}
          nextHref={"/aplicaciones-moviles"}
          nextText={"Mobile"}
          nextAriaLabel={"Ver cursos de Aplicaciones Móviles"}
        />
      </Suspense>
    </main>
  );
}
