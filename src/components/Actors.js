import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      
      {actors.map((actor, i) => (
        <div key={i}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
            <ul>
              {actors.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
