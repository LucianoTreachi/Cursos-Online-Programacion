import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function FlutterSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter flutter courses
  const flutterCourses = data.find(
    (category) => category.category === "flutter"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Flutter</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-flutter"
            aria-label="Ver todos los cursos de Flutter"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={flutterCourses} category="flutter" />
      </Container>
    </section>
  );
}
