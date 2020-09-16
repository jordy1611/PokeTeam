import React, { Component } from 'react';
import PokeForm from '../PokeForm/PokeForm';
import './FormContainer.css';
import PropTypes from 'prop-types';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      slot1: this.props.userPokeTeam.slot1 || {},
      slot2: this.props.userPokeTeam.slot2 || {},
      slot3: this.props.userPokeTeam.slot3 || {},
      slot4: this.props.userPokeTeam.slot4 || {},
      slot5: this.props.userPokeTeam.slot5 || {},
      slot6: this.props.userPokeTeam.slot6 || {},
      error: ""
    }

    this.showPokemon = this.showPokemon.bind(this);
  }

  showPokemon(selectedPokemon, pokeName, slot) {
    const foundPokemon = this.props.allPokemon.find(pokemon => {
      return pokemon.name === selectedPokemon.toLowerCase() || pokemon.id === Number(selectedPokemon)
    })
    if (foundPokemon) {
      const caughtPokemon = {pokemon: foundPokemon.name, sprite: foundPokemon.sprite, name: (pokeName !== '') ? pokeName : this.capitalize(foundPokemon.name), id: foundPokemon.id};
      this.props.savePokemonToUser(caughtPokemon, slot);
      this.setState({[slot]: caughtPokemon, error: ""}, () => this.updateUserPokeTeam());
    } else {
      this.setState({error: "Invalid Pokemon name or PokeDex number."})
    }
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  removePokemon(slot) {
    this.setState({ [slot] : {}}, () => {this.updateUserPokeTeam()})
    localStorage.removeItem(`${this.props.currentUser} ${slot}`);
  }

  updateUserPokeTeam() {
    const userPokemon = {
      slot1: this.state.slot1,
      slot2: this.state.slot2,
      slot3: this.state.slot3,
      slot4: this.state.slot4,
      slot5: this.state.slot5,
      slot6: this.state.slot6
     }
    this.props.updateUserPokeTeam(userPokemon)
  }

  render() {
    return (
      <div>
        <h3 className="error-message">{this.state.error}</h3>
        <section className='form-container'>
          {(this.state.slot1.pokemon &&
            <div className='poke-sprite-div'>
            <p className='poke-sprite-name'>{this.state.slot1.name}</p>
            <img className='poke-sprite' src={this.state.slot1.sprite} alt={`${this.state.slot1.pokemon} sprite`} onClick={() => this.removePokemon('slot1')}/>
            <p className='release-sprite-text'>Click To Release</p>
            </div>
          ) ||
            <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot1"}/>
          }
          {(this.state.slot2.pokemon &&
            <div className='poke-sprite-div'>
            <p className='poke-sprite-name'>{this.state.slot2.name}</p>
            <img className='poke-sprite' src={this.state.slot2.sprite} alt={`${this.state.slot2.pokemon} sprite`} onClick={() => this.removePokemon('slot2')}/>
            <p className='release-sprite-text'>Click To Release</p>
            </div>
          ) ||
            <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot2"}/>
          }
          {(this.state.slot3.pokemon &&
            <div className='poke-sprite-div'>
            <p className='poke-sprite-name'>{this.state.slot3.name}</p>
            <img className='poke-sprite' src={this.state.slot3.sprite} alt={`${this.state.slot3.pokemon} sprite`} onClick={() => this.removePokemon('slot3')}/>
            <p className='release-sprite-text'>Click To Release</p>
            </div>
          ) ||
            <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot3"}/>
          }
          {(this.state.slot4.pokemon &&
            <div className='poke-sprite-div'>
            <p className='poke-sprite-name'>{this.state.slot4.name}</p>
            <img className='poke-sprite' src={this.state.slot4.sprite} alt={`${this.state.slot4.pokemon} sprite`} onClick={() => this.removePokemon('slot4')}/>
            <p className='release-sprite-text'>Click To Release</p>
            </div>
          ) ||
            <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot4"}/>
          }
          {(this.state.slot5.pokemon &&
            <div className='poke-sprite-div'>
            <p className='poke-sprite-name'>{this.state.slot5.name}</p>
            <img className='poke-sprite' src={this.state.slot5.sprite} alt={`${this.state.slot5.pokemon} sprite`} onClick={() => this.removePokemon('slot5')}/>
            <p className='release-sprite-text'>Click To Release</p>
            </div>
          ) ||
            <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot5"}/>
          }
          {(this.state.slot6.pokemon &&
            <div className='poke-sprite-div'>
            <p className='poke-sprite-name'>{this.state.slot6.name}</p>
            <img className='poke-sprite' src={this.state.slot6.sprite} alt={`${this.state.slot6.pokemon} sprite`} onClick={() => this.removePokemon('slot6')}/>
            <p className='release-sprite-text'>Click To Release</p>
            </div>
          ) ||
            <PokeForm allPokemon={this.props.allPokemon} showPokemon={this.showPokemon} slot={"slot6"}/>
          }
        </section>
      </div>
    )
  }
}

FormContainer.propTypes = {
  currentUser: PropTypes.object,
  allPokemon: PropTypes.array,
  userPokeTeam: PropTypes.object,
  savePokemonToUser: PropTypes.func,
  updateUserPokeTeam: PropTypes.func
}

export default FormContainer
