import React, { useRef } from "react";
import { lang } from "./../utils/languageConstants";
import { useSelector } from "react-redux";
import { openai } from "../utils/openAI";

const SearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const gptQuery =
    "Act as a Movie/Series recommendation system and suggest some movies for the query" +
    searchText?.current?.value +
    ". only give 5 names of it, comma separated like the example given ahead. Example Results: shogun,solo leveling,dune,attack on titan,x-men";

  const handleSearch = async () => {
    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(data.choices);
  };

  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className=" w-1/2 grid bg-gradient-to-t from-black grid-cols-12 rounded-xl"
        onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="py-2 px-4 m-4 col-span-9 rounded-lg bg-[#333] text-white"
          placeholder={lang[selectedLang].searchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 text-white uppercase font-bold bg-gradient-to-t  from-[#e50914] rounded-lg"
          onClick={handleSearch}>
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
