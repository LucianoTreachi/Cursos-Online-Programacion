import { getAllCourses } from "@/utils/getAllCourses";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Cursos de Django",
};

export default async function DjangoPage() {
  const data = await getAllCourses();
  return (
    <Courses
      data={data}
      category="django"
      title="Django"
      description="Django es un marco de desarrollo web de alto nivel en Python que
      fomenta un desarrollo rápido y un diseño limpio y pragmático.
      Construido por desarrolladores experimentados, se encarga de gran
      parte de las dificultades del desarrollo web, para que puedas
      concentrarte en escribir tu aplicación sin necesidad de reinventar
      la rueda. Es gratuito y de código abierto."
    />
  );
}
