import React from 'react';
import {uiConfig} from '../App/App'
import { Redirect } from 'react-router-dom'
import './Login.css'
// import { secrets } from '../secrets';
// import { firebaseui } from '../App/App';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
let firebase = require('firebase');

function Login(props) {
  return (
     <section>
       {props.userName ? <Redirect to='/' /> : <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={firebase.auth()} />}
      </section>
  ) 
}
  
export default Login
