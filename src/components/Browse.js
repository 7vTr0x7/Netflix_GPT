import React from "react";
import Header from "./Header";

import useTrendingMovies from "../Hooks/useTrendingMovies";
import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedSeries from "../Hooks/useTopRatedSeries";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";

const Browse = () => {
  useTrendingSeries();
  useTopRatedSeries();
  useTrendingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
