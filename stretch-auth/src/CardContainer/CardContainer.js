import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import './CardContainer.css'


const CardContainer = (props) => {
  return (
    <section className='card-container'>
    {!props.isCurrentUser &&
      <p className='no-user-message'>Log In Please!</p>
    }
    {props.isCurrentUser &&
      <div className='no-team-display'>
        <p className='no-team-message'>You Don't Have A Poke Team</p>
        <button className='no-team-button'>Make a Poke Team!</button>
      </div>
    }
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
    </section>
  )
}
export default CardContainer
