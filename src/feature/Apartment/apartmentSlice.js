import { createSlice } from "@reduxjs/toolkit";
import { apartmentDataDash } from "../../config";

const initialState = {
  apartmentDataDash,
};

const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    addApartment: (state, action) => {
      state.apartmentDataDash.push(action.payload);
    },
  },
});

export default apartmentSlice.reducer;
export const { addApartment } = apartmentSlice.actions;
