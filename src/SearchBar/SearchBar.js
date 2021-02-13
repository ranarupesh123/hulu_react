import { Button } from "@material-ui/core";
import React, { useState } from "react";
import request from "../request";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

function SearchBar({ setSelectedOption }) {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedOption(request.search + encodeURIComponent(searchInput));
  };
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          placeholder="Enter movie name"
          className="searchbar__input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="searchbar__button"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
