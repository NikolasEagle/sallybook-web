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
    RESET_LOGIN: () => initialState,
  },
});

export const { SET_LOADING, RESET_LOGIN } = loginSlice.actions;
export default loginSlice.reducer;
