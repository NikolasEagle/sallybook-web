import { useSelector } from "react-redux";
import styles from "./TitleBook.module.scss";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function TitleBook() {
  const authors = useSelector((state: StateBooks) =>
    state.books.selectedBook ? state.books.selectedBook.authors : null
  );

  const title = useSelector((state: StateBooks) =>
    state.books.selectedBook ? state.books.selectedBook.title : ""
  );

  return (
    <div
      style={title || authors ? { padding: "10px" } : { padding: "0px" }}
      className={styles.TitleBook}
    >
      {authors ? <h4>{authors.join(", ")}</h4> : <h4></h4>}
      {title ? <h5>{title}</h5> : <h5></h5>}
    </div>
  );
}
