import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : null,
  isLoading: true,
  scrollPosition: localStorage.getItem("scrollPosition")
    ? JSON.parse(localStorage.getItem("scrollPosition"))
    : 0,
};

export interface StateBooks {
  books: {
    books: {
      currentPage: number;

      totalItems: number;

      data:
        | {
            volumeInfo: {
              title: string;
              authors: [];
              imageLinks: { thumbnail: string; smallThumbnail: string };
            };
          }[]
        | [];

      nextPage: number | null;
    };

    isLoading: boolean;

    scrollPosition: number;
  };
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    SET_BOOKS: (state, action) => {
      state.books = action.payload;
      localStorage.setItem("books", JSON.stringify(action.payload));
    },
    SET_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    SET_SCROLL: (state, action) => {
      state.scrollPosition = action.payload;
      localStorage.setItem("scrollPosition", JSON.stringify(action.payload));
    },
  },
});

export const { SET_BOOKS, SET_LOADING, SET_SCROLL } = booksSlice.actions;
export default booksSlice.reducer;
