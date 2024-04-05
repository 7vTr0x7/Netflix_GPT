import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const series = useSelector((store) => store.series);
  if (!series) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-52 z-20">
        <MovieList title={"Trending Series"} series={series.trendingSeries} />
        <MovieList title={"Trending Movies"} series={series.trendingMovies} />
        <MovieList title={"Popular"} series={series.popularSeries} />
        <MovieList title={"Airing Today"} series={series.airingToday} />
        <MovieList title={"On The Air"} series={series.nowAiringSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
