import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos Online de Programación - Node.js",
};

export default async function NodePage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="node"
      title="Node.js"
      description="Node.js es un entorno de ejecución de JavaScript basado en el motor
      V8 de Google Chrome. Permite a los desarrolladores ejecutar código
      JavaScript fuera del navegador web, lo que lo convierte en una
      herramienta fundamental para crear aplicaciones de servidor
      escalables y de alto rendimiento."
    />
  );
}
