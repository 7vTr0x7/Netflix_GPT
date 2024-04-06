import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const SecondaryContainer = () => {
  const selectedLang = useSelector((store) => store.config.lang);

  const series = useSelector((store) => store.series);
  if (!series) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-52 z-20">
        <MovieList
          title={lang[selectedLang].trendingSeries}
          series={series.trendingSeries}
        />
        <MovieList
          title={lang[selectedLang].trendingMovies}
          series={series.trendingMovies}
        />
        <MovieList
          title={lang[selectedLang].topRatedSeries}
          series={series.topRatedSeries}
        />
        <MovieList
          title={lang[selectedLang].topRatedMovies}
          series={series.topRatedMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
