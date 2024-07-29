import Image from "next/image";
import BlurredCircle from "@/components/blurredCircle/BlurredCircle";
import Container from "@/components/container/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.col1}>
            <h1 className={styles.title}>
              Los Mejores Cursos de Programación <br /> en un solo lugar
            </h1>
            <p className={styles.paragraph}>
              Aprende de los mejores profesionales de la industria hoy mismo.
            </p>
          </div>
          <div className={styles.col2}>
            <Image
              className={styles.homeImage}
              src="https://res.cloudinary.com/dwqk2mkgh/image/upload/v1710859727/courses/home_btaxcw.png"
              alt=""
              width={799}
              height={433}
              priority
            />
          </div>
        </div>
      </Container>
      <BlurredCircle />
    </section>
  );
}
