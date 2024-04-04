import React from "react";
import Header from "./Header";

import useNowAiringSeries from "./../Hooks/useNowAiringSeries";
const Browse = () => {
  useNowAiringSeries();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
