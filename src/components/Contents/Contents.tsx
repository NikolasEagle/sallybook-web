import styles from "./Contents.module.scss";

import { useRouter } from "next/navigation";

import BookCards from "../BookCards/BookCards";

import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Download from "../Download/Download";

export default function Contents() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const pageId = searchParams.get("pageId");

  const query = searchParams.get("query");

  const booksNextPage = useSelector((state) =>
    state.books.books ? state.books.books.nextPage : null
  );

  const isLoading = useSelector((state) => state.books.isLoading);

  function addBooks(event) {
    if (
      event.target.scrollHeight <=
        event.target.clientHeight + event.target.scrollTop &&
      booksNextPage &&
      !isLoading
    ) {
      router.push(`/home?pageId=${Number(pageId) + 1}&query=${query}`);
    }
  }
  return (
    <div
      onScroll={(event) => addBooks(event)}
      tabIndex={-1}
      className={styles.Contents}
    >
      <BookCards />

      <Download />
    </div>
  );
}
