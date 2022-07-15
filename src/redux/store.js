import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./slices/Modelsslice";


export const store = configureStore({
  reducer: {
    modelReducer,
  },
});
