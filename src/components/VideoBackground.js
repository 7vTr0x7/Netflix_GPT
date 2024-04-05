import React, { useEffect } from "react";
import { API_OPTIONS } from "./../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/seriesSlice";

const VideoBackground = ({ seriesId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.series?.trailerVideo);

  const getSeriesVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results[15]);

    const filteredData = json.results.filter(
      (item) => item.name === "Official Trailer"
    );

    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getSeriesVideo();
  }, []);

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
