import { configureStore } from '@reduxjs/toolkit';
import fruitsReducer from "./reducers/fruitsReducer";
import searchReducer from "./reducers/searchReducer";

export const store = configureStore({
  reducer: {
    fruits: fruitsReducer,
    search: searchReducer
  },
});