import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App() extends Component {
  constructor() {
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
