import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  
  it('should render the Header on page load without logged in user info', () => {
    
    render(
      <MemoryRouter>
        <Header 
          currentUserName={''}    
          currentUserImg={''}    
        />
      </MemoryRouter>
    )

    const appName = screen.getByRole('heading', {name: 'Pokemon Streeetch'})
    const img = screen.getByRole('img', {name: 'pikachu icon'})
    const pokeTeam = screen.getByRole('heading', {name: 'PokeTeam'})
    const login = screen.getByRole('button', {name: 'Login'})
    expect(appName).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(pokeTeam).toBeInTheDocument()
    expect(login).toBeInTheDocument()

  })

  it('should render the Header on page load with a user\'s name and image icon', () => {
    
    render(
      <MemoryRouter>
        <Header 
          currentUserName={'Testy Testerson'}    
          currentUserImg={'https://lh3.googleusercontent.com/-QMmtLwax4TM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnDz989ljTldIpbFhAoUdLAjNUHdQ/photo.jpg'}    
        />
      </MemoryRouter>
    )
    const appName = screen.getByRole('heading', {name: 'Pokemon Streeetch'})
    const pikachuImg = screen.getByRole('img', {name: 'pikachu icon'})
    const pokeTeam = screen.getByRole('heading', {name: 'PokeTeam'})

    expect(appName).toBeInTheDocument()
    expect(pikachuImg).toBeInTheDocument()
    expect(pokeTeam).toBeInTheDocument()
    
    const welcomeMessage = screen.getByRole('heading', {name: 'Welcome Testy Testerson'})
    const googleAcctImg = screen.getByRole('img', {name:'Your google account user icon'})
    const logout = screen.getByRole('button', {name: 'Log Out'})

    expect(welcomeMessage).toBeInTheDocument()
    expect(googleAcctImg).toBeInTheDocument()
    expect(logout).toBeInTheDocument()
  })


















})