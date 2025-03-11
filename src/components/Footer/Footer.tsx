"use client";

import styles from "./Footer.module.scss";

import ChapterLink from "../ChapterLink/ChapterLink";
import { useSearchParams } from "next/navigation";

const chapters = [
  {
    icon: "/home.svg",

    name: "Главная",
  },
  {
    icon: "/profile.svg",

    name: "Профиль",
  },
  {
    icon: "/settings.svg",

    name: "Настройки",
  },
];

export default function Footer() {
  const searchParams = useSearchParams();

  const bookId = searchParams.get("bookId");

  return (
    <footer
      style={bookId ? { borderRadius: "0" } : { borderRadius: "20px 20px 0 0" }}
      className={styles.footer}
    >
      {chapters.map((chapter) => (
        <ChapterLink icon={chapter.icon} name={chapter.name} />
      ))}
    </footer>
  );
}
