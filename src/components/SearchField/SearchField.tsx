import styles from "./SearchField.module.scss";

export default function SearchField() {
  return (
    <form action={"GET"} className={styles.SearchField}>
      <input type="text" placeholder="Поиск книг..." />
    </form>
  );
}
