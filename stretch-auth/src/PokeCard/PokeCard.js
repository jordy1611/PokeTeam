import React from 'react';
import './PokeCard.css'
import pokeBallIcon from '../assets/pokeball.png'
const PokeCard = (props) => {
  return (
    <section>
    {(props.pokemon.pokemon &&
      <article className='poke-card'>
        <p>{props.pokemon.name}</p>
        <p>{props.pokemon.pokemon}</p>
        <p>id</p>
        <img src={props.pokemon.sprite}/>
        <img src={pokeBallIcon} />
        </article>) ||
      <article className='poke-card'></article>
    }
    </section>
  )
}




export default PokeCard
