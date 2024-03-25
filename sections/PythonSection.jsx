import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function PythonSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter python courses
  const pythonCourses = data.find(
    (category) => category.category === "python"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Python</h2>
          <Link className={styles.buttonSeeAll} href="/cursos-de-python">
            Ver todos
          </Link>
        </div>
        <Carousel courses={pythonCourses} />
      </Container>
    </section>
  );
}
