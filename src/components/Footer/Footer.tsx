"use client";

import styles from "./Footer.module.scss";

import ChapterLink from "../ChapterLink/ChapterLink";
import { useSearchParams, usePathname } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import {
  SET_CHAPTERS,
  SET_CURRENT_CHAPTER,
} from "@/lib/features/chapters/chaptersSlice";

import { StateChapters } from "@/lib/features/chapters/chaptersSlice";
import { useEffect } from "react";

export default function Footer() {
  const searchParams = useSearchParams();

  const pathName = usePathname();

  const bookId = searchParams.get("bookId");

  const dispatch = useDispatch();

  const chapters = useSelector(
    (state: StateChapters) => state.chapters.chapters
  );

  const currentChapterGlobal = useSelector(
    (state: StateChapters) => state.chapters.currentChapter
  );

  useEffect(() => {
    let currentChapter: string;

    if (/^\/home/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("home"));
      currentChapter = "home";
    } else if (/^\/profile/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("profile"));
      currentChapter = "profile";
    } else if (/^\/settings/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("settings"));
      currentChapter = "settings";
    } else {
      currentChapter = currentChapterGlobal;
    }

    dispatch(
      SET_CHAPTERS(
        chapters.map((chapter) => {
          const newChapter = { ...chapter };

          if (newChapter.href === `/${currentChapter}`) {
            newChapter.active = true;
          } else {
            newChapter.active = false;
          }
          return newChapter;
        })
      )
    );
  }, [pathName]);

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
            iconActive={chapter.iconActive}
            name={chapter.name}
            href={chapter.href}
            active={chapter.active}
          />
        ))}
      </footer>
    )
  );
}
