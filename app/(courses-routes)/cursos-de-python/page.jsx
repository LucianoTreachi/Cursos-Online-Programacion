import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de Python",
};

export default async function PythonPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="python"
      title="Python"
      description="Python es un lenguaje de programación ampliamente utilizado en
      aplicaciones web, el desarrollo de software, la ciencia de datos y
      el machine learning (ML)."
    />
  );
}
