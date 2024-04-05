import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingMovies } from "../utils/Redux/seriesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    const time = setTimeout(() => {
      getTrendingMovie();
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
};

export default useTrendingMovies;
