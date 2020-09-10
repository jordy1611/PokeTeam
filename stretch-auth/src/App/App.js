import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Login from '../Login/Login'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
const firebase = require('firebase');
const firebaseui = require('firebaseui');
var firebaseConfig = {
  apiKey: "AIzaSyAgXadHK5sriJvfnzUufzuwyhXBEPExLAg",
  authDomain: "turing-stretch-auth.firebaseapp.com",
  databaseURL: "https://turing-stretch-auth.firebaseio.com",
  projectId: "turing-stretch-auth",
  storageBucket: "turing-stretch-auth.appspot.com",
  messagingSenderId: "515130942385",
  appId: "1:515130942385:web:082ea0c7e8c0371b985390",
  measurementId: "G-4WMS8BCDBQ"
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}
ui.start('#firebaseui-auth-container', uiConfig)

// home route should be form-team

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {}
    }
  }

  render() {
    return (
      <Router>
        <main className="App">
        <Header
        />
        <Route
          exact path='/'
          render={() => {
            return(
              <CardContainer
              isCurrentUser={this.state.currentUser !== 'no user'}
              />
            )
          }}
        />
        <Route
        exact path='/login'
        render={() => {
          return(
            <Login
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
