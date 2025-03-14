"use client";

import styles from "./bookPage.module.scss";

import TitleBook from "@/components/TitleBook/TitleBook";
import ContentsBook from "@/components/ContentsBook/ContentsBook";
import ReadBookButton from "@/components/ReadBookButton/ReadBookButton";

import { useSearchParams } from "next/navigation";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  SELECT_BOOK,
  SET_LOADING,
  StateBooks,
} from "@/lib/features/books/booksSlice";

export default function BookPage() {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const bookId = searchParams.get("bookId");

  const books = useSelector((state: StateBooks) => state.books.books);

  async function selectBook(bookId: string | null) {
    try {
      dispatch(SELECT_BOOK(null));

      const currentBook = books.data.find((book) => bookId === book.id);

      dispatch(SELECT_BOOK(currentBook));

      dispatch(SET_LOADING(false));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    selectBook(bookId);
  }, [bookId]);

  return (
    <div className={styles.bookPage}>
      <TitleBook />
      <ContentsBook />
      <ReadBookButton />
    </div>
  );
}
