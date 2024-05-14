"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container/Container";
import GoBackButton from "@/components/goBackButton/GoBackButton";
import SelectLanguage from "@/components//selectLanguage/SelectLanguage";
import styles from "./Courses.module.css";

export default function Courses({ data, category, title, description }) {
  // Store the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Filter courses based on the category and selected language
  const filteredCourses = useMemo(() => {
    // Find de category
    const categoryData = data.find((item) => item.category === category);
    if (!categoryData) return []; // Return an empty array if category data is not found

    // Filter courses by language
    return selectedLanguage
      ? categoryData.courses.filter(
          (course) => course.language === selectedLanguage
        )
      : categoryData.courses; // Return all courses if no language is selected
  }, [data, category, selectedLanguage]);

  // Function to handle language selection changes
  function handleLanguageSelection(language) {
    setSelectedLanguage(language);
  }

  return (
    <main>
      <section className={styles.section}>
        <Container>
          <GoBackButton />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.paragraph}>{description}</p>

          <SelectLanguage onSelectLanguage={handleLanguageSelection} />

          <div className={styles.courses}>
            {filteredCourses.map((course, index) => (
              <Link href={`/curso/${course.url}`} key={index}>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.image}
                    src={course.thumbnail}
                    alt="Portada del curso"
                    fill
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
