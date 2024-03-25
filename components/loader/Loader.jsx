import Container from "@/components/container/Container";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.loader}></div>
      </Container>
    </section>
  );
}
