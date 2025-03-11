import { useSelector } from "react-redux";
import styles from "./Download.module.scss";

export default function Download() {
  const isLoading = useSelector((state) => state.books.isLoading);

  return (
    <div
      id="download"
      style={isLoading ? { display: "flex" } : { display: "none" }}
      className={styles.Download}
    >
      <div className={styles.loader}></div>
    </div>
  );
}
