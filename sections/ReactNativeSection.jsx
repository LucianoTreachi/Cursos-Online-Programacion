import { getAllCourses } from "@/utils/getAllCourses";

import Link from "next/link";
import Container from "@/components/container/Container";
import Carousel from "@/components/carousel/Carousel";
import styles from "./sections.module.css";

export default async function ReactNativeSection() {
  // Await for the data
  const data = await getAllCourses();

  // Filter react-native courses
  const reactNativeCourses = data.find(
    (category) => category.category === "react-native"
  ).courses;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>React Native</h2>
          <Link
            className={styles.buttonSeeAll}
            href="/cursos-de-react-native"
            aria-label="Ver todos los cursos de React Native"
          >
            Ver todos
          </Link>
        </div>
        <Carousel courses={reactNativeCourses} />
      </Container>
    </section>
  );
}
