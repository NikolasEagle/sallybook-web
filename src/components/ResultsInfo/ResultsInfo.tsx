import styles from "./ResultsInfo.module.scss";

import { useSearchParams } from "next/navigation";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function ResultsInfo() {
  const query = useSearchParams().get("query");

  const books = useSelector((state: StateBooks) => state.books.books);

  return (
    books && (
      <div
        className={styles.ResultsInfo}
        style={books.totalItems ? { padding: "10px" } : { padding: "0" }}
      >
        {query && (
          <h4>
            По запросу - <span>{query?.toUpperCase()}</span> -
            {books.totalItems
              ? ` найдено ${books.totalItems} книг`
              : ` не найдено книг`}
          </h4>
        )}
      </div>
    )
  );
}
