import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoivesSuggestion from './GptMoivesSuggestion'
import { BG_IMG_NETFLIX } from "../Utils/constant";


const GptSearch = () => {
  return (
   <>
     <div className="absolute -z-10">
        <img src={BG_IMG_NETFLIX} />
      </div>
     <GptSearchBar/>
     <GptMoivesSuggestion/>
   </>
  )
}

export default GptSearch