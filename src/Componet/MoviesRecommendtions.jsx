import React from "react";
import { useParams } from "react-router-dom";
import useRecommendationsMovies from "../Hooks/useRecommendationsMovies";
import RecommendtionContainer from "./RecommendtionContainer";
import MoviesCastContainer from "./MoviesCastContainer";

const MoviesRecommendtions = () => {
  const { movieId } = useParams();
  useRecommendationsMovies(movieId);
 
  return (
    <> 
 
     
      <MoviesCastContainer title={"Cast"} movieId={movieId} />
      <RecommendtionContainer />
    </>
  );
};

export default MoviesRecommendtions;
