import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link
      href="/"
      className={styles.logo}
      aria-label="Logo del sitio web. Cursos Online de Programación"
    >
      Cursos Online <br /> de Programación
    </Link>
  );
}
