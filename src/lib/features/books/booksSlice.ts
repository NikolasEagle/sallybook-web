import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: null };

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    GET_BOOKS: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { GET_BOOKS } = booksSlice.actions;
export default booksSlice.reducer;
