import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Search from "../components/Search";
import HeaderComponent from "../Header/HeaderComponent";
import RepositoriesComponent from "../Repositories/RepositoriesComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="bg-dark text-white mt-5">
          <div className="container text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React app with graphql and apollo client</h1>
            <HeaderComponent />
          </div>
        </header>

        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={RepositoriesComponent} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
