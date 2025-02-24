import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo" />
      <h1>MouseBook</h1>
    </header>
  );
}
