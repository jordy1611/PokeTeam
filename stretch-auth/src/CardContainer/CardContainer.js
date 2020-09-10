import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import { Link } from 'react-router-dom'
import './CardContainer.css'

// needs conditional renders for user & pokemon + user & no pokemon
const CardContainer = (props) => {
  return (
    <section className='card-container'>
    {!props.isCurrentUser &&
      <p className='no-user-message'>Log In Please!</p>
    }
    {props.isCurrentUser &&
      <div className='no-team-display'>
        <p className='no-team-message'>You Don't Have A Poke Team</p>
        <Link to='/poke-forms'><button className='no-team-button'>Make a Poke Team!</button></Link>
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
