import React from "react";
import { useContext } from "react";
import contextApi from "../../context/contextapi";
import Card from "../card/Card";
import "./bestReviews.css"
const BestReviews = () => {
  const bestReviewsAnime = useContext(contextApi).topReviewAnimes;

  return (
    <div className="bestReviews-css">
      {bestReviewsAnime.map((item, index) => {
        return <Card key={index} anime={item} />;
      })}
    </div>
  );
};

export default BestReviews;
