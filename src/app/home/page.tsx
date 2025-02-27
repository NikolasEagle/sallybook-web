"use client";

import styles from "./home.module.scss";
import SearchField from "@/components/SearchField/SearchField";
import Contents from "@/components/Contents/Contents";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SET_BOOKS } from "@/lib/features/books/booksSlice";

import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const pageId = searchParams.get("pageId");

  const query = searchParams.get("query");

  async function setBooks(pageId: string | null, query: string | null) {
    try {
      const response = await axios.get(`/api/books/${pageId}`);
      const body = response.data;

      dispatch(SET_BOOKS({ data: body }));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setBooks(pageId, query);
  }, []);

  return (
    <div className={styles.home}>
      <SearchField />
      <Contents />
    </div>
  );
}
