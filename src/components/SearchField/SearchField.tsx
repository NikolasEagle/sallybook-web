import { useRouter } from "next/navigation";
import styles from "./SearchField.module.scss";

import { FormEvent } from "react";

export default function SearchField() {
  const router = useRouter();

  function search(event: FormEvent) {
    event.preventDefault();

    const query = new FormData(event.target).get("query");

    router.push(`/home?pageId=1&query=${query}`);

    event.target.querySelector("input").value = "";
  }

  return (
    <form onSubmit={(event) => search(event)} className={styles.SearchField}>
      <input name="query" type="text" placeholder="Поиск книг..." />
    </form>
  );
}
