import styles from "./BookImage.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookImage() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return selectedBook ? (
    <img
      className={styles.BookImage}
      src={
        selectedBook.imageLinks
          ? selectedBook.imageLinks.thumbnail ||
            selectedBook.imageLinks.smallThumbnail
          : "/no-image.png"
      }
    />
  ) : null;
}
