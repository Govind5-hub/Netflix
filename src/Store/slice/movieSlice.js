import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    PopularMovies:null,
    UpcomingMovies:null,
    TopRatedMovies:null,
    trailerVideo: null,
    MoviesDetails:null,
    RecommendationsMovies:null,
    movieCast:null
  },
  reducers: {
    NowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    PopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    UpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    TopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    TrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    MoviesDetailsVideo:(state,action) => {
      state.MoviesDetails = action.payload
    },
    RecommendationsMovies:(state,action) => {
      state.RecommendationsMovies = action.payload
    },
    MoviesCast:(state,action) => {
      state.movieCast = action.payload
    }
    
  },
});
export const {MoviesCast,RecommendationsMovies, MoviesDetailsVideo, NowPlayingMovies, TrailerVideo,PopularMovies,UpcomingMovies,TopRatedMovies } = movieSlice.actions;

export default movieSlice.reducer;
