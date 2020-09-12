import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import pikaIcon from '../assets/pikaIcon.png'

const Header = (props) => {
  return (
    <section className='header'>
      <Link to='/'><h1 className='page-name'>Pokemon Streeetch</h1></Link>
     {props.currentUserName ? <Link to='/'><button onClick={props.logOutCurrentUser} className='header-button'>Log Out</button></Link> : <Link to='/login'><button className='header-button'>Login</button></Link>}
      <Link to='/'><div className='header-div'><img className='header-icon' src={pikaIcon} alt='pikachu icon'/><h1 className='page-name'>PokeTeam</h1></div></Link>
      <Link to='/login'><button className='header-button'>Login</button></Link>
    </section>
  )
}

export default Header
