import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./slices/Modelsslice";
import cart from "./slices/Cartslice";


export const store = configureStore({
  reducer: {
    modelReducer,
    cart
  },
});
