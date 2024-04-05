import React from "react";
import Header from "./Header";

import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAiringTodaySeries from "../Hooks/useAiringTodaySeries";

const Browse = () => {
  useTrendingSeries();
  useAiringTodaySeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
