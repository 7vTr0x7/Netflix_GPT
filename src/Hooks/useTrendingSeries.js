import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowAiringSeries } from "../utils/Redux/seriesSlice";
import { useEffect } from "react";

const useTrendingSeries = () => {
  const dispatch = useDispatch();

  const getTrendingSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowAiringSeries(json.results));
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