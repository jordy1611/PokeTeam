import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Link, } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import FormContainer from "../FormContainer/FormContainer";
import "./App.css";
import { secrets } from "../secrets";
import bulbaIcon from "../assets/bulbaIcon.png"
import charIcon from "../assets/charIcon.png"
import squirtleIcon from "../assets/squirtleIcon.png"

const firebase = require("firebase");
// const firebaseui = require("firebaseui");

firebase.initializeApp(secrets);

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      pokemon: [],
      isSignedIn: false,
      userPokeTeam: {},
    };
    this.savePokemonToUser = this.savePokemonToUser.bind(this);
  }

  componentDidMount() {
    this.getAllPokemon();
    firebase.auth().onAuthStateChanged((currentUser) => {
      this.setState({
        isSignedIn: !!currentUser,
        currentUser: { name: currentUser.displayName, img: currentUser.photoURL },
      });

    });
  }

  async getAllPokemon() {
    const pokemon = JSON.parse(localStorage.getItem("allPokemon"));
    if (!pokemon) {
      let pokemonArray = [];
      for (let i = 0; i < 806; i++) {
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
  }

  getSinglePokemonData(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  logOutCurrentUser = () => {
    firebase.auth().signOut()
    this.setState({currentUser:{}})
  }

  savePokemonToUser(pokemon, slot) {
    localStorage.setItem(`${this.state.currentUser.displayName} ${slot}`, JSON.stringify(pokemon))
  }

  updateUserPokeTeam(userTeam) {
    this.setState({ userPokeTeam: userTeam })
  }

  render() {
    return (
      <Router>
        <main className="App">
          <Header
            currentUserName={this.state.currentUser.name}
            currentUserImg={this.state.currentUser.img}
            logOutCurrentUser={this.logOutCurrentUser}
          />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                {this.state.pokemon.length === 0 &&
                  <div className="loading-icons">
                    <img className="loading-icon" src={charIcon} alt="Charmander Icon"/>
                    <img className="loading-icon" src={squirtleIcon} alt="Squirtle Icon"/>
                    <img className="loading-icon" src={bulbaIcon} alt="Bulbasaur Icon"/>
                    <p className="loading-text">Catching All Pokemon...</p>
                  </div>
              }
                <CardContainer
                  isCurrentUser={this.state.currentUser !== "no user"}
                  pokemon={this.state.pokemon[0]}
                />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return (
                <Login uiConfig={uiConfig} firebaseAuth={firebase.auth()} userName={this.state.currentUser.name} />
              );
            }}
          />
          <Route
            exact
            path="/poke-forms"
            render={() => {
              return <FormContainer allPokemon={this.state.pokemon} savePokemonToUser={this.savePokemonToUser} updateUserPokeTeam={this.updateUserPokeTeam}/>;
            }}
          />
        </main>
      </Router>
    );
  }
}

export default App;
