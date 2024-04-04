import React from "react";
import Header from "./Header";

import useNowAiringSeries from "./../Hooks/useNowAiringSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
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
