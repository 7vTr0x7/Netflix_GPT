import React from "react";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import { BACKGROUND_IMAGE } from "./../utils/constant";

const Search = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
      <SearchBar />
      <SearchSuggestions />
    </div>
  );
};

export default Search;
