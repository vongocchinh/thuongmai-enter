import React from "react";
import SearchIcon from "@material-ui/icons/Search";
const Search = () => {
  return (
    <>
      <form className="header-search">
        <input
          type="text"
          className="input-text"
          placeholder="Search for Products"
        />
        <button type="submit" className="input-submit" value="search">
          <SearchIcon className="SearchIcon" />
        </button>
      </form>
    </>
  );
};

export default Search;
