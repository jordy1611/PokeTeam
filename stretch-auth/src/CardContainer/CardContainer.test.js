import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardContainer from '../CardContainer/CardContainer'
import { MemoryRouter } from 'react-router-dom'

describe('CardContainer', () => {
  it('should render cards with Pokemon in them', () => {
    const pokeTeam = {
    slot1: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Michael',
        id: 1
      },
    slot2: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Dwight',
        id: 1
      },
    slot3: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Jim',
        id: 1
      },
      slot4: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Pam',
        id: 1
      },
      slot5: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Angela',
        id: 1
      } ,
      slot6: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Oscar',
        id: 1
      }
    }
    render(
      <MemoryRouter>
        <CardContainer currentUser={{name: "Testy", img: ""}} userPokeTeam={pokeTeam}/>
      </MemoryRouter>
    )

    const slot1Name = screen.getByText("Michael");
    const slot2Name = screen.getByText("Dwight");
    const slot3Name = screen.getByText("Jim");
    const slot4Name = screen.getByText("Pam");
    const slot5Name = screen.getByText("Angela");
    const slot6Name = screen.getByText("Oscar");


    expect(slot1Name).toBeInTheDocument();
    expect(slot2Name).toBeInTheDocument();
    expect(slot3Name).toBeInTheDocument();
    expect(slot4Name).toBeInTheDocument();
    expect(slot5Name).toBeInTheDocument();
    expect(slot6Name).toBeInTheDocument();
  })

  it('should render text if there are no Pokemon', () => {
    const pokeTeam = {
      slot1: {},
      slot2: {},
      slot3: {},
      slot4: {},
      slot5: {},
      slot6: {}
    }
    render(
      <MemoryRouter>
        <CardContainer currentUser={{name: "Testy", img: ""}} userPokeTeam={pokeTeam}/>
      </MemoryRouter>
    )

    const alternateOutcome = screen.getByText("You Don't Have A PokeTeam");
    expect(alternateOutcome).toBeInTheDocument();
  })

  it('should render text if there are no Pokemon', () => {
    const pokeTeam = {
      slot1: {
        pokemon: 'bulbasaur',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'Michael',
        id: 1
      },
      slot2: {},
      slot3: {},
      slot4: {},
      slot5: {},
      slot6: {}
    }
    render(
      <MemoryRouter>
        <CardContainer currentUser={{name: "Testy", img: ""}} userPokeTeam={pokeTeam}/>
      </MemoryRouter>
    )

    const cardImages = screen.getAllByAltText("a PokeBall");
    expect(cardImages).toHaveLength(6);
  })
})
