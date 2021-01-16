import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './All Countries/Brazil';
import reportWebVitals from './reportWebVitals';
import Banner from './Components/Navbar'
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Banner/>
    <Route exact path ='/'>
      <App/>
    </Route>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
