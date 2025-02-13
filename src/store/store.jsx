import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from '../Slices/loading';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  }
});