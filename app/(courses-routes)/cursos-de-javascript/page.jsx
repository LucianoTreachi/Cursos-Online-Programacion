import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de JavaScript",
};

export default async function JavaScriptPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="javascript"
      title="JavaScript"
      description="JavaScript es un lenguaje de programación utilizado principalmente
      para agregar interactividad y dinamismo a las páginas web,
      permitiendo la manipulación del contenido, la respuesta a eventos
      del usuario y la creación de aplicaciones web complejas."
    />
  );
}
