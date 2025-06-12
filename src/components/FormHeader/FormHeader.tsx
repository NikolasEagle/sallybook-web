import styles from "./FormHeader.module.scss";

export default function FormHeader() {
  return (
    <header className={styles.FormHeader}>
      <img src="/logo_dark.png" alt="Logo" />
      <h1>MouseBook</h1>
    </header>
  );
}
