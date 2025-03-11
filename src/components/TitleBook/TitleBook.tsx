import { useSelector } from "react-redux";
import styles from "./TitleBook.module.scss";

export default function TitleBook() {
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const title = selectedBook ? selectedBook.title : "";
  return (
    <div className={styles.TitleBook}>
      <h3>{title}</h3>
    </div>
  );
}
