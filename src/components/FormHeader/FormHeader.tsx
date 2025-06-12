import styles from "./FormHeader.module.scss";

interface Props {
  name: string;
}

export default function FormHeader({ name }: Props) {
  return (
    <div className={styles.FormHeader}>
      <header>
        <img src="/logo_dark.png" alt="Logo" />
        <h1>MouseBook</h1>
      </header>
      <main>
        <h2>{name}</h2>
      </main>
    </div>
  );
}
