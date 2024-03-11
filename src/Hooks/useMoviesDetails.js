import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { MoviesDetailsVideo } from "../Store/slice/movieSlice";

const useMoviesDetails = (movieId) => {
  const movieID = movieId;
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
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

    dispatch(MoviesDetailsVideo(trailer));
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
};
export default useMoviesDetails;
