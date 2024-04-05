import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, series }) => {
  if (!series) return;
  return (
    <div className="px-6 text-white bg-black ">
      <h1 className="font-bold text-3xl py-4">{title}</h1>
      <div className="flex  overflow-x-scroll ">
        <div className="flex">
          {series.map((item) => (
            <MovieCard key={item.id} posterPath={item.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
