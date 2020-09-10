import React, { Component } from 'react';
import PokeForm from '../PokeForm/PokeForm'
import './FormContainer.css'


class FormContainer extends Componet {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <section className='card-container'>
        <PokeForm/>
        <PokeForm/>
        <PokeForm/>
        <PokeForm/>
      </section>
    )
  }
}
export default FormContainer
