import { API_OPTIONS } from "./../utils/constant";
import { useDispatch } from "react-redux";
import { addNowAiringSeries } from "../utils/Redux/seriesSlice";
import { useEffect } from "react";

const usePopularSeries = () => {
  const dispatch = useDispatch();

  const getPopularSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowAiringSeries(json.results));
  };

  useEffect(() => {
    const time = setTimeout(() => {
      getPopularSeries();
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
};

export default usePopularSeries;
