import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies:
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Actors;
