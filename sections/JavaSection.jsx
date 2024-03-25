import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function JavaSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter java courses
  const javaCourses = data.find(
    (category) => category.category === "java"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Java</h2>
          <Link className={styles.buttonSeeAll} href="/cursos-de-java">
            Ver todos
          </Link>
        </div>
        <Carousel courses={javaCourses} />
      </Container>
    </section>
  );
}
