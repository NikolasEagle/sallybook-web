import { useSelector } from "react-redux";
import styles from "./TitleBook.module.scss";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function TitleBook() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );
  const title = selectedBook ? selectedBook.title : "";

  const authors = selectedBook ? selectedBook.authors : [];
  return (
    <div className={styles.TitleBook}>
      <h4>{authors && authors.join(", ")}</h4>
      <h5>{title}</h5>
    </div>
  );
}
