import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : null,
  isLoading: true,
  scrollPosition: localStorage.getItem("scrollPosition")
    ? JSON.parse(localStorage.getItem("scrollPosition"))
    : 0,
  selectedBook: null,
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

    selectedBook: {
      title: string;
      authors: string[] | [];
      publisher: string | null;
      publishedDate: string | null;
      industryIdentifiers: {
        type: string;
        identifier: string;
      }[];
      pageCount: number;
      categories: string[];
      imageLinks: {
        smallThumbnail: string | undefined;

        thumbnail: string | undefined;

        small: string | undefined;

        medium: string | undefined;

        large: string | undefined;

        extraLarge: string | undefined;
      };
    };
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
    },
  },
});

export const { SET_BOOKS, SET_LOADING, SET_SCROLL, SELECT_BOOK } =
  booksSlice.actions;
export default booksSlice.reducer;
