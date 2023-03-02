import React from "react";
import { FaSearch } from "react-icons/fa";

import "./SongsList.css";

function SearchBar({ setSearch }) {
  return (
    <div className="search">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Filter "
        className="search-input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
