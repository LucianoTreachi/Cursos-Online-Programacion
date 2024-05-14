import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de CSS",
};

export default async function CssPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="css"
      title="CSS"
      description="CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para
      diseñar la presentación y apariencia visual de una página web,
      permitiendo controlar el diseño, el color, la tipografía y otros
      aspectos estéticos."
    />
  );
}
