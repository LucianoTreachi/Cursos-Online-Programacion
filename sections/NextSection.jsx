import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function NextSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter next courses
  const nextCourses = data.find(
    (category) => category.category === "next"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Next.js</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-next"
            aria-label="Ver todos los cursos de Next.js"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={nextCourses} category="next" />
      </Container>
    </section>
  );
}
