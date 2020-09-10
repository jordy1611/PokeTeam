import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

// home route should be form-team

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <main className="App">
        <Header
        />
        <Route
          exact path ='/'
          render={() => {
            return(
              <CardContainer
              />
            )
          }}
        />
        </main>
      </Router>
    );
  }
}

export default App;
