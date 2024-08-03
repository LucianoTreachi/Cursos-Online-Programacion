import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function TailwindSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter tailwind courses
  const tailwindCourses = data.find(
    (category) => category.category === "tailwind"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Tailwind CSS</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-tailwind"
            aria-label="Ver todos los cursos de Tailwind"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={tailwindCourses} />
      </Container>
    </section>
  );
}
