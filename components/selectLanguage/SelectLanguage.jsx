import ArrowDownIcon from "@/icons/ArrowDownIcon";
import styles from "./SelectLanguage.module.css";

export default function SelectLanguage({ onSelectLanguage }) {
  function handleLanguageChange(e) {
    // Call the onSelectLanguage function with the selected value
    onSelectLanguage(e.target.value);
  }

  return (
    <>
      <label htmlFor="select" className={styles.label}>
        Selecciona idioma
      </label>

      <div className={styles.containerSelect}>
        <select
          className={styles.select}
          name="select"
          id="select"
          onChange={handleLanguageChange}
        >
          <option className={styles.option} value="" defaultValue>
            Todos
          </option>
          <option className={styles.option} value="Español">
            Español
          </option>
          <option className={styles.option} value="Inglés">
            Inglés
          </option>
        </select>
        <ArrowDownIcon />
      </div>
    </>
  );
}
