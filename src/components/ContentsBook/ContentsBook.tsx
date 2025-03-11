import styles from "./ContentsBook.module.scss";

import BookImage from "../BookImage/BookImage";
import BookInfo from "../BookInfo/BookInfo";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";
import Download from "../Download/Download";

export default function ContentsBook() {
  return (
    <div className={styles.ContentsBook}>
      <BookImage />
      <BookInfo />
      {/*<BookDescription />*/}
      <Download />
    </div>
  );
}
