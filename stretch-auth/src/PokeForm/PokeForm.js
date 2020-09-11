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
        <fieldset className='poke-form-fieldset'>
          <legend>Pick A Pokemon</legend>
            <div>
              <label htmlFor='pokemon'>
                Pokemon
              </label>
              <input type='text' id='pokemon' placeholder='Choose A Pokemon'>
              </input>
            </div>
            <div>
              <label htmlFor='poke-name'>
                Name
              </label>
              <input type='text' id='poke-name' placeholder='Name Your Pokemon'>
              </input>
            </div>
            <button onClick={() => console.log('find poke')}>Find Pokemon</button>
        </fieldset>
      </form>
    )
  }
}


export default PokeForm
