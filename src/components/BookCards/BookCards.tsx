import { useSelector } from "react-redux";
import styles from "./BookCards.module.scss";

import { useEffect, useState } from "react";

import BookCard from "../BookCard/BookCard";

export default function BookCards() {
  const data = useSelector((state) => state.books.data.data);

  return (
    <div className={styles.BookCards}>
      {data ? data.map((book) => <BookCard data={book} />) : "dsa"}
    </div>
  );
}
