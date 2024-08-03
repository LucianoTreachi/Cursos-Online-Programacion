import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function SqlSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter sql courses
  const sqlCourses = data.find(
    (category) => category.category === "sql"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>SQL</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-sql"
            aria-label="Ver todos los cursos de SQL"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={sqlCourses} />
      </Container>
    </section>
  );
}
