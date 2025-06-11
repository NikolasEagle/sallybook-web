import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChapter: localStorage.getItem("currentChapter")
    ? JSON.parse(localStorage.getItem("currentChapter"))
    : null,
};

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    SET_CURRENT_CHAPTER: (state, action) => {
      state.currentChapter = action.payload;
      localStorage.setItem("currentChapter", JSON.stringify(action.payload));
    },
  },
});

export default chaptersSlice.reducer;
