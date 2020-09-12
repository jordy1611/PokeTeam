import React, { Component } from 'react';
import './PokeForm.css'


class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      pokeName: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm(event) {
    event.preventDefault();
    this.props.showPokemon(this.state.pokemon, this.state.pokeName, this.props.slot)
  }

  render() {
    return (
      <form className='poke-form'>
        <fieldset className='poke-form-fieldset'>
          <legend>Pick A Pokemon</legend>
            <div>
              <label htmlFor='pokemon'>
                Pokemon
              </label>
              <input type='text' id='pokemon' name="pokemon" placeholder='Choose A Pokemon' onChange={this.handleChange}>
              </input>
            </div>
            <div>
              <label htmlFor='poke-name'>
                Name
              </label>
              <input type='text' id='poke-name' name="pokeName" placeholder='Name Your Pokemon' onChange={this.handleChange}>
              </input>
            </div>
            <button onClick={() => this.props.showPokemon(this.state.pokemon, this.state.pokeName, this.props.slot)}>Find Pokemon</button>
        </fieldset>
      </form>
    )
  }
}


export default PokeForm
