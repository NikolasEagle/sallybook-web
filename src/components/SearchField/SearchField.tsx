import styles from "./SearchField.module.scss";

import { useRouter } from "next/navigation";

import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { SET_BOOKS, SET_LOADING } from "@/lib/features/books/booksSlice";

export default function SearchField() {
  const router = useRouter();

  const dispatch = useDispatch();

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const query = new FormData(form).get("query");

    dispatch(SET_BOOKS(null));

    router.replace(`/home?pageId=1&query=${query}`);

    dispatch(SET_LOADING(true));

    const searchField: HTMLInputElement | null = form.querySelector("input");

    searchField!.value = "";
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
