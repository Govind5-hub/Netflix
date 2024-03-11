import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && ( <div className="w-screen -mt-50 relative z-20  bg-black ">
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}  />
    <MovieList title={"Popular Movies"} movies={movies?.PopularMovies} />
    <MovieList title={"UpComing Movies "} movies={movies?.UpcomingMovies} />
    <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies} />
  
  </div>)
   
  );
};

export default SecondryContainer;
