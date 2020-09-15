import React from 'react';
import './PokeCard.css'
import pokeBallIcon from '../assets/pokeball.png'
const PokeCard = (props) => {
  return (
    <section>
    {(props.pokemon.pokemon &&
      <article className='poke-card'>
        <p className="pokecard-name">{props.pokemon.name}</p>
        <p className="pokecard-pokemon">{props.pokemon.pokemon}</p>
        <p className="pokecard-id">{props.pokemon.id}</p>
        <img className="pokecard-sprite" src={props.pokemon.sprite}/>
        <img className="pokecard-pokeball"src={pokeBallIcon} />
        </article>) ||
      <article className='poke-card'>
        <img className="pokecard-pokeball"src={pokeBallIcon} />
      </article>
    }
    </section>
  )
}




export default PokeCard
