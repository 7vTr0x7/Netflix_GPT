import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingSeries } from "../utils/Redux/seriesSlice";

const useTrendingSeries = () => {
  const dispatch = useDispatch();

  const getTrendingSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingSeries(json.results));
  };

  useEffect(() => {
    const time = setTimeout(() => {
      getTrendingSeries();
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
};

export default useTrendingSeries;
