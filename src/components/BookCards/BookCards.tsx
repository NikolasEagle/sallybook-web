import styles from "./BookCards.module.scss";

import BookCard from "../BookCard/BookCard";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookCards() {
  const data = useSelector((state: StateBooks) =>
    state.books.books ? state.books.books.data : []
  );

  return (
    <div className={styles.BookCards}>
      {data.map((book, index) => (
        <BookCard key={index} data={book} />
      ))}
    </div>
  );
}
