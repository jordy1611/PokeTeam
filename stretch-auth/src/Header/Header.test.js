import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'
import { sampleUser } from '../testData'
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

    const img = screen.getByRole('img', {name: 'pikachu icon'})
    const pokeTeam = screen.getByRole('heading', {name: 'PokeTeam'})
    const login = screen.getByRole('button', {name: 'Login'})
    expect(img).toBeInTheDocument()
    expect(pokeTeam).toBeInTheDocument()
    expect(login).toBeInTheDocument()

  })

  it('should render the Header with a user\'s name and image icon when logged in', () => {
    render(
      <MemoryRouter>
        <Header 
          currentUserName={''}    
          currentUserImg={''}    
        />
      </MemoryRouter>
    )
    
    const loginGoogle = jest.fn()
    const img = screen.getByRole('img', {name: 'pikachu icon'})
    const pokeTeam = screen.getByRole('heading', {name: 'PokeTeam'})
    const login = screen.getByRole('button', {name: 'Login'})
    expect(img).toBeInTheDocument()
    expect(pokeTeam).toBeInTheDocument()
    expect(login).toBeInTheDocument()
    fireEvent.click(login)
    loginGoogle.mockResolvedValueOnce({
       name: sampleUser.name, img:sampleUser.img
    })
    render(
      <MemoryRouter>
        <Header 
          currentUserName={sampleUser.name}    
          currentUserImg={sampleUser.img}    
        />
      </MemoryRouter>
    )
    const welcomeMessage = screen.getByRole('heading', {name: 'Welcome Testy Testerson'})
    const googleAcctImg = screen.getByRole('img', {name:'Your google account user icon'})
    const logout = screen.getByRole('button', {name: 'Log Out'})
    expect(welcomeMessage).toBeInTheDocument()
    expect(googleAcctImg).toBeInTheDocument()
    expect(logout).toBeInTheDocument()
  })

  it('should render the default header when a user logs out', () => {
    const mockLogOutUser = jest.fn()
    render(
      <MemoryRouter>
        <Header 
          currentUserName={sampleUser.name}    
          currentUserImg={sampleUser.img}
          logOutCurrentUser={mockLogOutUser}    
        />
      </MemoryRouter>
    )
    const welcomeMessage = screen.getByRole('heading', {name: 'Welcome Testy Testerson'})
    const googleAcctImg = screen.getByRole('img', {name:'Your google account user icon'})
    const logout = screen.getByRole('button', {name: 'Log Out'})
    expect(welcomeMessage).toBeInTheDocument()
    expect(googleAcctImg).toBeInTheDocument()
    expect(logout).toBeInTheDocument()

    fireEvent.click(logout)
    expect(mockLogOutUser).toHaveBeenCalledTimes(1)
  })











})