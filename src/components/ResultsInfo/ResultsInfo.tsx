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
        style={query ? { padding: "10px" } : { padding: "0" }}
      >
        {query && (
          <h4>
            {books.data.length > 0
              ? `Результаты по запросу - ${query.toUpperCase()}`
              : `По запросу - ${query.toUpperCase()} - не найдено результатов`}
          </h4>
        )}
      </div>
    )
  );
}
