import React from "react";
import "./Nav.css";
import requests from "../request";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h4 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchRomanticMovies)}>
        Romance
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchMysteryMovies)}>
        Mystery
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchSciFiMovies)}>
        Sci-fi
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchWesternMovies)}>
        Western
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchAnimationMovies)}>
        Animation
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchTVMovies)}>
        TV Movies
      </h4>
    </div>
  );
}

export default Nav;
