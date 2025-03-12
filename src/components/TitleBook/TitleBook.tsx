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
    <div
      style={
        title || authors.length > 0 ? { padding: "10px" } : { padding: "0" }
      }
      className={styles.TitleBook}
    >
      {authors.length > 0 && <h4>{authors.join(", ")}</h4>}
      {title && <h5>{title}</h5>}
    </div>
  );
}
