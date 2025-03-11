import styles from "./BookInfo.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookInfo() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return selectedBook ? (
    <div className={styles.BookInfo}>
      {selectedBook.publisher && (
        <div>
          <h4>Издатель:</h4>
          <p>{selectedBook.publisher}</p>
        </div>
      )}
      {selectedBook.publishedDate && (
        <div>
          <h4>Дата издания:</h4>
          <p>{selectedBook.publishedDate?.split("-").reverse().join(".")}</p>
        </div>
      )}
      {selectedBook.industryIdentifiers && (
        <div>
          <h4>ISBN:</h4>
          <p>
            {
              selectedBook.industryIdentifiers.find(
                (elem) => elem.type === "ISBN_13"
              )?.identifier
            }
          </p>
        </div>
      )}
      {selectedBook.industryIdentifiers && (
        <div>
          <h4>Количество страниц:</h4>
          <p>{selectedBook.pageCount}</p>
        </div>
      )}
      {selectedBook.categories && (
        <div>
          <h4>Категории:</h4>
          <p>{selectedBook.categories.slice(0, 1).join(" / ")}</p>
        </div>
      )}
    </div>
  ) : null;
}
