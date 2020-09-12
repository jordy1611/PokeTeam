import React, { Component } from 'react';
import PokeForm from '../PokeForm/PokeForm'
import PokeCard from '../PokeCard/PokeCard'
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
      return pokemon.name === selectedPokemon.toLowerCase() || pokemon.id === Number(selectedPokemon)
    })
    if (foundPokemon) {
      const caughtPokemon = {pokemon: foundPokemon.name, sprite: foundPokemon.sprite, name: pokeName};
      this.props.savePokemonToUser(caughtPokemon, slot);
      this.setState({[slot]: caughtPokemon});
    }
  }

  showPokeSprite(selectedPokemon, pokeName, slot) {
    const foundPokemon = this.props.allPokemon.find(pokemon => {
      return pokemon.name === selectedPokemon.toLowerCase() || pokemon.id === Number(selectedPokemon)
    })
  }

  render() {
    return (
      <section className='form-container'>
        {(this.state.slot1.pokemon &&
          <img className='poke-sprite' src={this.state.slot1.sprite} alt={`${this.state.slot1.pokemon} sprite`}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
        }
        {(this.state.slot2.pokemon &&
          <img className='poke-sprite' src={this.state.slot2.sprite} alt={`${this.state.slot2.pokemon} sprite`}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot2"}/>
        }
        {(this.state.slot3.pokemon &&
          <img className='poke-sprite' src={this.state.slot3.sprite} alt={`${this.state.slot3.pokemon} sprite`}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot3"}/>
        }
        {(this.state.slot4.pokemon &&
          <img className='poke-sprite' src={this.state.slot4.sprite} alt={`${this.state.slot4.pokemon} sprite`}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot4"}/>
        }
        {(this.state.slot5.pokemon &&
          <img className='poke-sprite' src={this.state.slot5.sprite} alt={`${this.state.slot5.pokemon} sprite`}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot5"}/>
        }
        {(this.state.slot6.pokemon &&
          <img className='poke-sprite' src={this.state.slot6.sprite} alt={`${this.state.slot6.pokemon} sprite`}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot6"}/>
        }
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
