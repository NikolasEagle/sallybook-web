"use client";

import styles from "./Footer.module.scss";

import ChapterLink from "../ChapterLink/ChapterLink";
import { useSearchParams, usePathname } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_CHAPTER } from "@/lib/features/chapters/chaptersSlice";
import { StateChapters } from "@/lib/features/chapters/chaptersSlice";

const chapters = [
  {
    icon: "/home.svg",

    name: "Главная",

    href: "/home",
  },
  {
    icon: "/profile.svg",

    name: "Профиль",

    href: "/profile",
  },
  {
    icon: "/settings.svg",

    name: "Настройки",

    href: "/settings",
  },
];

export default function Footer() {
  const searchParams = useSearchParams();

  const pathName = usePathname();

  const bookId = searchParams.get("bookId");
  return (
    pathName !== "/reader" && (
      <footer
        style={
          bookId ? { borderRadius: "0" } : { borderRadius: "20px 20px 0 0" }
        }
        className={styles.footer}
      >
        {chapters.map((chapter) => (
          <ChapterLink
            icon={chapter.icon}
            name={chapter.name}
            href={chapter.href}
          />
        ))}
      </footer>
    )
  );
}
