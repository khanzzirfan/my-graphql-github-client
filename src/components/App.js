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
          <div className="container justify-content-center">
              <div className="row">
                <div className="bg-dark text-white">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">React app with graphql and apollo client</h1>
                </div>
              </div>
              
          </div>
        </nav>

        <header className="bg-dark text-white mtop-10 justify-content-center">
          <div className="container">
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
