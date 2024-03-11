import React from 'react';
import { IMG_CDN } from '../Utils/constant';


const CastCard = ({pofilepath,name}) => {
  console.log(pofilepath, "profilePath");
  return (
    <div className="w-48 h-48 relative overflow-hidden rounded-md shadow-md">
      <img
        alt="castPhoto"
        src={IMG_CDN + pofilepath}
        className="w-full h-full object-cover"
        style={{ filter: "brightness(0.8)" }}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white p-2">
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default CastCard;
