import React from "react";
import { useSelector } from "react-redux";
import useSeriesTrailer from "../Hooks/useSeriesTrailer";

const VideoBackground = ({ seriesId }) => {
  const trailer = useSelector((store) => store.series?.trailerVideo);

  useSeriesTrailer(seriesId);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/yAN5uspO_hk?si=-" + trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default VideoBackground;
