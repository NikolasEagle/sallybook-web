import styles from "./BookDescription.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookDescription() {
  const description = useSelector((state: StateBooks) =>
    state.books.selectedBook ? state.books.selectedBook.description : null
  );

  const parser = new DOMParser();

  const descDoc = parser.parseFromString(
    description ? description : "<p></p>",
    "text/html"
  );

  return (
    description && (
      <div className={styles.BookDescription}>
        <h4>Описание</h4>
        <p>{descDoc.body.firstChild?.textContent}</p>
      </div>
    )
  );
}
