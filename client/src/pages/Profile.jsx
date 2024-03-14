import List from '../components/List'
import AuthService from '../utils/auth'
import { useQuery } from "@apollo/client"
import { QUERY_RECIPES, QUERY_FAVORITE_RECIPES } from "../utils/queries"

import React, { useState } from 'react';
import Header from '../components/header/header';
import '../components/header/css/Header.css';
import '../pagescss/profile.css';


const Profilepage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [searchInput, setSearchInput] = useState('')

  // var { loading, data } = useQuery(QUERY_RECIPES)
  let recipes
  
  const token = AuthService.getUser()
  let { loading, data } = useQuery(QUERY_FAVORITE_RECIPES, {
    variables: {userId: token.data._id}
  })

  let favorites = data?.favoriteRecipes.favorites

  if (!loading) {
    if (!favorites) {
      recipes = []
    } else {
      favorites = favorites.filter(function (favorite) {
      return favorite.recipeId
    })
  
    recipes = recipes.filter(function (recipe) {
      for ( let i = 0; i < favorites.length; i++) {
        if (recipe._id == favorites[i].recipeId) {
          return recipe
        }
      }
    })
  }
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
    console.log(recipes)
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
              <List recipes={recipes} newRecipes={newRecipes} />
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