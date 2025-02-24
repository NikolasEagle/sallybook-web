import styles from "./home.module.scss";
import SearchField from "@/components/SearchField/SearchField";
import Contents from "@/components/Contents/Contents";

export default function Home() {
  return (
    <div className={styles.home}>
      <SearchField />
      <Contents />
    </div>
  );
}
