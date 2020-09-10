import React, { Component } from 'react';
import './PokeForm.css'


class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form className='poke-form'>
      <label htmlFor='pokemon'>
        Pokemon
      </label>
      <input type='text' id='pokemon' placeholder='Choose A Pokemon'>
      </input>
      <label htmlFor='poke-name'>
        Name
      </label>
      <input type='text' id='poke-name' placeholder='Name Your Pokemon'>
      </input>
      <button onClick={() => console.log('find poke')}>Find Pokemon</button>
      </form>
    )
  }
}


export default PokeForm
