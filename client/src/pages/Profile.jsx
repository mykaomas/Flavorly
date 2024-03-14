import React, { useState } from 'react';
import Header from '../components/header/header';
import '../components/header/css/Header.css';
import '../pagescss/profile.css';

import Favorites from '../components/Favorites'
import { QUERY_FAVORITE_RECIPES } from "../utils/queries"
import { useQuery } from "@apollo/client"
import AuthService from '../utils/auth'

const Profilepage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchInput, setSearchInput] = useState('')
  const [newRecipes, setNewRecipes] = useState([])

  let recipes
  const token = AuthService.getUser()
  const { loading, data } = useQuery(QUERY_FAVORITE_RECIPES, {
    variables: {userId: token.data._id}
  })

  if(!loading) {
    recipes = data?.user.favorites
  }

  const hideBtn = () => {
    setIsButtonVisible(false);
    setShowOptions(true);
  };

  const handleOption1Click = () => {
    setSelectedImage('panda_icon.png');
  };
  const handleOption2Click = () => {
    setSelectedImage('dog_icon.jpg');
  };
  const handleOption3Click = () => {
    setSelectedImage('cat_icon.jpg');
  };

  const filterSearch = () => {
    recipes = recipes.filter(function (recipe) {
      if (searchInput === '') {
        return recipe
      } else if (recipe.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return recipe
      }
    })
    setNewRecipes(recipes)
  }

  return (
    <div>
      <Header />
      <div id="searchbar">
        <input id="search-input" type="text" onChange={(e) => setSearchInput(e.target.value)}/>
        <button className="search-btn" onClick={filterSearch}>Search</button>
      </div>
      <div className='profile-content'>
        <div className="saved-recipes">
          {loading ? (
              <div>Loading...</div>
            ) : (
              <Favorites recipes={recipes} newRecipes={newRecipes}/>
          )}
        </div>
        <div className="profilecontainer">
          <h1>My Profile</h1>
          <img id="profile-pic" className="image" src={selectedImage ? `/images/${selectedImage}` : 'https://i.ibb.co/bRLCM0m/200x200-image.gif'} alt="image holder" />
          <p>Update Image</p>
          <div id="profileForm">
            {isButtonVisible && (
              <button id="pfpupdate" onClick={hideBtn}>Update Profile</button>
            )}
            {showOptions && (
              <div>
                <button onClick={handleOption1Click}>Panda</button>
                <button onClick={handleOption2Click}>Dog</button>
                <button onClick={handleOption3Click}>Cat</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;