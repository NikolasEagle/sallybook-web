import styles from "./Contents.module.scss";

import { useRouter } from "next/navigation";

import BookCards from "../BookCards/BookCards";

import { SET_LOADING, SET_SCROLL } from "@/lib/features/books/booksSlice";

import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Download from "../Download/Download";
import { useRef, useEffect } from "react";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function Contents() {
  const router = useRouter();

  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const pageId = searchParams.get("pageId");

  const query = searchParams.get("query");

  const booksNextPage = useSelector((state: StateBooks) =>
    state.books.books ? state.books.books.nextPage : null
  );

  const isLoading = useSelector((state: StateBooks) => state.books.isLoading);

  const scrollPosition: number = useSelector(
    (state: StateBooks) => state.books.scrollPosition
  );

  const contentsRef = useRef<HTMLDivElement>(null);

  function addBooks(event: React.UIEvent<HTMLDivElement>) {
    dispatch(SET_SCROLL(event.currentTarget.scrollTop));
    if (
      event.currentTarget.scrollTop >=
        (event.currentTarget.scrollHeight - event.currentTarget.clientHeight) *
          0.75 &&
      booksNextPage &&
      !isLoading
    ) {
      router.replace(`/home?pageId=${Number(pageId) + 1}&query=${query}`);
      dispatch(SET_LOADING(true));
    }
  }

  useEffect(() => {
    const contents: HTMLDivElement | null = contentsRef.current;

    contents!.scrollTop = scrollPosition;
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
