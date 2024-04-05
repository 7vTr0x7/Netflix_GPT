import { createSlice } from "@reduxjs/toolkit";
const seriesSlice = createSlice({
  name: "series",
  initialState: {
    nowAiringSeries: null,
    trailerVideo: null,
    trendingSeries: null,
  },
  reducers: {
    addNowAiringSeries: (state, action) => {
      state.nowAiringSeries = action.payload;
    },
    addTrendingSeries: (state, action) => {
      state.trendingSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowAiringSeries, addTrailerVideo, addTrendingSeries } =
  seriesSlice.actions;

export default seriesSlice.reducer;
