import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export interface StateRegister {
  isLoading: boolean;
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    SET_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { SET_LOADING } = registerSlice.actions;
export default registerSlice.reducer;
