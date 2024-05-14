import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de React Native",
};

export default async function ReactNativePage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="react-native"
      title="React Native"
      description="React Native permite crear aplicaciones móviles nativas para
      plataformas iOS y Android utilizando una única base de código, lo
      que acelera significativamente el desarrollo sin comprometer el
      rendimiento y la usabilidad de las aplicaciones."
    />
  );
}
