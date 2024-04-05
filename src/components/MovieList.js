import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, series }) => {
  if (!series) return;
  return (
    <div>
      <div className="flex">
        <h1>{title}</h1>
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
