import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function TypeScriptSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter typescript courses
  const typescriptCourses = data.find(
    (category) => category.category === "typescript"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>TypeScript</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-typescript"
            aria-label="Ver todos los cursos de TypeScript"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={typescriptCourses} />
      </Container>
    </section>
  );
}
