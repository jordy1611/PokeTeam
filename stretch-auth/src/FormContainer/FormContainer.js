import React, { Component } from 'react';
import PokeForm from '../PokeForm/PokeForm'
import { Link } from 'react-router-dom'
import './FormContainer.css'


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      slot1: {},
      slot2: {},
      slot3: {},
      slot4: {},
      slot5: {},
      slot6: {}
    }

    this.showPokemon = this.showPokemon.bind(this);
  }

  showPokemon(selectedPokemon, pokeName, slot) {
    const foundPokemon = this.props.allPokemon.find(pokemon => {
      return pokemon.name === selectedPokemon || pokemon.id === selectedPokemon
    })
    if (foundPokemon) {
      this.setState({[slot]: {pokemon: foundPokemon.name.toLowerCase(), sprite: foundPokemon.sprite, name: pokeName}})
    }
  }

  render() {
    return (
      <section className='form-container'>

        <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
        <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot2"}/>
        <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot3"}/>
        <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot4"}/>
        <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot5"}/>
        <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot6"}/>
      </section>
    )
  }
}
export default FormContainer

// {(this.state.slot1.pokemon &&
//   <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
// ) ||
//
// }
