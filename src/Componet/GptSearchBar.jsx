import React,{useRef} from "react";
import lang from "../Utils/languageContant";
import {openai} from "../Utils/openai"
import { useSelector } from "react-redux";


const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null)

  const handleGptSearchClick =  async () => {

    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });
  
  }
  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 rounded-lg"
         onSubmit={(e) => e.preventDefault()} // Corrected typo here
      >
        <input
        ref={searchText}
          type="text"
          className=" rounded-lg p-4 m-4 col-span-9"
          placeholder={lang[langkey].GptSearchplaceholder}
        />
        <button className="py-2 col-span-3 m-4 px-4 rounded-lg bg-red-800 text-white"
        onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
