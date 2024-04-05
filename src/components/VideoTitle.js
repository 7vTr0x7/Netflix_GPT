import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-14">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 pl-10 text-lg w-1/3">{overview}</p>
      <p>
        <button className="bg-[#333] text-black font-semibold text-xl py-3 px-12 bg-transparent border border-[#333] rounded-md ">
          ▷ Play
        </button>
        <button className="bg-[#333] text-black font-semibold text-xl py-3 px-12 bg-transparent border border-[#333] rounded-md mx-3">
          More Info
        </button>
      </p>
    </div>
  );
};

export default VideoTitle;
