import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieID={id} />
    </>
  );
};

export default MainContainer;
