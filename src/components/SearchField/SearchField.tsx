import { useRouter } from "next/navigation";
import styles from "./SearchField.module.scss";

import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { SET_BOOKS, SET_LOADING } from "@/lib/features/books/booksSlice";

export default function SearchField() {
  const router = useRouter();

  const dispatch = useDispatch();

  function search(event: FormEvent) {
    event.preventDefault();

    const query = new FormData(event.target).get("query");

    dispatch(SET_BOOKS(null));

    router.push(`/home?pageId=1&query=${query}`);

    dispatch(SET_LOADING(true));

    event.target.querySelector("input").value = "";
  }

  return (
    <form
      autoComplete="off"
      onSubmit={(event) => search(event)}
      className={styles.SearchField}
    >
      <input name="query" type="text" placeholder="Поиск книг..." />
    </form>
  );
}
