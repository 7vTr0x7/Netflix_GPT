import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "./../utils/constant";

const Browse = () => {
  const nowAiringSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    nowAiringSeries();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
