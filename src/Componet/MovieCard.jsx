import React from "react";
import { IMG_CDN } from "../Utils/constant";

const MovieCard = ({ posterPath,name }) => {
  return (
  
    <div className="w-48 h-48 relative overflow-hidden rounded-md shadow-md">
      <img
        alt="castPhoto"
        src={IMG_CDN + posterPath}
        className="w-full h-full object-cover"
        style={{ filter: "brightness(0.8)" }}
      />
       <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button className="bg-red-700 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors duration-300">
          Watch Now
        </button>
        </div>
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white p-2">
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default MovieCard;
