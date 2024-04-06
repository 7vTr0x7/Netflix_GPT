import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const series = useSelector((store) => store.series?.trendingSeries);
  if (!series) return;

  console.log(series);

  const mainSeries = series?.filter((series) => series.name === "Shōgun");

  if (!mainSeries[0]) return;

  const { name, overview, id } = mainSeries[0];
  return (
    <div>
      <VideoTitle title={name} overview={overview} />
      <VideoBackground seriesId={id} />
    </div>
  );
};

export default MainContainer;
