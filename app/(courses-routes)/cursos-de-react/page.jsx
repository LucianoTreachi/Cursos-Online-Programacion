import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de React",
};

export default async function ReactPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="react"
      title="React"
      description="React es una biblioteca de JavaScript para construir interfaces de
      usuarios a partir de piezas UI individuales llamadas componentes.
      Cualquier elemento puede ser un componente: un botón, un titulo, una
      card, un ícono, etc."
    />
  );
}
