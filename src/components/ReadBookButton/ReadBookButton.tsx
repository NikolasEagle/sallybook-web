import styles from "./ReadBookButton.module.scss";

import { useSelector } from "react-redux";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function ReadBookButton() {
  return (
    <div className={styles.ReadBookButton}>
      <button>Читать онлайн</button>
    </div>
  );
}
