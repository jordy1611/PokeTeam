import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import './CardContainer.css'


const CardContainer = (props) => {
  console.log(props);
  return (
    <section className='card-container'>
      <PokeCard bulbasaur={props.bulbasaur}/>
      <PokeCard bulbasaur={props.bulbasaur}/>
      <PokeCard bulbasaur={props.bulbasaur}/>
      <PokeCard bulbasaur={props.bulbasaur}/>
    </section>
  )
}
export default CardContainer
