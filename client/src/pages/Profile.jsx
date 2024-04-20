import Header from '../components/header/header';
import '../components/header/css/Header.css';
import '../pagescss/profile.css';

import { useState } from 'react';
import { useQuery } from "@apollo/client"
import { QUERY_USER } from "../utils/queries"

import Auth from '../utils/auth'
import List from '../components/List';

const Profilepage = () => {
  const email = Auth.getUser().data.email

  const { loading, data } = useQuery(QUERY_USER, { variables: { email } })
  let favorites = data?.user.favorites

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

      <div className='profile-container'>
        <div className="favorites">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className='profile-list'>
              <List recipes={favorites} page='profile'/>
            </div>
          )}
        </div>

        <div className="profile">
          <h1>My Profile</h1>
          <img id="profile-pic" className="image" src={selectedImage ? `/images/${selectedImage}` : 'https://i.ibb.co/bRLCM0m/200x200-image.gif'} alt="image holder" />
          <div id="profile-form">
            {isButtonVisible && (
              <button id="pfpupdate" onClick={hideBtn}>Update Picture</button>
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