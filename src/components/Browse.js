import React from "react";
import Header from "./Header";

import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAiringTodaySeries from "../Hooks/useAiringTodaySeries";
import useNowAiringSeries from "../Hooks/useNowAiringSeries";

const Browse = () => {
  useTrendingSeries();
  useAiringTodaySeries();
  useNowAiringSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
