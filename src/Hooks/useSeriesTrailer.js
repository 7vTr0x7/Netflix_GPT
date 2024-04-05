import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/seriesSlice";
import { API_OPTIONS } from "../utils/constant";

const useSeriesTrailer = (seriesId) => {
  const dispatch = useDispatch();

  const getSeriesVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter(
      (item) => item.name === "Official Trailer"
    );

    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getSeriesVideo();
  }, []);
};

export default useSeriesTrailer;
