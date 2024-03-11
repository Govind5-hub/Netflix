import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { TrailerVideo } from "../Store/slice/movieSlice";

const useMoviesTrailer = (movieID) => {
  if(!movieID) return
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data?.json();

    const filterTrailer = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterTrailer?.length
      ? filterTrailer[0]
      : filterTrailer?.results[0];
   
    dispatch(TrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMoviesTrailer;
