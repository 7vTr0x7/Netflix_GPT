import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice";
import searchReducer from "./searchSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
    search: searchReducer,
    config: configReducer,
  },
});

export default appStore;
