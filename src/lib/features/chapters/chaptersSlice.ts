import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChapter: localStorage.getItem("currentChapter")
    ? JSON.parse(localStorage.getItem("currentChapter"))
    : null,
};
