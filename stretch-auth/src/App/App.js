import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Login from '../Login/Login'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import FormContainer from '../FormContainer/FormContainer'
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

// var firebaseConfig = {
//   apiKey: "AIzaSyAgXadHK5sriJvfnzUufzuwyhXBEPExLAg",
//   authDomain: "turing-stretch-auth.firebaseapp.com",
//   databaseURL: "https://turing-stretch-auth.firebaseio.com",
//   projectId: "turing-stretch-auth",
//   storageBucket: "turing-stretch-auth.appspot.com",
//   messagingSenderId: "515130942385",
//   appId: "1:515130942385:web:082ea0c7e8c0371b985390",
//   measurementId: "G-4WMS8BCDBQ"
// }
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
// //     uiShown: function() {
// //       // The widget is rendered.
// //       // Hide the loader.
// //       document.getElementById('loader').style.display = 'none';
// //     }
// //   },
// //   signInFlow: 'popup',
// //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
// //   signInOptions: [
// //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// //     firebase.auth.EmailAuthProvider.PROVIDER_ID
// //   ]
// // }
// //
// // ui.start('#firebaseui-auth-container', uiConfig)
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     // List of OAuth providers supported.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//
//   ]
// });
// // home route should be form-team

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'no user'
      pokemon: []
    }
  }

  componentDidMount() {
    this.getAllPokemon();

  }

  async getAllPokemon() {
    const pokemon = JSON.parse(localStorage.getItem("allPokemon"));
    if (!pokemon) {
      let pokemonArray = [];
      for (let i = 0; i < 893; i++) {
        const whosThatPokemon = await this.getSinglePokemonData((i+1).toString());
        pokemonArray.push(whosThatPokemon);
        console.log(i);
      }
      console.log(pokemonArray);
      this.setState({pokemon: pokemonArray});
      const newPokemonArray = pokemonArray.map(pokemon => {
        return {
          name: pokemon.name,
          id: pokemon.id,
          sprite: pokemon.sprites["front_default"],
          types: pokemon.types
        }
      })
      localStorage.setItem('allPokemon', JSON.stringify(newPokemonArray));
      this.setState({pokemon: newPokemonArray});
    } else {
      this.setState({pokemon: pokemon});
    }

    let firebase = require('firebase');
    const firebaseui = require('firebaseui');

  }

  getSinglePokemonData(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .catch(error => console.log(error));
  }
  //  async getSinglePokemonData(id) {
  //   try {
  //     const newPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  //     const pokemon = await newPokemon.json();
  //     return pokemon;
  //   }
  //   catch(error) {
  //     console.log(error);
  //   }
  // }

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
              bulbasaur={this.state.pokemon[0]}
              />
            )
          }}
        />
        <Route
          exact path ='/login'
          render={() => {
            return (
              <Login />
            )
          }}
         />
        <Route
        exact path='/poke-forms'
        render={() => {
          return (
            <FormContainer/>
          )
        }}
        />
        </main>
      </Router>
    );
  }
}

export default App;
