// import MutationObserver from '@sheerun/mutationobserver-shim';
// window.MutationObserver = MutationObserver;
import React from 'react';
import FormContainer from './FormContainer.js'
import { MemoryRouter } from 'react-router-dom';
import { pokeTeam, indPokeTeam, uncaughtPokemons, sampleUser } from '../testData.js';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
// import dataFetcher from '../dataFetcher.js';
import '@testing-library/jest-dom';
// jest.mock('../dataFetcher.js');

describe('FormContainer', () => {
  it('should render 6 login forms when a user has no poke team' , () => {
    render(
      <FormContainer
      currentUser={sampleUser}
      allPokemon={uncaughtPokemons}
      userPokeTeam={{}}
      savePokemonToUser={jest.fn()}
      updateUserPokeTeam={jest.fn()}
      />
    )

    const pokeInputs = screen.getAllByPlaceholderText('Choose A Pokemon')
    const pokeNameInputs = screen.getAllByPlaceholderText('Name Your Pokemon')
    const catchButtons = screen.getAllByRole('button')

    expect(pokeInputs).toHaveLength(6)
    expect(pokeNameInputs).toHaveLength(6)
    expect(catchButtons).toHaveLength(6)
  })

  it('should render 6 poke sprites when a user has a full poke team' , () => {
    render(
      <FormContainer
      currentUser={sampleUser}
      allPokemon={uncaughtPokemons}
      userPokeTeam={pokeTeam}
      savePokemonToUser={jest.fn()}
      updateUserPokeTeam={jest.fn()}
      />
    )

    const pokeInputs = screen.queryAllByPlaceholderText('Choose A Pokemon')
    const pokeSprites = screen.getAllByText('Click To Release')

    expect(pokeInputs).toHaveLength(6)
  })

})
