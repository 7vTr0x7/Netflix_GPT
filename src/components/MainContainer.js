import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const series = useSelector((store) => store.series?.nowAiringSeries);
  if (!series) return;

  const mainSeries = series.filter(
    (series) => series.original_name === "Shōgun"
  );

  if (!mainSeries[0]) return;

  const { original_name, overview, id } = mainSeries[0];
  return (
    <div>
      <VideoTitle title={original_name} overview={overview} />
      <VideoBackground seriesId={id} />
    </div>
  );
};

export default MainContainer;
