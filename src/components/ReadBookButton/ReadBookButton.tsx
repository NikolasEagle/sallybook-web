"use client";

import styles from "./ReadBookButton.module.scss";

import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function ReadBookButton() {
  const router = useRouter();

  const bookFile = useSelector((state: StateBooks) =>
    state.books.selectedBook ? state.books.selectedBook.bookFile : null
  );

  const bookId = useSelector((state: StateBooks) =>
    state.books.selectedBook ? state.books.selectedBook.id : null
  );

  function openReader() {
    router.push(`/reader?bookId=${bookId}`);
  }

  return (
    bookFile && (
      <div className={styles.ReadBookButton}>
        <button onClick={openReader}>Читать онлайн</button>
      </div>
    )
  );
}
