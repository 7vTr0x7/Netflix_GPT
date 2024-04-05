import { createSlice } from "@reduxjs/toolkit";
const seriesSlice = createSlice({
  name: "series",
  initialState: {
    nowAiringSeries: null,
    trailerVideo: null,
  },
  reducers: {
    addNowAiringSeries: (state, action) => {
      state.nowAiringSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowAiringSeries, addTrailerVideo } = seriesSlice.actions;

export default seriesSlice.reducer;
