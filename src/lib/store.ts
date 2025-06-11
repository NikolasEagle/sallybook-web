import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/booksSlice";
import chaptersReducer from "./features/chapters/chaptersSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    chapters: chaptersReducer,
  },
});

export default store;
