import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const series = useSelector((store) => store.series?.nowAiringSeries);
  if (!series) return;

  const mainSeries = series[6];
  console.log(mainSeries);

  const { original_name, overview } = mainSeries;
  return (
    <div>
      <VideoTitle title={original_name} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
