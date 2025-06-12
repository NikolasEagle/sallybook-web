import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export interface StateLogin {
  login: { isLoading: boolean };
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    SET_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { SET_LOADING } = loginSlice.actions;
export default loginSlice.reducer;
