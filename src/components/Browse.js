import React from "react";
import Header from "./Header";

import useNowAiringSeries from "./../Hooks/useNowAiringSeries";
import MainContainer from "./MainContainer";
const Browse = () => {
  useNowAiringSeries();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
