import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Result.css";
import axios from "axios";
import FlipMove from "react-flip-move";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard jey={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Result;