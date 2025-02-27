import styles from "./ResultsInfo.module.scss";

import { useSelector } from "react-redux";

export default function ResultsInfo() {
  const totalItems = useSelector((state) =>
    state.totalItems ? state.totalItems : null
  );

  return (
    <div className={styles.ResultsInfo}>
      {totalItems ? <h2>{totalItems} результатов</h2> : null}
    </div>
  );
}
