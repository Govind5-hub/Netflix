import React from "react";
import useMoviesDetails from "../Hooks/useMoviesDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MoviesRecommendtions from "./MoviesRecommendtions";

const MoviesDetails = () => {
  const { movieId } = useParams();
  useMoviesDetails(movieId);
  const vidoeMovie = useSelector((store) => store?.movies?.MoviesDetails);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          vidoeMovie?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
     <MoviesRecommendtions movieId={movieId} />
    </div>
  );
};

export default MoviesDetails;
