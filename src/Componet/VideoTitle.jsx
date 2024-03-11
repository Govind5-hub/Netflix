import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="mx-2">
        <button className=" bg-white text-black border hover:opacity-35  p-2 px-12 text-xl  rounded-lg  ">
          Play
        </button>
        <button className=" mx-2 text-white border bg-gray-500 p-2 px-12 text-xl bg-opacity-70 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
