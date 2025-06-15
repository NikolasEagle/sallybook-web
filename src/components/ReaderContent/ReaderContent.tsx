import styles from "./ReaderContent.module.scss";

import { useState } from "react";

import { useSelector } from "react-redux";

import { ReactReader } from "react-reader";

import { StateBooks } from "@/lib/features/books/booksSlice";

export default function ReaderContent() {
  const [location, setLocation] = useState<string | number>(0);

  const selectedBook = useSelector(
    (state: StateBooks) => state.books.selectedBook
  );

  return (
    <div className={styles.ReaderContent}>
      <ReactReader
        title={selectedBook.title}
        url={`/api/${selectedBook.bookFile}`}
        epubInitOptions={{
          openAs: "epub",
        }}
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        swipeable={true}
      />
    </div>
  );
}
