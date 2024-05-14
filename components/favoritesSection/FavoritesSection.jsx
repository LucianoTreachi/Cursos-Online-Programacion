"use client";

import { useFavoritesCoursesContext } from "@/context";
import Container from "@/components/container/Container";
import GoBackButton from "@/components/goBackButton/GoBackButton";
import Link from "next/link";
import Image from "next/image";
import styles from "./FavoritesSection.module.css";

export default function FavoritesSection() {
  const { favoritesCourses } = useFavoritesCoursesContext();

  return (
    <section className={styles.section}>
      <Container>
        <GoBackButton />
        <h1 className={styles.title}>Favoritos</h1>

        {favoritesCourses.length === 0 ? (
          <p className={styles.paragraph}>No tienes cursos guardados.</p>
        ) : (
          <div className={styles.favoritesCourses}>
            {favoritesCourses.map((course, index) => (
              <Link href={`/curso/${course.url}`} key={index}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={course.thumbnail}
                    alt="Portada del curso"
                    fill
                    priority
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
