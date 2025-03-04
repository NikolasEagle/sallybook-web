import styles from "./BookCard.module.scss";

interface Props {
  data: {
    volumeInfo: {
      title: string;
      authors: [];
      imageLinks: { thumbnail: string; smallThumbnail: string };
    };
  };
}

export default function BookCard({ data }: Props) {
  return (
    <div tabIndex={0} className={styles.BookCard}>
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
