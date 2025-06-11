import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChapter: localStorage.getItem("currentChapter")
    ? JSON.parse(localStorage.getItem("currentChapter"))
    : null,
};

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {},
});

export default chaptersSlice.reducer;
