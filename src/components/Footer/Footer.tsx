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

  const dispatch = useDispatch();

  const chapters = useSelector(
    (state: StateChapters) => state.chapters.chapters
  );

  const currentChapterGlobal = useSelector(
    (state: StateChapters) => state.chapters.currentChapter
  );

  const regex = new RegExp(`^${pathName}`);

  useEffect(() => {
    if (/^\/home|profile|settings/.test(pathName)) {
      dispatch(SET_CURRENT_CHAPTER(pathName.replace("/", "")));
    }

    dispatch(
      SET_CHAPTERS(
        chapters.map((chapter) => {
          const newChapter = { ...chapter };

          if (regex.test(newChapter.href)) {
            newChapter.active = true;
          } else {
            newChapter.active = false;
          }
          return newChapter;
        })
      )
    );
  }, [pathName, searchParams]);

  return (
    (regex.test("/home") ||
      regex.test("/profile") ||
      regex.test("/settings")) && (
      <footer className={styles.footer}>
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
