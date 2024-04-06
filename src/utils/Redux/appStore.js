import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice";
import searchReducer from "./searchSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
    search: searchReducer,
  },
});

export default appStore;
