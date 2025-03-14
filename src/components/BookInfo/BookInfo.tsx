import styles from "./BookInfo.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookInfo() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return selectedBook ? (
    <div className={styles.BookInfo}>
      {selectedBook.addedDate && (
        <div>
          <h4>Дата добавления:</h4>
          <p>{selectedBook.addedDate}</p>
        </div>
      )}
      {selectedBook.categories && (
        <div>
          <h4>Категории:</h4>
          <p>{selectedBook.categories.join(", ")}</p>
        </div>
      )}
    </div>
  ) : null;
}
