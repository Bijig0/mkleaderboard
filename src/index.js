import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Brazil,LANorth,LASouth,ME,Mexico,NAEast,NAWest,EUEast,EUWest,OCE} from './All Countries/AllCountries';
import reportWebVitals from './reportWebVitals';
import Banner,{PosNameVal} from './Components/Navbar'
import LinkNavbar from './Components/ListOfTourneyNavbar'
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Banner/>
    <PosNameVal/>
    <Switch>
    <Route exact path ='/'>
     <LinkNavbar/>
      <OCE/>
    </Route>
    <Route exact path ='/Brazil'>
      <Brazil/>
    </Route>
    <Route exact path ='/EUEast'>
      <EUEast/>
    </Route>
    <Route exact path ='/EUWest'>
      <EUWest/>
    </Route>
    <Route exact path ='/LANorth'>
      <LANorth/>
    </Route>
    <Route exact path ='/LASouth'>
      <LASouth/>
    </Route>
    <Route exact path ='/ME'>
      <ME/>
    </Route>
    <Route exact path ='/Mexico'>
      <Mexico/>
    </Route>
    <Route exact path ='/NAWest'>
      <NAWest/>
    </Route>
    <Route exact path ='/NAEast'>
      <NAEast/>
    </Route>
    </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
