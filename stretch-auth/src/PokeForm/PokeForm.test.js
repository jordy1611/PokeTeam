import React from 'react';
import PokeForm from './PokeForm.js'
import { MemoryRouter } from 'react-router-dom';
import { pokeTeam, indPokeTeam, uncaughtPokemons, sampleUser } from '../testData.js';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// renders
// make sure value of input changes like in mid mod
// something should happen on catch click

describe('PokeForm', () => {
  it('should render correct content when loaded', () => {
    render (
      <PokeForm
        allPokemon={uncaughtPokemons}
        showPokemon={jest.fn()}
        slot={"slot1"}
      />
    )

    const pokeInput = screen.getByPlaceholderText('Choose Pokemon #1')
    const catchButton = screen.getByRole('button')
    const pokeNameInput = screen.getByPlaceholderText('Name Your Pokemon')

    expect(pokeInput).toBeInTheDocument()
    expect(catchButton).toBeInTheDocument()
    expect(pokeNameInput).toBeInTheDocument()
  })

  it('should have inputs whose values change', () => {
    render (
      <PokeForm
        allPokemon={uncaughtPokemons}
        showPokemon={jest.fn()}
        slot={"slot1"}
      />
    )

    const pokeInput = screen.getByPlaceholderText('Choose Pokemon #1')
    const pokeNameInput = screen.getByPlaceholderText('Name Your Pokemon')

    fireEvent.change(pokeInput, {target: { value: '6'}})
    fireEvent.change(pokeNameInput, {target: {value: 'Patricia' }})

    expect(pokeInput).toBeInTheDocument()
    expect(pokeNameInput).toBeInTheDocument()

    expect(pokeInput.value).toBe('6')
    expect(pokeNameInput.value).toBe('Patricia')
  })

  it('should have inputs whose values change', () => {
    render (
      <PokeForm
        allPokemon={uncaughtPokemons}
        showPokemon={jest.fn()}
        slot={"slot1"}
      />
    )

    const pokeInput = screen.getByPlaceholderText('Choose Pokemon #1')
    const pokeNameInput = screen.getByPlaceholderText('Name Your Pokemon')

    fireEvent.change(pokeInput, {target: { value: '6'}})
    fireEvent.change(pokeNameInput, {target: {value: 'Patricia' }})

    expect(pokeInput).toBeInTheDocument()
    expect(pokeNameInput).toBeInTheDocument()

    expect(pokeInput.value).toBe('6')
    expect(pokeNameInput.value).toBe('Patricia')
  })

  it('should fire a function when the catch button is clicked', () => {
    const mockShowPokemon = jest.fn()
    render (
      <PokeForm
        allPokemon={uncaughtPokemons}
        showPokemon={mockShowPokemon}
        slot={"slot1"}
      />
    )

    const pokeInput = screen.getByPlaceholderText('Choose Pokemon #1')
    const catchButton = screen.getByRole('button')

    fireEvent.change(pokeInput, {target: { value: '6'}})
    fireEvent.click(catchButton)

    expect(mockShowPokemon).toHaveBeenCalledTimes(1)
  })
})
