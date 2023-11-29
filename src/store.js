import { configureStore } from "@reduxjs/toolkit";

import apartmentReducer from "./feature/Apartment/apartmentSlice";

const store = configureStore({
  reducer: {
    apartment: apartmentReducer,
  },
});

export default store;
