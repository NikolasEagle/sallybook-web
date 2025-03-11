import styles from "./ContentsBook.module.scss";

import BookImage from "../BookImage/BookImage";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function ContentsBook() {
  return (
    <div className={styles.ContentsBook}>
      <BookImage />
      {/*<BookInfo />
    <BookDescription />*/}
    </div>
  );
}
