import styles from "./Search.module.css";

export default function Search() {
  return (
    <input
      className={styles.box}
      type="search"
      placeholder="Buscar cursos..."
      id="search"
    ></input>
  );
}
