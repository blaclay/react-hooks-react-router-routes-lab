import React from "react";
import { movies } from "../data";
import { v4 as uuid } from "uuid";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, i) => (
      <div key={i}>
        <h2>{movie.title}</h2>
        <h3>{movie.time} minutes</h3>
        <ul>
          {movie.genres.map((genre, j) => (
            <li key={j}>{genre}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Movies;
