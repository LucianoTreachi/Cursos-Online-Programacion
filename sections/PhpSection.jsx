import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function PhpSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter php courses
  const phpCourses = data.find(
    (category) => category.category === "php"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>PHP</h2>
          <Link className={styles.buttonSeeAll} href="/cursos-de-php">
            Ver todos
          </Link>
        </div>
        <Carousel courses={phpCourses} />
      </Container>
    </section>
  );
}
