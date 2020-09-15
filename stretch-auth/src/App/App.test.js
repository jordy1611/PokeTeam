import React from 'react';
import { render, waitFor, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { uncaughtPokemon } from '../testData'
import { getSinglePokemonData } from '../apiCalls';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../apiCalls')

describe('App', () => {
  beforeEach( () => {
    getSinglePokemonData.mockResolvedValueOnce({uncaughtPokemon})
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('should render a header on page load', () => {
    const img = screen.getByRole('img', {name: 'pikachu icon'})
    const pokeTeam = screen.getByRole('heading', {name: 'PokeTeam'})
    const login = screen.getByRole('button', {name: 'Login'})
    expect(img).toBeInTheDocument()
    expect(pokeTeam).toBeInTheDocument()
    expect(login).toBeInTheDocument()
  })



})