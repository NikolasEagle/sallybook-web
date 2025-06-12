import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChapter: localStorage.getItem("currentChapter")
    ? JSON.parse(localStorage.getItem("currentChapter"))
    : null,
  chapters: localStorage.getItem("chapters")
    ? JSON.parse(localStorage.getItem("chapters"))
    : null,
};

export interface Chapters {
  icon: string;

  iconActive: string;

  name: string;

  active: boolean;
}

export interface StateChapters {
  chapters: {
    chapters: Chapters;

    currentChapter: string;
  };
}

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
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

export const { SET_CURRENT_CHAPTER, SET_CHAPTERS } = chaptersSlice.actions;
export default chaptersSlice.reducer;
