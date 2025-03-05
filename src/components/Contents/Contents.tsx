import styles from "./Contents.module.scss";

import BookCards from "../BookCards/BookCards";

export default function Contents() {
  return (
    <div id="content" tabIndex={-1} className={styles.Contents}>
      <BookCards />
    </div>
  );
}
