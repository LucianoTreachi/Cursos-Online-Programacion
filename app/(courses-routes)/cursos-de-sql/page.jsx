import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de SQL",
};

export default async function SqlPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="sql"
      title="SQL"
      description="SQL es un lenguaje específico de dominio, diseñado para administrar
      y recuperar información de sistemas de gestión de bases de datos
      relacionales."
    />
  );
}
