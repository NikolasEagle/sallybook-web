import styles from "./BookCard.module.scss";

export default function BookCard({ data }) {
  return <div className={styles.BookCard}>{data.volumeInfo.title}</div>;
}
