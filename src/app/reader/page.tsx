"use client";

import styles from "./reader.module.scss";

import ReaderContent from "@/components/ReaderContent/ReaderContent";

export default function Reader() {
  return (
    <div className={styles.reader}>
      <ReaderContent />
    </div>
  );
}
