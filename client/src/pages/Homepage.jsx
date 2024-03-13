import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; 
import "../pagescss/homepage.css"; 
import Header from "../components/header/header"

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
      <p>Welcome to Flavorly, your ultimate destination for culinary inspiration! Explore a vast collection of delicious recipes, curated with care to satisfy every palate. Whether you're a seasoned chef or a novice cook, Flavorly offers something for everyone. From quick and easy weekday meals to elaborate gourmet dishes, embark on a culinary journey like no other. Start exploring now and let your taste buds guide you to new culinary adventures!</p>
      <SearchBar />
    </div>
  );
};

export default Homepage;