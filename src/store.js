import { configureStore } from "@reduxjs/toolkit";

import apartmentReducer from "./feature/Apartment/apartmentSlice";
import loginReducer from "./feature/Login/loginSlice";

const store = configureStore({
  reducer: {
    apartment: apartmentReducer,
    login: loginReducer,
  },
});

export default store;
