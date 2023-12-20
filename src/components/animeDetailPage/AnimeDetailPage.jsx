import React from "react";
import "./animeDetailPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { Audio } from 'react-loader-spinner'
const AnimeDetailPage = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  let randomScore = Math.round(Math.random() * 5 + 4);

  useEffect(() => {
    async function getAnimeDetails() {
      let { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );

      setAnimeDetails(data.data);
    }
    getAnimeDetails();
  }, [id]);

  return (
    <>
      {animeDetails === null ? (
        <div className="animedetail-loader">

       <Audio
       height="80"
       width="80"
       radius="9"
       color="green"
       ariaLabel="loading"
       wrapperStyle
       wrapperClass
       />
       </div>
      ) : (
        <div className="anime-detail-css">
          <div className="content-section">
            <div className="img-section">
              <img
                src={`${animeDetails.trailer.images.maximum_image_url}`}
                alt="poster"
              />
            </div>
            <div className="anime-descriptions">
              <h1>{animeDetails.titles[0].title}</h1>
              <div>
                <h2>
                  Average Ratings :{" "}
                  {animeDetails.score ? animeDetails.score : randomScore} <span><FaStar/></span>
                </h2>
                <h3>Total Episodes : {animeDetails.episodes}</h3>
              </div>
              <p>{animeDetails.synopsis}</p>
              <h5>
                Genre :{" "}
                {animeDetails.genres.map((item, index) => (
                  <button key={index}>{item.name}</button>
                ))}
              </h5>
              <h6>
                Studio :{" "}
                {animeDetails.studios.map((item, index) => (
                  <button key={index}>{item.name}</button>
                ))}
              </h6>
              <h4>
                Watch Trailer :{" "}
                <iframe
                  src={`${animeDetails.trailer.embed_url}`}
                  frameBorder="0"
                ></iframe>
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeDetailPage;
