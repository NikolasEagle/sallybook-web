import styles from "./Contents.module.scss";

import { useRouter } from "next/navigation";

import BookCards from "../BookCards/BookCards";

import { SET_LOADING, SET_SCROLL } from "@/lib/features/books/booksSlice";

import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Download from "../Download/Download";
import { useRef, useEffect } from "react";

export default function Contents() {
  const router = useRouter();

  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const pageId = searchParams.get("pageId");

  const query = searchParams.get("query");

  const booksNextPage = useSelector((state) =>
    state.books.books ? state.books.books.nextPage : null
  );

  const isLoading = useSelector((state) => state.books.isLoading);

  const scrollPosition = useSelector((state) => state.books.scrollPosition);

  const contentsRef = useRef(null);

  function addBooks(event) {
    dispatch(SET_SCROLL(event.target.scrollTop));
    if (
      event.target.scrollTop >=
        (event.target.scrollHeight - event.target.clientHeight) * 0.75 &&
      booksNextPage &&
      !isLoading
    ) {
      router.push(`/home?pageId=${Number(pageId) + 1}&query=${query}`);
      dispatch(SET_LOADING(true));
    }
  }

  useEffect(() => {
    contentsRef.current.scrollTop = scrollPosition;
  }, []);

  return (
    <div
      ref={contentsRef}
      onScroll={(event) => addBooks(event)}
      tabIndex={-1}
      className={styles.Contents}
    >
      <BookCards />
      <Download />
    </div>
  );
}
