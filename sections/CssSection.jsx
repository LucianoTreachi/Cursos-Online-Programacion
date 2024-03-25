import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function CssSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter css courses
  const cssCourses = data.find(
    (category) => category.category === "css"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>CSS</h2>
          <Link className={styles.buttonSeeAll} href="/cursos-de-css">
            Ver todos
          </Link>
        </div>
        <Carousel courses={cssCourses} />
      </Container>
    </section>
  );
}
