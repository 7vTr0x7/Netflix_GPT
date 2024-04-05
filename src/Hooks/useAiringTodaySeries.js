import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addAiringTodaySeries } from "../utils/Redux/seriesSlice";

const useAiringTodaySeries = () => {
  const dispatch = useDispatch();

  const gatAiringTodaySeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringTodaySeries(json.results));
  };

  useEffect(() => {
    const time = setTimeout(() => {
      gatAiringTodaySeries();
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
};

export default useAiringTodaySeries;
