import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  
  it('should render the Header on page load without logged in user info', () => {
    
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const appName = screen.getByRole('heading', {name: 'Pokemon Streeetch'})
    const img = screen.getByRole('img')
    const pokeTeam = screen.getByRole('heading', {name: 'PokeTeam'})
    const login = screen.getByRole('button', {name: 'Login'})
    expect(appName).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(pokeTeam).toBeInTheDocument()
    expect(login).toBeInTheDocument()
    
  })




















})