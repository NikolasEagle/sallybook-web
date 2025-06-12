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

  const regexFooter = new RegExp(`^${pathName}`);

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
    } else if (/^\/bookPage/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER("bookPage"));
      currentChapter = "bookPage";
    } else {
      currentChapter = currentChapterGlobal;
    }

    dispatch(
      SET_CHAPTERS(
        chapters.map((chapter) => {
          const newChapter = { ...chapter };

          const regex = new RegExp(`^\/${currentChapter}`);

          if (regex.test(newChapter.href)) {
            newChapter.active = true;
            if (currentChapterGlobal === "home") {
              newChapter.href = `${pathName}?${searchParams}`;
            }
          } else {
            newChapter.active = false;
          }
          return newChapter;
        })
      )
    );
  }, [pathName, searchParams]);

  return (
    (regexFooter.test("/home") ||
      regexFooter.test("/bookPage") ||
      regexFooter.test("/profile") ||
      regexFooter.test("/settings")) && (
      <footer
        style={
          bookId ? { borderRadius: "0" } : { borderRadius: "20px 20px 0 0" }
        }
        className={styles.footer}
      >
        {!/^\/bookPage/.test(pathName) &&
          chapters.map((chapter) => (
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
