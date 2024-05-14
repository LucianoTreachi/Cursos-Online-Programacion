import { Suspense } from "react";
import Loader from "@/components/loader/Loader";
import FavoritesSection from "@/components/favoritesSection/FavoritesSection";

export const metadata = {
  title: "Cursos Favoritos",
};

export default function FavoritesPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <FavoritesSection />
      </Suspense>
    </main>
  );
}
