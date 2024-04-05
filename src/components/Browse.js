import React from "react";
import Header from "./Header";

import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTrendingSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
