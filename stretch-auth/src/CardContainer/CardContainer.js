import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import { NavLink, Link } from 'react-router-dom'
import './CardContainer.css'

// needs conditional renders for user & pokemon + user & no pokemon
const CardContainer = (props) => {
  return (
    <section className='card-container'>
      {!props.currentUser.name &&
        <NavLink to='/login' activeClassName='login-message-link'><p className='no-user-message'>Log In Please!</p></NavLink>
      }
      {props.currentUser.name &&
        <div className='no-team-display'>
          <p className='no-team-message'>You Don't Have A Poke Team</p>
          <Link to='/poke-forms'><button className='no-team-button'>Make a Poke Team!</button></Link>
        </div>
      }
      <section className='poke-cards'>
        <PokeCard pokemon={props.userPokeTeam[0]}/>
        <PokeCard pokemon={props.userPokeTeam[1]}/>
        <PokeCard pokemon={props.userPokeTeam[2]}/>
        <PokeCard pokemon={props.userPokeTeam[3]}/>
        <PokeCard pokemon={props.userPokeTeam[4]}/>
        <PokeCard pokemon={props.userPokeTeam[5]}/>
      </section>
    </section>
  )
}
export default CardContainer
