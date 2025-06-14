import styles from "./BookImage.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";
import Image from "next/image";

export default function BookImage() {
  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return selectedBook ? (
    <Image
      className={styles.BookImage}
      width={"200"}
      height={"200"}
      src={selectedBook.cover || "/no-image.png"}
      alt="BookImage"
    />
  ) : null;
}
