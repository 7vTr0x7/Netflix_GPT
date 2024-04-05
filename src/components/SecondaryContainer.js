import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const series = useSelector((store) => store.series);
  if (!series) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-52 z-20">
        <MovieList title={"Now Airing"} series={series.nowAiringSeries} />
        <MovieList title={"Trending"} series={series.nowAiringSeries} />
        <MovieList title={"On Air"} series={series.nowAiringSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
