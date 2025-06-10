"use client";

import styles from "./home.module.scss";

import SearchField from "@/components/SearchField/SearchField";
import ResultsInfo from "@/components/ResultsInfo/ResultsInfo";
import Contents from "@/components/Contents/Contents";

import { useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SET_BOOKS, SET_LOADING } from "@/lib/features/books/booksSlice";

import { StateBooks } from "@/lib/features/books/booksSlice";

import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const pageId: number = Number(searchParams.get("pageId"));

  const query = searchParams.get("query");

  const books = useSelector((state: StateBooks) => state.books.books);

  async function setBooks(pageId: number, query: string | null) {
    try {

      const url = query
        ? `http://${process.env.NEXT_PUBLIC_SERVER_API_HOST}:${process.env.NEXT_PUBLIC_SERVER_API_PORT}/api/books/search/${query}/${pageId}`
        : `http://${process.env.NEXT_PUBLIC_SERVER_API_HOST}:${process.env.NEXT_PUBLIC_SERVER_API_PORT}/api/books/${pageId}`;

      console.log(url)

      const response = await axios.get(url);

      const body = response.data;

      console.log(body);

      body.data = books
        ? books.currentPage !== pageId
          ? [...books.data, ...body.data]
          : [...books.data]
        : [...body.data];

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
