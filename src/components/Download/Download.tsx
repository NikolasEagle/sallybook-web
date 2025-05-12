import styles from "./Download.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function Download() {
  const isLoading = useSelector((state: StateBooks) => state.books.isLoading);

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
