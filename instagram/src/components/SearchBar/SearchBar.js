import React from 'react';
import cameraIcon from '../../assets/camera.svg';
import igLogo from '../../assets/iglogo.png';
import compassIcon from '../../assets/compass.svg';
import heartIcon from '../../assets/heart.svg';
import profileIcon from '../../assets/profile.png';

import './SearchBar.css';

function SearchBar(props) {

  return (
    <div className="search-bar">
      <div className="logo-container">
        <img className="logo-camera" src={cameraIcon} alt="" />
        <img className="logo-logo" src={igLogo} alt="" />
      </div>
      <form className="search-form">
        <input type="text" placeholder="&#x1F50D; Search"/>
      </form>
      <div className="prefs-icons">
        <img className="prefs-compass" src={compassIcon} alt="" />
        <img className="prefs-heart" src={heartIcon} alt="" />
        <img className="prefs-profile" src={profileIcon} alt="" />
      </div>

    </div>
  );
}

export default SearchBar;