import React from "react";
import { lang } from "./../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[7%] flex justify-center">
      <form className=" w-1/2 grid bg-gradient-to-t from-black grid-cols-12 rounded-xl">
        <input
          type="text"
          className="py-2 px-4 m-4 col-span-9 rounded-lg bg-[#333] text-white"
          placeholder={lang[selectedLang].searchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 text-white uppercase font-bold bg-gradient-to-t  from-[#e50914] rounded-lg">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
