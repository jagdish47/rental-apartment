import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    logedIn: (state) => {
      state.open = !state.open;
    },
  },
});

export default loginSlice.reducer;
export const { logedIn } = loginSlice.actions;
