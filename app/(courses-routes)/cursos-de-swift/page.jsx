import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de Swift",
};

export default async function SwiftPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="swift"
      title="Swift"
      description="Swift es un lenguaje de programación multiparadigma creado por Apple
      enfocado en el desarrollo de aplicaciones para iOS y macOS."
    />
  );
}
