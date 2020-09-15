import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Header.css'
import pikaIcon from '../assets/pikaIcon.png'
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <section className='header'>
    <Link to='/'><div className='header-div'><img className='header-icon' src={pikaIcon} alt='pikachu icon'/><p className="home-text">Home</p></div></Link>
    <Link to='/poke-forms'><h1 className='page-name'>PokeTeam</h1></Link>
      {props.currentUserImg ? <img className="user-image"  src={props.currentUserImg}  alt="Your google account user icon"/> : <Redirect to='/' />}
      {props.currentUserName ? <h2 className="user-message" >Welcome {props.currentUserName}</h2> : <Redirect to='/' />}
     {props.currentUserName ? <Link to='/'><button className='header-button' onClick={props.logOutCurrentUser}>Log Out</button></Link> : <Link to='/login'><button className='header-button'>Login</button></Link>}
    </section>
  )
}

Header.propTypes = {
  currentUserImg: PropTypes.string,
  currentUserName: PropTypes.string,
  logOutCurrentUser: PropTypes.func
}

export default Header
