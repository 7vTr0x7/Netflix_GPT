import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black">
      <span className="text-[#e50914] font-bold text-6xl bg-gradient-to-t from-black p-1 rounded-md ">
        {title}
      </span>
      <p className="py-6 pl-10 text-lg w-1/3 ">{overview}</p>
      <p>
        <button className="bg-white text-black font-semibold text-xl py-3 px-12 rounded-md hover:bg-opacity-80 ">
          ▷ Play
        </button>
        <button className="bg-gray-500 mx-3 text-white font-semibold text-xl py-3 px-12 bg-opacity-50 hover:bg-opacity-30  rounded-md ">
          More Info
        </button>
      </p>
    </div>
  );
};

export default VideoTitle;
