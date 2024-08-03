import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function JavaScriptSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter javascript courses
  const javaScriptCourses = data.find(
    (category) => category.category === "javascript"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>JavaScript</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-javascript"
            aria-label="Ver todos los cursos de JavaScript"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={javaScriptCourses} />
      </Container>
    </section>
  );
}
