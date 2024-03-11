import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { RecommendationsMovies } from "../Store/slice/movieSlice";

const useRecommendationsMovies  = (movieId) => {
    const dispatch = useDispatch();
    const  getRecommendationsMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId + "/recommendations",
        API_OPTION
      );
      const json = await data.json();
      dispatch(RecommendationsMovies(json.results));
    };
    useEffect(() => {
      getRecommendationsMovies();
    }, []);
}

export default useRecommendationsMovies