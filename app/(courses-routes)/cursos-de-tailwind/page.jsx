import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - Tailwind",
};

export default async function TypeScriptPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="tailwind"
      title="Tailwind CSS"
      description="Tailwind CSS es un framework de CSS de código abierto para el diseño de páginas web. La principal característica es que crea una lista de clases CSS de 'utilidad' que se pueden usar para dar estilos individuales a cada elemento."
    />
  );
}
