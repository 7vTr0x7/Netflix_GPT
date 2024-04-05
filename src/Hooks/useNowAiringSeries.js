import { API_OPTIONS } from "./../utils/constant";
import { useDispatch } from "react-redux";
import { addNowAiringSeries } from "../utils/Redux/seriesSlice";
import { useEffect } from "react";

const useNowAiringSeries = () => {
  const dispatch = useDispatch();

  const nowAiringSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowAiringSeries(json.results));
  };

  useEffect(() => {
    const time = setTimeout(() => {
      nowAiringSeries();
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
};

export default useNowAiringSeries;
