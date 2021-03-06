import React, { Component } from 'react';
import './PokeForm.css';
import PropTypes from 'prop-types';


class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      pokeName: ""
    }
    this.id = this.props.slot.slice(4)

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
            <div className='pokemon-div'>
              <label className='pokemon-label' htmlFor='pokemon'>
                Pokemon
              </label>
              <input type='text' id='pokemon' name="pokemon" placeholder={`Choose Pokemon #${this.props.slot.slice(4)}`} onChange={this.handleChange}>
              </input>
            </div>
            <button onClick={this.submitForm}>Catch</button>
            <div className='name-div'>
              <label className='name-label' htmlFor='poke-name'>
                Name
              </label>
              <input type='text' id='poke-name' name="pokeName" placeholder='Name Your Pokemon' maxLength='11' onChange={this.handleChange}>
              </input>
            </div>
        </fieldset>
      </form>
    )
  }
}

PokeForm.propTypes = {
  slot: PropTypes.string,
  allPokemon: PropTypes.array,
  showPokemon: PropTypes.func
}

export default PokeForm
