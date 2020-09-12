import React, { Component } from 'react';
import {uiConfig} from '../App/App'
import { Link } from 'react-router-dom'
import './Login.css'
import { secrets } from '../secrets';
import { firebaseui } from '../App/App';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';
let firebase = require('firebase');
console.log(secrets);

// firebase.initializeApp(secrets);

// const uiConfig = {
//   signInFlow:'popup', 
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ], 
//   callbacks: {
//     signInSuccess: () => false
//   }
// }

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSignedIn: false,
    }
    
  }
  
  // componentDidMount = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn:!!user })
  //     console.log('user', user.displayName)
  //   })
  // }

  render() {
    return (
       <section>
       <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={firebase.auth()} />
        </section>

    )
  }
}



export default Login
