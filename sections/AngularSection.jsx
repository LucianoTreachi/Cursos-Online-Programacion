import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function AngularSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter angular courses
  const angularCourses = data.find(
    (category) => category.category === "angular"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Angular</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-angular"
            aria-label="Ver todos los cursos de Angular"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={angularCourses} category="angular" />
      </Container>
    </section>
  );
}
