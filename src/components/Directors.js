import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => (
        <div key={i}>
          <h3>{director.name}</h3>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre,i)=> (
            <li key={i}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
