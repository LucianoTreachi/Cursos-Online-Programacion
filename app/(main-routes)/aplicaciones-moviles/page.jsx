import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

import KotlinSection from "@/sections/KotlinSection";
import SwiftSection from "@/sections/SwiftSection";
import ReactNativeSection from "@/sections/ReactNativeSection";
import FlutterSection from "@/sections/FlutterSection";
import NavigationLinks from "@/components/navigationLinks/NavigationLinks";

export const metadata = {
  title: "Cursos Online de Programación - Aplicaciones Móviles",
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
          nextHref={"/"}
          nextText={"Inicio"}
        />
      </Suspense>
    </main>
  );
}
