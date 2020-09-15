// error message rendering, on button press just in pokemon field
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


    const pokeNameInputs = screen.getAllByPlaceholderText('Name Your Pokemon')
    const catchButtons = screen.getAllByRole('button')


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

    const catchButtons = screen.queryAllByRole('button')
    const pokeSprites = screen.getAllByText('Click To Release')

    expect(catchButtons).toHaveLength(0)
    expect(pokeSprites).toHaveLength(6)
  })

  it('should render 1 poke sprite & 5 forms when a user has a single pokemon in their poke team' , () => {
    render(
      <FormContainer
      currentUser={sampleUser}
      allPokemon={uncaughtPokemons}
      userPokeTeam={indPokeTeam}
      savePokemonToUser={jest.fn()}
      updateUserPokeTeam={jest.fn()}
      />
    )

    const catchButtons = screen.getAllByRole('button')
    const pokeSprites = screen.getAllByText('Click To Release')

    expect(catchButtons).toHaveLength(5)
    expect(pokeSprites).toHaveLength(1)
  })

  it('should render a pokemon sprite clicking the catch button' , () => {
    render(
      <FormContainer
      currentUser={sampleUser}
      allPokemon={uncaughtPokemons}
      userPokeTeam={{}}
      savePokemonToUser={jest.fn()}
      updateUserPokeTeam={jest.fn()}
      />
    )


    const pokeInput1 = screen.getByPlaceholderText('Choose Pokemon #1')
    const catchButton1 = screen.getAllByRole('button')[0]
    const pokeNameInput1 = screen.getAllByPlaceholderText('Name Your Pokemon')[0]

    expect(pokeInput1).toBeInTheDocument()
    expect(catchButton1).toBeInTheDocument()
    expect(pokeNameInput1).toBeInTheDocument()

    fireEvent.change(pokeInput1, {target: { value: '1'}})
    fireEvent.change(pokeNameInput1, {target: { value: 'Big Tuna'}})
    fireEvent.click(catchButton1)

    const pokeSprite = screen.getByAltText('bulbasaur sprite')
    const pokeName = screen.getByText('Big Tuna')

    expect(pokeSprite).toBeInTheDocument()
    expect(pokeName).toBeInTheDocument()
  })

  it('should render a pokemon sprite clicking the catch button' , () => {
    render(
      <FormContainer
      currentUser={sampleUser}
      allPokemon={uncaughtPokemons}
      userPokeTeam={{}}
      savePokemonToUser={jest.fn()}
      updateUserPokeTeam={jest.fn()}
      />
    )


    const catchButton1 = screen.getAllByRole('button')[0]

    expect(catchButton1).toBeInTheDocument()

    fireEvent.click(catchButton1)

    // const errorMessage = screen.getByText('Invalid Pokemon name or PokeDex number.')

    // expect(errorMessage).toBeInTheDocument()
  })

})
