import React from "react";
import styled, { css } from "styled-components";
import cameraIcon from "../../assets/camera.svg";
import igLogo from "../../assets/iglogo.png";
import compassIcon from "../../assets/compass.svg";
import heartIcon from "../../assets/heart.svg";
import profileIcon from "../../assets/profile.png";

// styled-component defs below:
const SearchBarStyled = styled.div`
  max-height: 3.5em;
  padding: 15px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  @media (max-width: 600px) {
    flex-direction: column;
    max-height: 7em;
  }
`;
const ImgSearchBar = styled.img`
  max-height: 2em;

  ${props =>
    props.padRt &&
    css`
      padding-right: 1.6em;
    `}

  ${props =>
    props.padLt &&
    css`
      padding-left: 1.6rem;
    `}

  ${props =>
    props.brdrRt &&
    css`
      border-right: 1px solid gray;
    `}
`;

const SearchForm = styled.form`
  width: 25%;
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const SearchInput = styled.input`
  height: 20px;
  width: 100%;
  color: #9c9c9c;
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  font-family: FontAwesome, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  &::-webkit-input-placeholder {
    text-align: center;
  }

  &:focus {
    color: black;
    outline: none;
    box-shadow: 0px 0px 5px gray;
  }
`;
const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const logout = e => {
  localStorage.removeItem("instaCloneUser");
  window.location.reload();
};

function SearchBar(props) {
  return (
    <SearchBarStyled>
      <div className="logo-container">
        <ImgSearchBar
          className="logo-camera"
          src={cameraIcon}
          alt=""
          padRt
          brdrRt
        />
        <ImgSearchBar className="logo-logo" src={igLogo} alt="" padLt />
      </div>
      <SearchForm
        className="search-form"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <SearchInput
          type="text"
          className="search-form-input"
          placeholder="&#xf002; Search"
          name="searchText"
          onChange={e => props.handleSearchInput(e)}
          value={props.searchText}
          autoComplete="off"
        />
      </SearchForm>
      <FlexSpaceBetween className="prefs-icons">
        <ImgSearchBar className="prefs-compass" src={compassIcon} alt="" />
        <ImgSearchBar className="prefs-heart" src={heartIcon} alt="" />
        <ImgSearchBar
          className="prefs-profile"
          src={profileIcon}
          onClick={logout}
          alt="Log Out"
        />
      </FlexSpaceBetween>
    </SearchBarStyled>
  );
}

export default SearchBar;
