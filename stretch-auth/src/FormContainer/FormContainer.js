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
    console.log(foundPokemon)
    if (foundPokemon) {
      this.setState({[slot]: {pokemon: foundPokemon.name, sprite: foundPokemon.sprite, name: pokeName}})
    }
  }

  render() {
    return (
      <section className='form-container'>
        {(this.state.slot1.pokemon &&
          <PokeCard bulbasaur={this.state.slot1}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
        }
        {(this.state.slot2.pokemon &&
          <PokeCard bulbasaur={this.state.slot2}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot2"}/>
        }
        {(this.state.slot3.pokemon &&
          <PokeCard bulbasaur={this.state.slot3}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot3"}/>
        }
        {(this.state.slot4.pokemon &&
          <PokeCard bulbasaur={this.state.slot4}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot4"}/>
        }
        {(this.state.slot5.pokemon &&
          <PokeCard bulbasaur={this.state.slot5}/>
        ) ||
          <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot5"}/>
        }
        {(this.state.slot6.pokemon &&
          <PokeCard bulbasaur={this.state.slot6}/>
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
