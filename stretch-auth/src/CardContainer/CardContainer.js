import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import './CardContainer.css'


const CardContainer = () => {
  return (
    <section className='card-container'>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
    </section>
  )
}
export default CardContainer
