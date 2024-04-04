import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const series = useSelector((store) => store.series?.nowAiringSeries);
  if (!series) return;

  const mainSeries = series[0];
  console.log(mainSeries);

  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
