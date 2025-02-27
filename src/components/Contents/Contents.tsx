import styles from "./Contents.module.scss";

import ResultsInfo from "../ResultsInfo/ResultsInfo";

import BookCards from "../BookCards/BookCards";

export default function Contents() {
  return (
    <div tabIndex={-1} className={styles.Contents}>
      <ResultsInfo />
      <BookCards />
    </div>
  );
}
