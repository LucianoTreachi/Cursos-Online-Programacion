import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

import KotlinSection from "@/sections/KotlinSection";
import SwiftSection from "@/sections/SwiftSection";
import ReactNativeSection from "@/sections/ReactNativeSection";
import FlutterSection from "@/sections/FlutterSection";
import NavigationLinks from "@/components/navigationLinks/NavigationLinks";

export const metadata = {
  title: "Ruta Aplicaciones Móviles",
};

export default function MobilePage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <KotlinSection />
        <SwiftSection />
        <ReactNativeSection />
        <FlutterSection />

        <NavigationLinks
          prevHref={"/backend"}
          prevText={"Backend"}
          prevAriaLabel={"Ver cursos de Backend"}
          nextHref={"/"}
          nextText={"Inicio"}
          nextAriaLabel={"Volver a inicio"}
        />
      </Suspense>
    </main>
  );
}
