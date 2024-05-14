import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de HTML",
};

export default async function HtmlPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="html"
      title="HTML"
      description="HTML (HyperText Markup Language) es un lenguaje de marcado utilizado
      para crear la estructura básica de una página web, definiendo el
      contenido y la organización de los elementos."
    />
  );
}
