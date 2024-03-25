import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - MongoDB",
};

export default async function MongoPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="mongodb"
      title="MongoDB"
      description="MongoDB es una base de datos de documentos que ofrece una gran
      escalabilidad y flexibilidad, y un modelo de consultas e indexación
      avanzada."
    />
  );
}
