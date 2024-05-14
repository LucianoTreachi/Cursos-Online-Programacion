import { getAllCourses } from "@/utils/getAllCourses";
import { getIndividualCourse } from "@/utils/getIndividualCourse";
import { notFound } from "next/navigation";

import Container from "@/components/container/Container";
import GoBackButton from "@/components/goBackButton/GoBackButton";
import CalendarIcon from "@/icons/CalendarIcon";
import ClockIcon from "@/icons/ClockIcon";
import GlobalIcon from "@/icons/GlobalIcon";
import Video from "@/components/video/Video";
import ShareCourse from "@/components/shareCourse/ShareCourse";
import SaveCourse from "@/components/saveCourse/SaveCourse";
import styles from "./page.module.css";

// Convert the dynamic param into static param to improve loading speed
export async function generateStaticParams() {
  const data = await getAllCourses();
  return data.map(({ url }) => url);
}

// Dynamic Metadata
export async function generateMetadata({ params }) {
  const selectedCourse = await getIndividualCourse(params.url);

  if (selectedCourse === null) {
    return notFound();
  }

  return {
    title: selectedCourse.title,
    description: selectedCourse.description,
    openGraph: {
      images: [
        {
          url: selectedCourse.image,
        },
      ],
    },
  };
}

// Component CoursePage
export default async function CoursePage({ params }) {
  const selectedCourse = await getIndividualCourse(params.url);

  if (selectedCourse === null) {
    return notFound();
  }

  return (
    <main>
      <section className={styles.section}>
        <Container>
          <GoBackButton />

          <h1 className={styles.title}>{selectedCourse.title}</h1>
          <p className={styles.description}>{selectedCourse.description}</p>
          <p className={styles.author}>{selectedCourse.author}</p>

          <div className={styles.information}>
            <div className={styles.col1}>
              <CalendarIcon />
              <p className={styles.date}>{selectedCourse.date}</p>
            </div>
            <div className={styles.col2}>
              <ClockIcon />
              <p className={styles.duration}>{selectedCourse.duration}</p>
            </div>
            <div className={styles.col3}>
              <GlobalIcon />
              <p className={styles.language}>{selectedCourse.language}</p>
            </div>
          </div>

          <div className={styles.videoContainer}>
            <Video
              thumbnail={selectedCourse.thumbnail}
              iframe={selectedCourse.iframe}
            />
          </div>

          <div className={styles.containerButtons}>
            <SaveCourse
              imageCourse={selectedCourse.thumbnail}
              urlCourse={selectedCourse.url}
            />
            <ShareCourse />
          </div>
        </Container>
      </section>
    </main>
  );
}
