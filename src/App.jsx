import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import axios from "axios";
import contextApi from "./context/contextapi";
import Popularpage from "./components/Popularpage/Popularpage";
import BestReviews from "./components/BestReviewsPage/BestReviews";
import UpcomingAnimes from "./components/UpcomingAnimes/UpcomingAnimes";
import Footer from "./components/footer/Footer";
import AnimeDetailPage from "./components/animeDetailPage/AnimeDetailPage";
function App() {
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [topReviewAnimes, setTopReviewAnimes] = useState([]);
  const [upcomingAnimes, setUpcomingAnimes] = useState([]);

  useEffect(() => {
    async function getPopularAnimes() {
      let { data } = await axios.get("https://api.jikan.moe/v4/top/anime");
      setPopularAnimes(data.data);
    }
    getPopularAnimes();
  }, []);
  useEffect(() => {
    async function getTopReviewsAnime() {
      let { data } = await axios.get("https://api.jikan.moe/v4/seasons/now");
      setTopReviewAnimes(data.data);
    }
    getTopReviewsAnime();
  }, []);
  useEffect(() => {
    async function getUpcomingAnime() {
      let { data } = await axios.get(
        "https://api.jikan.moe/v4/seasons/upcoming"
      );
      setUpcomingAnimes(data.data);
    }
    getUpcomingAnime();
  }, []);
  return (
    <>
      <contextApi.Provider
        value={{ popularAnimes, topReviewAnimes, upcomingAnimes }}
      >
        <Header />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/anime/:id" element={<AnimeDetailPage/>}></Route>
          <Route path="/anime/popular" element={<Popularpage />}></Route>
          <Route path="/anime/bestreviews" element={<BestReviews />}></Route>
          <Route path="/anime/upcoming" element={<UpcomingAnimes />}></Route>
          <Route path="/*" element={"error"}></Route>
        </Routes>
      </contextApi.Provider>
      <Footer/>
    </>
  );
}

export default App;
