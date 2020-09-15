import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import { NavLink, Link } from 'react-router-dom'
import './CardContainer.css'

// needs conditional renders for user & pokemon + user & no pokemon
const CardContainer = (props) => {
  const hasTeam = Object.values(props.userPokeTeam).some(poke => !!poke.pokemon)

  return (
    <section className='card-container'>
      { !props.currentUser.name &&
        <NavLink to='/login' activeClassName='login-message-link'><p className='no-user-message'>Log In Please!</p></NavLink>
      }
      { props.currentUser.name && !hasTeam &&
        <div className='no-team-display'>
          <p className='no-team-message'>You Don't Have A PokeTeam</p>
          <Link to='/poke-forms'><button className='edit-team-button'>Make a PokeTeam!</button></Link>
        </div>
      }
      { props.currentUser.name && hasTeam &&
        <div>
          <Link to='/poke-forms'><button className='edit-team-button'>Edit Your PokeTeam!</button></Link>
          <section className='poke-cards'>
            <PokeCard pokemon={props.userPokeTeam.slot1}/>
            <PokeCard pokemon={props.userPokeTeam.slot2}/>
            <PokeCard pokemon={props.userPokeTeam.slot3}/>
            <PokeCard pokemon={props.userPokeTeam.slot4}/>
            <PokeCard pokemon={props.userPokeTeam.slot5}/>
            <PokeCard pokemon={props.userPokeTeam.slot6}/>
          </section>
        </div>
      }
    </section>
  )
}
export default CardContainer
