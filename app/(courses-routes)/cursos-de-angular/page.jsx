import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de Angular",
};

export default async function AngularPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="angular"
      title="Angular"
      description="Angular es un framework de código abierto mantenido por Google, que se utiliza para crear aplicaciones web de una sola página."
    />
  );
}
