import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const series = useSelector((store) => store.series);
  if (!series) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-52 z-20">
        <MovieList title={"Trending"} series={series.nowAiringSeries} />
        <MovieList title={"Airing Today"} series={series.airingToday} />
        <MovieList title={"On The Air"} series={series.nowAiringSeries} />
        <MovieList title={"Popular"} series={series.nowAiringSeries} />
        <MovieList title={"Top Rated"} series={series.nowAiringSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
