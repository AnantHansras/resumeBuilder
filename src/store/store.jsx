import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from '../Slices/loading';
import templateReducer from '../Slices/template'
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    template: templateReducer
  }
});