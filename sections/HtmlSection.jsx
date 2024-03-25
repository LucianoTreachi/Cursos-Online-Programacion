import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function HtmlSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter html courses
  const htmlCourses = data.find(
    (category) => category.category === "html"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>HTML</h2>
          <Link className={styles.buttonSeeAll} href="/cursos-de-html">
            Ver todos
          </Link>
        </div>
        <Carousel courses={htmlCourses} />
      </Container>
    </section>
  );
}
