import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import { NavLink, Link } from 'react-router-dom';
import './CardContainer.css';
import PropTypes from 'prop-types';
const CardContainer = (props) => {
  const hasTeam = Object.values(props.userPokeTeam).some(poke => !!poke.pokemon)

  return (
    <section className='card-container'>
      { !props.currentUser.name &&
        <NavLink to='/login' activeClassName='login-message-link'><p className='no-user-message'>Log In Please!</p></NavLink>
      }
      { props.currentUser.name && !hasTeam &&
          <Link to='/poke-forms'><p className='no-team-message'>You Don't Have A PokeTeam</p></Link>
      }
      { props.currentUser.name && hasTeam &&
          <section className='poke-cards'>
            <PokeCard pokemon={props.userPokeTeam.slot1}/>
            <PokeCard pokemon={props.userPokeTeam.slot2}/>
            <PokeCard pokemon={props.userPokeTeam.slot3}/>
            <PokeCard pokemon={props.userPokeTeam.slot4}/>
            <PokeCard pokemon={props.userPokeTeam.slot5}/>
            <PokeCard pokemon={props.userPokeTeam.slot6}/>
          </section>
      }
    </section>
  )
}

CardContainer.propTypes = {
  currentUser: PropTypes.object,
  userPokeTeam: PropTypes.object
}

export default CardContainer
