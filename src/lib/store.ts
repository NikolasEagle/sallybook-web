import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/booksSlice";
import chaptersReducer from "./features/chapters/chaptersSlice";
import registerReducer from "./features/register/registerSlice";
import loginReducer from "./features/login/loginSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    chapters: chaptersReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
