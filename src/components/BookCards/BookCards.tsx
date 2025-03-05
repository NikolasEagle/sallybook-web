import styles from "./BookCards.module.scss";

import { useSelector } from "react-redux";

import BookCard from "../BookCard/BookCard";
import Download from "../Download/Download";

interface Data {
  volumeInfo: {
    title: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
  };
}

export default function BookCards() {
  const books = useSelector((state) => state.books.data);

  return books.data.data ? (
    <div className={styles.BookCards}>
      {books.data.data.map((book: Data) => (
        <BookCard data={book} />
      ))}
    </div>
  ) : (
    <Download />
  );
}
