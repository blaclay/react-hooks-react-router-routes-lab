import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <ul className="Directors">
      {directors.map((director, i) => (
        <div key={i}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  </div>;
}

export default Directors;
