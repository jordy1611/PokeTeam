import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Header.css'
import pikaIcon from '../assets/pikaIcon.png'

const Header = (props) => {
  return (
    <section className='header'>
      {props.currentUserImg ? <img className="user-image"  src={props.currentUserImg} alt="Your google account user icon"/> : <Redirect to='/' />}
      {props.currentUserName ? <h2 className="user-message" >Welcome {props.currentUserName}</h2> : <Redirect to='/' />}
      <Link to='/'><h1 className='page-name'>Pokemon Streeetch</h1></Link>
      <Link to='/'><div className='header-div'><img className='header-icon' src={pikaIcon} alt='pikachu icon'/><h1 className='page-name'>PokeTeam</h1></div></Link>
     {props.currentUserName ? <Link to='/'><button className='header-button' onClick={props.logOutCurrentUser} >Log Out</button></Link> : <Link to='/login'><button className='header-button'>Login</button></Link>}

    </section>
  )
}

export default Header
