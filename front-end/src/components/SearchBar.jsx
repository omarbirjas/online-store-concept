import React from "react";
import { SearchButton } from "./HeaderButtons";

export const SearchBar = () => {
  return (
    <div className="search-bar-parent">
      <input
        className="search-bar-primary"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      ></input>
      <SearchButton
        title="search"
        clicked={() => {
          console.log("searcehes");
        }}
      ></SearchButton>
    </div>
  );
};
