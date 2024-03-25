import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - Flutter",
};

export default async function FlutterPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="flutter"
      title="Flutter"
      description="Fluter es un SDK de código fuente abierto de desarrollo de
      aplicaciones móviles creado por Google. Suele usarse para
      desarrollar interfaces de usuario para aplicaciones en Android, iOS
      y Web."
    />
  );
}
