import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies, }) => {
  console.log(title,movies,"ttt");
  if (!movies) return <p>Loading</p>;

  return (
    <div className="px-6  overflow-y-hidden">
      <h1 className="text-3xl text-white font-bold py-4">{title}</h1>
      <div className="flex justify-center overflow-x-auto hidden-scrollbar">
        <div className="flex space-x-4 px-2">
        {title == "Recommendtion Movies" ? movies?.map((movie) => (
           <Link   to={"/moviesinfo/" + movie.id}  key={movie.id}><MovieCard  name={movie?.original_title} posterPath={movie.poster_path} /></Link> 
          )) :  movies?.map((movie) => (
           <Link   to={"/moviesinfo/" + movie.id}  key={movie.id}><MovieCard   name={movie?.original_title} posterPath={movie.poster_path} /></Link> 
          ))}
          {}
        </div>
      </div>
      
    </div>
  );
};

export default MovieList;
