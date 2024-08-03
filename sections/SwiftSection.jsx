import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function SwiftSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter swift courses
  const swiftCourses = data.find(
    (category) => category.category === "swift"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Swift</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-swift"
            aria-label="Ver todos los cursos de Swift"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={swiftCourses} />
      </Container>
    </section>
  );
}
