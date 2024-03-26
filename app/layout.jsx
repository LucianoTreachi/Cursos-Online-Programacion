import { Inter } from "next/font/google";
import { FavoritesCoursesWrapper } from "@/context";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const mainFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cursos Online de Programación",
  description:
    "Encuentra los mejores cursos online de programación en un solo lugar. Aprende de los mejores profesionales de la industria hoy mismo.",
  metadataBase: new URL("https://cursosonlinedeprogramacion.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mainFont.className}>
        <FavoritesCoursesWrapper>
          <Header />
          {children}
          <Footer />
        </FavoritesCoursesWrapper>
      </body>
    </html>
  );
}
