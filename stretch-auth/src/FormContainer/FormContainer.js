import React, { Component } from 'react';
import PokeForm from '../PokeForm/PokeForm'
// import { Link } from 'react-router-dom'
import './FormContainer.css'


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <section className='form-container'>
        <PokeForm/>
        <PokeForm/>
        <PokeForm/>
        <PokeForm/>
        <PokeForm/>
        <PokeForm/>
      </section>
    )
  }
}
export default FormContainer
