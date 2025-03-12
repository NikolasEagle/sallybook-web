"use client";

import styles from "./Header.module.scss";

import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const bookId = searchParams.get("bookId");

  function returnBack() {
    router.back();
  }

  return (
    <header className={styles.header}>
      {bookId && <button onClick={returnBack} className={styles.back}></button>}
      <img src="/logo.png" alt="Logo" />
      <h1>MouseBook</h1>
    </header>
  );
}
