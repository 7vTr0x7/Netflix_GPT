import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const series = useSelector((store) => store.series);
  if (!series) return;

  return (
    <div>
      <MovieList title={"Now Airing"} series={series.nowAiringSeries} />
    </div>
  );
};

export default SecondaryContainer;
