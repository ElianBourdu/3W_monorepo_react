import { configureStore } from '@reduxjs/toolkit';
import fruitsReducer from "./reducers/fruitsReducer";

export const store = configureStore({
  reducer: {
    fruits: fruitsReducer
  },
});