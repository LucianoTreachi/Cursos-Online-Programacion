import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function MongoSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter mongodb courses
  const mongodbCourses = data.find(
    (category) => category.category === "mongodb"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>MongoDB</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-mongodb"
            aria-label="Ver todos los cursos de Mongo"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={mongodbCourses} />
      </Container>
    </section>
  );
}
