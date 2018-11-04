import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink></li>
        <li><NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Movies</NavLink></li>
        <li><NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Directors</NavLink></li>
       <li><NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Actors</NavLink></li>
    </ul>
  </div>);
};

export default NavBar;
