"use client";

import styles from "./bookPage.module.scss";

import TitleBook from "@/components/TitleBook/TitleBook";
import ContentsBook from "@/components/ContentsBook/ContentsBook";
import ReadBookButton from "@/components/ReadBookButton/ReadBookButton";

import { useSearchParams } from "next/navigation";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { SELECT_BOOK, SET_LOADING } from "@/lib/features/books/booksSlice";

import axios from "axios";

export default function BookPage() {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const bookId = searchParams.get("bookId");

  async function selectBook(bookId: string | null) {
    try {
      dispatch(SELECT_BOOK(null));

      const url = `/api/book/${bookId}`;

      const response = await axios.get(url);

      const body = response.data;

      dispatch(SELECT_BOOK(body));

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
