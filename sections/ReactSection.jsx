import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function ReactSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter react courses
  const reactCourses = data.find(
    (category) => category.category === "react"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>React</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-react"
            aria-label="Ver todos los cursos de React"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={reactCourses} />
      </Container>
    </section>
  );
}
