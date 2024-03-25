import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

import HtmlSection from "@/sections/HtmlSection";
import CssSection from "@/sections/CssSection";
import JavaScriptSection from "@/sections/JavaScriptSection";
import ReactSection from "@/sections/ReactSection";
import NextSection from "@/sections/NextSection";
import AngularSection from "@/sections/AngularSection";
import TypeScriptSection from "@/sections/TypeScriptSection";
import TailwindSection from "@/sections/TailwindSection";
import NavigationLinks from "@/components/navigationLinks/NavigationLinks";

export const metadata = {
  title: "Cursos Online de Programación - Frontend",
};

export default function FrontendPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <HtmlSection />
        <CssSection />
        <JavaScriptSection />
        <ReactSection />
        <NextSection />
        <AngularSection />
        <TypeScriptSection />
        <TailwindSection />

        <NavigationLinks
          prevHref={"/"}
          prevText={"inicio"}
          nextHref={"/backend"}
          nextText={"Backend"}
        />
      </Suspense>
    </main>
  );
}
