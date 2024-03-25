import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - PHP",
};

export default async function PhpPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="php"
      title="PHP"
      description="PHP es un lenguaje de programación destinado a desarrollar
      aplicaciones para la web y crear páginas web, favoreciendo la
      conexión entre los servidores y la interfaz de usuario."
    />
  );
}
