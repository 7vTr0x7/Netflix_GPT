import { createSlice } from "@reduxjs/toolkit";
const seriesSlice = createSlice({
  name: "series",
  initialState: {
    trailerVideo: null,
    trendingSeries: null,
    topRatedSeries: null,
    trendingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addTrendingSeries: (state, action) => {
      state.trendingSeries = action.payload;
    },

    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addTrailerVideo,
  addTrendingSeries,
  addTrendingMovies,
  addTopRatedSeries,
  addTopRatedMovies,
} = seriesSlice.actions;

export default seriesSlice.reducer;
