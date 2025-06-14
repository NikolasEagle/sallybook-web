import Image from "next/image";
import styles from "./FormHeader.module.scss";

interface Props {
  name: string;
}

export default function FormHeader({ name }: Props) {
  return (
    <div className={styles.FormHeader}>
      <header>
        <Image width={"200"} height={"200"} src="/logo_dark.png" alt="Logo" />
        <h1>MouseBook</h1>
      </header>
      <main>
        <h2>{name}</h2>
      </main>
    </div>
  );
}
