import React from 'react';
import './PokeCard.css'

const PokeCard = (props) => {
  return (
    <section>
    {props.bulbasaur &&
      <article className='poke-card'>
        <p>PokeName</p>
        <p>PokeType</p>
        <p>PokePic</p>
        <img src={props.bulbasaur.sprite}/>
      </article>
    }
    </section>
  )
}




export default PokeCard
