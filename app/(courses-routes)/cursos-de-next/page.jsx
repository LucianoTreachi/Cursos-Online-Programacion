import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - Next.js",
};

export default async function NextPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="next"
      title="Next.js"
      description="Next.js es un framework de React que nos permite crear aplicaciones
      web fullstack. Algunas de las características
      más potentes son el sistema de enrutamiento, la optimización de
      fuentes e imágenes, la creación de APIs, el renderizado del lado del
      Servidor, y muchas otras cosas más."
    />
  );
}
