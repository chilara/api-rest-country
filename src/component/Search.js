import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";

function Search() {
  const { darkMode } = useSelector((state) => state.darkModeReducer);
  return (
    <div className={darkMode ? "searchInputDarkMode" : "searchInput"}>
      <BiSearchAlt2 size={24} />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
}

export default Search;
