import { useSearchParams } from "next/navigation";
import styles from "./ResultsInfo.module.scss";

import { useSelector } from "react-redux";

export default function ResultsInfo() {
  const query = useSearchParams().get("query");

  const books = useSelector((state) => state.books.data);

  const totalItems = useSelector((state) =>
    state.books.data.totalItems ? state.books.data.totalItems : null
  );

  return (
    Object.keys(books.data).length > 0 && (
      <div className={styles.ResultsInfo}>
        {query && (
          <h4>
            По запросу - <span>{query?.toUpperCase()}</span> -
            {totalItems ? ` найдено ${totalItems} книг` : ` не найдено книг`}
          </h4>
        )}
      </div>
    )
  );
}
