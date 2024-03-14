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
    <div>
      <Header />
      <div id="searchbar">
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="container1">
        <div className="savedRecipie">Recipe 1</div>
        <div className="savedRecipie">Recipe 2</div>
        <div className="savedRecipie">Recipe 3</div>
        <div className="savedRecipie">Recipe 4</div>
      </div>
      <div className="profilecontainer">
        <h1>My Profile</h1>
        <img id="profile-pic" className="image" src={selectedImage ? `/images/${selectedImage}` : 'https://i.ibb.co/bRLCM0m/200x200-image.gif'} alt="image holder" />
        <label htmlFor="input-file">Update Image</label>
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
  );
};

export default Profilepage;