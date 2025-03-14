import styles from "./BookCard.module.scss";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

import { SET_LOADING } from "@/lib/features/books/booksSlice";

import { Data } from "@/lib/features/books/booksSlice";

interface Props {
  data: Data;
}

export default function BookCard({ data }: Props) {
  const router = useRouter();

  const dispatch = useDispatch();

  const bookId = data.id;

  function openBook() {
    dispatch(SET_LOADING(true));
    router.push(`/bookPage?bookId=${bookId}`);
  }

  return (
    <div onClick={openBook} tabIndex={0} className={styles.BookCard}>
      <img src={data.cover || "/no-image.png"} />
      <div className={styles.shadow}>
        {data.authors && (
          <p className={styles.author}>{data.authors.slice(0, 2).join(", ")}</p>
        )}
        <p className={styles.title}>{data.title}</p>
      </div>
    </div>
  );
}
