import React from 'react';
import './PokeCard.css';
import pokeBallIcon from '../assets/pokeball.png';
import PropTypes from 'prop-types';

const PokeCard = (props) => {
  console.log(props.pokemon)
  return (
    <section>
    {(props.pokemon.pokemon &&
      <article className='poke-card'>
      <img className="pokecard-pokeball"src={pokeBallIcon} />
      <img className="pokecard-sprite" src={props.pokemon.sprite}/>
        <p className="pokecard-name">{props.pokemon.name}</p>
        <p className="pokecard-pokemon">{props.pokemon.pokemon}</p>
        <p className="pokecard-id">Id.{props.pokemon.id}</p>
        <div className="pokecard-hp"><p className="pokecard-hp-text">HP:</p><div className="pokecard-hp-bar"></div></div>
        </article>) ||
      <article className='poke-card'>
        <img className="pokecard-pokeball"src={pokeBallIcon} />
      </article>
    }
    </section>
  )
}

PokeCard.propTypes = {
  pokemon: PropTypes.object
}



export default PokeCard
