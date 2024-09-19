import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function NodeSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter node courses
  const nodeCourses = data.find(
    (category) => category.category === "node"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Node.js</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-node"
            aria-label="Ver todos los cursos de Node"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={nodeCourses} category="node" />
      </Container>
    </section>
  );
}
