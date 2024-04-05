import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedSeries } from "../utils/Redux/seriesSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();

  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedSeries(json.results));
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
