import React from "react";
import Header from "./Header";

import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAiringTodaySeries from "../Hooks/useAiringTodaySeries";
import useNowAiringSeries from "../Hooks/useNowAiringSeries";
import usePopularSeries from "../Hooks/usePopularSeries";
import useTopRatedSeries from "../Hooks/useTopRatedSeries";

const Browse = () => {
  useTrendingSeries();
  useAiringTodaySeries();
  useNowAiringSeries();
  usePopularSeries();
  useTopRatedSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
