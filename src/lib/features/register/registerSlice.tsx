import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export interface StateRegister {
  register: { isLoading: boolean };
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    SET_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    RESET_REGISTER: () => initialState,
  },
});

export const { SET_LOADING, RESET_REGISTER } = registerSlice.actions;
export default registerSlice.reducer;
