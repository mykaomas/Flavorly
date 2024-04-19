import React, { useState } from 'react';
import Header from '../components/header/header';
import '../components/header/css/Header.css';
import '../pagescss/profile.css';


const Profilepage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <>
      <Header />
      <div id="searchbar">
        <form>
          <input id='search-input' type="text" name="name" />
          <button className='search-btn'>Search</button>
        </form>
      </div>

      <div className='container'>
        <div className="favorites">
          <div className="saved-recipe">Recipe 1</div>
          <div className="saved-recipe">Recipe 2</div>
          <div className="saved-recipe">Recipe 3</div>
        </div>

        <div className="profile">
          <h1>My Profile</h1>
          <img id="profile-pic" className="image" src={selectedImage ? `/images/${selectedImage}` : 'https://i.ibb.co/bRLCM0m/200x200-image.gif'} alt="image holder" />
          <p>Update Image</p>
          <div id="profile-form">
            {isButtonVisible && (
              <button id="pfpupdate" onClick={hideBtn}>Update Profile</button>
            )}
            {showOptions && (
              <div className='profile-icons'>
                <button onClick={handleOption1Click}>Panda</button>
                <button onClick={handleOption2Click}>Dog</button>
                <button onClick={handleOption3Click}>Cat</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilepage;