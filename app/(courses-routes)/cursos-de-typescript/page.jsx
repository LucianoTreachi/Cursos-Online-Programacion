import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - TypeScript",
};

export default async function TypeScriptPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="typescript"
      title="TypeScript"
      description="TypeScript es un lenguaje de programación fuertemente tipado que se
      basa en JavaScript y le brinda mejores herramientas a cualquier
      escala."
    />
  );
}
