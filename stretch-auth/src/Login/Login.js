import React, { Component } from 'react';
import './Login.css'
import { secrets } from '../secrets';
import { firebaseui } from '../App/App';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';
let firebase = require('firebase');
console.log(secrets);


firebase.initializeApp(secrets);

const uiConfig = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
       <section>
       <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={firebase.auth()} />
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
        </section>

    )
  }
}



export default Login
