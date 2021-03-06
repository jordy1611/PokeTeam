import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import FormContainer from "../FormContainer/FormContainer";
import "./App.css";
import { secrets } from "../secrets";
import {getSinglePokemonData} from '../apiCalls'
import bulbaIcon from "../assets/bulbaIcon.png"
import charIcon from "../assets/charIcon.png"
import squirtleIcon from "../assets/squirtleIcon.png"

const firebase = require("firebase");
// const firebaseui = require("firebaseui");

firebase.initializeApp(secrets);

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
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
    this.updateUserPokeTeam = this.updateUserPokeTeam.bind(this);
    this.pullUserTeam = this.pullUserTeam.bind(this);
    this.getSinglePokemonData = getSinglePokemonData.bind(this)
  }

  componentDidMount() {
    this.getAllPokemon();
    firebase.auth().onAuthStateChanged((currentUser) => {
      if(currentUser) {
        this.setState({
          isSignedIn: !!currentUser,
          currentUser: { name: currentUser.displayName, img: currentUser.photoURL },
        });
        this.pullUserTeam();
      }
    });
  }

  async getAllPokemon() {
    const pokemon = JSON.parse(localStorage.getItem("allPokemon"));
    if (!pokemon) {
      let pokemonArray = [];
      for (let i = 0; i < 806; i++) {
        const whosThatPokemon = await getSinglePokemonData(
          (i + 1).toString()
        );
        pokemonArray.push(whosThatPokemon);
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

  pullUserTeam() {
    let teamArray = [];
    for (let i = 1; i <= 6; i++) {
      const pokemon = JSON.parse(localStorage.getItem(`${this.state.currentUser.name} slot${i}`))
      const pokeSlot = pokemon ? pokemon : {};
      teamArray.push(pokeSlot);
    }
    const teamObject = teamArray.reduce((team, member, index) => {
      team[`slot${index + 1}`] = member;
      return team;
    }, {})
    this.setState({userPokeTeam: teamObject});
  }

  logOutCurrentUser = () => {
    firebase.auth().signOut()
    this.setState({currentUser:{}})
  }

  savePokemonToUser(pokemon, slot) {
    localStorage.setItem(`${this.state.currentUser.name} ${slot}`, JSON.stringify(pokemon))
  }

  updateUserPokeTeam = (userTeam) => {
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
                  currentUser={this.state.currentUser}
                  userPokeTeam={this.state.userPokeTeam}
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
              return <FormContainer currentUser={this.state.currentUser.name} allPokemon={this.state.pokemon} userPokeTeam={this.state.userPokeTeam} savePokemonToUser={this.savePokemonToUser} updateUserPokeTeam={this.updateUserPokeTeam}/>;
            }}
          />
        </main>
      </Router>
    );
  }
}

export default App;
