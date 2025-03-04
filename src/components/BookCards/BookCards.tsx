import styles from "./BookCards.module.scss";

import { useSelector } from "react-redux";

import BookCard from "../BookCard/BookCard";
import Download from "../Download/Download";

export default function BookCards() {
  const data = useSelector((state) => state.books.data.data);

  return data ? (
    <div className={styles.BookCards}>
      {data.map((book) => (
        <BookCard data={book} />
      ))}
    </div>
  ) : (
    <Download />
  );
}
