import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function KotlinSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter kotlin courses
  const kotlinCourses = data.find(
    (category) => category.category === "kotlin"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Kotlin</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-kotlin"
            aria-label="Ver todos los cursos de Kotlin"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={kotlinCourses} category="kotlin" />
      </Container>
    </section>
  );
}
