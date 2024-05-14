import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de Kotlin",
};

export default async function KotlinPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="kotlin"
      title="Kotlin"
      description="Kotlin es un lenguaje de programación de código abierto y tipado
      estático, creado por la empresa JetBrains. Se ha popularizado
      gracias a que se puede utilizar para desarrollar aplicaciones
      Android."
    />
  );
}
