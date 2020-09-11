import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form className='login'>
      <label htmlFor='username'>
        username
      </label>
      <input type='text' id='username' placeholder='username'>
      </input>
      <label htmlFor='password'>
        password
      </label>
      <input type='password' id='password' placeholder='password'>
      </input>
      <button onClick={() => console.log('login')}>Login</button>
      <button onClick={() => console.log('google')}>Login w/ Google</button>
      <button onClick={() => console.log('facebook')}>Login w/ Facebook</button>
      </form>
    )
  }
}



export default Login
