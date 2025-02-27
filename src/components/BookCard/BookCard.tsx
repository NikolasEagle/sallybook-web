import styles from "./BookCard.module.scss";

interface Props {
  data: {
    volumeInfo: {
      title: string;
      imageLinks: { thumbnail: string; smallThumbnail: string };
    };
  };
}

export default function BookCard({ data }: Props) {
  return (
    <div className={styles.BookCard}>
      <img
        src={
          data.volumeInfo.imageLinks &&
          (data.volumeInfo.imageLinks.thumbnail ||
            data.volumeInfo.imageLinks.smallThumbnail)
        }
      />
    </div>
  );
}
