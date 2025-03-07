"use client";

import styles from "./home.module.scss";
import SearchField from "@/components/SearchField/SearchField";
import ResultsInfo from "@/components/ResultsInfo/ResultsInfo";
import Contents from "@/components/Contents/Contents";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SET_BOOKS, SET_LOADING } from "@/lib/features/books/booksSlice";

import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const pageId = searchParams.get("pageId");

  const query = searchParams.get("query");

  const books = useSelector((state) => state.books.books);

  async function setBooks(pageId: string | null, query: string | null) {
    try {
      dispatch(SET_LOADING(true));

      const url = query
        ? `/api/books/search/${query}/${pageId}`
        : `/api/books/${pageId}`;

      const response = await axios.get(url);
      const body = response.data;

      body.data = books ? [...books.data, ...body.data] : [...body.data];

      console.log(body);

      dispatch(SET_BOOKS(body));
      dispatch(SET_LOADING(false));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setBooks(pageId, query);
  }, [pageId, query]);

  return (
    <div className={styles.home}>
      <SearchField />
      <ResultsInfo />
      <Contents />
    </div>
  );
}
