import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
// let firebase = require('firebase');

const Header = (props) => {
  return (
    <section className='header'>
      <Link to='/'><h1 className='page-name'>Pokemon Streeetch</h1></Link>
     {props.currentUserName ? <Link to='/'><button onClick={props.logOutCurrentUser} className='header-button'>Log Out</button></Link> : <Link to='/login'><button className='header-button'>Login</button></Link>}
    </section>
  )
}

export default Header
