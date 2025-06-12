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

  useEffect(() => {
    if (/^\/home/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("home"));
    } else if (/^\/profile/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("profile"));
    } else if (/^\/settings/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("settings"));
    }

    dispatch(
      SET_CHAPTERS(
        chapters.map((chapter) => {
          const newChapter = { ...chapter };

          if (chapter.href === pathName) {
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
