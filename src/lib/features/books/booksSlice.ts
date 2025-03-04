import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {} };

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    SET_BOOKS: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { SET_BOOKS } = booksSlice.actions;
export default booksSlice.reducer;
