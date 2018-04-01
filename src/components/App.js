import React, { Component } from 'react';
import logo from '../logo.svg';
import graphQLSvg from "../graphQL.svg";
import apolloSvg from "../apollo.svg";

import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Search from "../components/Search";
import HeaderComponent from "../Header/HeaderComponent";
import RepositoriesComponent from "../Repositories/RepositoriesComponent";
import OrganizationComponent from "../Organization/OrganizationComponent";
import ProfileComponent from "../Profile/ProfileComponent";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isProfileSelected: true,
    }

  }

  onChange = (val) => {
    this.setState({ searchText: val });
  }

  handleOnProfileClicked = (val) => {
    this.setState({ isProfileSelected: true });
  }

  handleOnOrgClicked = (val) => {
    this.setState({ isProfileSelected: false });
  }

  handleOnSearch = (val) => {
    this.setState({ searchText: val });
  }

  render() {
    const { searchText, isProfileSelected } = this.state;
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container justify-content-center">
            <div className="row">
              <div className="bg-dark text-white">
                <img src={logo} className="App-logo " alt="logo" />
                <img src={graphQLSvg} className="App-logo m1" alt="logo" />
                <img src={apolloSvg} className="App-logo m1" alt="logo" />

                <h1 className="App-title">React app with graphql and apollo client</h1>
              </div>
            </div>

          </div>
        </nav>

        <header className="bg-dark text-white mtop-10 justify-content-center pb-3">
          <div className="container">
            <HeaderComponent
              isProfileSelected={isProfileSelected}
              onProfileClicked={this.handleOnProfileClicked}
              onOrganizationClicked={this.handleOnOrgClicked}
              onSearchChange={this.handleOnSearch}
              searchText={this.state.searchText}
            />
          </div>
        </header>

        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={() => 
            <div>
              {
                !!(isProfileSelected) ? <ProfileComponent /> :
                  <OrganizationComponent 
                    organization = {searchText}
                  />
              }
              
            </div>}
            />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
