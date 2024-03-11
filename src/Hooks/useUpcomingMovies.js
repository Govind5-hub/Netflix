import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { UpcomingMovies } from "../Store/slice/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(UpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
