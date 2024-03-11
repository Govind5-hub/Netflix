import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { PopularMovies } from "../Store/slice/movieSlice";


const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'",
      API_OPTION
    );
    const json = await data.json();
    dispatch(PopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
