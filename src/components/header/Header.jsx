import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { memo } from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="categories">
        <Link to="/">AnimeX</Link>
        <Link to="/anime/popular">Popular</Link>
        <Link to="/anime/bestreviews">Best reviews</Link>
        <Link to="/anime/upcoming">Upcoming</Link>
      </div>

      <div className="login">Login</div>
    </div>
  );
};

export default memo(Header);
