import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const RecommendtionContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className="w-screen -mt-50 relative z-20  bg-black ">
        <MovieList
          title={"Recommendtion Movies"}
          movies={movies?.RecommendationsMovies}
        />
      </div>
    )
  );
};

export default RecommendtionContainer;
