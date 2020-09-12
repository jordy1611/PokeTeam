import React, { Component } from 'react';
import './PokeForm.css'


class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: '',
      pokemonName: '',
    }
  }

  render() {
    return (
      <form className='poke-form'>
        <fieldset className='poke-form-fieldset'>
            <div className='pokemon-div'>
              <label className='pokemon-label' htmlFor='pokemon'>
                Pokemon
              </label>
              <input type='text' id='pokemon' placeholder='Choose A Pokemon'>
              </input>
            </div>
            <button onClick={() => console.log('find poke')}>Catch</button>
            <div className='name-div'>
              <label className='name-label' htmlFor='poke-name'>
                Name
              </label>
              <input type='text' id='poke-name' placeholder='Name Your Pokemon'>
              </input>
            </div>
        </fieldset>
      </form>
    )
  }
}


export default PokeForm
