import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../Hooks/useoPopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRated from "../Hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // custom Hooks
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRated();

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
