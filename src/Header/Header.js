import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";

import "./Header.css";

function Header({ activeIcon }) {
  return (
    <div class="header">
      <div className="header__icons">
        <Link to="/" className="header__link">
          <div
            className={`header__icon ${
              activeIcon === "Home"
            }?header__icon--active:null`}
          >
            <HomeIcon />
            <p>Home</p>
          </div>
        </Link>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <Link to="/search" className="header__link">
          <div
            className={`header__icon ${
              activeIcon === "Search"
            }?header__icon--active:null`}
          >
            <SearchIcon />
            <p>Search</p>
          </div>
        </Link>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>

      <Link to="/">
        <img
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680g"
          alt="logo"
          className="header__logo"
        />
      </Link>
    </div>
  );
}

export default Header;
