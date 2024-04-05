import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingSeries } from "../utils/Redux/seriesSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();

  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingSeries(json.results));
  };

  useEffect(() => {
    const time = setTimeout(() => {
      getTopRatedSeries();
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
};

export default useTopRatedSeries;
