import styles from "./BookDescription.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookDescription() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return selectedBook
    ? selectedBook.description && (
        <div className={styles.BookDescription}>
          <h4>Описание</h4>
          <p>{selectedBook.description}</p>
        </div>
      )
    : null;
}
