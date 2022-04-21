import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = Userslice.actions;
export const selectUser = (state) => state.user.user;
export default Userslice.reducer;
