import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - Java",
};

export default async function JavaPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="java"
      title="Java"
      description="Java es un lenguaje de programación de propósito general que se
      caracteriza por su portabilidad, ya que puede ejecutarse en diversas
      plataformas, y su orientación a objetos, siendo utilizado para
      desarrollar aplicaciones de escritorio, aplicaciones móviles,
      aplicaciones web y servidores."
    />
  );
}
