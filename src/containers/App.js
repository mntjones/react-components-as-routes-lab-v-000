import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route path="/" render={Home} />
        <Route exact path="/movies" render={About} />
        <Route exact path="/directors" render={Login} />
        <Route exact path="/actors" render={Actors} />
      </React.Fragment>
    </Router>
  );
};

export default App
