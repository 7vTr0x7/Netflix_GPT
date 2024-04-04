import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "./../utils/constant";
import { useDispatch } from "react-redux";
import { addNowAiringSeries } from "../utils/Redux/seriesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const nowAiringSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowAiringSeries(json.results));
    console.log(json);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      nowAiringSeries();
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
