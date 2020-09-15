import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PokeCard from '../PokeCard/PokeCard'
import { MemoryRouter } from 'react-router-dom'

describe('PokeCard', () => {
  it('should render a card with the sprite, name, and species', () => {
    const pokemon ={pokemon: "bulbasaur", name: "Stanley", id: 1, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'};
    render(
      <MemoryRouter>
        <PokeCard pokemon={pokemon}/>
      </MemoryRouter>
      )

    const name = screen.getByText("Stanley");
    const screenPokemon = screen.getByText("bulbasaur");
    const id = screen.getByText('Id.1');
    const sprite = screen.getByAltText('Stanley the bulbasaur');

    expect(name).toBeInTheDocument();
    expect(screenPokemon).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(sprite).toBeInTheDocument();
  })
})
