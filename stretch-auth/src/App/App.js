import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Link, } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import FormContainer from "../FormContainer/FormContainer";
import "./App.css";
import { secrets } from "../secrets";

const firebase = require("firebase");
const firebaseui = require("firebaseui");

firebase.initializeApp(secrets);

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      pokemon: [],
      isSignedIn: false,
    };
  }

  componentDidMount() {
    this.getAllPokemon();
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isSignedIn: !!user,
        user: { name: user.displayName, img: user.photoURL },
      });
      console.log("user", user);
      console.log("this.state.user", this.state.user);
    });
  }

  async getAllPokemon() {
    const pokemon = JSON.parse(localStorage.getItem("allPokemon"));
    if (!pokemon) {
      let pokemonArray = [];
      for (let i = 0; i < 893; i++) {
        const whosThatPokemon = await this.getSinglePokemonData(
          (i + 1).toString()
        );
        pokemonArray.push(whosThatPokemon);
        console.log(i);
      }
      console.log(pokemonArray);
      this.setState({ pokemon: pokemonArray });
      const newPokemonArray = pokemonArray.map((pokemon) => {
        return {
          name: pokemon.name,
          id: pokemon.id,
          sprite: pokemon.sprites["front_default"],
          types: pokemon.types,
        };
      });
      localStorage.setItem("allPokemon", JSON.stringify(newPokemonArray));
      this.setState({ pokemon: newPokemonArray });
    } else {
      this.setState({ pokemon: pokemon });
    }

    // let firebase = require('firebase');
    // const firebaseui = require('firebaseui');
  }

  getSinglePokemonData(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  logOutUser = () => {
    firebase.auth().signOut()
    this.setState({user:{}})
  }

  render() {
    return (
      <Router>
        <main className="App">
          <Header userName={this.state.user.name} logOutUser={this.logOutUser}/>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <CardContainer
                  isCurrentUser={this.state.currentUser !== "no user"}
                  bulbasaur={this.state.pokemon[0]}
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return (
                <Login uiConfig={uiConfig} firebaseAuth={firebase.auth()} userName={this.state.user.name} />
              );
            }}
          />
          <Route
            exact
            path="/poke-forms"
            render={() => {
              return <FormContainer />;
            }}
          />
        </main>
      </Router>
    );
  }
}

export default App;
