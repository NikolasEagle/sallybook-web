import styles from "./BookInfo.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookInfo() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return selectedBook ? (
    <div className={styles.BookInfo}>
      <p>
        <b>Издатель:</b> {selectedBook.publisher}
      </p>
      <p>
        <b>Дата издания:</b>{" "}
        {selectedBook.publishedDate?.split("-").reverse().join(".")}
      </p>
      {selectedBook.industryIdentifiers && (
        <p>
          <b>ISBN: </b>
          {
            selectedBook.industryIdentifiers.find(
              (elem) => elem.type === "ISBN_13"
            )?.identifier
          }
        </p>
      )}
      <p>
        <b>Количество страниц:</b> {selectedBook.pageCount}
      </p>
      {selectedBook.categories && (
        <p>
          <b>Категории:</b> {selectedBook.categories.slice(0, 1).join(" / ")}
        </p>
      )}
    </div>
  ) : null;
}
