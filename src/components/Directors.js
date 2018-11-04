import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Director's Page</h1>
      {movies.map((movie, i) => (
        <div key={i}>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time}</p>
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
