import styles from "./BookCards.module.scss";

import BookCard from "../BookCard/BookCard";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function BookCards() {
  const books = useSelector((state: StateBooks) => state.books.books);

  console.log(books);

  return (
    books && (
      <div className={styles.BookCards}>
        {books.data && books.data.map((book) => <BookCard data={book} />)}
      </div>
    )
  );
}
