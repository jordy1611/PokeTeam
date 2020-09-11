import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <section className='header'>
      <Link to='/'><h1 className='page-name'>Pokemon Streeetch</h1></Link>
      <Link to='/login'><button className='header-button'>Login</button></Link>
    </section>
  )
}

export default Header
