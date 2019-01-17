import React from 'react';
import cameraIcon from '../../assets/camera.svg';
import igLogo from '../../assets/iglogo.png';
import compassIcon from '../../assets/compass.svg';
import heartIcon from '../../assets/heart.svg';
import profileIcon from '../../assets/profile.png';

import './SearchBar.css';

const logout = (e) => {
  localStorage.removeItem('instaCloneUser');
  window.location.reload();
}

function SearchBar(props) {

  return (
    <div className="search-bar">
      <div className="logo-container">
        <img className="logo-camera" src={cameraIcon} alt="" />
        <img className="logo-logo" src={igLogo} alt="" />
      </div>
      <form 
        className="search-form" 
        onSubmit={(e)=> {e.preventDefault()}}>
        <input 
          type="text" 
          className="search-form-input"
          placeholder="&#xf002; Search"
          name="searchText"
          onChange={(e) => props.handleSearchInput(e)}
          value={props.searchText}
          autoComplete="off"
        />
      </form>
      <div className="prefs-icons">
        <img className="prefs-compass" src={compassIcon} alt="" />
        <img className="prefs-heart" src={heartIcon} alt="" />
        <img className="prefs-profile" src={profileIcon} onClick={logout} alt="Log Out" />
      </div>

    </div>
  );
}

export default SearchBar;