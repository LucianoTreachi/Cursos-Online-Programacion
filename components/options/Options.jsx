import Link from "next/link";
import Container from "@/components/container/Container";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import styles from "./Options.module.css";

export default function Options() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>¿En qué te gustaría especializarte?</h2>

        <div className={styles.cards}>
          <Link href="/frontend">
            <article className={styles.card}>
              <h3>Frontend</h3>
              <p>
                Un Desarrollador Frontend se encarga de crear la parte visual y
                funcional de aplicaciones web o móviles. Su trabajo consiste en
                diseñar y desarrollar la interfaz de usuario.
              </p>
              <span>
                Ver cursos <ArrowRightIcon />
              </span>
            </article>
          </Link>

          <Link href="/backend">
            <article className={styles.card}>
              <h3>Backend</h3>
              <p>
                Un Desarrollador Backend se encarga de desarrollar la lógica y
                funcionalidad detrás de escena de aplicaciones web o móviles,
                incluido el manejo de bases de datos, servidores y la lógica del
                negocio.
              </p>
              <span>
                Ver cursos <ArrowRightIcon />
              </span>
            </article>
          </Link>

          <Link href="/aplicaciones-moviles">
            <article className={styles.card}>
              <h3>Aplicaciones Móviles</h3>
              <p>
                Un Desarrollador de Aplicaciones Móviles se encarga de crear
                aplicaciones para plataformas como iOS (Apple) o Android
                (Google).
              </p>
              <span>
                Ver cursos <ArrowRightIcon />
              </span>
            </article>
          </Link>
        </div>
      </Container>
    </section>
  );
}
