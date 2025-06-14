"use client";

import Image from "next/image";
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

  const regex = new RegExp(`^${pathName}`);

  return (
    (regex.test("/home") ||
      regex.test("/bookPage") ||
      regex.test("/profile") ||
      regex.test("/settings")) && (
      <header
        style={
          regex.test("/profile")
            ? { borderRadius: "0 0 20px 20px" }
            : { borderRadius: "0" }
        }
        className={styles.header}
      >
        {bookId && (
          <button onClick={returnBack} className={styles.back}></button>
        )}
        <Image width={"200"} height={"200"} src="/logo.png" alt="Logo" />
        <h1>MouseBook</h1>
      </header>
    )
  );
}
