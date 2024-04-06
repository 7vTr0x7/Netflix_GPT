import React from "react";

const SearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 grid bg-gradient-to-t from-black grid-cols-12 rounded-xl">
        <input
          type="text"
          className="py-2 px-4 m-4 col-span-9 rounded-lg bg-[#333] text-white"
          placeholder="What Would You Like To Watch Today?"
        />
        <button className="py-2 px-4 m-4 col-span-3 text-white bg-gradient-to-t uppercase font-bold from-[#e50914] rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
