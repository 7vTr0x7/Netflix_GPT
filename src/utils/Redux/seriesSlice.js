import { createSlice } from "@reduxjs/toolkit";
const seriesSlice = createSlice({
  name: "series",
  initialState: {
    nowAiringSeries: {},
  },
  reducers: {
    addNowAiringSeries: (state, action) => {
      state.nowAiringSeries = action.payload;
    },
  },
});

export const { addNowAiringSeries } = seriesSlice.actions;

export default seriesSlice.reducer;
