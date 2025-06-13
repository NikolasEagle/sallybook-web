import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  currentChapter: localStorage.getItem("currentChapter")
    ? JSON.parse(localStorage.getItem("currentChapter"))
    : null,
  chapters: localStorage.getItem("chapters")
    ? JSON.parse(localStorage.getItem("chapters"))
    : [
        {
          icon: "/home.svg",

          iconActive: "/home_active.svg",

          name: "Главная",

          href: "/home",

          active: false,
        },
        {
          icon: "/profile.svg",

          iconActive: "/profile_active.svg",

          name: "Профиль",

          href: "/profile",

          active: false,
        },
        /*{
          icon: "/settings.svg",

          iconActive: "/settings_active.svg",

          name: "Настройки",

          href: "/settings",

          active: false,
        },*/
      ],
};

export interface Chapter {
  icon: string;

  iconActive: string;

  name: string;

  href: string;

  active: boolean;
}

export interface StateChapters {
  chapters: {
    chapters: Chapter[];

    currentChapter: string;

    isLoading: boolean;
  };
}

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    SET_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    SET_CURRENT_CHAPTER: (state, action) => {
      state.currentChapter = action.payload;
      localStorage.setItem("currentChapter", JSON.stringify(action.payload));
    },
    SET_CHAPTERS: (state, action) => {
      state.chapters = action.payload;
      localStorage.setItem("chapters", JSON.stringify(action.payload));
    },
  },
});

export const { SET_LOADING, SET_CURRENT_CHAPTER, SET_CHAPTERS } =
  chaptersSlice.actions;
export default chaptersSlice.reducer;
