import styles from "./ContentsBook.module.scss";

import BookImage from "../BookImage/BookImage";
import BookInfo from "../BookInfo/BookInfo";
import BookDescription from "../BookDescription/BookDescription";
import Download from "../Download/Download";

export default function ContentsBook() {
  return (
    <div className={styles.ContentsBook}>
      <div className={styles.main}>
        <BookImage />
        <BookInfo />
        <BookDescription />
      </div>

      <Download />
    </div>
  );
}
