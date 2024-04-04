import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const series = useSelector((store) => store.series?.nowAiringSeries);

  return <div>MainContainer</div>;
};

export default MainContainer;
