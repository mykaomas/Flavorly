import React, { useState } from "react";
import "../pagescss/searchbar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
