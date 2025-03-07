import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
  isLoading: true,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    SET_BOOKS: (state, action) => {
      state.books = action.payload;
    },
    SET_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { SET_BOOKS, SET_LOADING } = booksSlice.actions;
export default booksSlice.reducer;
