import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      Cursos Online <br /> de Programación
    </Link>
  );
}
