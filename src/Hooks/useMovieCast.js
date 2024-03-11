import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { MoviesCast } from "../Store/slice/movieSlice";

const useMovieCast = (movieId) => {
  const dispatch = useDispatch();
  const getMovieCast = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/credits",
        API_OPTION
      );
      const json = await response.json();
      const filterData = json?.cast?.filter((data) => data.profile_path !== null);
      console.log(filterData,"filterData");

      dispatch(MoviesCast(filterData));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieCast();
  }, []);
};

export default useMovieCast;
