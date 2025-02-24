import SearchField from "@/components/SearchField/SearchField";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <SearchField />
    </div>
  );
}
