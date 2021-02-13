import React, { useState } from "react";
import Header from "../Header/Header";
import Result from "../Result/Result";
import request from "../request.js";
import SearchBar from "../SearchBar/SearchBar";

function Search() {
  const [selectedOption, setSelectedOption] = useState(
    request.fetchActionMovies
  );
  return (
    <div className="search">
      <Header activeIcon={"Search"} />
      <SearchBar setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default Search;
