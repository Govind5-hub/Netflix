import React from "react";
import useMovieCast from "../Hooks/useMovieCast";
import { useSelector } from "react-redux";
import CastCard from "./CastCard";


const MoviesCastContainer = ({ movieId,title }) => {
  useMovieCast(movieId);
  const movieCast = useSelector((store) => store?.movies?.movieCast);
  console.log(movieCast,"movieCast");
  if(!movieCast) return;
  return(
    <>
    <div className="px-6 w-[100vw]   bg-black overflow-y-hidden">
      <h1 className="text-3xl text-white font-bold py-4">{title}</h1>
      <div className="flex  bg-black justify-center overflow-x-auto hidden-scrollbar">
        <div className="flex space-x-4 px-2">
      {
        movieCast?.map((cast)=>{
          console.log("cc",cast)
          return(
            <CastCard   key={cast?.id} name={cast?.name} pofilepath={cast?.profile_path}  />
          )
        })
      }
      </div>
      </div>
      </div>
      
    </>
  );
};

export default MoviesCastContainer;
