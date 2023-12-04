import React from "react";
import { useContext } from "react";
import contextApi from "../../context/contextapi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./homepage.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import BestReviews from "../BestReviewsPage/BestReviews";

const HomePage = () => {
  const topReviewAnimes = useContext(contextApi).topReviewAnimes;

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {topReviewAnimes.map((item, index) => {
            return (
              <Link key={index} to={`/anime/${item.mal_id}`}>
                <img src={`${item.trailer.images.maximum_image_url}`} alt="" />
                <div className="anime-details-css">
                  <h1>{item.titles[0].title}</h1>
                  <div>
                    <div>{item.aired.string}</div>
                    <div>
                      <div>
                        {item.score}
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
      <div className="toprated-css">
        <h1>TOP RATED</h1>
        <BestReviews />
      </div>
    </>
  );
};

export default HomePage;
