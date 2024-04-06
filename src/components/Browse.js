import React from "react";
import Header from "./Header";

import useTrendingMovies from "../Hooks/useTrendingMovies";
import useTrendingSeries from "./../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedSeries from "../Hooks/useTopRatedSeries";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import Search from "./Search";

const Browse = () => {
  useTrendingSeries();
  useTopRatedSeries();
  useTrendingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <Search />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
