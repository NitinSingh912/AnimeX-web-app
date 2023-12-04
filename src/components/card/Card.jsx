import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
const Card = ({ anime }) => {
  return (
    <div className="card-css">
  
      <Link to={`/anime/${anime.mal_id}`}>
        <img src={`${anime.images.jpg.image_url}`} alt="poster" />
      </Link>
    </div>
  );
};

export default Card;
