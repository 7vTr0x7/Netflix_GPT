import React from "react";
import Header from "./Header";

import useAiringTodaySeries from "../Hooks/useAiringTodaySeries";
import useNowAiringSeries from "../Hooks/useNowAiringSeries";
import usePopularSeries from "../Hooks/usePopularSeries";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTrendingSeries();
  useAiringTodaySeries();
  useNowAiringSeries();
  usePopularSeries();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
