import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import "../pagescss/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header>
        <h1 className="website-name">Flavorly</h1>
        <div className="auth-links">
          <Link to="/signup" className="auth-link">Signup</Link>
          <Link to="/login" className="auth-link">Login</Link>
        </div>
      </header>
      <div className="background-image"></div>
      <div className="search-bar-wrapper">
        <SearchBar />
      </div>
    </div>
  );
};

export default Homepage;