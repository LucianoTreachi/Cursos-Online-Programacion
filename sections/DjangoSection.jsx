import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function DjangoSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter django courses
  const djangoCourses = data.find(
    (category) => category.category === "django"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Django</h2>
          <Link className={styles.buttonSeeAll} href="/cursos-de-django">
            Ver todos
          </Link>
        </div>
        <Carousel courses={djangoCourses} />
      </Container>
    </section>
  );
}
