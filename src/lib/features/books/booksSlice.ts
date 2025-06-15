import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books") ?? "")
    : null,
  isLoading: true,
  scrollPosition: localStorage.getItem("scrollPosition")
    ? JSON.parse(localStorage.getItem("scrollPosition") ?? "")
    : 0,
  selectedBook: localStorage.getItem("selectedBook")
    ? JSON.parse(localStorage.getItem("selectedBook") ?? "")
    : null,
};

export interface Data {
  id: string;

  addedDate: string;

  title: string;

  authors: string[] | [];

  categories: string[] | [];

  description: string;

  cover: string | null;

  bookFile: string | null;
}

export interface StateBooks {
  books: {
    books: {
      currentPage: number;

      data: Data[];

      nextPage: number | null;
    };

    isLoading: boolean;

    scrollPosition: number;

    selectedBook: Data;
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
    SELECT_BOOK: (state, action) => {
      state.selectedBook = action.payload;
      localStorage.setItem("selectedBook", JSON.stringify(action.payload));
    },
    SET_BOOKFILE: (state, action) => {
      state.selectedBook = action.payload;
    },
    RESET_BOOKS: () => initialState,
  },
});

export const {
  SET_BOOKS,
  SET_LOADING,
  SET_SCROLL,
  SELECT_BOOK,
  SET_BOOKFILE,
  RESET_BOOKS,
} = booksSlice.actions;
export default booksSlice.reducer;
