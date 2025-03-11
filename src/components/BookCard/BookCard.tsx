import styles from "./BookCard.module.scss";

import { useRouter } from "next/navigation";

interface Props {
  data: {
    id: string;
    volumeInfo: {
      title: string;
      authors: [];
      imageLinks: { thumbnail: string; smallThumbnail: string };
    };
  };
}

export default function BookCard({ data }: Props) {
  const router = useRouter();

  const bookId = data.id;

  function openBook() {
    router.push(`/bookPage?bookId=${bookId}`);
  }

  return (
    <div onClick={openBook} tabIndex={0} className={styles.BookCard}>
      <img
        src={
          data.volumeInfo.imageLinks
            ? data.volumeInfo.imageLinks.thumbnail ||
              data.volumeInfo.imageLinks.smallThumbnail
            : "/no-image.png"
        }
      />
      <div className={styles.shadow}>
        {data.volumeInfo.authors && (
          <p className={styles.author}>
            {data.volumeInfo.authors.slice(0, 2).join(", ")}
          </p>
        )}
        <p className={styles.title}>{data.volumeInfo.title}</p>
      </div>
    </div>
  );
}
