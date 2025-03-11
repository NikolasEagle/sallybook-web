import styles from "./BookCards.module.scss";

import { useSelector } from "react-redux";

import BookCard from "../BookCard/BookCard";

interface Data {
  volumeInfo: {
    title: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
  };
}

export default function BookCards() {
  const books = useSelector((state) => state.books.books);

  console.log(books);

  return books ? (
    <div className={styles.BookCards}>
      {books.data.map((book: Data) => (
        <BookCard data={book} />
      ))}
    </div>
  ) : null;
}
