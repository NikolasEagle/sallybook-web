"use client";

import styles from "./Header.module.scss";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const bookId = searchParams.get("bookId");

  const pathName = usePathname();

  function returnBack() {
    router.back();
  }

  return (
    pathName !== "/reader" && (
      <header className={styles.header}>
        {bookId && (
          <button onClick={returnBack} className={styles.back}></button>
        )}
        <img src="/logo.png" alt="Logo" />
        <h1>MouseBook</h1>
      </header>
    )
  );
}
